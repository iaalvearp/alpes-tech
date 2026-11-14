/**
 * countries.ts — Catálogo de países usado por el Brief.
 * TypeScript puro; las banderas son PNG locales en /flags/.
 */

import { levenshtein, normalizeText } from "./text";

export interface Country {
  code: string;
  nameEs: string;
  nameEn: string;
  dial: string;
  aliases: string[];
  flag: string;
}

export const COUNTRIES: Country[] = [
  {
    code: "EC",
    nameEs: "Ecuador",
    nameEn: "Ecuador",
    dial: "593",
    aliases: [],
    flag: "/flags/ec.png",
  },
  {
    code: "CO",
    nameEs: "Colombia",
    nameEn: "Colombia",
    dial: "57",
    aliases: [],
    flag: "/flags/co.png",
  },
  {
    code: "PE",
    nameEs: "Perú",
    nameEn: "Peru",
    dial: "51",
    aliases: [],
    flag: "/flags/pe.png",
  },
  {
    code: "CL",
    nameEs: "Chile",
    nameEn: "Chile",
    dial: "56",
    aliases: [],
    flag: "/flags/cl.png",
  },
  {
    code: "AR",
    nameEs: "Argentina",
    nameEn: "Argentina",
    dial: "54",
    aliases: [],
    flag: "/flags/ar.png",
  },
  {
    code: "BR",
    nameEs: "Brasil",
    nameEn: "Brazil",
    dial: "55",
    aliases: [],
    flag: "/flags/br.png",
  },
  {
    code: "MX",
    nameEs: "México",
    nameEn: "Mexico",
    dial: "52",
    aliases: [],
    flag: "/flags/mx.png",
  },
  {
    code: "PA",
    nameEs: "Panamá",
    nameEn: "Panama",
    dial: "507",
    aliases: [],
    flag: "/flags/pa.png",
  },
  {
    code: "US",
    nameEs: "Estados Unidos",
    nameEn: "United States",
    dial: "1",
    aliases: [
      "USA",
      "EEUU",
      "EE.UU.",
      "United States",
      "Estados Unidos de America",
    ],
    flag: "/flags/us.png",
  },
  {
    code: "ES",
    nameEs: "España",
    nameEn: "Spain",
    dial: "34",
    aliases: [],
    flag: "/flags/es.png",
  },
  {
    code: "IT",
    nameEs: "Italia",
    nameEn: "Italy",
    dial: "39",
    aliases: [],
    flag: "/flags/it.png",
  },
  {
    code: "FR",
    nameEs: "Francia",
    nameEn: "France",
    dial: "33",
    aliases: [],
    flag: "/flags/fr.png",
  },
  {
    code: "DE",
    nameEs: "Alemania",
    nameEn: "Germany",
    dial: "49",
    aliases: [],
    flag: "/flags/de.png",
  },
  {
    code: "NL",
    nameEs: "Países Bajos",
    nameEn: "Netherlands",
    dial: "31",
    aliases: ["Holanda"],
    flag: "/flags/nl.png",
  },
  {
    code: "PT",
    nameEs: "Portugal",
    nameEn: "Portugal",
    dial: "351",
    aliases: [],
    flag: "/flags/pt.png",
  },
  {
    code: "GB",
    nameEs: "Reino Unido",
    nameEn: "United Kingdom",
    dial: "44",
    aliases: ["UK", "Inglaterra", "Gran Bretaña"],
    flag: "/flags/gb.png",
  },
  {
    code: "CN",
    nameEs: "China",
    nameEn: "China",
    dial: "86",
    aliases: [],
    flag: "/flags/cn.png",
  },
  {
    code: "JP",
    nameEs: "Japón",
    nameEn: "Japan",
    dial: "81",
    aliases: [],
    flag: "/flags/jp.png",
  },
  {
    code: "KR",
    nameEs: "Corea del Sur",
    nameEn: "South Korea",
    dial: "82",
    aliases: ["Corea"],
    flag: "/flags/kr.png",
  },
  {
    code: "RU",
    nameEs: "Rusia",
    nameEn: "Russia",
    dial: "7",
    aliases: [],
    flag: "/flags/ru.png",
  },
  {
    code: "VN",
    nameEs: "Vietnam",
    nameEn: "Vietnam",
    dial: "84",
    aliases: ["Viet Nam"],
    flag: "/flags/vn.png",
  },
  {
    code: "TH",
    nameEs: "Tailandia",
    nameEn: "Thailand",
    dial: "66",
    aliases: [],
    flag: "/flags/th.png",
  },
];

const NORMALIZED_NAMES = COUNTRIES.map((country) => ({
  country,
  values: [country.nameEs, country.nameEn, ...country.aliases].map(normalizeText),
}));

export function getByCode(code: string | null | undefined): Country | null {
  if (!code) return null;
  const normalized = code.trim().toUpperCase();
  return COUNTRIES.find((country) => country.code === normalized) ?? null;
}

/** Coincidencia exacta tras normalizar el texto. */
export function findByText(text: string | null | undefined): Country | null {
  const query = normalizeText(text ?? "");
  if (!query) return null;

  const match = NORMALIZED_NAMES.find(({ values }) =>
    values.includes(query),
  );
  return match ? match.country : null;
}

/** País más cercano, solo si el parecido es razonable. */
export function suggestCountry(text: string | null | undefined): Country | null {
  const query = normalizeText(text ?? "");
  if (!query) return null;

  const threshold = query.length > 8 ? 3 : 2;
  let best: Country | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const { country, values } of NORMALIZED_NAMES) {
    for (const value of values) {
      const distance = levenshtein(query, value);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = country;
      }
    }
  }

  return bestDistance <= threshold ? best : null;
}
