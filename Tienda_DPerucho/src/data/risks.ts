export type RiskLevel = 'Bajo' | 'Medio' | 'Alto' | 'Crítico'
export type RiskValue = 1 | 2 | 3 | 4

export interface Risk {
  risk: string
  probability: RiskValue
  impact: RiskValue
  level: RiskLevel
  mitigation: string
  stage: 'Análisis' | 'Diseño' | 'Desarrollo' | 'Producción'
  owner: string
  status: 'Mitigado' | 'En seguimiento' | 'Pendiente'
}

export const risks: Risk[] = [
  { risk: 'Error humano en precios', probability: 3, impact: 3, level: 'Alto', mitigation: 'Restringir cambios por rol y validar precio.', stage: 'Diseño', owner: 'Administrador', status: 'Mitigado' },
  { risk: 'Pérdida de conexión a base de datos', probability: 2, impact: 4, level: 'Alto', mitigation: 'Healthchecks y procedimiento de contingencia.', stage: 'Producción', owner: 'Soporte técnico', status: 'Pendiente' },
  { risk: 'Venta sin stock', probability: 3, impact: 4, level: 'Crítico', mitigation: 'Validación automática previa a confirmar venta.', stage: 'Diseño', owner: 'Analista', status: 'Mitigado' },
  { risk: 'Pérdida de datos', probability: 2, impact: 4, level: 'Crítico', mitigation: 'Respaldos periódicos y restauración probada.', stage: 'Producción', owner: 'Administrador', status: 'En seguimiento' },
  { risk: 'Acceso no autorizado', probability: 2, impact: 4, level: 'Crítico', mitigation: 'Autenticación y autorización por roles.', stage: 'Desarrollo', owner: 'Equipo técnico', status: 'En seguimiento' },
  { risk: 'Retraso en integración de módulos', probability: 3, impact: 2, level: 'Medio', mitigation: 'Hitos de integración y contratos definidos.', stage: 'Desarrollo', owner: 'Equipo técnico', status: 'Pendiente' },
  { risk: 'Baja adopción por usuarios', probability: 2, impact: 3, level: 'Medio', mitigation: 'Validar mockups y capacitar al personal.', stage: 'Análisis', owner: 'Propietario', status: 'En seguimiento' },
  { risk: 'Errores en reportes', probability: 2, impact: 3, level: 'Alto', mitigation: 'Validar rangos y reconciliar totales.', stage: 'Diseño', owner: 'Dueño', status: 'En seguimiento' },
  { risk: 'Falla en respaldo', probability: 2, impact: 4, level: 'Alto', mitigation: 'Monitorear respaldos y ensayar recuperación.', stage: 'Producción', owner: 'Soporte técnico', status: 'Pendiente' },
  { risk: 'Caída en horario de ventas', probability: 2, impact: 4, level: 'Crítico', mitigation: 'Monitoreo, logs y recuperación controlada.', stage: 'Producción', owner: 'Soporte técnico', status: 'Pendiente' },
]
