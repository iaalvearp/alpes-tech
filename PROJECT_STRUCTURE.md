# 📋 Estructura y Documentación del Proyecto - Alpes Tech Web

**Última actualización:** Junio 2026  
**Versión del Proyecto:** 0.0.1  
**Stack Principal:** Astro 6.4.7 + Tailwind CSS 4.3.1 + TypeScript (Strict)

---

## 1. 📁 Estructura de Carpetas

```
alpestech-web/
├── .astro/                          # Caché y tipos generados por Astro
├── .git/                            # Repositorio Git
├── .vscode/                         # Configuración de VSCode
├── dist/                            # Salida compilada (producción)
├── node_modules/                    # Dependencias instaladas (pnpm)
├── public/                          # Archivos estáticos públicos
│   ├── favicon.ico                  # Favicon en formato ICO
│   └── favicon.svg                  # Favicon en formato SVG
├── src/                             # Código fuente principal
│   ├── assets/                      # Recursos (imágenes, SVGs)
│   ├── components/                  # Componentes reutilizables de Astro
│   │   ├── cards/
│   │   │   └── ProductCard.astro    # Componente para mostrar productos
│   │   ├── navigation/
│   │   │   ├── Footer.astro         # Pie de página global
│   │   │   └── Navbar.astro         # Barra de navegación global
│   │   ├── sections/
│   │   │   ├── AboutSection.astro   # Sección "Acerca de"
│   │   │   ├── ContactSection.astro # Sección de contacto
│   │   │   ├── HeroSection.astro    # Hero (sección principal)
│   │   │   └── ProductsSection.astro# Sección de productos
│   │   └── ui/
│   │       ├── CTAButton.astro      # Botón de acción (reutilizable)
│   │       └── SectionHeading.astro # Encabezado de sección (reutilizable)
│   ├── data/                        # Datos y configuración centralizada
│   │   ├── products.ts              # Catálogo de productos (multilingüe)
│   │   └── site.ts                  # Configuración global del sitio
│   ├── layouts/                     # Layouts base (plantillas)
│   │   └── Layout.astro             # Layout principal con SEO y meta tags
│   ├── pages/                       # Rutas y páginas (Astro file-based routing)
│   │   ├── index.astro              # Página principal EN: /
│   │   ├── about.astro              # Página "Acerca de" EN: /about
│   │   ├── products.astro           # Página de productos EN: /products
│   │   ├── contact.astro            # Página de contacto EN: /contact
│   │   └── es/                      # Rutas en español
│   │       ├── index.astro          # Página principal ES: /es/
│   │       ├── about.astro          # Página "Acerca de" ES: /es/about
│   │       ├── products.astro       # Página de productos ES: /es/products
│   │       └── contact.astro        # Página de contacto ES: /es/contact
│   └── styles/                      # Estilos globales
│       └── global.css               # Estilos CSS globales y variables
├── astro.config.mjs                 # Configuración de Astro
├── tsconfig.json                    # Configuración de TypeScript
├── pnpm-workspace.yaml              # Configuración del workspace de pnpm
├── pnpm-lock.yaml                   # Lock file con versiones exactas
├── package.json                     # Definición del proyecto y dependencias
├── .gitignore                       # Archivos ignorados por Git
└── README.md                        # README original (plantilla Astro)
```

---

## 2. 📄 Archivos de Configuración (Raíz)

### **package.json**
```json
{
  "name": "alpestech-web",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "astro": "^6.4.7",
    "tailwindcss": "^4.3.1"
  }
}
```
**Propósito:** Define metadatos del proyecto, scripts de desarrollo/construcción y dependencias principales.

### **tsconfig.json**
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```
**Propósito:** Configuración de TypeScript en modo estricto, extiende configuración recomendada de Astro.

### **astro.config.mjs**
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```
**Propósito:** Configuración principal de Astro, integración de Tailwind CSS como plugin de Vite.

