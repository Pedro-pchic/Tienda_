export type RuleSeverity = 'Alta' | 'Media' | 'Crítica'
export type ValidationStatus = 'Automática' | 'Control de rol' | 'Programada'

export interface BusinessRule {
  code: string
  rule: string
  justification: string
  actor: string
  useCase: string
  risk: string
  severity: RuleSeverity
  impact: string
  validation: ValidationStatus
}

export const businessRules: BusinessRule[] = [
  { code: 'RN-01', rule: 'No vender sin stock disponible.', justification: 'Evita comprometer productos inexistentes.', actor: 'Vendedor', useCase: 'CU-02', risk: 'Venta sin stock', severity: 'Crítica', impact: 'Inventario y servicio', validation: 'Automática' },
  { code: 'RN-02', rule: 'El precio debe ser mayor a cero.', justification: 'Protege la validez comercial de cada operación.', actor: 'Administrador', useCase: 'CU-08', risk: 'Error humano en precios', severity: 'Alta', impact: 'Financiero', validation: 'Automática' },
  { code: 'RN-03', rule: 'Toda venta contiene al menos un producto.', justification: 'Impide transacciones vacías o comprobantes inválidos.', actor: 'Vendedor', useCase: 'CU-02', risk: 'Venta inconsistente', severity: 'Alta', impact: 'Auditoría', validation: 'Automática' },
  { code: 'RN-04', rule: 'El inventario se actualiza después de una venta.', justification: 'Mantiene concordancia entre salida física y registro.', actor: 'Vendedor', useCase: 'CU-02', risk: 'Stock inconsistente', severity: 'Crítica', impact: 'Operativo', validation: 'Automática' },
  { code: 'RN-05', rule: 'No se permite stock negativo.', justification: 'Preserva saldos confiables para atender y comprar.', actor: 'Administrador', useCase: 'CU-04', risk: 'Venta sin stock', severity: 'Crítica', impact: 'Inventario', validation: 'Automática' },
  { code: 'RN-06', rule: 'Solo el administrador modifica precios.', justification: 'Restringe cambios comerciales sensibles.', actor: 'Administrador', useCase: 'CU-08', risk: 'Precio no autorizado', severity: 'Alta', impact: 'Seguridad', validation: 'Control de rol' },
  { code: 'RN-07', rule: 'Toda compra registra proveedor.', justification: 'Identifica el origen del abastecimiento.', actor: 'Administrador', useCase: 'CU-10', risk: 'Compra sin trazabilidad', severity: 'Alta', impact: 'Auditoría', validation: 'Automática' },
  { code: 'RN-08', rule: 'El cierre diario se realiza una vez por día.', justification: 'Conserva una versión oficial de la jornada.', actor: 'Dueño', useCase: 'CU-13', risk: 'Cierre duplicado', severity: 'Crítica', impact: 'Financiero', validation: 'Automática' },
  { code: 'RN-09', rule: 'Todo usuario debe iniciar sesión.', justification: 'Asigna responsabilidad a las acciones internas.', actor: 'Usuario', useCase: 'CU-01', risk: 'Acceso no autorizado', severity: 'Crítica', impact: 'Seguridad', validation: 'Control de rol' },
  { code: 'RN-10', rule: 'No eliminar productos con ventas asociadas.', justification: 'Preserva el historial transaccional.', actor: 'Administrador', useCase: 'CU-07', risk: 'Pérdida histórica', severity: 'Alta', impact: 'Trazabilidad', validation: 'Automática' },
  { code: 'RN-11', rule: 'Las mermas deben registrar un motivo.', justification: 'Explica disminuciones no derivadas de venta.', actor: 'Administrador', useCase: 'CU-15', risk: 'Merma injustificada', severity: 'Media', impact: 'Inventario', validation: 'Automática' },
  { code: 'RN-12', rule: 'Los reportes usan rangos de fecha válidos.', justification: 'Evita conclusiones basadas en periodos inválidos.', actor: 'Dueño', useCase: 'CU-11', risk: 'Reporte incorrecto', severity: 'Alta', impact: 'Decisión', validation: 'Automática' },
  { code: 'RN-13', rule: 'Productos bajo stock mínimo generan alerta.', justification: 'Permite anticipar reposiciones.', actor: 'Administrador', useCase: 'CU-04', risk: 'Desabastecimiento', severity: 'Media', impact: 'Servicio', validation: 'Programada' },
  { code: 'RN-14', rule: 'Toda venta confirmada genera comprobante.', justification: 'Proporciona evidencia al cliente y a la tienda.', actor: 'Vendedor', useCase: 'CU-02', risk: 'Venta sin evidencia', severity: 'Media', impact: 'Auditoría', validation: 'Automática' },
  { code: 'RN-15', rule: 'La información operativa debe respaldarse.', justification: 'Protege ventas, cierres e inventario ante fallas.', actor: 'Administrador', useCase: 'CU-13', risk: 'Pérdida de datos', severity: 'Crítica', impact: 'Continuidad', validation: 'Programada' },
]
