/**
 * site.ts — Configuración global del sitio Alpes Tech.
 * Fuente única de verdad para SEO, metadatos y datos de contacto (Multilingüe).
 */

export const site = {
  name: "Alpes Tech",
  url: "https://alpestech.uk",
  contact: {
    email: "info@alpestech.uk",
  },
  en: {
    tagline: "Building software products for developers.",
    description:
      "Software products, developer tools, artificial intelligence and cloud solutions.",
    nav: [
      { label: "Home", href: "/#inicio", id: "nav-home", section: "inicio" },
      { label: "Services", href: "/#servicios", id: "nav-services", section: "servicios" },
      { label: "Solutions", href: "/#soluciones", id: "nav-solutions", section: "soluciones" },
      { label: "About", href: "/#nosotros", id: "nav-about", section: "nosotros" },
      { label: "Contact", href: "/#contacto", id: "nav-contact", section: "contacto" },
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
      { label: "Inicio", href: "/es/#inicio", id: "nav-home", section: "inicio" },
      { label: "Servicios", href: "/es/#servicios", id: "nav-servicios", section: "servicios" },
      { label: "Soluciones", href: "/es/#soluciones", id: "nav-soluciones", section: "soluciones" },
      { label: "Nosotros", href: "/es/#nosotros", id: "nav-nosotros", section: "nosotros" },
      { label: "Contacto", href: "/es/#contacto", id: "nav-contacto", section: "contacto" },
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
