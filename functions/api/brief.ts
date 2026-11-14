/**
 * POST /api/brief — guarda un Brief en Cloudflare D1.
 *
 * Solo POST + JSON. No envía correos (fase posterior).
 * Variables de entorno esperadas: DB (binding D1 del proyecto Pages).
 */

import {
  MAX_OBJETIVOS,
  MULTI_SELECT,
  REQUIRED_FIELDS,
  SINGLE_SELECT,
  TEXT_FIELDS,
  TEXT_LIMITS,
  type MultiQuestionKey,
  type SingleQuestionKey,
  type TextFieldKey,
} from "../../src/data/brief-schema";
import { findByText, getByCode } from "../../src/lib/countries";
import { isValidEmail } from "../../src/lib/email";
import { normalizePhone } from "../../src/lib/phone";

/* ── Tipos mínimos de D1 (sin dependencias externas) ── */
interface D1Result {
  success: boolean;
}
interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}
interface Env {
  DB: D1Database;
}
interface RequestWithCf extends Request {
  cf?: { country?: string };
}
interface PagesContext {
  request: RequestWithCf;
  env: Env;
}

const MAX_BODY_BYTES = 30 * 1024;

const SUBMISSION_COLUMNS = [
  "nombre",
  "empresa",
  "correo",
  "whatsapp",
  "whatsapp_pais",
  "ciudad",
  "pais",
  "pais_codigo",
  "actividad",
  "tiene_web",
  "web_actual_url",
  "idiomas",
  "volumen",
  "materiales",
  "estilo",
  "referencias",
  "plazo",
  "mantenimiento",
  "dominio_tiene",
  "dominio_nombre",
  "dominio_quien",
  "web_ubicacion",
  "servidor",
  "soporte_ti",
  "correo_dominio",
  "correo_servicio",
  "sistema_interno",
  "sistema_interno_detalle",
  "google_aparece",
  "caida_tolerancia",
  "quien_actualiza",
  "redes",
  "redes_texto",
  "notas",
] as const;

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

const PRODUCTION_HOSTS = new Set(["alpestech.uk", "www.alpestech.uk"]);

/** Nunca expone detalles internos en el dominio de producción. */
function isProductionHost(request: Request): boolean {
  try {
    return PRODUCTION_HOSTS.has(new URL(request.url).hostname.toLowerCase());
  } catch {
    return true;
  }
}

function describeError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return message || "unknown error";
}

