/**
 * text.ts — Utilidades de texto para búsquedas tolerantes a tildes y errores.
 * TypeScript puro, sin dependencias de Astro.
 */

/** Minúsculas, sin tildes, sin signos y con espacios colapsados. */
export function normalizeText(value: string): string {
  if (!value) return "";
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Distancia de Levenshtein con transposición de letras adyacentes
 * (Damerau, variante optimal string alignment).
 */
export function levenshtein(a: string, b: string): number {
  const source = a ?? "";
  const target = b ?? "";
  const m = source.length;
  const n = target.length;

  if (m === 0) return n;
  if (n === 0) return m;

  let previousPrevious: number[] = [];
  let previous: number[] = Array.from({ length: n + 1 }, (_, index) => index);

  for (let i = 1; i <= m; i++) {
    const current: number[] = [i];

    for (let j = 1; j <= n; j++) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + cost,
      );

      // Transposición de dos caracteres adyacentes (cuenta como 1).
      if (
        i > 1 &&
        j > 1 &&
        source[i - 1] === target[j - 2] &&
        source[i - 2] === target[j - 1]
      ) {
        current[j] = Math.min(current[j], previousPrevious[j - 2] + 1);
      }
    }

    previousPrevious = previous;
    previous = current;
  }

  return previous[n];
}
