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
    id: "alwed-invitations",
    name: "AlWed Invitations",
    tagline: "Digital wedding invitations for your special day.",
    description:
      "Create the perfect digital wedding invitation to share your story and make every guest feel special.",
    tags: ["Wedding", "Invitations", "Websites"],
    url: "https://alwed.alpestech.uk/",
    status: "active",
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
    url: "https://alpy.alpestech.uk/",
    status: "active",
    icon: "🐍",
    bullets: ["Escribe.", "Ejecuta.", "Aprende.", "En cualquier lugar."],
  },
  {
    id: "alwed-invitations",
    name: "AlWed Invitaciones",
    tagline: "Invitaciones digitales de boda para compartir tu historia.",
    description:
      "Crea la invitación digital perfecta para compartir tu historia y hacer sentir especiales a tus invitados.",
    tags: ["Bodas", "Invitaciones", "Sitios Web"],
    url: "https://alwed.alpestech.uk/",
    status: "active",
    icon: "💒",
  },
];

export type ProductStatus = Product["status"];