### **pnpm-workspace.yaml**
```yaml
allowBuilds:
  esbuild: true
  sharp: true
minimumReleaseAgeExclude:
  - astro@6.4.7
```
**Propósito:** Configuración del workspace de pnpm, permitiendo herramientas de construcción.

---

## 3. 📦 Dependencias del Proyecto

| Paquete | Versión | Propósito |
|---------|---------|----------|
| **astro** | ^6.4.7 | Framework principal - Generador de sitios estáticos (SSG) |
| **tailwindcss** | ^4.3.1 | Framework CSS utility-first |
| **@tailwindcss/vite** | ^4.3.1 | Plugin de Tailwind para Vite (integración) |

---

## 4. 📝 Archivos de Datos - `src/data/`

### **site.ts** - Configuración Global del Sitio
**Líneas:** 52  
**Propósito:** Fuente única de verdad para configuración global, SEO, metadatos y navegación.

**Contenido actual:**
- **Nombre:** Alpes Tech
- **URL:** https://alpestech.uk
- **Email:** info@alpestech.uk
- **GitHub:** https://github.com/iaalvearp
- **Idiomas:** Inglés (en) y Español (es)
- **Tagline EN:** "Building software products for developers."
- **Tagline ES:** "Desarrollando productos de software para programadores."
- **Áreas de expertise (5):** Developer Tools, AI, Cloud, Automation, Open Technologies
- **Navegación multilingüe:** 4 rutas por idioma

**Estructura de datos:**
```typescript
export const site = {
  name: string;
  url: string;
  github: string;
  contact: { email: string };
  en: { tagline, description, nav[], areas[] };
  es: { tagline, description, nav[], areas[] };
}
```

### **products.ts** - Catálogo de Productos
**Líneas:** 51  
**Propósito:** Gestión centralizada del catálogo de productos con soporte multilingüe.

**Productos actuales:**
1. **AlPy Script** (ID: `alpy-script`)
   - Nombre: AlPy Script / IDE de Python para Android
   - Estado: `active`
   - Descripción: IDE completo de Python para Android
   - Tags: Python, Android, IDE, Mobile Dev / Desarrollo Móvil
   - URL: https://alpy.alpestech.uk
   - Icono: 🐍 (emoji)
   - Bullets: "Write. Run. Learn. Anywhere."

**Estructura de datos:**
```typescript
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  status: "active" | "coming-soon" | "beta";
  icon: string;
  bullets?: string[];
}
```

---

## 5. 🎨 Componentes - `src/components/`

### **Navigation Components**

#### **Navbar.astro** (Barra de navegación)
- Muestra logo y menú de navegación
- Detecta idioma actual (`lang` prop)
- Renderiza enlaces de navegación dinámicamente desde `site.ts`
- Includes: Logo y links con IDs para tracking

#### **Footer.astro** (Pie de página)
- Información de contacto y copyright
- Links a redes sociales (GitHub)
- Información de la empresa
- Secciones multilingües

### **Section Components** (Componentes de sección)

#### **HeroSection.astro**
- Sección principal/hero de la página
- Tagline, descripción y CTA
- Muestra áreas de expertise
- Responsive y con efectos visuales

#### **ProductsSection.astro**
- Lista de productos en grid
- Renderiza dinámicamente desde `productsEn` o `productsEs`
- Pasa idioma a ProductCard
- Título y descripción de sección

#### **AboutSection.astro**
- Información de la empresa
- Descripción de misión/visión
- Áreas de especialidad
- Multilingüe

#### **ContactSection.astro**
- Formulario de contacto (actualmente HTML básico)
- Información de contacto
- Botones CTA

### **Card Components**

#### **ProductCard.astro** (Tarjeta de producto)
**Líneas:** 222  
**Propósito:** Componente reutilizable para mostrar información de un producto.

