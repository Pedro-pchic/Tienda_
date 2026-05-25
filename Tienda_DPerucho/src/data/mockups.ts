export const mockupCategories = ['Seguridad', 'Administración', 'Ventas', 'Inventario', 'Reportes'] as const

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
  },
]

export function mockupImageUrl(image: string) {
  return `${import.meta.env.BASE_URL}${image}`
}
