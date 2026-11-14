/**
 * phone.ts — Normalización de teléfonos por país.
 * TypeScript puro, sin dependencias de Astro.
 *
 * Para agregar la regla de otro país:
 *   1. Crea un objeto PhoneRule con su función normalize(digits).
 *   2. Regístralo en PHONE_RULES usando el código ISO2 del país.
 *   3. Devuelve { ok: true, value } con el formato que quieras guardar,
 *      o { ok: false, error: "clave_de_error" } si el número no es válido.
 */

import { getByCode } from "./countries";

export interface PhoneRule {
  normalize(
    digits: string,
  ): { ok: true; value: string } | { ok: false; error: string };
}

export type PhoneResult =
  | { ok: true; value: string }
  | { ok: false; error: string };

const ecuadorMobile: PhoneRule = {
  normalize(digits: string): PhoneResult {
    let value = digits;

    if (value.startsWith("593")) {
      value = value.slice(3);
    }

    if (value.startsWith("0")) {
      return /^09\d{8}$/.test(value)
        ? { ok: true, value }
        : { ok: false, error: "ec_mobile_format" };
    }

    if (value.startsWith("9")) {
      return /^9\d{8}$/.test(value)
        ? { ok: true, value: `0${value}` }
        : { ok: false, error: "ec_mobile_format" };
    }

    return { ok: false, error: "ec_mobile_format" };
  },
};

export const PHONE_RULES: Partial<Record<string, PhoneRule>> = {
  EC: ecuadorMobile,
};

/**
 * Limpia el valor y aplica la regla del país.
 * Los países sin regla aceptan entre 6 y 15 dígitos y guardan "+dialNúmero".
 */
export function normalizePhone(
  countryCode: string | null | undefined,
  raw: string | null | undefined,
): PhoneResult {
  const digits = String(raw ?? "").replace(/\D/g, "");
  const country = getByCode(countryCode);

  if (!country) {
    return { ok: false, error: "phone_length" };
  }

  const rule = PHONE_RULES[country.code];
  if (rule) {
    return rule.normalize(digits);
  }

  let local = digits;
  if (local.startsWith(country.dial)) {
    local = local.slice(country.dial.length);
  }

  if (local.length < 6 || local.length > 15) {
    return { ok: false, error: "phone_length" };
  }

  return { ok: true, value: `+${country.dial}${local}` };
}
