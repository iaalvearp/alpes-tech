# Estructura del Proyecto — Alpes Tech Web

**Framework:** Astro 6 + Tailwind CSS 4  
**Idiomas:** Español (`/es/`) e Inglés (`/`)  
**Arquitectura:** SPA con anclas + páginas de detalle

---

## 📁 Raíz

| Archivo | Descripción |
|---|---|
| `astro.config.mjs` | Configuración de Astro; registra el plugin de Tailwind CSS via Vite. |
| `package.json` | Manifiesto del proyecto; scripts: `dev`, `build`, `preview`. |
| `pnpm-workspace.yaml` | Configuración del workspace de pnpm. |
| `tsconfig.json` | TypeScript config — extiende el estricto de Astro. |
| `README.md` | README por defecto de Astro; no personalizado. |
| `pnpm-lock.yaml` | Lockfile generado automáticamente. |

---

## 📁 `.astro/` — Generado por Astro

| Archivo | Descripción |
|---|---|
| `content.d.ts` | Declaraciones de tipos para content collections (no hay collections). |
| `settings.json` | Estado interno de Astro. |
| `types.d.ts` | Referencia de tipos globales de Astro. |

---

## 📁 `.vscode/` — Configuración del editor

| Archivo | Descripción |
|---|---|
| `extensions.json` | Recomienda la extensión `astro-build.astro-vscode`. |
| `launch.json` | Lanza el servidor dev de Astro desde VS Code. |

---

## 📁 `public/` — Assets estáticos

| Archivo | Descripción |
|---|---|
| `favicon.ico` | Favicon binario (usado por `Layout.astro`). |
| `favicon.svg` | Favicon SVG con icono de montaña en azul hielo. |

---

## 📁 `src/`

### `src/layouts/`

| Archivo | Descripción |
|---|---|
| `Layout.astro` | Layout raíz HTML; meta tags SEO, importa CSS global, **auto-detección de idioma** (`navigator.language` con `sessionStorage` para evitar bucle), y **script de 3D Tilt** para cards con `data-tilt`. |

### `src/pages/` — Rutas en inglés

| Archivo | Descripción |
|---|---|
| `index.astro` | **Home SPA**; ensambla Hero, Services, Solutions, About, Products y Contact sections con divisores. |
| `about.astro` | Página About standalone (herencia, no enlazada desde nav principal). |
| `contact.astro` | Página Contact standalone (herencia, no enlazada desde nav principal). |
| `products.astro` | Página Products standalone. |
| `services.astro` | Página de listado de servicios (Technology Services). |
| `services/[slug].astro` | **Ruta dinámica de detalle** para cada servicio (development, consulting, training, etc.). Genera 7 páginas. |
| `solutions.astro` | Página de listado de soluciones (Technology Solutions). |
| `solutions/[slug].astro` | **Ruta dinámica de detalle** para cada solución (mobile-apps, web-platforms, etc.). Genera 5 páginas. |

### `src/pages/es/` — Rutas en español

| Archivo | Descripción |
|---|---|
| `index.astro` | **Home SPA** en español; mismo layout que EN con todas las secciones. |
| `about.astro` | Página Nosotros standalone (herencia). |
| `contact.astro` | Página Contacto standalone (herencia). |
| `products.astro` | Página Productos standalone. |
| `servicios.astro` | Página de listado de servicios (Servicios Tecnológicos). |
| `servicios/[slug].astro` | **Ruta dinámica de detalle** para cada servicio (desarrollo, comercializacion, etc.). Genera 7 páginas. |
| `soluciones.astro` | Página de listado de soluciones (Soluciones Tecnológicas). |
| `soluciones/[slug].astro` | **Ruta dinámica de detalle** para cada solución (aplicaciones-moviles, plataformas-web, etc.). Genera 5 páginas. |

### `src/components/cards/`

| Archivo | Descripción |
|---|---|
| `ProductCard.astro` | Tarjeta de producto individual para AlPy Script; icono, bullets, tags, estado y CTA. |

### `src/components/navigation/`

| Archivo | Descripción |
|---|---|
| `Navbar.astro` | Navbar sticky con **anclas `#`** en el menú principal, selector de idioma, link a GitHub, menú hamburguesa mobile con toggle JS. Funciones: `isActive()`, `getAlternateLangPath()`. Scripts: toggle menú, cierre al hacer click fuera, sombra al scrollear, **IntersectionObserver** para resaltar sección activa. |
| `Footer.astro` | Footer con branding, navigation links, GitHub/email, copyright y tagline. Grid responsive (1 col → 2 cols en 640px → distinto ratio en 1024px). |

### `src/components/sections/`

