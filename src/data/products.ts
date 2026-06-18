/**
 * products.ts — Catálogo de productos de Alpes Tech.
 * Agregar nuevos productos aquí sin modificar componentes.
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  status: "active" | "coming-soon" | "beta";
  /** Emoji o nombre de ícono SVG representativo */
  icon: string;
  /** Frases cortas de marketing */
  bullets?: string[];
}

export const productsEn: Product[] = [
  {
    id: "alpy-script",
    name: "AlPy Script",
    tagline: "Python IDE for Android.",
    description:
      "A full-featured Python development environment built for Android. Write, run, and learn Python anywhere—no laptop required.",
    tags: ["Python", "Android", "IDE", "Mobile Dev"],
    url: "https://alpy.alpestech.uk",
    status: "active",
    icon: "🐍",
    bullets: ["Write.", "Run.", "Learn.", "Anywhere."],
  },
];

export const productsEs: Product[] = [
  {
    id: "alpy-script",
    name: "AlPy Script",
    tagline: "IDE de Python para Android.",
    description:
      "Un entorno de desarrollo de Python completo diseñado para Android. Escribe, ejecuta y aprende Python en cualquier lugar, sin necesidad de laptop.",
    tags: ["Python", "Android", "IDE", "Desarrollo Móvil"],
    url: "https://alpy.alpestech.uk",
    status: "active",
    icon: "🐍",
    bullets: ["Escribe.", "Ejecuta.", "Aprende.", "En cualquier lugar."],
  },
];

export type ProductStatus = Product["status"];
