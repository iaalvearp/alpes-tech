/**
 * details.ts — Contenido único para tarjetas resumen (Home) y páginas de detalle.
 * Fuente de verdad para Servicios y Soluciones, bilingüe (en/es).
 * Cada item alimenta tanto la card de la home como su página "Ver más".
 */

export interface DetailItem {
  slug: string;
  icon: string;
  /** Título corto y específico para la card (no repite el título de la sección). */
  cardTitle: string;
  /** Descripción breve para la card de la home. */
  cardDescription: string;
  /** H1 de la página de detalle. */
  title: string;
  /** Badge / eyebrow de la página de detalle. */
  eyebrow: string;
  /** Prompt en inglés para generar/descargar la imagen hero con IA. */
  heroPrompt: string;
  /** 3 a 4 puntos comerciales y atractivos. */
  bullets: string[];
}

export type DetailCategory = "services" | "solutions";
export type Lang = "en" | "es";

/* ── SOLUCIONES (ES) ── */
export const solutionsEs: DetailItem[] = [
  {
    slug: "aplicaciones-moviles",
    icon: "📱",
    cardTitle: "Aplicaciones Móviles",
    cardDescription:
      "Apps nativas y multiplataforma construidas para rendimiento y alcance.",
    title: "Aplicaciones Móviles",
    eyebrow: "Soluciones",
    heroPrompt:
      "A sleek modern smartphone floating in mid air showing a vibrant mobile app interface, ice blue glowing accents, dark navy background, glassmorphism UI, soft studio lighting, high detail, 3D render",
    bullets: [
      "Acelera tu llegada al mercado con apps nativas de alto rendimiento para iOS y Android.",
      "Fideliza a tus usuarios con experiencias fluidas, offline-first y notificaciones inteligentes.",
      "Escala sin fricción gracias a una base de código mantenible y lista para crecer.",
    ],
  },
  {
    slug: "plataformas-web",
    icon: "🌐",
    cardTitle: "Plataformas Web",
    cardDescription:
      "Plataformas y portales web escalables, diseñados para velocidad y gran experiencia.",
    title: "Plataformas Web",
    eyebrow: "Soluciones",
    heroPrompt:
      "A futuristic web platform dashboard displayed on a large floating screen, ice blue data visualizations, dark navy environment, glassmorphism panels, clean modern UI, cinematic lighting, 3D render",
    bullets: [
      "Convierte visitantes en clientes con plataformas web rápidas y optimizadas para SEO.",
      "Gestiona tu operación desde un panel a medida, seguro y disponible 24/7.",
      "Crece con una arquitectura escalable que soporta miles de usuarios sin perder velocidad.",
    ],
  },
  {
    slug: "inteligencia-artificial",
    icon: "🤖",
    cardTitle: "Inteligencia Artificial",
    cardDescription:
      "Soluciones inteligentes impulsadas por IA para automatizar y potenciar.",
    title: "Inteligencia Artificial",
    eyebrow: "Soluciones",
    heroPrompt:
      "An abstract glowing neural network and AI brain made of ice blue light particles, dark navy background, futuristic technology, holographic data streams, high detail, 3D render",
    bullets: [
      "Automatiza decisiones y tareas repetitivas con modelos de IA entrenados para tu negocio.",
      "Descubre insights ocultos en tus datos y anticípate a tu mercado.",
      "Ofrece atención inteligente 24/7 con asistentes conversacionales personalizados.",
    ],
  },
  {
    slug: "servicios-nube",
    icon: "☁️",
    cardTitle: "Servicios en la Nube",
    cardDescription:
      "Infraestructura y servicios en la nube para desplegar, escalar y gestionar con confianza.",
    title: "Servicios en la Nube",
    eyebrow: "Soluciones",
    heroPrompt:
      "Cloud computing concept with floating glowing server nodes connected by ice blue light lines, dark navy sky, futuristic data center, glassmorphism, cinematic, 3D render",
    bullets: [
      "Reduce costos de infraestructura pagando solo por lo que realmente usas.",
      "Garantiza alta disponibilidad y respaldo de tus datos con arquitecturas resilientes.",
      "Despliega y escala en minutos con entornos seguros y automatizados.",
    ],
  },
  {
    slug: "comercio-electronico",
    icon: "🛒",
    cardTitle: "Comercio Electrónico",
    cardDescription:
      "Experiencias de comercio digital, desde la tienda hasta pagos y operaciones.",
    title: "Comercio Electrónico",
    eyebrow: "Soluciones",
    heroPrompt:
      "A modern e-commerce shopping experience concept, floating product cards and a glowing shopping cart icon with ice blue light, dark navy background, glassmorphism, clean commercial style, 3D render",
    bullets: [
      "Multiplica tus ventas con tiendas online optimizadas para conversión.",
      "Integra pagos, inventario y logística en una sola plataforma sin complicaciones.",
      "Llega a más clientes con experiencias de compra rápidas en cualquier dispositivo.",
    ],
  },
];

