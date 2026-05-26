                                     TAREA PARA CODEX — Agregar escenarios textuales de casos de uso

Contexto:
Tengo un portal React + Vite + TailwindCSS llamado Tienda_DPerucho. Es un portal documental para presentar el análisis y diseño del sistema “Tienda Don Perucho”.

Necesito agregar una sección nueva llamada:

“Escenarios de casos de uso”

Objetivo:
Mostrar escenarios textuales profesionales para los casos de uso más importantes del sistema.

No usar backend.
No crear CRUD real.
No crear funcionalidades de sistema.
Solo agregar documentación visual e interactiva.

Cantidad:
Agregar 15 escenarios de casos de uso.

Escenarios recomendados:
1. CU-01 Iniciar sesión
2. CU-02 Registrar venta
3. CU-03 Buscar producto
4. CU-04 Consultar inventario
5. CU-05 Registrar producto
6. CU-06 Editar producto
7. CU-08 Actualizar precios
8. CU-09 Registrar proveedor
9. CU-10 Registrar compra
10. CU-11 Generar reporte diario
11. CU-12 Generar reporte mensual
12. CU-13 Realizar cierre diario
13. CU-14 Gestionar usuarios
14. CU-15 Registrar merma
15. CU-18 Consultar dashboard

Crear archivo:
src/data/useCaseScenarios.js

Cada escenario debe tener esta estructura:

{
id: "CU-02",
title: "Registrar venta",
priority: "Crítica",
mainActor: "Vendedor",
secondaryActors: ["Cliente"],
objective: "Registrar una venta de productos y actualizar automáticamente el inventario.",
preconditions: [
"El vendedor debe haber iniciado sesión.",
"Los productos deben estar registrados.",
"Debe existir stock disponible."
],
mainFlow: [
"El vendedor busca el producto solicitado.",
"El sistema muestra las coincidencias disponibles.",
"El vendedor selecciona el producto.",
"El sistema valida el stock.",
"El vendedor ingresa la cantidad.",
"El sistema calcula el subtotal.",
"El vendedor confirma el método de pago.",
"El sistema registra la venta.",
"El sistema actualiza el inventario.",
"El sistema genera el comprobante."
],
alternateFlows: [
{
code: "A1",
title: "Stock insuficiente",
steps: [
"El sistema detecta que no hay stock suficiente.",
"El sistema muestra una alerta al vendedor.",
"El sistema no permite agregar el producto a la venta."
]
}
],
postconditions: [
"La venta queda registrada.",
"El inventario queda actualizado.",
"El movimiento queda disponible para reportes."
],
businessRules: ["RN-01", "RN-03", "RN-04"],
relatedRequirements: ["RF-01", "RF-03"],
relatedDiagram: "/diagrams/CU/CU-02_registrar_venta.png",
relatedMockup: "Módulo de ventas"
}

Crear componente:
src/components/UseCaseScenarioCard.jsx

Debe mostrar:
- Código del caso de uso
- Nombre
- Prioridad con badge de color
- Actor principal
- Objetivo
- Botón “Ver escenario”

Crear componente:
src/components/UseCaseScenarioModal.jsx

El modal debe mostrar:
- título
- objetivo
- actor principal
- actores secundarios
- precondiciones
- flujo principal numerado
- flujos alternativos
- postcondiciones
- reglas de negocio relacionadas
- requerimientos relacionados
- diagrama relacionado
- mockup relacionado

Diseño:
- estilo premium
- tipo documentación Jira / Confluence
- fondo claro o glassmorphism según el estilo actual
- badges para prioridad, reglas y requerimientos
- scroll interno si el contenido es largo
- cerrar con botón X
- cerrar con ESC
- responsive

Agregar filtros:
- Todos
- Crítica
- Alta
- Media

Agregar búsqueda por:
- código
- título
- actor

Agregar contador:
“15 escenarios documentados”

Integración:
Agregar esta sección después de “Casos de uso” o después de “Trazabilidad”.

Agregar item en sidebar:
“Escenarios”

No romper:
- diagramas existentes
- mockups existentes
- matriz de trazabilidad
- navegación actual
- GitHub Pages

Validar:
npm run dev
npm run build

Resultado esperado:
Una sección profesional de escenarios textuales que complemente los diagramas de casos de uso y demuestre análisis detallado del sistema.