| Archivo | Descripción |
|---|---|
| `HeroSection.astro` | Hero con título animado, tagline, focus areas, CTAs y panel decorativo de código. Grid 1 col → 2 cols en 1024px. |
| `ServicesSection.astro` | Sección de servicios con **TiltCards** enlazando a páginas de detalle. Data-driven desde `details.ts`. Contenido: Desarrollo, Comercialización, Implementación, Mantenimiento, Licenciamiento, Consultoría, Capacitación. |
| `SolutionsSection.astro` | Sección de soluciones con **TiltCards** enlazando a páginas de detalle. Data-driven desde `details.ts`. Contenido: Apps Móviles, Plataformas Web, IA, Cloud, E-commerce. |
| `AboutSection.astro` | Sección "Nosotros" simplificada: frase de misión, estadísticas destacadas (1+, ∞, 🌎) y highlight de Investigación e Innovación. Sin grid redundante de áreas. |
| `ProductsSection.astro` | Sección de productos (AlPy Script) con grid y "More coming soon". |
| `ContactSection.astro` | Sección de contacto; email, GitHub y placeholder de redes en tarjeta glass. |
| `DetailView.astro` | **Componente reutilizable** para páginas de detalle "Ver más": imagen hero placeholder con prompt de IA en comentario HTML, título, 3-4 bullets comerciales, CTAs. Usa Layout, Navbar, Footer. |

### `src/components/ui/`

| Archivo | Descripción |
|---|---|
| `CTAButton.astro` | Botón CTA reutilizable (`btn-primary` / `btn-secondary`). |
| `SectionHeading.astro` | Encabezado de sección reutilizable; soporta `as="h1" | "h2" | "h3"`, align `center | left`. |
| `TiltCard.astro` | **Card con efecto 3D Tilt + Holographic Shine**. Se activa con `data-tilt` y el script global en Layout. Incluye `<span class="tilt-card__shine">` para el destello radial que sigue al cursor. |

### `src/data/`

| Archivo | Descripción |
|---|---|
| `site.ts` | Configuración global: nombre, URL, GitHub, email, **nav con anclas** (`/#servicios`), taglines, áreas de enfoque. Bilingüe. |
| `products.ts` | Catálogo de productos (AlPy Script). Interfaz `Product`, arrays `productsEn`/`productsEs`. |
| `details.ts` | **Fuente única de datos** para servicios y soluciones. Interfaz `DetailItem` (slug, icon, cardTitle, cardDescription, title, eyebrow, heroPrompt, bullets). Exporta `servicesEs`, `servicesEn`, `solutionsEs`, `solutionsEn` y helpers `getItems()`, `detailBase()`, `overviewLabel()`. |

### `src/styles/`

| Archivo | Descripción |
|---|---|
| `global.css` | Sistema de diseño completo: variables CSS (paleta HSL ice-blue), reset, tipografía, container, glassmorphism, **clases tilt-card** (`tilt-card`, `tilt-card__shine`, `tilt-card__content`, `.is-tilting`), botones, badges, orbs, grids responsive, animaciones (pulse-glow, fade-up, slide-down), scrollbar, selection, focus-visible, `scroll-behavior: smooth`. |

---

## 📁 `dist/` — Build output (generado, no se edita)

36 páginas HTML generadas más CSS/ assets. No se usa en desarrollo.

---

## Archivos no utilizados / auto-generados

| Archivo | Razón |
|---|---|
| `README.md` | README por defecto de Astro; nunca personalizado. |
| `.astro/content.d.ts` | Generado por Astro; no hay content collections. |
| `.astro/settings.json` | Estado interno de Astro. |
| `.astro/types.d.ts` | Referencia de tipos generada. |
| `pnpm-lock.yaml` | Lockfile generado automáticamente. |
| `dist/` (todo) | Build output. |
| `.vscode/extensions.json` | Configuración del editor. |
| `.vscode/launch.json` | Configuración del editor. |
| `pnpm-workspace.yaml` | Configuración de herramienta de build. |
| `src/pages/about.astro` | Página standalone de herencia (nav principal usa anclas). |
| `src/pages/contact.astro` | Página standalone de herencia. |
| `src/pages/es/about.astro` | Página standalone de herencia. |
| `src/pages/es/contact.astro` | Página standalone de herencia. |

---

## Resumen de uso

- **Nav principal**: Anclas `#inicio`, `#servicios`, `#soluciones`, `#nosotros`, `#contacto` con `scroll-behavior: smooth`.
- **Services/Solutions cards**: Usan `TiltCard.astro` con efecto 3D + shine, enlazan a páginas de detalle `/[slug]`.
- **Páginas de detalle**: Usan `DetailView.astro` que reutiliza `Layout`, `Navbar`, `Footer`, `SectionHeading`, `CTAButton`.
- **Auto-lang**: Script inline en `Layout.astro` redirige de `/` a `/es/` si `navigator.language` empieza con `es`, con `sessionStorage` para evitar bucle.
- **Todo el código en `src/` se usa activamente** (excepto páginas standalone de herencia).
