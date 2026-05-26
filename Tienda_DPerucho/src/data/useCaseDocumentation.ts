export interface DocumentedUseCase {
  code: string
  name: string
  actor: string
  description: string
  requirements: string
  rules: string
  diagram: string
}

export interface ExpandedScenario {
  code: string
  name: string
  area: string
  actors: string
  stakeholders: string
  level: string
  description: string
  trigger: string
  triggerType: 'Externo' | 'Temporal'
  diagram: string
  steps: Array<{ action: string; information: string }>
  conditions: Array<{ label: string; value: string }>
}

export const documentedUseCases: DocumentedUseCase[] = [
  { code: 'CU-01', name: 'Iniciar sesión', actor: 'Administrador / Vendedor / Dueño', description: 'Valida credenciales y habilita opciones según rol.', requirements: 'RF-01', rules: 'RN-09', diagram: 'diagrams/CU/CU-01_iniciar_sesion.png' },
  { code: 'CU-02', name: 'Registrar venta', actor: 'Vendedor', description: 'Registra productos, pago y comprobante de la venta.', requirements: 'RF-02, RF-03, RF-05, RF-06', rules: 'RN-01, RN-02, RN-03, RN-04, RN-05, RN-09', diagram: 'diagrams/CU/CU-02_registrar_venta.png' },
  { code: 'CU-03', name: 'Buscar producto', actor: 'Vendedor', description: 'Localiza productos para venta o consulta.', requirements: 'RF-03', rules: 'RN-09', diagram: 'diagrams/CU/CU-03_buscar_producto.png' },
  { code: 'CU-04', name: 'Consultar inventario', actor: 'Administrador / Vendedor', description: 'Presenta existencias y alertas operativas.', requirements: 'RF-04, RF-05', rules: 'RN-01, RN-04, RN-05, RN-09', diagram: 'diagrams/CU/CU-04_consultar_inventario.png' },
  { code: 'CU-05', name: 'Registrar producto', actor: 'Administrador', description: 'Incorpora un producto al catálogo.', requirements: 'RF-07', rules: 'RN-02, RN-09', diagram: 'diagrams/CU/CU-05_registrar_producto.png' },
  { code: 'CU-06', name: 'Editar producto', actor: 'Administrador', description: 'Actualiza datos comerciales del producto.', requirements: 'RF-08', rules: 'RN-02, RN-09', diagram: 'diagrams/CU/CU-06_editar_producto.png' },
  { code: 'CU-07', name: 'Eliminar producto', actor: 'Administrador', description: 'Retira productos elegibles del catálogo.', requirements: 'RF-09', rules: 'RN-09, RN-10', diagram: 'diagrams/CU/CU-07_eliminar_producto.png' },
  { code: 'CU-08', name: 'Actualizar precios', actor: 'Administrador', description: 'Define el precio vigente autorizado.', requirements: 'RF-10', rules: 'RN-02, RN-06, RN-09', diagram: 'diagrams/CU/CU-08_actualizar_precios.png' },
  { code: 'CU-09', name: 'Registrar proveedor', actor: 'Administrador', description: 'Registra proveedores para abastecimiento.', requirements: 'RF-11', rules: 'RN-09', diagram: 'diagrams/CU/CU-09_registrar_proveedor.png' },
  { code: 'CU-10', name: 'Registrar compra', actor: 'Administrador', description: 'Registra adquisiciones y entradas de inventario.', requirements: 'RF-11, RF-12, RF-05', rules: 'RN-05, RN-07, RN-09', diagram: 'diagrams/CU/CU-10_registrar_compra.png' },
  { code: 'CU-11', name: 'Generar reporte diario', actor: 'Dueño', description: 'Consolida resultados de una jornada.', requirements: 'RF-13, RF-18', rules: 'RN-09, RN-12', diagram: 'diagrams/CU/CU-11_generar_reporte_diario.png' },
  { code: 'CU-12', name: 'Generar reporte mensual', actor: 'Dueño', description: 'Consolida indicadores mensuales.', requirements: 'RF-14, RF-18', rules: 'RN-09, RN-12', diagram: 'diagrams/CU/CU-12_generar_reporte_mensual.png' },
  { code: 'CU-13', name: 'Realizar cierre diario', actor: 'Dueño', description: 'Formaliza los totales de la jornada.', requirements: 'RF-15, RF-13', rules: 'RN-08, RN-09, RN-12', diagram: 'diagrams/CU/CU-13_realizar_cierre_diario.png' },
  { code: 'CU-14', name: 'Gestionar usuarios', actor: 'Administrador', description: 'Administra usuarios y permisos.', requirements: 'RF-16, RF-01', rules: 'RN-09', diagram: 'diagrams/CU/CU-14_gestionar_usuarios.png' },
  { code: 'CU-15', name: 'Registrar merma', actor: 'Administrador', description: 'Documenta pérdidas y ajusta existencias.', requirements: 'RF-17, RF-05', rules: 'RN-05, RN-09, RN-11', diagram: 'diagrams/CU/CU-15_registrar_merma.png' },
  { code: 'CU-16', name: 'Consultar historial de ventas', actor: 'Dueño', description: 'Consulta transacciones históricas.', requirements: 'RF-18', rules: 'RN-09, RN-12', diagram: 'diagrams/CU/CU-16_consultar_historial_de_ventas.png' },
  { code: 'CU-17', name: 'Exportar reportes', actor: 'Dueño', description: 'Produce salidas documentales de reportes.', requirements: 'RF-19, RF-13, RF-14', rules: 'RN-09, RN-12', diagram: 'diagrams/CU/CU-17_exportar_reportes.png' },
  { code: 'CU-18', name: 'Consultar dashboard', actor: 'Dueño', description: 'Visualiza indicadores ejecutivos.', requirements: 'RF-20', rules: 'RN-09', diagram: 'diagrams/CU/CU-18_consultar_dashboard.png' },
]

