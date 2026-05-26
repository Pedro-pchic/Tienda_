# Tienda de la Esquina Don Perucho

Portal web documental para presentar el analisis y diseno de una solucion de gestion minorista. Incluye hero ejecutivo, roadmap, alcance, trazabilidad, diagramas, requerimientos filtrables, casos de uso, arquitectura, riesgos, mockups y conclusion.

## Documentacion de analisis

- [Analisis de reglas de negocio y requerimientos](docs/analisis-reglas-requerimientos.md): estructura empresarial del documento, reglas RN, requerimientos RF/RNF, modulos y matriz integradora.
- [Casos de uso y escenarios expandidos](docs/casos-de-uso.md): catalogo de 18 casos de uso, cinco escenarios tipo Kendall & Kendall y matriz de trazabilidad.

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

Los SVG o PNG exportados desde draw.io se organizan en `public/diagrams/`. La documentacion de analisis referencia los 18 diagramas disponibles en `public/diagrams/CU/`. La galeria del portal presenta los artefactos registrados en `src/data/diagrams.ts` mediante cards filtrables y un lightbox fullscreen con navegacion por teclado.

## GitHub Pages

```bash
npm run deploy
```

El comando construye el sitio y publica `dist` usando `gh-pages`. Vite esta configurado con la ruta base `/Tienda_DPerucho/` para servir recursos correctamente desde el repositorio homonimo.
