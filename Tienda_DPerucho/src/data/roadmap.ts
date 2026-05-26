export type RoadmapStatus = 'Documentado' | 'En validación' | 'Preparado' | 'Planificado'

export interface RoadmapStep {
  number: string
  title: string
  description: string
  status: RoadmapStatus
  progress: number
  week: string
  deliverable: string
}

export const roadmap: RoadmapStep[] = [
  {
    number: '01',
    title: 'Diagnóstico del problema',
    description: 'Se identificaron operaciones manuales, falta de trazabilidad y errores en inventario.',
    status: 'Documentado', progress: 100, week: 'Semana 1', deliverable: 'Diagnóstico',
  },
  {
    number: '02',
    title: 'Levantamiento de requerimientos',
    description: 'Se definieron requerimientos funcionales y no funcionales alineados al negocio.',
    status: 'Documentado', progress: 100, week: 'Semana 2', deliverable: 'Problema validado',
  },
  {
    number: '03',
    title: 'Reglas de negocio',
    description: 'Se definieron restricciones operativas, comerciales y de seguridad.',
    status: 'Documentado', progress: 100, week: 'Semana 3', deliverable: '15 reglas',
  },
  {
    number: '04',
    title: 'Requerimientos',
    description: 'Se formalizaron capacidades funcionales y atributos de calidad.',
    status: 'Documentado', progress: 100, week: 'Semana 4', deliverable: 'RF y RNF',
  },
  {
    number: '05',
    title: 'Modelado UML',
    description: 'Se elaboraron casos de uso y diagramas del comportamiento esperado.',
    status: 'Documentado', progress: 100, week: 'Semana 5', deliverable: '18 diagramas CU',
  },
  {
    number: '06',
    title: 'Modelo ER',
    description: 'Se definieron entidades y relaciones del dominio conceptual.',
    status: 'Documentado', progress: 100, week: 'Semana 6', deliverable: 'Modelo ER',
  },
  {
    number: '07',
    title: 'Arquitectura',
    description: 'Se propuso una arquitectura técnica real para implementación futura.',
    status: 'Documentado', progress: 100, week: 'Semana 7', deliverable: 'Topología técnica',
  },
  {
    number: '08',
    title: 'Mockups',
    description: 'Se diseñaron recorridos de pantalla para validar la experiencia.',
    status: 'En validación', progress: 80, week: 'Semana 8', deliverable: 'Pantallas POS',
  },
  {
    number: '09',
    title: 'Desarrollo',
    description: 'Etapa futura de construcción de la solución funcional.',
    status: 'Planificado', progress: 0, week: 'Futuro', deliverable: 'Aplicación',
  },
  {
    number: '10',
    title: 'Pruebas',
    description: 'Validación funcional, operativa y técnica de la solución.',
    status: 'Planificado', progress: 0, week: 'Futuro', deliverable: 'Evidencias',
  },
  {
    number: '11',
    title: 'Presentación final',
    description: 'Exposición del análisis mediante el portal documental.',
    status: 'Preparado', progress: 90, week: 'Semana 9', deliverable: 'Portal',
  },
]