/* ── SOLUTIONS (EN) ── */
export const solutionsEn: DetailItem[] = [
  {
    slug: "mobile-apps",
    icon: "📱",
    cardTitle: "Mobile Apps",
    cardDescription:
      "Native and cross-platform mobile applications built for performance and reach.",
    title: "Mobile Apps",
    eyebrow: "Solutions",
    heroPrompt:
      "A sleek modern smartphone floating in mid air showing a vibrant mobile app interface, ice blue glowing accents, dark navy background, glassmorphism UI, soft studio lighting, high detail, 3D render",
    bullets: [
      "Speed up your time to market with high-performance native apps for iOS and Android.",
      "Keep users engaged with smooth, offline-first experiences and smart notifications.",
      "Scale effortlessly with a maintainable codebase built to grow.",
    ],
  },
  {
    slug: "web-platforms",
    icon: "🌐",
    cardTitle: "Web Platforms",
    cardDescription:
      "Scalable web platforms and portals designed for speed and great UX.",
    title: "Web Platforms",
    eyebrow: "Solutions",
    heroPrompt:
      "A futuristic web platform dashboard displayed on a large floating screen, ice blue data visualizations, dark navy environment, glassmorphism panels, clean modern UI, cinematic lighting, 3D render",
    bullets: [
      "Turn visitors into customers with fast, SEO-optimized web platforms.",
      "Run your operation from a secure, custom dashboard available 24/7.",
      "Grow on a scalable architecture that handles thousands of users without slowing down.",
    ],
  },
  {
    slug: "artificial-intelligence",
    icon: "🤖",
    cardTitle: "Artificial Intelligence",
    cardDescription:
      "Intelligent solutions powered by artificial intelligence to automate and augment.",
    title: "Artificial Intelligence",
    eyebrow: "Solutions",
    heroPrompt:
      "An abstract glowing neural network and AI brain made of ice blue light particles, dark navy background, futuristic technology, holographic data streams, high detail, 3D render",
    bullets: [
      "Automate decisions and repetitive tasks with AI models trained for your business.",
      "Uncover hidden insights in your data and stay ahead of your market.",
      "Deliver smart 24/7 support with custom conversational assistants.",
    ],
  },
  {
    slug: "cloud-services",
    icon: "☁️",
    cardTitle: "Cloud Services",
    cardDescription:
      "Cloud infrastructure and services to deploy, scale and manage with confidence.",
    title: "Cloud Services",
    eyebrow: "Solutions",
    heroPrompt:
      "Cloud computing concept with floating glowing server nodes connected by ice blue light lines, dark navy sky, futuristic data center, glassmorphism, cinematic, 3D render",
    bullets: [
      "Cut infrastructure costs by paying only for what you actually use.",
      "Ensure high availability and data backups with resilient architectures.",
      "Deploy and scale in minutes with secure, automated environments.",
    ],
  },
  {
    slug: "e-commerce",
    icon: "🛒",
    cardTitle: "E-Commerce",
    cardDescription:
      "Digital commerce experiences, from storefronts to payments and operations.",
    title: "E-Commerce",
    eyebrow: "Solutions",
    heroPrompt:
      "A modern e-commerce shopping experience concept, floating product cards and a glowing shopping cart icon with ice blue light, dark navy background, glassmorphism, clean commercial style, 3D render",
    bullets: [
      "Boost your sales with online stores optimized for conversion.",
      "Integrate payments, inventory and logistics in a single seamless platform.",
      "Reach more customers with fast shopping experiences on any device.",
    ],
  },
];

