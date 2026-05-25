export interface RoadmapStep {
  number: string
  title: string
  description: string
  status: 'Completado' | 'Documentado'
}

export const roadmap: RoadmapStep[] = [
  { number: '01', title: 'Análisis del problema', description: 'Identificación de pérdidas, lentitud y falta de control.', status: 'Completado' },
  { number: '02', title: 'Levantamiento de requerimientos', description: 'Definición de capacidades y atributos de calidad.', status: 'Documentado' },
  { number: '03', title: 'Modelado de casos de uso', description: 'Interacciones clave entre actores y sistema.', status: 'Documentado' },
  { number: '04', title: 'Diseño de arquitectura', description: 'Organización candidata por capas y responsabilidades.', status: 'Documentado' },
  { number: '05', title: 'Diseño de mockups', description: 'Pantallas conceptuales para validar la experiencia.', status: 'Completado' },
  { number: '06', title: 'Validación final', description: 'Revisión integral de consistencia y trazabilidad.', status: 'Documentado' },
]

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
