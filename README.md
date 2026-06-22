# Alpes Tech

Sitio web corporativo de **Alpes Tech**, empresa de tecnología enfocada en el desarrollo de software, soluciones de inteligencia artificial, servicios en la nube y aplicaciones móviles para empresas, agencias y profesionales en Ecuador y Latinoamérica.

## ¿Qué hacemos?

En Alpes Tech acompañamos el ciclo completo del software: diseño, desarrollo a medida, implementación, mantenimiento, licenciamiento, consultoría y capacitación. También desarrollamos productos propios como **AlPy Script**, un IDE de Python para Android.

### Servicios principales
- Desarrollo de software a medida
- Soluciones de Inteligencia Artificial
- Servicios e infraestructura en la nube
- Aplicaciones móviles nativas y multiplataforma
- Plataformas y portales web escalables
- Implementación, integración y mantenimiento
- Consultoría técnica y capacitación

### Productos
- **AlPy Script** — IDE de Python para Android. [alpy.alpestech.uk](https://alpy.alpestech.uk)
- **Plantillas para Bodas** — Sitios de invitación personalizados (próximamente)

---

## Stack Tecnológico
- [Astro](https://astro.build) — Framework principal
- Tailwind CSS + CSS puro (scoped styles)
- TypeScript
- Sitio bilingüe (ES / EN)
- Despliegue en Cloudflare

## Estructura del Proyecto
```
src/
├── components/
│   ├── cards/
│   ├── sections/
│   └── ui/
├── data/
├── layouts/
├── pages/
│   ├── index.astro
│   ├── products.astro
│   ├── services/
│   ├── solutions/
│   └── es/
│       ├── index.astro
│       ├── products.astro
│       ├── servicios/
│       └── soluciones/
└── styles/

public/
└── ...
```

El sitio estará disponible en http://alpestech.uk.

### Idiomas
- 🇬🇧 Inglés → /
- 🇪🇸 Español → /es/

© Alpes Tech. Todos los derechos reservados.

### SEO
El sitio incluye optimizaciones para posicionamiento en torno a los temas principales de Alpes Tech: Inteligencia artificial, Desarrollo de software, Servicios en la nube, Aplicaciones móviles, Python, Soluciones tecnológicas en Ecuador y Latinoamérica.

### Notas de mantenimiento
- Mantener un solo sistema de navegación, layout y footer para toda la web corporativa.
- Evitar duplicar productos externos como páginas internas completas si ya tienen sitio propio.
- Mantener /products y /es/products como catálogo simple de productos.
- Revisar pnpm build antes de desplegar cambios.
