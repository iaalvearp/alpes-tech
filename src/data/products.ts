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
    url: "https://alpy.alpestech.uk/",
    status: "active",
    icon: "🐍",
    bullets: ["Write.", "Run.", "Learn.", "Anywhere."],
  },
  {
    id: "wedding-templates",
    name: "Wedding Templates",
    tagline: "Custom wedding invitation websites and event templates.",
    description:
      "Custom wedding invitation websites and event templates. Coming soon.",
    tags: ["Templates", "Wedding", "Websites"],
    url: "",
    status: "coming-soon",
    icon: "💒",
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
    url: "https://alpy.iaalvearp.workers.dev/",
    status: "active",
    icon: "🐍",
    bullets: ["Escribe.", "Ejecuta.", "Aprende.", "En cualquier lugar."],
  },
  {
    id: "wedding-templates",
    name: "Plantillas para Bodas",
    tagline:
      "Sitios web de invitación y plantillas para eventos personalizadas.",
    description:
      "Sitios web de invitación y plantillas para eventos personalizadas. Próximamente.",
    tags: ["Plantillas", "Bodas", "Sitios Web"],
    url: "",
    status: "coming-soon",
    icon: "💒",
  },
];

export type ProductStatus = Product["status"];
