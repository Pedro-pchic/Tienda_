export type ScenarioPriority = 'Crítica' | 'Alta' | 'Media'

export interface AlternateFlow {
  code: string
  title: string
  steps: string[]
}

export interface UseCaseScenario {
  id: string
  title: string
  priority: ScenarioPriority
  mainActor: string
  secondaryActors: string[]
  objective: string
  preconditions: string[]
  mainFlow: string[]
  alternateFlows: AlternateFlow[]
  postconditions: string[]
  businessRules: string[]
  relatedRequirements: string[]
  relatedDiagram: string
  relatedMockup: string
}

const scenario = (
  data: Omit<UseCaseScenario, 'preconditions' | 'postconditions'> & {
    preconditions?: string[]
    postconditions?: string[]
  },
): UseCaseScenario => ({
  preconditions: ['El usuario debe haber iniciado sesión.', 'Los datos requeridos deben estar disponibles.'],
  postconditions: ['La operación queda documentada y disponible para trazabilidad.'],
  ...data,
})

export const useCaseScenarios: UseCaseScenario[] = [
  scenario({
    id: 'CU-01', title: 'Iniciar sesión', priority: 'Crítica', mainActor: 'Usuario', secondaryActors: ['Administrador', 'Vendedor', 'Dueño'],
    objective: 'Autenticar al usuario y habilitar las opciones correspondientes a su rol.',
    mainFlow: ['El usuario ingresa credenciales.', 'El sistema valida la identidad.', 'El sistema identifica el rol.', 'El sistema habilita la navegación autorizada.'],
    alternateFlows: [{ code: 'A1', title: 'Credenciales inválidas', steps: ['El sistema rechaza el acceso.', 'Se informa que los datos no son válidos.'] }],
    businessRules: ['RN-09'], relatedRequirements: ['RF-01'], relatedDiagram: 'diagrams/CU/CU-01_iniciar_sesion.png', relatedMockup: 'Inicio de sesión',
  }),
  scenario({
    id: 'CU-02', title: 'Registrar venta', priority: 'Crítica', mainActor: 'Vendedor', secondaryActors: ['Cliente'],
    objective: 'Registrar una venta de productos y actualizar automáticamente el inventario.',
    preconditions: ['El vendedor debe haber iniciado sesión.', 'Los productos deben estar registrados.', 'Debe existir stock disponible.'],
    mainFlow: ['El vendedor busca el producto solicitado.', 'El sistema muestra coincidencias disponibles.', 'El vendedor selecciona el producto.', 'El sistema valida el stock.', 'El vendedor ingresa la cantidad.', 'El sistema calcula el subtotal.', 'El vendedor confirma el método de pago.', 'El sistema registra la venta.', 'El sistema actualiza el inventario.', 'El sistema genera el comprobante.'],
    alternateFlows: [{ code: 'A1', title: 'Stock insuficiente', steps: ['El sistema detecta stock insuficiente.', 'Muestra una alerta al vendedor.', 'No permite agregar el producto a la venta.'] }],
    postconditions: ['La venta queda registrada.', 'El inventario queda actualizado.', 'El movimiento queda disponible para reportes.'],
    businessRules: ['RN-01', 'RN-03', 'RN-04'], relatedRequirements: ['RF-02', 'RF-03', 'RF-05', 'RF-06'], relatedDiagram: 'diagrams/CU/CU-02_registrar_venta.png', relatedMockup: 'Módulo de ventas',
  }),
  scenario({
    id: 'CU-03', title: 'Buscar producto', priority: 'Alta', mainActor: 'Vendedor', secondaryActors: ['Cliente'],
    objective: 'Localizar rápidamente productos disponibles durante la atención.',
    mainFlow: ['El vendedor ingresa código o nombre.', 'El sistema consulta el catálogo.', 'El sistema muestra coincidencias y existencia.', 'El vendedor selecciona un producto.'],
    alternateFlows: [{ code: 'A1', title: 'Sin resultados', steps: ['El sistema informa que no existen coincidencias.', 'El vendedor modifica el criterio de búsqueda.'] }],
    businessRules: ['RN-01'], relatedRequirements: ['RF-03', 'RF-04'], relatedDiagram: 'diagrams/CU/CU-03_buscar_producto.png', relatedMockup: 'Módulo de ventas',
  }),
  scenario({
    id: 'CU-04', title: 'Consultar inventario', priority: 'Crítica', mainActor: 'Administrador', secondaryActors: ['Vendedor'],
    objective: 'Consultar existencias y detectar productos que requieren reposición.',
    mainFlow: ['El actor accede al inventario.', 'Aplica filtros de producto.', 'El sistema muestra saldos y alertas.', 'El actor revisa disponibilidad.'],
    alternateFlows: [{ code: 'A1', title: 'Producto sin movimiento', steps: ['El sistema muestra existencia en cero.', 'Se marca para revisión o compra.'] }],
    businessRules: ['RN-01', 'RN-05', 'RN-13'], relatedRequirements: ['RF-04', 'RF-05'], relatedDiagram: 'diagrams/CU/CU-04_consultar_inventario.png', relatedMockup: 'Inventario',
  }),
  scenario({
    id: 'CU-05', title: 'Registrar producto', priority: 'Alta', mainActor: 'Administrador', secondaryActors: [],
    objective: 'Incorporar un artículo al catálogo con precio y datos de control.',
    mainFlow: ['El administrador inicia un registro.', 'Ingresa información del producto.', 'El sistema valida código y precio.', 'El administrador confirma el alta.'],
    alternateFlows: [{ code: 'A1', title: 'Código duplicado', steps: ['El sistema identifica el código existente.', 'Solicita corregir los datos.'] }],
    businessRules: ['RN-02'], relatedRequirements: ['RF-07'], relatedDiagram: 'diagrams/CU/CU-05_registrar_producto.png', relatedMockup: 'Gestión de productos',
  }),
  scenario({
    id: 'CU-06', title: 'Editar producto', priority: 'Media', mainActor: 'Administrador', secondaryActors: [],
    objective: 'Modificar información permitida de un producto existente.',
    mainFlow: ['El administrador selecciona un producto.', 'Edita datos autorizados.', 'El sistema valida cambios.', 'El sistema guarda la actualización.'],
    alternateFlows: [{ code: 'A1', title: 'Datos inválidos', steps: ['El sistema rechaza valores incorrectos.', 'Mantiene los datos anteriores.'] }],
    businessRules: ['RN-02'], relatedRequirements: ['RF-08'], relatedDiagram: 'diagrams/CU/CU-06_editar_producto.png', relatedMockup: 'Gestión de productos',
  }),
  scenario({
    id: 'CU-08', title: 'Actualizar precios', priority: 'Crítica', mainActor: 'Administrador', secondaryActors: ['Dueño'],
    objective: 'Registrar un precio vigente autorizado para el producto.',
    mainFlow: ['El administrador busca el producto.', 'Ingresa el nuevo precio.', 'El sistema valida valor y autorización.', 'El cambio queda vigente.'],
    alternateFlows: [{ code: 'A1', title: 'Operación no autorizada', steps: ['El sistema identifica un rol no permitido.', 'El cambio se cancela.'] }],
    businessRules: ['RN-02', 'RN-06', 'RN-09'], relatedRequirements: ['RF-10'], relatedDiagram: 'diagrams/CU/CU-08_actualizar_precios.png', relatedMockup: 'Gestión de productos',
  }),
  scenario({
    id: 'CU-09', title: 'Registrar proveedor', priority: 'Media', mainActor: 'Administrador', secondaryActors: ['Proveedor'],
    objective: 'Mantener los datos del proveedor requerido para abastecimiento.',
    mainFlow: ['El administrador abre el formulario.', 'Registra datos de identificación y contacto.', 'El sistema valida la información.', 'El proveedor queda disponible para compras.'],
    alternateFlows: [{ code: 'A1', title: 'Proveedor duplicado', steps: ['El sistema advierte un registro existente.', 'Se consulta o actualiza el registro previo.'] }],
    businessRules: ['RN-07'], relatedRequirements: ['RF-11'], relatedDiagram: 'diagrams/CU/CU-09_registrar_proveedor.png', relatedMockup: 'Proveedores',
  }),
  scenario({
    id: 'CU-10', title: 'Registrar compra', priority: 'Alta', mainActor: 'Administrador', secondaryActors: ['Proveedor'],
    objective: 'Registrar productos recibidos y aumentar sus existencias de manera trazable.',
    mainFlow: ['El administrador selecciona proveedor.', 'Registra productos y cantidades recibidas.', 'El sistema calcula el total.', 'El administrador confirma la compra.', 'El sistema actualiza existencias.'],
    alternateFlows: [{ code: 'A1', title: 'Proveedor no registrado', steps: ['El sistema impide confirmar la compra.', 'Solicita registrar al proveedor previamente.'] }],
    businessRules: ['RN-05', 'RN-07'], relatedRequirements: ['RF-11', 'RF-12', 'RF-05'], relatedDiagram: 'diagrams/CU/CU-10_registrar_compra.png', relatedMockup: 'Compras',
  }),
  scenario({
    id: 'CU-11', title: 'Generar reporte diario', priority: 'Alta', mainActor: 'Dueño', secondaryActors: ['Administrador'],
    objective: 'Consultar los resultados operativos de una fecha determinada.',
    mainFlow: ['El usuario elige reporte diario.', 'Selecciona una fecha.', 'El sistema valida el periodo.', 'Consolida ventas y muestra indicadores.'],
    alternateFlows: [{ code: 'A1', title: 'Fecha inválida', steps: ['El sistema muestra advertencia.', 'No genera el reporte.'] }],
    businessRules: ['RN-12'], relatedRequirements: ['RF-13', 'RF-18'], relatedDiagram: 'diagrams/CU/CU-11_generar_reporte_diario.png', relatedMockup: 'Reportes',
  }),
  scenario({
    id: 'CU-12', title: 'Generar reporte mensual', priority: 'Media', mainActor: 'Dueño', secondaryActors: ['Administrador'],
    objective: 'Obtener un resumen mensual para análisis y decisión.',
    mainFlow: ['El usuario selecciona el mes.', 'El sistema valida el rango.', 'Consolida movimientos.', 'Presenta indicadores mensuales.'],
    alternateFlows: [{ code: 'A1', title: 'Periodo sin datos', steps: ['El sistema informa ausencia de movimientos.', 'Presenta reporte vacío controlado.'] }],
    businessRules: ['RN-12'], relatedRequirements: ['RF-14', 'RF-18'], relatedDiagram: 'diagrams/CU/CU-12_generar_reporte_mensual.png', relatedMockup: 'Reportes',
  }),
  scenario({
    id: 'CU-13', title: 'Realizar cierre diario', priority: 'Crítica', mainActor: 'Dueño', secondaryActors: ['Administrador'],
    objective: 'Formalizar los totales de la jornada una única vez.',
    mainFlow: ['El usuario solicita cierre.', 'El sistema verifica la fecha.', 'Consolida las ventas del día.', 'El usuario confirma los totales.', 'El sistema registra el cierre.'],
    alternateFlows: [{ code: 'A1', title: 'Cierre previamente realizado', steps: ['El sistema detecta el cierre existente.', 'Impide registrar un nuevo cierre.'] }],
    businessRules: ['RN-08', 'RN-09', 'RN-12'], relatedRequirements: ['RF-15', 'RF-13'], relatedDiagram: 'diagrams/CU/CU-13_realizar_cierre_diario.png', relatedMockup: 'Cierre diario',
  }),
  scenario({
    id: 'CU-14', title: 'Gestionar usuarios', priority: 'Alta', mainActor: 'Administrador', secondaryActors: [],
    objective: 'Administrar usuarios y roles que controlan operaciones críticas.',
    mainFlow: ['El administrador consulta usuarios.', 'Crea o edita un perfil.', 'Asigna rol autorizado.', 'El sistema conserva el cambio.'],
    alternateFlows: [{ code: 'A1', title: 'Rol no permitido', steps: ['El sistema rechaza la asignación.', 'Solicita una opción válida.'] }],
    businessRules: ['RN-06', 'RN-09'], relatedRequirements: ['RF-01', 'RF-16'], relatedDiagram: 'diagrams/CU/CU-14_gestionar_usuarios.png', relatedMockup: 'Usuarios',
  }),
  scenario({
    id: 'CU-15', title: 'Registrar merma', priority: 'Alta', mainActor: 'Administrador', secondaryActors: ['Vendedor'],
    objective: 'Documentar productos perdidos o deteriorados y ajustar el inventario.',
    mainFlow: ['El actor selecciona el producto.', 'Indica cantidad y motivo.', 'El sistema valida existencia.', 'El ajuste queda registrado.', 'El inventario se actualiza.'],
    alternateFlows: [{ code: 'A1', title: 'Motivo ausente', steps: ['El sistema solicita justificar la merma.', 'No registra el ajuste.'] }],
    businessRules: ['RN-05', 'RN-11'], relatedRequirements: ['RF-17', 'RF-05'], relatedDiagram: 'diagrams/CU/CU-15_registrar_merma.png', relatedMockup: 'Mermas',
  }),
  scenario({
    id: 'CU-18', title: 'Consultar dashboard', priority: 'Media', mainActor: 'Dueño', secondaryActors: ['Administrador'],
    objective: 'Visualizar indicadores generales de ventas, inventario y control.',
    mainFlow: ['El usuario abre el dashboard.', 'El sistema recupera indicadores.', 'Presenta métricas y alertas.', 'El usuario analiza el estado del negocio.'],
    alternateFlows: [{ code: 'A1', title: 'Información incompleta', steps: ['El sistema marca indicadores pendientes.', 'Mantiene disponibles los datos confirmados.'] }],
    businessRules: ['RN-04', 'RN-12'], relatedRequirements: ['RF-20'], relatedDiagram: 'diagrams/CU/CU-18_consultar_dashboard.png', relatedMockup: 'Dashboard',
  }),
]
