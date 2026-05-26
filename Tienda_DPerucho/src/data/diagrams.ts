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
  {
    id: 'CU-09',
    title: 'Registrar proveedor',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-09_registrar_proveedor.png',
    description: 'Alta de proveedores vinculados al abastecimiento de la tienda.',
  },
  {
    id: 'CU-10',
    title: 'Registrar compra',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-10_registrar_compra.png',
    description: 'Registro de adquisiciones y actualización del inventario recibido.',
  },
  {
    id: 'CU-11',
    title: 'Generar reporte diario',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-11_generar_reporte_diario.png',
    description: 'Consolidación diaria de ventas y movimientos operativos.',
  },
  {
    id: 'CU-12',
    title: 'Generar reporte mensual',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-12_generar_reporte_mensual.png',
    description: 'Resumen mensual para analizar desempeño y decisiones del negocio.',
  },
  {
    id: 'CU-13',
    title: 'Realizar cierre diario',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-13_realizar_cierre_diario.png',
    description: 'Formalización de los totales y resultados de una jornada.',
  },
  {
    id: 'CU-14',
    title: 'Gestionar usuarios',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-14_gestionar_usuarios.png',
    description: 'Administración de usuarios y permisos requeridos por la propuesta.',
  },
  {
    id: 'CU-15',
    title: 'Registrar merma',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-15_registrar_merma.png',
    description: 'Control de pérdidas de producto con motivo y ajuste de inventario.',
  },
  {
    id: 'CU-16',
    title: 'Consultar historial de ventas',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-16_consultar_historial_de_ventas.png',
    description: 'Consulta trazable de transacciones registradas anteriormente.',
  },
  {
    id: 'CU-17',
    title: 'Exportar reportes',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-17_exportar_reportes.png',
    description: 'Generación de una salida documental para reportes consolidados.',
  },
  {
    id: 'CU-18',
    title: 'Consultar dashboard',
    category: 'Casos de Uso',
    image: 'diagrams/CU/CU-18_consultar_dashboard.png',
    description: 'Vista ejecutiva de indicadores clave para el propietario.',
  },
  {
    id: 'ER-01',
    title: 'Entidad-Relación',
    category: 'ER',
    image: 'diagrams/E-R/Entidad Relacion.png',
    description: 'Modelo de datos conceptual que relaciona productos, ventas, inventario y actores del negocio.',
  },
]

export function diagramImageUrl(image: string) {
  return `${import.meta.env.BASE_URL}${image}`
}
