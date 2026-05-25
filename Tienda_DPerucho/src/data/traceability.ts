export type TraceStatus = 'Trazado' | 'Parcial' | 'Pendiente'

export interface TraceabilityItem {
  requirement: string
  useCase: string
  diagram: string
  mockup: string
  status: TraceStatus
}

export const traceability: TraceabilityItem[] = [
  { requirement: 'RF-01 Registrar venta', useCase: 'CU-02 Registrar venta', diagram: 'CU-02_registrar_venta.png', mockup: 'Módulo de ventas', status: 'Trazado' },
  { requirement: 'RF-02 Buscar productos', useCase: 'CU-03 Buscar producto', diagram: 'CU-03_buscar_producto.png', mockup: 'Módulo de ventas', status: 'Trazado' },
  { requirement: 'RF-03 Actualizar inventario', useCase: 'CU-04 Consultar inventario', diagram: 'CU-04_consultar_inventario.png', mockup: 'Inventario', status: 'Trazado' },
  { requirement: 'RF-04 Generar reportes', useCase: 'CU-XX Generar reportes', diagram: 'Pendiente', mockup: 'Reportes', status: 'Parcial' },
  { requirement: 'RF-05 Gestionar productos', useCase: 'CU-05 Registrar producto', diagram: 'CU-05_registrar_producto.png', mockup: 'Gestión de productos', status: 'Trazado' },
]
