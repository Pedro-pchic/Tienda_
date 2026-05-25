# Tienda de la Esquina Don Perucho

Portal web documental para presentar el analisis y diseno de una solucion de gestion minorista. Incluye hero ejecutivo, roadmap, alcance, trazabilidad, diagramas, requerimientos filtrables, casos de uso, arquitectura, riesgos, mockups y conclusion.

## Tecnologias

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Ejecucion local

```bash
npm install
npm run dev
```

## Validacion

```bash
npm run lint
npm run build
```

## Diagramas UML

Los SVG o PNG exportados desde draw.io se organizan en `public/diagrams/`. La categoria Casos de Uso presenta los ocho archivos de `public/diagrams/CU/` en cards filtrables y un lightbox fullscreen con navegacion por teclado. Los nuevos artefactos se registran en `src/data/diagrams.ts`.

## GitHub Pages

```bash
npm run deploy
```

El comando construye el sitio y publica `dist` usando `gh-pages`. Vite esta configurado con la ruta base `/Tienda_DPerucho/` para servir recursos correctamente desde el repositorio homonimo.