**Features:**
- Icono emoji del producto
- Nombre, tagline y descripción
- Lista de bullets (features) opcionales
- Tags de tecnologías
- Badge de estado (Coming Soon / Beta)
- Button CTA o mensaje "Available Soon"
- Estilos scoped incluidos
- Accessibility: aria-labels, semantic HTML

**Props:**
```typescript
interface Props {
  product: Product;
  lang?: "en" | "es";
}
```

**Estados visuales:**
- `product.status === "coming-soon"`: Opacidad 65%, sin hover effect
- `product.status === "beta"`: Badge azul
- Transiciones suaves (250ms) en hover

### **UI Components**

#### **CTAButton.astro**
- Botón reutilizable para calls-to-action
- Soporte para diferentes estilos/tamaños
- Accessible

#### **SectionHeading.astro**
- Encabezado de sección reutilizable
- Título y descripción opcional
- Estilos consistentes

---

## 6. 📄 Layouts - `src/layouts/`

### **Layout.astro**
**Líneas:** 63  
**Propósito:** Layout base (plantilla) que todas las páginas heredan. Incluye SEO y meta tags.

**Features:**
- HTML boilerplate completo
- SEO: Meta tags (description, canonical, Open Graph, Twitter Card)
- Theme: Color scheme oscuro, favicon
- Soporta multilingüe con prop `lang`
- Props para title, description, canonical, language
- Slot para contenido de página

**Props:**
```typescript
interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  lang?: "en" | "es";
}
```

**Meta Tags generados:**
- `<title>` - Dinámico con tagline del sitio
- `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name`
- `twitter:card`, `twitter:title`, `twitter:description`
- `theme-color`, `color-scheme`
- Favicon (SVG + ICO)

---

## 7. 📖 Páginas - `src/pages/`

### **Estructura de Rutas**

**Inglés (EN):**
- `/` → `src/pages/index.astro`
- `/about` → `src/pages/about.astro`
- `/products` → `src/pages/products.astro`
- `/contact` → `src/pages/contact.astro`

**Español (ES):**
- `/es/` → `src/pages/es/index.astro`
- `/es/about` → `src/pages/es/about.astro`
- `/es/products` → `src/pages/es/products.astro`
- `/es/contact` → `src/pages/es/contact.astro`

### **Contenido de Páginas**

Cada página (EN y ES) incluye:
1. **Navbar** - Navegación global
2. **Hero/Main Section** - Contenido principal específico de la página
3. **Footer** - Pie de página
4. Usa **Layout.astro** como base
5. Define `title`, `description` y `lang` props

**Ejemplo estructura (index.astro EN):**
```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/navigation/Navbar.astro";
import HeroSection from "../components/sections/HeroSection.astro";
import Footer from "../components/navigation/Footer.astro";
---

<Layout title="Home" lang="en">
  <Navbar lang="en" />
  <HeroSection lang="en" />
  <Footer lang="en" />
</Layout>
```

---

## 8. 🎨 Estilos - `src/styles/`

### **global.css**
**Propósito:** Estilos CSS globales y definición de variables de diseño.

**Contenido típico:**
- Variables CSS (colores, espacios, tipografía)
- Reset de estilos
- Clases globales (`.card`, `.btn`, `.tag`, etc.)
- Responsive breakpoints
- Sistema de colores consistent

---

## 9. 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Archivos fuente totales** | 21 |
| **Componentes Astro** | 9 |
| **Archivos de datos** | 2 |
| **Layouts** | 1 |
| **Páginas** | 8 |
| **Idiomas soportados** | 2 (EN, ES) |
| **Productos en catálogo** | 1 |
| **Dependencias directas** | 3 |
| **Node.js requerido** | >=22.12.0 |
| **Líneas de código** | ~1,200+ |

---

## 10. 🚀 Scripts y Comandos Disponibles

```bash
# Instalar dependencias
pnpm install

# Desarrollo local (http://localhost:4321)
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar build local
pnpm preview

# CLI de Astro
pnpm astro ...
pnpm astro -- --help
```

