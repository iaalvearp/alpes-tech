CREATE TABLE IF NOT EXISTS brief_submissions (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  lang TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'nuevo',
  nombre TEXT NOT NULL, empresa TEXT NOT NULL, correo TEXT NOT NULL,
  whatsapp TEXT, whatsapp_pais TEXT, ciudad TEXT, pais TEXT, pais_codigo TEXT, actividad TEXT, objetivos_otro TEXT,
  tiene_web TEXT, web_actual_url TEXT,
  idiomas TEXT, idiomas_otro TEXT, volumen TEXT, materiales TEXT,
  estilo TEXT, referencias TEXT, plazo TEXT, mantenimiento TEXT,
  dominio_tiene TEXT, dominio_nombre TEXT, dominio_quien TEXT,
  web_ubicacion TEXT, servidor TEXT, soporte_ti TEXT,
  correo_dominio TEXT, correo_servicio TEXT,
  sistema_interno TEXT, sistema_interno_detalle TEXT,
  google_aparece TEXT, caida_tolerancia TEXT, quien_actualiza TEXT,
  redes TEXT, redes_texto TEXT, notas TEXT,
  pais_visitante TEXT
);
CREATE TABLE IF NOT EXISTS brief_choices (
  submission_id TEXT NOT NULL REFERENCES brief_submissions(id) ON DELETE CASCADE,
  question_key TEXT NOT NULL,
  option_key TEXT NOT NULL,
  PRIMARY KEY (submission_id, question_key, option_key)
);
CREATE INDEX IF NOT EXISTS idx_brief_choices_q ON brief_choices(question_key, option_key);
CREATE INDEX IF NOT EXISTS idx_brief_created ON brief_submissions(created_at);