/* ── SERVICIOS (ES) ── */
export const servicesEs: DetailItem[] = [
  {
    slug: "desarrollo",
    icon: "⚙️",
    cardTitle: "Desarrollo",
    cardDescription:
      "Diseñamos y construimos software a medida, desde el prototipo hasta producción.",
    title: "Desarrollo de Software",
    eyebrow: "Servicios",
    heroPrompt:
      "A developer workspace concept with floating glowing code blocks and a modern IDE, ice blue accents, dark navy background, glassmorphism, cinematic lighting, 3D render",
    bullets: [
      "Transforma tus ideas en software a medida, listo para producción.",
      "Reduce riesgos con entregas iterativas y código de calidad probada.",
      "Cuenta con un equipo que domina las tecnologías más actuales.",
    ],
  },
  {
    slug: "comercializacion",
    icon: "📈",
    cardTitle: "Comercialización",
    cardDescription:
      "Llevamos los productos de software al mercado con posicionamiento claro.",
    title: "Comercialización",
    eyebrow: "Servicios",
    heroPrompt:
      "A go-to-market strategy concept with a rising glowing growth chart and a product launch rocket, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Lleva tu producto de software al mercado con una estrategia clara.",
      "Maximiza ingresos con modelos de precio y licenciamiento optimizados.",
      "Posiciona tu marca tecnológica frente a los clientes correctos.",
    ],
  },
  {
    slug: "implementacion",
    icon: "🚀",
    cardTitle: "Implementación",
    cardDescription:
      "Despliegue e integración de soluciones en tus sistemas actuales.",
    title: "Implementación",
    eyebrow: "Servicios",
    heroPrompt:
      "A systems integration concept with glowing puzzle pieces and connected gears, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Pon en marcha tus soluciones sin interrumpir tu operación.",
      "Integra el nuevo software con tus sistemas actuales sin fricción.",
      "Asegura una adopción exitosa con un despliegue planificado.",
    ],
  },
  {
    slug: "mantenimiento",
    icon: "🔧",
    cardTitle: "Mantenimiento",
    cardDescription:
      "Soporte continuo, actualizaciones y mejoras que mantienen tu software saludable.",
    title: "Mantenimiento",
    eyebrow: "Servicios",
    heroPrompt:
      "A software maintenance concept with a glowing shield and gear icons over a server, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Mantén tu software siempre disponible, seguro y actualizado.",
      "Anticipa fallas con monitoreo proactivo y soporte continuo.",
      "Evoluciona tu producto con mejoras constantes sin sobresaltos.",
    ],
  },
  {
    slug: "licenciamiento",
    icon: "🔑",
    cardTitle: "Licenciamiento",
    cardDescription:
      "Licenciamiento de software flexible adaptado a equipos y organizaciones.",
    title: "Licenciamiento",
    eyebrow: "Servicios",
    heroPrompt:
      "A software licensing concept with a glowing key and certificate documents, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Protege tu propiedad intelectual con esquemas de licencia claros.",
      "Ofrece a tus clientes planes flexibles que se adaptan a su uso.",
      "Simplifica la gestión de licencias y renovaciones.",
    ],
  },
  {
    slug: "consultoria",
    icon: "💡",
    cardTitle: "Consultoría",
    cardDescription:
      "Acompañamiento técnico y estratégico para decisiones tecnológicas acertadas.",
    title: "Consultoría",
    eyebrow: "Servicios",
    heroPrompt:
      "A technology consulting concept with a glowing roadmap and strategy hologram over a desk, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Toma decisiones tecnológicas acertadas con asesoría experta.",
      "Optimiza procesos y arquitectura para crecer con eficiencia.",
      "Define una hoja de ruta clara hacia tus objetivos digitales.",
    ],
  },
  {
    slug: "capacitacion",
    icon: "🎓",
    cardTitle: "Capacitación",
    cardDescription:
      "Capacitación práctica para que tu equipo aproveche al máximo cada herramienta.",
    title: "Capacitación",
    eyebrow: "Servicios",
    heroPrompt:
      "A tech training concept with a glowing graduation cap and floating learning screens, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Empodera a tu equipo con formación práctica y aplicada.",
      "Acelera la adopción de nuevas herramientas y tecnologías.",
      "Construye capacidades internas que perduran en el tiempo.",
    ],
  },
];