---

## 11. 🔄 Flujo Multilingüe

El proyecto implementa multilingüismo sin framework externo:

1. **Rutas duplicadas:** `/` y `/es/` como punto de entrada
2. **Props de lenguaje:** Cada componente recibe `lang` prop
3. **Datos centralizados:** `site.ts` y `products.ts` contienen contenido en ambos idiomas
4. **Sin URL rewriting:** Estructura clara `/` vs `/es/`

**Ventajas:**
- Simple y sin dependencias
- Fácil de mantener
- SEO-friendly

**Desventajas:**
- Código duplicado en páginas
- Sin selector de idioma global automático

---

## 12. 🎯 Descripción del Propósito Actual

### **¿Qué es actualmente?**
Un sitio web corporativo estático (SSG) para **Alpes Tech**, una empresa de desarrollo de software.

### **¿Para qué sirve lo que tiene?**
- **Presentar la empresa:** Quiénes son, qué hacen, dónde contactarlos
- **Mostrar productos:** AlPy Script (IDE de Python para Android)
- **Marketing multilingüe:** Alcanzar audiencias en EN y ES
- **SEO:** Meta tags, structured data, canonical URLs
- **Responsividad:** Funciona en desktop, tablet y mobile

### **Casos de uso reales:**
1. Usuarios visitan alpestech.uk para aprender sobre la empresa
2. Desarrolladores descubren AlPy Script
3. Interesados contactan vía formulario/email
4. Posicionamiento SEO en Google

---

## 13. 🔍 Análisis de la Estructura Actual

### **Fortalezas**
✅ **Bien organizada:** Separación clara de concerns (components, data, pages)  
✅ **Multilingüe:** Soporte EN/ES sin frameworks pesados  
✅ **Escalable:** Fácil agregar nuevos componentes y productos  
✅ **Moderna:** Stack actual (Astro 6, Tailwind 4)  
✅ **SEO:** Layout con meta tags y structured approach  
✅ **Accesible:** Componentes con aria-labels y semantic HTML  
✅ **Type-safe:** TypeScript en modo strict  
✅ **Centralizada:** Datos en `data/` permiten cambios sin editar componentes  

### **Áreas de mejora identificadas**

#### **1. Duplicación de Código en Páginas**
**Problema:** Cada página EN tiene su equivalente ES, con mismo contenido (solo props `lang` diferentes)
```
✗ 8 archivos de página (4 EN + 4 ES)
✓ Podrían ser 4 con routing dinámico
```
**Mejora:** Usar Astro routing dinámico con `getStaticPaths()` o i18n middleware

#### **2. Sin Selector de Idioma**
**Problema:** No hay forma visual de cambiar entre EN/ES desde la página
**Mejora:** Agregar language switcher en Navbar con links a versión alternativa

#### **3. Datos de Contacto Hardcoded**
**Problema:** Email en `site.ts`, pero no tiene propósito central
**Mejora:** Crear `src/data/contact.ts` separado para información de contacto

#### **4. Falta de Sistema de Ruteo i18n**
**Problema:** Sin middleware de idioma, redirecciones o detección automática
**Mejora:** Considerar `@astrojs/i18n` (oficial) para futuro

#### **5. Componentes sin Documentación Interna**
**Problema:** Props y comportamiento no documentados en componentes
**Mejora:** Agregar comentarios JSDoc en componentes complejos

#### **6. Sin Validación de Formulario**
**Problema:** ContactSection.astro probablemente tiene formulario HTML simple sin validación
**Mejora:** Agregar validación client-side o integrar librearía (e.g., Zod)

#### **7. Sin Asset Management**
**Problema:** Carpeta `assets/` existe pero sin información de contenido
**Mejora:** Optimizar imágenes, usar componentes Image de Astro

