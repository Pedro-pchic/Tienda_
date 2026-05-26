export const architecturePath = ['Usuario', 'Interfaz', 'Aplicación', 'Dominio', 'Datos']

export const projectScope = {
  includes: [
    'Análisis del negocio',
    'Requerimientos',
    'Casos de uso',
    'Diagramas UML',
    'Arquitectura candidata',
    'Mockups',
    'Riesgos',
  ],
  excludes: [
    'Desarrollo funcional completo',
    'Backend productivo',
    'Facturación electrónica',
    'Pagos en línea',
    'Ecommerce',
    'Delivery',
    'Hosting empresarial',
  ],
}

export interface TechnologyGroup {
  title: string
  technologies: string[]
}

export const technologyGroups: TechnologyGroup[] = [
  { title: 'Frontend', technologies: ['React', 'Vite', 'TailwindCSS'] },
  { title: 'Backend propuesto', technologies: ['Spring Boot'] },
  { title: 'Base de datos propuesta', technologies: ['MariaDB'] },
  { title: 'Documentación', technologies: ['Draw.io', 'UML', 'Diagrama Día'] },
  { title: 'Arquitectura', technologies: ['Cliente/Servidor', 'Arquitectura por capas'] },
]

export interface Stakeholder {
  role: string
  interest: string
}

export const stakeholders: Stakeholder[] = [
  { role: 'Propietario', interest: 'Control del negocio y consulta de reportes.' },
  { role: 'Vendedor', interest: 'Rapidez y precisión al registrar ventas.' },
  { role: 'Cliente', interest: 'Atención rápida y productos disponibles.' },
  { role: 'Proveedor', interest: 'Abastecimiento organizado de productos.' },
  { role: 'Administrador', interest: 'Gestión de usuarios, productos y precios.' },
  { role: 'Contador', interest: 'Consulta de información financiera consolidada.' },
]
