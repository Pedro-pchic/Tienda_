import type { LucideIcon } from 'lucide-react'
import { BarChart3, Barcode, ClipboardList, PackageSearch, ReceiptText, Tags } from 'lucide-react'

export interface BusinessProcess {
  title: string
  description: string
  icon: LucideIcon
}

export const processes: BusinessProcess[] = [
  { title: 'Proceso de venta', description: 'Registro ágil del detalle vendido, total y pago del cliente.', icon: Barcode },
  { title: 'Control de inventario', description: 'Seguimiento de entradas, salidas y existencias disponibles.', icon: PackageSearch },
  { title: 'Actualización de precios', description: 'Mantenimiento de precios vigentes para reducir errores.', icon: Tags },
  { title: 'Consulta de ventas', description: 'Búsqueda de transacciones por fecha y producto.', icon: ReceiptText },
  { title: 'Generación de reportes', description: 'Indicadores para decisiones de compra y operación.', icon: BarChart3 },
  { title: 'Cierre diario de ventas', description: 'Validación del ingreso diario y consolidación de resultados.', icon: ClipboardList },
]