#### **8. Sin Testing**
**Problema:** No hay tests unitarios ni e2e
**Mejora:** Agregar Vitest (unit) y Playwright (e2e)

#### **9. Sin Tipos Globales**
**Problema:** `Product` interface en `products.ts` pero sin tipos globales
**Mejora:** Crear `src/types/` con tipos compartidos

#### **10. CSS Global sin Tokens**
**Problema:** `global.css` puede tener estilos hardcoded
**Mejora:** Usar CSS custom properties para design tokens

---

## 14. 💡 Mejoras Recomendadas (Prioritizadas)

### **Tier 1 - Impacto Alto, Esfuerzo Bajo**

1. **Agregar Language Switcher en Navbar**
   - Botón/selector EN/ES en la navegación
   - Links a `/` o `/es/` según idioma actual
   - Esfuerzo: 1-2 horas

2. **Documentar Componentes con JSDoc**
   - Comentarios de props y comportamiento
   - Ejemplos de uso
   - Esfuerzo: 2-3 horas

3. **Crear Estructura de Tipos Global**
   - `src/types/index.ts` centralizado
   - Re-exportar desde aquí
   - Esfuerzo: 1 hora

4. **Mejorar Carpeta assets/**
   - Documentar qué hay ahí actualmente
   - Organizar por tipo (images/, icons/, etc)
   - Esfuerzo: 1 hora

### **Tier 2 - Impacto Medio, Esfuerzo Medio**

5. **Eliminar Duplicación de Páginas con Routing Dinámico**
   - Usar `getStaticPaths()` para EN/ES
   - Reducir de 8 a 4 archivos de página
   - Esfuerzo: 4-6 horas

6. **Agregar Validación de Formulario**
   - Validación client-side (Zod)
   - UX feedback
   - Esfuerzo: 3-4 horas

7. **Setup Testing Infrastructure**
   - Vitest + Playwright
   - Tests básicos de componentes y página
   - Esfuerzo: 4-5 horas

8. **Mejorar Manejo de Assets**
   - Usar componente Image de Astro
   - Optimización automática
   - Esfuerzo: 2-3 horas

### **Tier 3 - Impacto Bajo, Esfuerzo Alto**

9. **Implementar i18n Oficial (Astro i18n)**
   - Mejor manejo de locales
   - Integración profunda
   - Esfuerzo: 8-10 horas

10. **Agregar CMS Headless (Opcional)**
    - Strapi, Contentful o similar
    - Gestión de contenido sin editar código
    - Esfuerzo: 12-16 horas

---

## 15. 📋 Checklist para Nuevos Desarrolladores

Cuando alguien nuevo se une al proyecto:

- [ ] Clone el repositorio
- [ ] Ejecute `pnpm install`
- [ ] Ejecute `pnpm dev` y visite http://localhost:4321
- [ ] Lea este documento
- [ ] Explore `src/data/` para entender estructura de datos
- [ ] Lea un componente de `src/components/` completo
- [ ] Lea una página completa en `src/pages/`
- [ ] Modifique algo pequeño en `site.ts` y vea los cambios
- [ ] Agregue un producto nuevo en `products.ts`

---

## 16. 📚 Recursos y Referencias

**Documentación:**
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

**Project URLs:**
- **Website:** https://alpestech.uk
- **GitHub:** https://github.com/iaalvearp
- **Product:** https://alpy.alpestech.uk

---

## 17. 🔧 Próximos Pasos Sugeridos

1. **Inmediato:** Agregar language switcher en Navbar
2. **Próximos días:** Documentar componentes y crear tipos globales
3. **Primera semana:** Considerar eliminación de duplicación de páginas
4. **Segundo hito:** Agregar tests e18 básicos
5. **Roadmap:** Integración con CMS si se planean más contenidos

---

**Generado automáticamente** | Última actualización: Junio 2026  
Este documento debe ser actualizado cuando cambios significativos se realicen en la estructura.
