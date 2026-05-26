import type { LucideIcon } from 'lucide-react'
import { BarChart3, Barcode, ClipboardList, PackageSearch, ReceiptText, Tags } from 'lucide-react'

export interface BusinessProcess {
  id: string
  title: string
  description: string
  icon: LucideIcon
  actor: string
  requirements: string[]
  rules: string[]
  steps: string[]
}

export const processes: BusinessProcess[] = [
  { id: 'PR-01', title: 'Proceso de venta', description: 'Registro ágil del detalle vendido, total y pago del cliente.', icon: Barcode, actor: 'Vendedor', requirements: ['RF-02', 'RF-03', 'RF-06'], rules: ['RN-01', 'RN-03', 'RN-04'], steps: ['Seleccionar producto', 'Validar stock', 'Confirmar pago', 'Emitir comprobante'] },
  { id: 'PR-02', title: 'Control de inventario', description: 'Seguimiento de entradas, salidas y existencias disponibles.', icon: PackageSearch, actor: 'Administrador', requirements: ['RF-04', 'RF-05', 'RF-17'], rules: ['RN-05', 'RN-11', 'RN-13'], steps: ['Consultar saldo', 'Detectar mínimo', 'Registrar ajuste', 'Actualizar existencia'] },
  { id: 'PR-03', title: 'Actualización de precios', description: 'Mantenimiento de precios vigentes para reducir errores.', icon: Tags, actor: 'Administrador', requirements: ['RF-10'], rules: ['RN-02', 'RN-06'], steps: ['Seleccionar producto', 'Ingresar precio', 'Validar rol', 'Publicar vigencia'] },
  { id: 'PR-04', title: 'Consulta de ventas', description: 'Búsqueda de transacciones por fecha y producto.', icon: ReceiptText, actor: 'Dueño', requirements: ['RF-18'], rules: ['RN-09', 'RN-12'], steps: ['Elegir rango', 'Validar fechas', 'Consultar historial', 'Mostrar resultado'] },
  { id: 'PR-05', title: 'Generación de reportes', description: 'Indicadores para decisiones de compra y operación.', icon: BarChart3, actor: 'Dueño', requirements: ['RF-13', 'RF-14', 'RF-19'], rules: ['RN-12'], steps: ['Definir periodo', 'Consolidar datos', 'Visualizar indicadores', 'Exportar'] },
  { id: 'PR-06', title: 'Cierre diario de ventas', description: 'Validación del ingreso diario y consolidación de resultados.', icon: ClipboardList, actor: 'Dueño', requirements: ['RF-15'], rules: ['RN-08', 'RN-09'], steps: ['Solicitar cierre', 'Validar jornada', 'Confirmar totales', 'Cerrar día'] },
]
