export type RequirementType = 'Funcional' | 'No funcional'
export type Priority = 'Alta' | 'Media' | 'Baja'

export interface Requirement {
  code: string
  requirement: string
  type: RequirementType
  priority: Priority
  area: string
}

export const requirements: Requirement[] = [
  { code: 'RF-01', requirement: 'Registrar venta', type: 'Funcional', priority: 'Alta', area: 'Ventas' },
  { code: 'RF-02', requirement: 'Buscar productos', type: 'Funcional', priority: 'Alta', area: 'Catálogo' },
  { code: 'RF-03', requirement: 'Actualizar inventario', type: 'Funcional', priority: 'Alta', area: 'Inventario' },
  { code: 'RF-04', requirement: 'Generar reportes', type: 'Funcional', priority: 'Media', area: 'Reportes' },
  { code: 'RF-05', requirement: 'Gestionar productos', type: 'Funcional', priority: 'Alta', area: 'Productos' },
  { code: 'RF-06', requirement: 'Registrar proveedores', type: 'Funcional', priority: 'Media', area: 'Compras' },
  { code: 'RNF-01', requirement: 'Usabilidad', type: 'No funcional', priority: 'Alta', area: 'Experiencia' },
  { code: 'RNF-02', requirement: 'Seguridad', type: 'No funcional', priority: 'Alta', area: 'Sistema' },
  { code: 'RNF-03', requirement: 'Rendimiento', type: 'No funcional', priority: 'Media', area: 'Sistema' },
  { code: 'RNF-04', requirement: 'Disponibilidad', type: 'No funcional', priority: 'Media', area: 'Operación' },
]
