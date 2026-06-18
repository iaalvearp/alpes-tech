/**
 * site.ts — Configuración global del sitio Alpes Tech.
 * Fuente única de verdad para SEO, metadatos y datos de contacto (Multilingüe).
 */

export const site = {
  name: "Alpes Tech",
  url: "https://alpestech.uk",
  github: "https://github.com/iaalvearp",
  contact: {
    email: "info@alpestech.uk",
  },
  en: {
    tagline: "Building software products for developers.",
    description:
      "Software products, developer tools, artificial intelligence and cloud solutions.",
    nav: [
      { label: "Home", href: "/", id: "nav-home" },
      { label: "Products", href: "/products", id: "nav-products" },
      { label: "About", href: "/about", id: "nav-about" },
      { label: "Contact", href: "/contact", id: "nav-contact" },
    ] as const,
    areas: [
      "Developer Tools",
      "Artificial Intelligence",
      "Cloud Solutions",
      "Automation",
      "Open Technologies",
    ] as const,
  },
  es: {
    tagline: "Desarrollando productos de software para programadores.",
    description:
      "Productos de software, herramientas para desarrolladores, inteligencia artificial y soluciones en la nube.",
    nav: [
      { label: "Inicio", href: "/es/", id: "nav-home" },
      { label: "Productos", href: "/es/products", id: "nav-products" },
      { label: "Nosotros", href: "/es/about", id: "nav-about" },
      { label: "Contacto", href: "/es/contact", id: "nav-contact" },
    ] as const,
    areas: [
      "Herramientas para Desarrolladores",
      "Inteligencia Artificial",
      "Soluciones en la Nube",
      "Automatización",
      "Tecnologías Abiertas",
    ] as const,
  },
} as const;

export type Site = typeof site;