/* ── SERVICES (EN) ── */
export const servicesEn: DetailItem[] = [
  {
    slug: "development",
    icon: "⚙️",
    cardTitle: "Development",
    cardDescription:
      "We design and build custom software, from first prototype to production.",
    title: "Software Development",
    eyebrow: "Services",
    heroPrompt:
      "A developer workspace concept with floating glowing code blocks and a modern IDE, ice blue accents, dark navy background, glassmorphism, cinematic lighting, 3D render",
    bullets: [
      "Turn your ideas into custom, production-ready software.",
      "Reduce risk with iterative delivery and proven code quality.",
      "Rely on a team that masters today's leading technologies.",
    ],
  },
  {
    slug: "commercialization",
    icon: "📈",
    cardTitle: "Commercialization",
    cardDescription:
      "We bring software products to market with clear positioning.",
    title: "Commercialization",
    eyebrow: "Services",
    heroPrompt:
      "A go-to-market strategy concept with a rising glowing growth chart and a product launch rocket, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Bring your software product to market with a clear strategy.",
      "Maximize revenue with optimized pricing and licensing models.",
      "Position your tech brand in front of the right customers.",
    ],
  },
  {
    slug: "implementation",
    icon: "🚀",
    cardTitle: "Implementation",
    cardDescription:
      "Deployment and integration of solutions into your existing systems.",
    title: "Implementation",
    eyebrow: "Services",
    heroPrompt:
      "A systems integration concept with glowing puzzle pieces and connected gears, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Roll out your solutions without disrupting your operation.",
      "Integrate new software with your existing systems seamlessly.",
      "Ensure successful adoption with a carefully planned deployment.",
    ],
  },
  {
    slug: "maintenance",
    icon: "🔧",
    cardTitle: "Maintenance",
    cardDescription:
      "Ongoing support, updates and improvements that keep your software healthy.",
    title: "Maintenance",
    eyebrow: "Services",
    heroPrompt:
      "A software maintenance concept with a glowing shield and gear icons over a server, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Keep your software always available, secure and up to date.",
      "Prevent failures with proactive monitoring and ongoing support.",
      "Evolve your product with continuous, hassle-free improvements.",
    ],
  },
  {
    slug: "licensing",
    icon: "🔑",
    cardTitle: "Licensing",
    cardDescription:
      "Flexible software licensing tailored to teams and organizations.",
    title: "Licensing",
    eyebrow: "Services",
    heroPrompt:
      "A software licensing concept with a glowing key and certificate documents, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Protect your intellectual property with clear licensing schemes.",
      "Offer customers flexible plans that adapt to their usage.",
      "Simplify license management and renewals.",
    ],
  },
  {
    slug: "consulting",
    icon: "💡",
    cardTitle: "Consulting",
    cardDescription:
      "Technical and strategic guidance to make the right technology decisions.",
    title: "Consulting",
    eyebrow: "Services",
    heroPrompt:
      "A technology consulting concept with a glowing roadmap and strategy hologram over a desk, ice blue accents, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Make the right technology decisions with expert guidance.",
      "Optimize processes and architecture to grow efficiently.",
      "Define a clear roadmap toward your digital goals.",
    ],
  },
  {
    slug: "training",
    icon: "🎓",
    cardTitle: "Training",
    cardDescription:
      "Hands-on capacitation so your team gets the most out of every tool.",
    title: "Training",
    eyebrow: "Services",
    heroPrompt:
      "A tech training concept with a glowing graduation cap and floating learning screens, ice blue light, dark navy background, glassmorphism, 3D render",
    bullets: [
      "Empower your team with practical, hands-on training.",
      "Accelerate the adoption of new tools and technologies.",
      "Build lasting in-house capabilities.",
    ],
  },
];

/* ── Helpers ── */
export function getItems(category: DetailCategory, lang: Lang): DetailItem[] {
  if (category === "solutions") return lang === "es" ? solutionsEs : solutionsEn;
  return lang === "es" ? servicesEs : servicesEn;
}

export function detailBase(category: DetailCategory, lang: Lang): string {
  if (category === "solutions") return lang === "es" ? "/es/soluciones" : "/solutions";
  return lang === "es" ? "/es/servicios" : "/services";
}

export function overviewLabel(category: DetailCategory, lang: Lang): string {
  const map = {
    solutions: { es: "Soluciones", en: "Solutions" },
    services: { es: "Servicios", en: "Services" },
  } as const;
  return map[category][lang];
}