export const expandedScenarios: ExpandedScenario[] = [
  {
    code: 'CU-02',
    name: 'Registrar venta',
    area: 'Ventas y atención al cliente',
    actors: 'Vendedor (principal), Cliente',
    stakeholders: 'Cliente, Vendedor, Dueño, Administrador',
    level: 'Objetivo de usuario',
    description: 'Registra una transacción, valida existencias, calcula el total, actualiza inventario y prepara el comprobante.',
    trigger: 'El cliente solicita adquirir uno o más productos.',
    triggerType: 'Externo',
    diagram: 'diagrams/CU/CU-02_registrar_venta.png',
    steps: [
      { action: 'El vendedor inicia una nueva venta.', information: 'Sesión activa y rol del vendedor.' },
      { action: 'Busca y selecciona los productos solicitados.', information: 'Código, catálogo, precio y stock.' },
      { action: 'Indica cantidades y confirma el detalle.', information: 'Cantidad solicitada y disponibilidad.' },
      { action: 'El sistema valida y registra la venta.', information: 'RN-01 a RN-05, pago y total.' },
      { action: 'Se actualiza inventario y genera comprobante.', information: 'Movimiento de stock y número de venta.' },
    ],
    conditions: [
      { label: 'Precondiciones', value: 'Sesión iniciada; productos registrados con precio vigente y stock disponible.' },
      { label: 'Postcondiciones', value: 'Venta registrada, inventario descontado y comprobante disponible.' },
      { label: 'Garantía de éxito', value: 'Detalle, total y ajuste de inventario quedan trazables sin stock negativo.' },
      { label: 'Garantía mínima', value: 'Una venta incompleta no modifica inventario.' },
      { label: 'Requerimientos cumplidos', value: 'RF-02, RF-03, RF-05, RF-06.' },
      { label: 'Cuestiones pendientes', value: 'Definir formas de pago y política de anulación.' },
    ],
  },
  {
    code: 'CU-04',
    name: 'Consultar inventario / Gestionar inventario',
    area: 'Inventario y abastecimiento',
    actors: 'Administrador (principal), Vendedor',
    stakeholders: 'Dueño, Administrador, Vendedor, Cliente, Proveedor',
    level: 'Objetivo de usuario',
    description: 'Permite revisar existencias y alertas para decidir reposición, venta o ajustes documentados.',
    trigger: 'Un usuario autorizado requiere conocer disponibilidad de productos.',
    triggerType: 'Externo',
    diagram: 'diagrams/CU/CU-04_consultar_inventario.png',
    steps: [
      { action: 'El usuario accede al inventario.', information: 'Sesión y permisos.' },
      { action: 'Ingresa criterios de búsqueda.', information: 'Código, nombre o categoría.' },
      { action: 'El sistema presenta existencias y alertas.', information: 'Stock actual y movimientos.' },
      { action: 'El administrador identifica acciones requeridas.', information: 'Alertas y necesidad de reposición.' },
    ],
    conditions: [
      { label: 'Precondiciones', value: 'Sesión iniciada y catálogo registrado.' },
      { label: 'Postcondiciones', value: 'Disponibilidad presentada para decisión operativa.' },
      { label: 'Garantía de éxito', value: 'La consulta refleja existencias registradas.' },
      { label: 'Garantía mínima', value: 'La consulta no altera inventario.' },
      { label: 'Requerimientos cumplidos', value: 'RF-04, RF-05.' },
      { label: 'Cuestiones pendientes', value: 'Definir umbrales de bajo stock y permisos de ajuste.' },
    ],
  },
  {
    code: 'CU-10',
    name: 'Registrar compra',
    area: 'Compras y abastecimiento',
    actors: 'Administrador (principal), Proveedor',
    stakeholders: 'Administrador, Dueño, Proveedor, Vendedor',
    level: 'Objetivo de usuario',
    description: 'Documenta el ingreso de productos adquiridos y actualiza las existencias recibidas.',
    trigger: 'La tienda recibe productos comprados a un proveedor.',
    triggerType: 'Externo',
    diagram: 'diagrams/CU/CU-10_registrar_compra.png',
    steps: [
      { action: 'El administrador inicia la compra.', information: 'Sesión y rol autorizado.' },
      { action: 'Selecciona al proveedor.', information: 'Catálogo de proveedores.' },
      { action: 'Registra productos, cantidades y costos.', information: 'Documento de soporte y recepción.' },
      { action: 'Confirma la compra.', information: 'Proveedor, detalle y total.' },
      { action: 'El sistema incrementa existencias.', information: 'Movimiento de entrada.' },
    ],
    conditions: [
      { label: 'Precondiciones', value: 'Administrador autenticado y proveedor identificado.' },
      { label: 'Postcondiciones', value: 'Compra documentada e inventario incrementado.' },
      { label: 'Garantía de éxito', value: 'La entrada queda vinculada al proveedor.' },
      { label: 'Garantía mínima', value: 'Una compra cancelada no altera stock.' },
      { label: 'Requerimientos cumplidos', value: 'RF-11, RF-12, RF-05.' },
      { label: 'Cuestiones pendientes', value: 'Definir devoluciones y compras parciales.' },
    ],
  },
  {
    code: 'CU-11',
    name: 'Generar reporte diario',
    area: 'Reportes y control operativo',
    actors: 'Dueño (principal), Administrador',
    stakeholders: 'Dueño, Administrador',
    level: 'Objetivo de usuario',
    description: 'Consolida la información registrada durante una fecha para evaluar resultados diarios.',
    trigger: 'El dueño solicita conocer el desempeño de una jornada.',
    triggerType: 'Externo',
    diagram: 'diagrams/CU/CU-11_generar_reporte_diario.png',
    steps: [
      { action: 'El usuario accede al reporte diario.', information: 'Sesión y permisos.' },
      { action: 'Selecciona la fecha.', information: 'Rango de jornada.' },
      { action: 'El sistema valida y consolida ventas.', information: 'RN-12 y transacciones.' },
      { action: 'Presenta totales e indicadores.', information: 'Montos y productos relevantes.' },
    ],
    conditions: [
      { label: 'Precondiciones', value: 'Usuario autenticado y fecha válida.' },
      { label: 'Postcondiciones', value: 'Reporte presentado para consulta o cierre.' },
      { label: 'Garantía de éxito', value: 'Los resultados corresponden al día seleccionado.' },
      { label: 'Garantía mínima', value: 'Una fecha inválida no produce un reporte válido.' },
      { label: 'Requerimientos cumplidos', value: 'RF-13, RF-18.' },
      { label: 'Cuestiones pendientes', value: 'Determinar formato de exportación e indicadores finales.' },
    ],
  },
  {
    code: 'CU-13',
    name: 'Realizar cierre diario',
    area: 'Cierre de jornada y control financiero',
    actors: 'Dueño (principal), Administrador',
    stakeholders: 'Dueño, Administrador, Vendedor',
    level: 'Objetivo de usuario',
    description: 'Formaliza la conclusión de la jornada y conserva sus totales asociados.',
    trigger: 'Finaliza la jornada comercial.',
    triggerType: 'Temporal',
    diagram: 'diagrams/CU/CU-13_realizar_cierre_diario.png',
    steps: [
      { action: 'El usuario solicita el cierre.', information: 'Sesión, rol y fecha.' },
      { action: 'El sistema verifica cierres previos.', information: 'Historial y RN-08.' },
      { action: 'Obtiene ventas y calcula resumen.', information: 'Transacciones de la jornada.' },
      { action: 'El usuario confirma el cierre.', information: 'Totales y observaciones.' },
      { action: 'El sistema registra el cierre.', information: 'Fecha, usuario y totales.' },
    ],
    conditions: [
      { label: 'Precondiciones', value: 'Sesión iniciada y fecha no cerrada previamente.' },
      { label: 'Postcondiciones', value: 'Jornada marcada como cerrada con totales registrados.' },
      { label: 'Garantía de éxito', value: 'Existe un único cierre trazable para la fecha.' },
      { label: 'Garantía mínima', value: 'No se genera un segundo cierre.' },
      { label: 'Requerimientos cumplidos', value: 'RF-15, RF-13.' },
      { label: 'Cuestiones pendientes', value: 'Definir reapertura excepcional y manejo de diferencias.' },
    ],
  },
]