function jsonError500(request: Request, error: string, detail: string) {
  const payload: { ok: false; error: string; detail?: string } = {
    ok: false,
    error,
  };
  if (!isProductionHost(request)) {
    payload.detail = detail.slice(0, 200);
  }
  return json(payload, 500);
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export const onRequest = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405, { Allow: "POST" });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json({ ok: false, error: "unsupported_media_type" }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "payload_too_large" }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large" }, 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return json({ ok: false, error: "validation", campos: ["body"] }, 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Campo trampa: un humano no lo rellena ni envía en menos de 4 segundos.
  if (asString(body.sitio_web).trim() !== "") {
    return json({ ok: true });
  }
  const tiempoMs = typeof body.tiempo_ms === "number" ? body.tiempo_ms : Number(body.tiempo_ms);
  if (Number.isFinite(tiempoMs) && tiempoMs < 4000) {
    return json({ ok: true });
  }

  const invalid: string[] = [];
  const values: Record<string, string | null> = {};

  // Texto libre: recorta espacios y respeta el límite de cada campo.
  for (const key of Object.keys(TEXT_FIELDS) as TextFieldKey[]) {
    const raw = body[key];
    if (raw === undefined || raw === null) {
      values[key] = null;
      continue;
    }
    if (typeof raw !== "string") {
      invalid.push(key);
      values[key] = null;
      continue;
    }
    const limit = TEXT_LIMITS[TEXT_FIELDS[key]];
    values[key] = raw.trim().slice(0, limit);
  }

  for (const field of REQUIRED_FIELDS) {
    if (!values[field]) invalid.push(field);
  }
  if (values.correo && !isValidEmail(values.correo)) {
    invalid.push("correo");
  }
  if (body.consentimiento !== true) {
    invalid.push("consentimiento");
  }

  // El país mostrado manda: el servidor no confía en el pais_codigo del cliente.
  const countryFromText = findByText(values.pais);
  values.pais_codigo = countryFromText ? countryFromText.code : "otro";

  // WhatsApp opcional: normaliza según el país del teléfono o, si falta,
  // según el país del brief.
  const clientPhoneCountry = getByCode(values.whatsapp_pais);
  if (values.whatsapp) {
    const phoneCountry = clientPhoneCountry ?? countryFromText;

    if (!phoneCountry) {
      invalid.push("whatsapp");
    } else {
      const normalized = normalizePhone(phoneCountry.code, values.whatsapp);
      if (!normalized.ok) {
        invalid.push("whatsapp");
      } else {
        values.whatsapp = normalized.value;
        values.whatsapp_pais = phoneCountry.code;
      }
    }
  } else {
    values.whatsapp = null;
    values.whatsapp_pais = clientPhoneCountry ? clientPhoneCountry.code : null;
  }

  // Selección única.
  for (const key of Object.keys(SINGLE_SELECT) as SingleQuestionKey[]) {
    const raw = body[key];
    if (raw === undefined || raw === null || raw === "") {
      values[key] = null;
      continue;
    }
    const allowed = SINGLE_SELECT[key] as readonly string[];
    if (typeof raw === "string" && allowed.includes(raw)) {
      values[key] = raw;
    } else {
      invalid.push(key);
      values[key] = null;
    }
  }

  // Selección múltiple.
  const selections: Record<string, string[]> = {};
  for (const key of Object.keys(MULTI_SELECT) as MultiQuestionKey[]) {
    const raw = body[key];
    const allowed = MULTI_SELECT[key] as readonly string[];
    if (raw === undefined || raw === null) {
      selections[key] = [];
      continue;
    }
    if (!Array.isArray(raw)) {
      invalid.push(key);
      selections[key] = [];
      continue;
    }
    const picked = Array.from(
      new Set(raw.filter((item): item is string => typeof item === "string")),
    );
    if (raw.some((item) => typeof item !== "string" || !allowed.includes(item))) {
      invalid.push(key);
    }
    if (key === "objetivos" && picked.length > MAX_OBJETIVOS) {
      invalid.push(key);
    }
    selections[key] = picked.filter((item) => allowed.includes(item));
  }

  if (invalid.length > 0) {
    return json(
      { ok: false, error: "validation", campos: Array.from(new Set(invalid)) },
      400,
    );
  }

  if (!env?.DB) {
    return jsonError500(
      request,
      "db_not_bound",
      "D1 binding DB is not configured",
    );
  }

  try {
    const id = crypto.randomUUID();
    const lang = body.lang === "en" ? "en" : "es";
    const country = asString(request.cf?.country).slice(0, 2) || null;
    const placeholders = SUBMISSION_COLUMNS.map(() => "?").join(", ");
    const insertSubmission = env.DB.prepare(
      `INSERT INTO brief_submissions (id, lang, pais_visitante, ${SUBMISSION_COLUMNS.join(", ")}) VALUES (?, ?, ?, ${placeholders})`,
    ).bind(
      id,
      lang,
      country,
      ...SUBMISSION_COLUMNS.map((column) => values[column] ?? null),
    );

    const statements: D1PreparedStatement[] = [insertSubmission];
    for (const questionKey of Object.keys(selections)) {
      for (const optionKey of selections[questionKey]) {
        statements.push(
          env.DB.prepare(
            "INSERT INTO brief_choices (submission_id, question_key, option_key) VALUES (?, ?, ?)",
          ).bind(id, questionKey, optionKey),
        );
      }
    }

    await env.DB.batch(statements);
    return json({ ok: true });
  } catch (error) {
    return jsonError500(request, "server", describeError(error));
  }
};
