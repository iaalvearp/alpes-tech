/**
 * brief-schema.ts — Claves y límites compartidos del Brief.
 *
 * TypeScript puro (sin imports de Astro): lo usan tanto el asistente del
 * frontend como la Pages Function que guarda en D1.
 */

/** Límites de longitud por tipo de campo de texto. */
export const TEXT_LIMITS = {
  short: 200,
  textarea: 2000,
} as const;

export type TextKind = keyof typeof TEXT_LIMITS;

/** Campos de texto libre y su límite aplicable. */
export const TEXT_FIELDS = {
  // Paso 1
  nombre: "short",
  empresa: "short",
  correo: "short",
  whatsapp: "short",
  whatsapp_pais: "short",
  ciudad: "short",
  pais: "short",
  pais_codigo: "short",
  actividad: "textarea",
  objetivos_otro: "short",
  // Paso 2
  web_actual_url: "short",
  // Paso 4
  referencias: "textarea",
  // Paso 5
  dominio_nombre: "short",
  idiomas_otro: "short",
  sistema_interno_detalle: "short",
  redes_texto: "short",
  // Paso 6
  notas: "textarea",
} as const satisfies Record<string, TextKind>;

export type TextFieldKey = keyof typeof TEXT_FIELDS;

/** Opciones "otro" que requieren un texto libre asociado. */
export const OTHER_FIELDS = {
  objetivos: { option: "otro", field: "objetivos_otro" },
  idiomas: { option: "otro", field: "idiomas_otro" },
} as const satisfies Record<string, { option: string; field: string }>;

export type OtherQuestionKey = keyof typeof OTHER_FIELDS;

/** Preguntas de selección múltiple (una fila por opción en brief_choices). */
export const MULTI_SELECT = {
  compradores: ["empresas", "personas", "exterior", "no_se"],
  objetivos: ["encontrarme", "mostrar", "cotizaciones", "confianza", "vender", "otro"],
  funciones: [
    "quienes_somos",
    "catalogo",
    "servicios",
    "galeria",
    "video",
    "certificaciones",
    "mapa_mercados",
    "noticias",
    "contacto_mapa",
    "whatsapp_boton",
    "formulario_cotizacion",
    "catalogo_descargable",
  ],
} as const;

export type MultiQuestionKey = keyof typeof MULTI_SELECT;

/** Preguntas de selección única (columna con el mismo nombre en la tabla). */
export const SINGLE_SELECT = {
  tiene_web: ["no", "renovar", "distinta"],
  idiomas: ["es", "es_en", "otro"],
  volumen: ["pocos", "varios", "muchos", "no_se"],
  materiales: ["todo", "algunos", "nada"],
  estilo: ["corporativo", "moderno", "calido", "elegante", "no_se"],
  plazo: ["urgente", "un_mes", "dos_tres_meses", "sin_apuro"],
  dominio_tiene: ["si", "no", "no_se"],
  dominio_quien: ["empresa", "proveedor", "tercero", "no_se"],
  web_ubicacion: ["hosting", "servidor_propio", "no_se"],
  servidor: ["propio", "alquilado", "no", "no_se"],
  soporte_ti: ["interno", "externo", "no", "no_se"],
  correo_dominio: ["si", "no"],
  correo_servicio: ["google", "microsoft", "hosting", "no_se"],
  sistema_interno: ["si", "no", "no_se"],
  google_aparece: ["primero", "abajo", "no_aparece", "no_se"],
  caida_tolerancia: ["no_puede", "unas_horas", "no_se"],
  quien_actualiza: ["empresa", "ustedes", "no_se"],
  redes: ["si", "algunas", "no"],
} as const;

export type SingleQuestionKey = keyof typeof SINGLE_SELECT;

/** Campos obligatorios del paso 1. */
export const REQUIRED_FIELDS = ["nombre", "empresa", "correo"] as const;

export type RequiredField = (typeof REQUIRED_FIELDS)[number];

/** Etiquetas genéricas para opciones si/no/no sé. */
export const GENERIC_OPTION_LABELS = {
  es: { si: "Sí", no: "No", no_se: "No sé" },
  en: { si: "Yes", no: "No", no_se: "I don't know" },
} as const;
