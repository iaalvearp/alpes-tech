/**
 * details.ts — Contenido único para tarjetas resumen (Home) y páginas de detalle.
 * Fuente de verdad para Servicios y Soluciones, bilingüe (en/es).
 * Cada item alimenta tanto la card de la home como su página "Ver más".
 */

export interface DetailItem {
  slug: string;
  /** Título corto y específico para la card (no repite el título de la sección). */
  cardTitle: string;
  /** Descripción breve para la card de la home. */
  cardDescription: string;
  /** H1 de la página de detalle. */
  title: string;
  /** Badge / eyebrow de la página de detalle. */
  eyebrow: string;
  /** Ruta a la imagen dentro de public/ (ej: /servicios/desarrollo.webp). */
  image: string;
  /** Texto alternativo descriptivo para la imagen. */
  imageAlt: string;
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
    cardTitle: "Aplicaciones Móviles",
    cardDescription:
      "Apps nativas y multiplataforma construidas para rendimiento y alcance.",
    title: "Aplicaciones Móviles",
    eyebrow: "Soluciones",
    image: "/soluciones/aplicaciones-moviles.webp",
    imageAlt:
      "Teléfono inteligente moderno flotando con interfaz de app vibrante, iluminación azul hielo, fondo azul marino oscuro, estilo glassmorphism, representación 3D",
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
    cardTitle: "Plataformas Web",
    cardDescription:
      "Plataformas y portales web escalables, diseñados para velocidad y gran experiencia.",
    title: "Plataformas Web",
    eyebrow: "Soluciones",
    image: "/soluciones/plataformas-web.webp",
    imageAlt:
      "Panel de plataforma web futurista en pantalla flotante grande, visualizaciones de datos azul hielo, paneles glassmorphism, fondo azul marino oscuro, iluminación cinematográfica, representación 3D",
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
    cardTitle: "Inteligencia Artificial",
    cardDescription:
      "Soluciones inteligentes impulsadas por IA para automatizar y potenciar.",
    title: "Inteligencia Artificial",
    eyebrow: "Soluciones",
    image: "/soluciones/inteligencia-artificial.webp",
    imageAlt:
      "Red neuronal abstracta y cerebro de IA brillantes hechos de partículas de luz azul hielo, fondo azul marino oscuro, tecnología futurista, flujos de datos holográficos, representación 3D",
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
    cardTitle: "Servicios en la Nube",
    cardDescription:
      "Infraestructura y servicios en la nube para desplegar, escalar y gestionar con confianza.",
    title: "Servicios en la Nube",
    eyebrow: "Soluciones",
    image: "/soluciones/servicios-nube.webp",
    imageAlt:
      "Concepto de computación en la nube con nodos de servidor brillantes conectados por líneas de luz azul hielo, cielo azul marino oscuro, centro de datos futurista, glassmorphism, representación 3D",
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
    cardTitle: "Comercio Electrónico",
    cardDescription:
      "Experiencias de comercio digital, desde la tienda hasta pagos y operaciones.",
    title: "Comercio Electrónico",
    eyebrow: "Soluciones",
    image: "/soluciones/comercio-electronico.webp",
    imageAlt:
      "Experiencia de compra en línea moderna con tarjetas de producto flotantes e icono de carrito de compras brillante en luz azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Mobile Apps",
    cardDescription:
      "Native and cross-platform mobile applications built for performance and reach.",
    title: "Mobile Apps",
    eyebrow: "Solutions",
    image: "/solutions/mobile-apps.webp",
    imageAlt:
      "Sleek modern smartphone floating in mid air with vibrant mobile app interface, ice blue glowing accents, dark navy background, glassmorphism UI, soft studio lighting, 3D render",
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
    cardTitle: "Web Platforms",
    cardDescription:
      "Scalable web platforms and portals designed for speed and great UX.",
    title: "Web Platforms",
    eyebrow: "Solutions",
    image: "/solutions/web-platforms.webp",
    imageAlt:
      "Futuristic web platform dashboard on a large floating screen, ice blue data visualizations, dark navy environment, glassmorphism panels, clean modern UI, cinematic lighting, 3D render",
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
    cardTitle: "Artificial Intelligence",
    cardDescription:
      "Intelligent solutions powered by artificial intelligence to automate and augment.",
    title: "Artificial Intelligence",
    eyebrow: "Solutions",
    image: "/solutions/artificial-intelligence.webp",
    imageAlt:
      "Abstract glowing neural network and AI brain made of ice blue light particles, dark navy background, futuristic technology, holographic data streams, detailed 3D render",
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
    cardTitle: "Cloud Services",
    cardDescription:
      "Cloud infrastructure and services to deploy, scale and manage with confidence.",
    title: "Cloud Services",
    eyebrow: "Solutions",
    image: "/solutions/cloud-services.webp",
    imageAlt:
      "Cloud computing concept with floating glowing server nodes connected by ice blue light lines, dark navy sky, futuristic data center, glassmorphism, cinematic 3D render",
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
    cardTitle: "E-Commerce",
    cardDescription:
      "Digital commerce experiences, from storefronts to payments and operations.",
    title: "E-Commerce",
    eyebrow: "Solutions",
    image: "/solutions/e-commerce.webp",
    imageAlt:
      "Modern e-commerce shopping experience concept, floating product cards and glowing shopping cart icon with ice blue light, dark navy background, glassmorphism, commercial style, 3D render",
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
    cardTitle: "Desarrollo",
    cardDescription:
      "Diseñamos y construimos software a medida, desde el prototipo hasta producción.",
    title: "Desarrollo de Software",
    eyebrow: "Servicios",
    image: "/servicios/desarrollo.webp",
    imageAlt:
      "Espacio de trabajo de desarrollador con bloques de código brillantes flotando y un IDE moderno, acentos azul hielo, fondo azul marino oscuro, glassmorphism, iluminación cinematográfica, representación 3D",
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
    cardTitle: "Comercialización",
    cardDescription:
      "Convierte tu tecnología en ingresos con una estrategia comercial sólida.",
    title: "Comercialización",
    eyebrow: "Servicios",
    image: "/servicios/comercializacion.webp",
    imageAlt:
      "Concepto de estrategia de salida al mercado con gráfico de crecimiento brillante ascendente y cohete de lanzamiento de producto, acentos azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Implementación",
    cardDescription:
      "Despliegue e integración de soluciones en tus sistemas actuales.",
    title: "Implementación",
    eyebrow: "Servicios",
    image: "/servicios/implementacion.webp",
    imageAlt:
      "Concepto de integración de sistemas con piezas de rompecabezas brillantes y engranajes conectados, luz azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Mantenimiento",
    cardDescription:
      "Tu software merece mantenerse en óptimas condiciones para seguir generando valor.",
    title: "Mantenimiento",
    eyebrow: "Servicios",
    image: "/servicios/mantenimiento.webp",
    imageAlt:
      "Concepto de mantenimiento de software con escudo brillante e iconos de engranaje sobre un servidor, acentos azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Licenciamiento",
    cardDescription:
      "Protege y rentabiliza tu software con esquemas de licencia flexibles.",
    title: "Licenciamiento",
    eyebrow: "Servicios",
    image: "/servicios/licenciamiento.webp",
    imageAlt:
      "Concepto de licenciamiento de software con llave brillante y documentos de certificado, luz azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Consultoría",
    cardDescription:
      "Te guiamos en cada decisión tecnológica para que tu negocio avance con rumbo claro.",
    title: "Consultoría",
    eyebrow: "Servicios",
    image: "/servicios/consultoria.webp",
    imageAlt:
      "Concepto de consultoría tecnológica con hoja de ruta brillante y holograma de estrategia sobre un escritorio, acentos azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Capacitación",
    cardDescription:
      "Formamos a tu equipo para que domine la tecnología y potencie tu negocio.",
    title: "Capacitación",
    eyebrow: "Servicios",
    image: "/servicios/capacitacion.webp",
    imageAlt:
      "Concepto de capacitación tecnológica con birrete brillante y pantallas de aprendizaje flotantes, luz azul hielo, fondo azul marino oscuro, glassmorphism, representación 3D",
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
    cardTitle: "Development",
    cardDescription:
      "We design and build custom software, from first prototype to production.",
    title: "Software Development",
    eyebrow: "Services",
    image: "/services/development.webp",
    imageAlt:
      "Developer workspace concept with floating glowing code blocks and a modern IDE, ice blue accents, dark navy background, glassmorphism, cinematic lighting, 3D render",
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
    cardTitle: "Commercialization",
    cardDescription:
      "Turn your technology into revenue with a solid go-to-market strategy.",
    title: "Commercialization",
    eyebrow: "Services",
    image: "/services/commercialization.webp",
    imageAlt:
      "Go-to-market strategy concept with a rising glowing growth chart and a product launch rocket, ice blue accents, dark navy background, glassmorphism, 3D render",
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
    cardTitle: "Implementation",
    cardDescription:
      "Deployment and integration of solutions into your existing systems.",
    title: "Implementation",
    eyebrow: "Services",
    image: "/services/implementation.webp",
    imageAlt:
      "Systems integration concept with glowing puzzle pieces and connected gears, ice blue light, dark navy background, glassmorphism, 3D render",
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
    cardTitle: "Maintenance",
    cardDescription:
      "Your software deserves to stay in peak condition to keep delivering value.",
    title: "Maintenance",
    eyebrow: "Services",
    image: "/services/maintenance.webp",
    imageAlt:
      "Software maintenance concept with a glowing shield and gear icons over a server, ice blue accents, dark navy background, glassmorphism, 3D render",
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
    cardTitle: "Licensing",
    cardDescription:
      "Protect and monetize your software with flexible licensing schemes.",
    title: "Licensing",
    eyebrow: "Services",
    image: "/services/licensing.webp",
    imageAlt:
      "Software licensing concept with a glowing key and certificate documents, ice blue light, dark navy background, glassmorphism, 3D render",
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
    cardTitle: "Consulting",
    cardDescription:
      "We guide you through every technology decision with clarity and expertise.",
    title: "Consulting",
    eyebrow: "Services",
    image: "/services/consulting.webp",
    imageAlt:
      "Technology consulting concept with a glowing roadmap and strategy hologram over a desk, ice blue accents, dark navy background, glassmorphism, 3D render",
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
    cardTitle: "Training",
    cardDescription:
      "We train your team to master technology and drive your business forward.",
    title: "Training",
    eyebrow: "Services",
    image: "/services/training.webp",
    imageAlt:
      "Tech training concept with a glowing graduation cap and floating learning screens, ice blue light, dark navy background, glassmorphism, 3D render",
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
