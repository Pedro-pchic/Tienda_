export const diagramCategories = ['Casos de Uso', 'Actividades', 'Arquitectura', 'ER', 'Mockups'] as const

export type DiagramCategory = (typeof diagramCategories)[number]

export interface Diagram {
  id: string
  title: string
  category: DiagramCategory
  image: string
  description: string
}

export const diagrams: Diagram[] = [
  {
    id: 'CU-01',
    title: 'Iniciar sesión',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-01_iniciar_sesion.png',
    description: 'Acceso del usuario autorizado al sistema propuesto.',
  },
  {
    id: 'CU-02',
    title: 'Registrar venta',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-02_registrar_venta.png',
    description: 'Flujo de captura y confirmación de una transacción.',
  },
  {
    id: 'CU-03',
    title: 'Buscar producto',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-03_buscar_producto.png',
    description: 'Consulta rápida de productos disponibles.',
  },
  {
    id: 'CU-04',
    title: 'Consultar inventario',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-04_consultar_inventario.png',
    description: 'Visualización de existencias y disponibilidad.',
  },
  {
    id: 'CU-05',
    title: 'Registrar producto',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-05_registrar_producto.png',
    description: 'Alta de artículos dentro del catálogo.',
  },
  {
    id: 'CU-06',
    title: 'Editar producto',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-06_editar_producto.png',
    description: 'Actualización controlada de los datos del producto.',
  },
  {
    id: 'CU-07',
    title: 'Eliminar producto',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-07_eliminar_producto.png',
    description: 'Retiro de un artículo que ya no está disponible.',
  },
  {
    id: 'CU-08',
    title: 'Actualizar precios',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-08_actualizar_precios.png',
    description: 'Cambio de precio vigente para mantener ventas precisas.',
  },
]

export function diagramImageUrl(image: string) {
  return `${import.meta.env.BASE_URL}${image}`
}
