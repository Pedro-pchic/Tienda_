export type TraceStatus = 'Trazado' | 'Parcial' | 'Pendiente'

export interface TraceabilityItem {
  requirement: string
  story: string
  useCase: string
  diagram: string
  mockup: string
  status: TraceStatus
}

export const traceability: TraceabilityItem[] = [
  { requirement: 'RF-01 Registrar venta', story: 'HU-01 Registrar venta rápida', useCase: 'CU-02 Registrar venta', diagram: 'CU-02_registrar_venta.png', mockup: 'Módulo de ventas', status: 'Trazado' },
  { requirement: 'RF-02 Buscar productos', story: 'HU-02 Consultar inventario', useCase: 'CU-04 Consultar inventario', diagram: 'CU-04_consultar_inventario.png', mockup: 'Inventario', status: 'Trazado' },
  { requirement: 'RF-03 Actualizar inventario', story: 'HU-01 / HU-02', useCase: 'CU-04 Consultar inventario', diagram: 'CU-04_consultar_inventario.png', mockup: 'Inventario', status: 'Trazado' },
  { requirement: 'RF-06 Generar reportes', story: 'HU-05 Generar reportes', useCase: 'CU-11 / CU-12', diagram: 'CU-11_generar_reporte_diario.png', mockup: 'Reportes', status: 'Trazado' },
  { requirement: 'RF-07 Gestionar usuarios', story: 'HU-09 Gestionar usuarios', useCase: 'CU-14 Gestionar usuarios', diagram: 'CU-14_gestionar_usuarios.png', mockup: 'Login / Usuarios', status: 'Trazado' },
  { requirement: 'RF-08 Actualizar precios', story: 'HU-03 Actualizar precios', useCase: 'CU-08 Actualizar precios', diagram: 'CU-08_actualizar_precios.png', mockup: 'Gestión de productos', status: 'Trazado' },
  { requirement: 'RF-11 Realizar cierre diario', story: 'HU-06 Realizar cierre diario', useCase: 'CU-13 Realizar cierre diario', diagram: 'CU-13_realizar_cierre_diario.png', mockup: 'Dashboard', status: 'Trazado' },
  { requirement: 'RF-13 Registrar compra', story: 'HU-04 Registrar compra', useCase: 'CU-10 Registrar compra', diagram: 'CU-10_registrar_compra.png', mockup: 'Inventario', status: 'Trazado' },
  { requirement: 'RF-19 Consultar dashboard', story: 'HU-10 Consultar dashboard', useCase: 'CU-18 Consultar dashboard', diagram: 'CU-18_consultar_dashboard.png', mockup: 'Dashboard', status: 'Trazado' },
  { requirement: 'RF-23 Controlar mermas', story: 'HU-08 Controlar mermas', useCase: 'CU-15 Registrar merma', diagram: 'CU-15_registrar_merma.png', mockup: 'Inventario', status: 'Trazado' },
]
