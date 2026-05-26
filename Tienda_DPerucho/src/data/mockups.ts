export const mockupCategories = ['Seguridad', 'Administración', 'Ventas', 'Inventario', 'Reportes', 'Compras', 'Control'] as const

export type MockupCategory = (typeof mockupCategories)[number]

export interface Mockup {
  id: string
  title: string
  category: MockupCategory
  image: string
  status: string
  actor: string
  objective: string
  description: string
  related: string
}

export const mockups: Mockup[] = [
  {
    id: 'MCK-01',
    title: 'Inicio de sesión',
    category: 'Seguridad',
    image: 'mockups/login.png',
    status: 'Diseño conceptual',
    actor: 'Administrador / Vendedor',
    objective: 'Permitir acceso seguro al sistema mediante credenciales.',
    description: 'Pantalla inicial enfocada en autenticación simple, clara y rápida.',
    related: 'RF-01 · CU-01',
  },
  {
    id: 'MCK-02',
    title: 'Dashboard',
    category: 'Administración',
    image: 'mockups/dashboard.png',
    status: 'En validación UX',
    actor: 'Administrador',
    objective: 'Mostrar indicadores principales de ventas, inventario y reportes.',
    description: 'Vista ejecutiva para apoyar la toma de decisiones del propietario.',
    related: 'RF-20 · CU-18',
  },
  {
    id: 'MCK-03',
    title: 'Módulo de ventas',
    category: 'Ventas',
    image: 'mockups/ventas.png',
    status: 'Diseño conceptual',
    actor: 'Vendedor',
    objective: 'Registrar ventas rápidas y actualizar inventario automáticamente.',
    description: 'Pantalla optimizada para reducir el tiempo de atención al cliente.',
    related: 'RF-02 · CU-02',
  },
  {
    id: 'MCK-04',
    title: 'Inventario',
    category: 'Inventario',
    image: 'mockups/inventario.png',
    status: 'Diseño conceptual',
    actor: 'Administrador',
    objective: 'Consultar stock, detectar productos bajos y controlar existencias.',
    description: 'Vista orientada al control operativo de productos disponibles.',
    related: 'RF-04 · CU-04',
  },
  {
    id: 'MCK-05',
    title: 'Reportes',
    category: 'Reportes',
    image: 'mockups/reportes.png',
    status: 'En validación',
    actor: 'Administrador',
    objective: 'Visualizar ventas diarias, mensuales y productos más vendidos.',
    description: 'Pantalla diseñada para análisis rápido del comportamiento del negocio.',
    related: 'RF-13 · CU-11',
  },
  {
    id: 'MCK-06',
    title: 'Gestión de productos',
    category: 'Inventario',
    image: 'mockups/productos.png',
    status: 'Diseño conceptual',
    actor: 'Administrador',
    objective: 'Administrar productos, precios, categorías y existencias.',
    description: 'Vista enfocada en mantenimiento del catálogo de productos.',
    related: 'RF-07 · CU-05',
  },
  {
    id: 'MCK-07', title: 'Proveedores', category: 'Compras', image: 'mockups/proveedores.png', status: 'Propuesto', actor: 'Administrador',
    objective: 'Registrar proveedores vinculados a abastecimiento.', description: 'Panel candidato para información comercial de proveedores.', related: 'RF-11 · CU-09',
  },
  {
    id: 'MCK-08', title: 'Cierre diario', category: 'Control', image: 'mockups/cierre.png', status: 'Propuesto', actor: 'Dueño',
    objective: 'Consolidar resultados diarios una sola vez.', description: 'Resumen de jornada, totales y confirmación final.', related: 'RF-15 · CU-13',
  },
  {
    id: 'MCK-09', title: 'Usuarios', category: 'Seguridad', image: 'mockups/usuarios.png', status: 'Pendiente', actor: 'Administrador',
    objective: 'Gestionar permisos para operaciones críticas.', description: 'Configuración conceptual de roles y acceso.', related: 'RF-16 · CU-14',
  },
  {
    id: 'MCK-10', title: 'Mermas', category: 'Inventario', image: 'mockups/mermas.png', status: 'Pendiente', actor: 'Administrador',
    objective: 'Documentar pérdidas y motivos del ajuste.', description: 'Registro operativo para disminuciones justificadas.', related: 'RF-17 · CU-15',
  },
  {
    id: 'MCK-11', title: 'Compras', category: 'Compras', image: 'mockups/compras.png', status: 'Pendiente', actor: 'Administrador',
    objective: 'Registrar recepción de productos y proveedor.', description: 'Flujo de abastecimiento para incrementar existencias.', related: 'RF-12 · CU-10',
  },
  {
    id: 'MCK-12', title: 'Historial de ventas', category: 'Reportes', image: 'mockups/historial.png', status: 'Pendiente', actor: 'Dueño',
    objective: 'Consultar operaciones por rango de fechas.', description: 'Consulta trazable de transacciones históricas.', related: 'RF-18 · CU-16',
  },
]

export function mockupImageUrl(image: string) {
  return `${import.meta.env.BASE_URL}${image}`
}
