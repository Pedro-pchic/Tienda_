export interface Risk {
  risk: string
  impact: 'Alto' | 'Medio'
  mitigation: string
}

export const risks: Risk[] = [
  { risk: 'Requerimientos incompletos', impact: 'Alto', mitigation: 'Validar alcance con el propietario mediante prototipos.' },
  { risk: 'Stock inconsistente', impact: 'Alto', mitigation: 'Definir movimientos y conteos periódicos de inventario.' },
  { risk: 'Errores en precios', impact: 'Alto', mitigation: 'Controlar cambios y mostrar precio vigente al vender.' },
  { risk: 'Pérdida de información', impact: 'Alto', mitigation: 'Plantear respaldo periódico y permisos de acceso.' },
  { risk: 'Resistencia del usuario', impact: 'Medio', mitigation: 'Diseñar flujos simples y capacitar al personal.' },
  { risk: 'Retraso en documentación', impact: 'Medio', mitigation: 'Calendarizar revisiones y versionar artefactos.' },
]
