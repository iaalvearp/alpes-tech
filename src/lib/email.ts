/**
 * email.ts — Validación básica y sugerencias de correo.
 * TypeScript puro, sin dependencias de Astro.
 */

import { levenshtein } from "./text";

const VALID_DOMAINS = [
  "gmail.com",
  "hotmail.com",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "yahoo.com",
  "yahoo.es",
  "icloud.com",
  "live.com",
  "msn.com",
  "me.com",
  "mail.com",
  "gmx.com",
  "proton.me",
  "protonmail.com",
];

export function isValidEmail(email: string | null | undefined): boolean {
  if (typeof email !== "string") return false;
  const value = email.trim();

  if (!value || value.length > 254 || /\s/.test(value)) return false;
  if (value.split("@").length !== 2) return false;

  const [local, domain] = value.split("@");
  if (!local || !domain || !domain.includes(".")) return false;

  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value);
}

/** Sugiere una corrección de dominio, o null si no hay nada que corregir. */
export function suggestEmailFix(
  email: string | null | undefined,
): string | null {
  if (typeof email !== "string") return null;

  const value = email.trim();
  if (!value || /\s/.test(value)) return null;

  const at = value.indexOf("@");
  if (at <= 0 || value.indexOf("@", at + 1) !== -1) return null;

  const local = value.slice(0, at);
  const domain = value.slice(at + 1).toLowerCase();
  if (!domain) return null;

  if (VALID_DOMAINS.includes(domain)) return null;

  const extensionTypo = domain.match(/^(.*)\.(con|cmo|vom|coom)$/);
  if (extensionTypo) {
    const fixed = `${local}@${extensionTypo[1]}.com`;
    return fixed.toLowerCase() === value.toLowerCase() ? null : fixed;
  }

  let bestDomain: string | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const validDomain of VALID_DOMAINS) {
    const distance = levenshtein(domain, validDomain);
    if (distance <= 1 && distance < bestDistance) {
      bestDistance = distance;
      bestDomain = validDomain;
    }
  }

  if (!bestDomain) return null;

  const fixed = `${local}@${bestDomain}`;
  return fixed.toLowerCase() === value.toLowerCase() ? null : fixed;
}
