# Portal Web — Diseño Gráfico y Animación

Portal institucional de la carrera construido con **React (Next.js 16, App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui + Framer Motion + Lucide React**.

---

## 1. Requisitos previos

- **Node.js 18 o superior** (recomendado 20 LTS) → https://nodejs.org
- Un editor de código: **VS Code** (recomendado) → https://code.visualstudio.com

> El proyecto también funciona con [Bun](https://bun.sh) si lo prefieres.

## 2. Instalación y ejecución

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
# 1) Instalar dependencias
npm install

# 2) Levantar el servidor de desarrollo
npm run dev
```

Luego abre en tu navegador: **http://localhost:3000**

Otros comandos útiles:

```bash
npm run lint     # Verifica la calidad del código
npm run build    # Compila para producción
npm run start    # Sirve la versión de producción
```

## 3. Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx        → Metadatos, fuentes globales (Space Grotesk + Inter)
│   ├── page.tsx          → Página principal (ensambla todas las secciones)
│   └── globals.css       → Sistema de diseño: paleta, gradientes, animaciones
├── components/
│   ├── layout/           → Navbar, Hero, Footer
│   ├── sections/         → Las 17 secciones del portal (una carpeta por archivo)
│   ├── shared/           → Componentes reutilizables (SectionTitle, FilterChips, etc.)
│   └── ui/               → Componentes base shadcn/ui
├── lib/
│   ├── mockData.ts       → ★ TODOS LOS DATOS DEL SITIO (editable)
│   └── utils.ts          → Utilidades
└── types/
    └── index.ts          → Interfaces TypeScript (contratos de datos)
```

## 4. ¿Cómo editar el contenido?

**Todo el texto, números, fechas, docentes, noticias, becas, etc. viven en un solo archivo:**

```
src/lib/mockData.ts
```

Abre ese archivo y modifica lo que necesites. Cada colección está comentada y simula la respuesta de un endpoint (`GET /api/...`). Los cambios se reflejan automáticamente al guardar.

### Ejemplos rápidos

| Quiero cambiar... | Busca en `mockData.ts` |
|---|---|
| Duración, créditos, modalidad | `quickFacts` |
| Asignaturas y semestres | `studyPlan` |
| Docentes y sus perfiles | `teachers` |
| Noticias | `news` |
| Convocatorias y fechas límite | `calls` |
| Fechas del calendario | `calendarEvents` |
| Teléfono, correo, dirección | `contactInfo` |

### Cambiar los colores de marca

Los colores principales están en `src/app/globals.css` dentro del bloque `@theme inline`:

```css
--color-ink-950: #060614;        /* Fondo oscuro principal */
--color-brand-violet: #8b5cf6;   /* Acento violeta */
--color-brand-magenta: #d946ef;  /* Acento magenta */
--color-brand-orange: #f97316;   /* Acento naranja */
```

Las clases de gradiente usadas en las tarjetas (ej. `from-violet-600 to-fuchsia-600`) provienen de la paleta estándar de Tailwind, por lo que también puedes ajustarlas componente por componente.

## 5. Conectar una API o CMS (más adelante)

El sitio está preparado para migrar de datos mock a una API real:

1. Los tipos de datos ya están definidos en `src/types/index.ts` — respétalos en tu backend.
2. En cada sección, reemplaza el import de `mockData` por un `fetch` dentro de un `useEffect` (o TanStack Query), manteniendo los mismos nombres de interfaz.
3. Ejemplo:

```tsx
// Antes (mock):
import { news } from "@/lib/mockData";

// Después (API real):
const [news, setNews] = useState<NewsItem[]>([]);
useEffect(() => {
  fetch("/api/noticias")
    .then((r) => r.json())
    .then(setNews);
}, []);
```

## 6. Solución de problemas

| Problema | Solución |
|---|---|
| `npm install` falla | Verifica tener Node.js 18+ (`node -v`) y borra `node_modules` antes de reintentar |
| Puerto 3000 ocupado | Ejecuta `npm run dev -- -p 3001` |
| Errores de tipos en el editor | Instala la extensión de TypeScript/ESLint de VS Code y reinicia |
| Las fuentes no cargan | Requiere conexión a internet la primera vez (Google Fonts) |
