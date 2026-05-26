# Documentacion de Casos de Uso

## Sistema de Gestion para Tienda de la Esquina Don Perucho

| Elemento | Detalle |
| --- | --- |
| Tipo de documento | Especificacion de analisis y trazabilidad de casos de uso |
| Proyecto | Sistema de Gestion para Tienda de la Esquina Don Perucho |
| Disciplina | Analisis y Diseno de Sistemas |
| Version | 1.0 |
| Fecha | 2026 |
| Alcance | Documentacion conceptual; no representa una implementacion productiva |

## Enfoque Metodologico

El documento organiza los casos de uso desde la perspectiva de interaccion entre actores y sistema. Los escenarios expandidos describen evento desencadenador, flujo de pasos, condiciones, garantias y asuntos pendientes, conforme a una estructura de analisis inspirada en Kendall & Kendall. La trazabilidad relaciona funciones esperadas, reglas del negocio y artefactos UML disponibles.

## Actores Considerados

| Actor | Participacion en el sistema propuesto |
| --- | --- |
| Administrador | Configura catalogo, precios, usuarios, proveedores, compras e inventario. |
| Vendedor | Registra ventas, consulta productos y apoya operaciones diarias. |
| Dueno | Consulta informacion ejecutiva, reportes y realiza el cierre diario. |
| Proveedor | Proporciona productos y datos de abastecimiento para compras. |
| Cliente | Origina la demanda atendida por el registro de venta. |

## Reglas de Negocio

| Codigo | Regla |
| --- | --- |
| RN-01 | No se puede vender si no hay stock. |
| RN-02 | El precio debe ser mayor a cero. |
| RN-03 | Toda venta debe contener al menos un producto. |
| RN-04 | El inventario debe actualizarse despues de una venta. |
| RN-05 | No se permite stock negativo. |
| RN-06 | Solo el administrador puede modificar precios. |
| RN-07 | Toda compra debe registrar proveedor. |
| RN-08 | El cierre diario solo puede realizarse una vez por dia. |
| RN-09 | Todo usuario debe iniciar sesion. |
| RN-10 | No se puede eliminar producto con ventas asociadas. |
| RN-11 | Las mermas deben registrar motivo. |
| RN-12 | Los reportes deben generarse con rango de fechas valido. |

## 1. Catalogo Resumido de Casos de Uso

| Codigo | Nombre | Actor principal | Descripcion | Requerimientos relacionados | Diagrama relacionado |
| --- | --- | --- | --- | --- | --- |
| CU-01 | Iniciar sesion | Administrador / Vendedor / Dueno | Valida las credenciales y habilita las opciones autorizadas segun el rol. | RF-01 | [CU-01_iniciar_sesion.png](../public/diagrams/CU/CU-01_iniciar_sesion.png) |
| CU-02 | Registrar venta | Vendedor | Registra los productos vendidos, totaliza la operacion, confirma el pago y emite comprobante. | RF-02, RF-03, RF-05, RF-06 | [CU-02_registrar_venta.png](../public/diagrams/CU/CU-02_registrar_venta.png) |
| CU-03 | Buscar producto | Vendedor | Localiza productos por criterio de consulta para atender la venta o revisar disponibilidad. | RF-03 | [CU-03_buscar_producto.png](../public/diagrams/CU/CU-03_buscar_producto.png) |
| CU-04 | Consultar inventario | Administrador / Vendedor | Presenta existencias y alertas para controlar la disponibilidad de productos. | RF-04, RF-05 | [CU-04_consultar_inventario.png](../public/diagrams/CU/CU-04_consultar_inventario.png) |
| CU-05 | Registrar producto | Administrador | Incorpora un nuevo producto con identificacion, precio y datos de control. | RF-07 | [CU-05_registrar_producto.png](../public/diagrams/CU/CU-05_registrar_producto.png) |
| CU-06 | Editar producto | Administrador | Actualiza informacion descriptiva o comercial de un producto registrado. | RF-08 | [CU-06_editar_producto.png](../public/diagrams/CU/CU-06_editar_producto.png) |
| CU-07 | Eliminar producto | Administrador | Retira logicamente productos elegibles sin comprometer el historial operativo. | RF-09 | [CU-07_eliminar_producto.png](../public/diagrams/CU/CU-07_eliminar_producto.png) |
| CU-08 | Actualizar precios | Administrador | Define un nuevo precio vigente para un producto autorizado. | RF-10 | [CU-08_actualizar_precios.png](../public/diagrams/CU/CU-08_actualizar_precios.png) |
| CU-09 | Registrar proveedor | Administrador | Registra los datos del proveedor requerido para las operaciones de compra. | RF-11 | [CU-09_registrar_proveedor.png](../public/diagrams/CU/CU-09_registrar_proveedor.png) |
| CU-10 | Registrar compra | Administrador | Registra una adquisicion a proveedor y aumenta las existencias recibidas. | RF-11, RF-12, RF-05 | [CU-10_registrar_compra.png](../public/diagrams/CU/CU-10_registrar_compra.png) |
| CU-11 | Generar reporte diario | Dueno | Consolida ventas y movimientos de una jornada para seguimiento operativo. | RF-13, RF-18 | [CU-11_generar_reporte_diario.png](../public/diagrams/CU/CU-11_generar_reporte_diario.png) |
| CU-12 | Generar reporte mensual | Dueno | Consolida informacion mensual para evaluacion del desempeno del negocio. | RF-14, RF-18 | [CU-12_generar_reporte_mensual.png](../public/diagrams/CU/CU-12_generar_reporte_mensual.png) |
| CU-13 | Realizar cierre diario | Dueno | Formaliza el cierre de la jornada con totales de ventas y constancia de ejecucion. | RF-15, RF-13 | [CU-13_realizar_cierre_diario.png](../public/diagrams/CU/CU-13_realizar_cierre_diario.png) |
| CU-14 | Gestionar usuarios | Administrador | Administra usuarios y permisos requeridos para acceder al sistema conceptual. | RF-16, RF-01 | [CU-14_gestionar_usuarios.png](../public/diagrams/CU/CU-14_gestionar_usuarios.png) |
| CU-15 | Registrar merma | Administrador | Registra perdida o deterioro de productos y ajusta el inventario justificadamente. | RF-17, RF-05 | [CU-15_registrar_merma.png](../public/diagrams/CU/CU-15_registrar_merma.png) |
| CU-16 | Consultar historial de ventas | Dueno | Consulta transacciones registradas para control y analisis posterior. | RF-18 | [CU-16_consultar_historial_de_ventas.png](../public/diagrams/CU/CU-16_consultar_historial_de_ventas.png) |
| CU-17 | Exportar reportes | Dueno | Produce una salida utilizable de reportes generados para archivo o revision. | RF-19, RF-13, RF-14 | [CU-17_exportar_reportes.png](../public/diagrams/CU/CU-17_exportar_reportes.png) |
| CU-18 | Consultar dashboard | Dueno | Visualiza indicadores resumidos de ventas, inventario y operacion. | RF-20 | [CU-18_consultar_dashboard.png](../public/diagrams/CU/CU-18_consultar_dashboard.png) |

## 2. Escenarios de Caso de Uso Expandidos

### 2.1 CU-02 Registrar Venta

| Campo | Especificacion |
| --- | --- |
| Nombre del caso de uso | Registrar venta |
| Area | Ventas y atencion al cliente |
| Actores | Vendedor (principal), Cliente |
| Interesados | Cliente, Vendedor, Dueno, Administrador |
| Nivel | Objetivo de usuario |
| Descripcion | Registra una transaccion de venta, valida productos y existencias, calcula el total, registra el pago, actualiza inventario y prepara el comprobante. |
| Evento desencadenador | El cliente solicita adquirir uno o mas productos y el vendedor inicia el registro de la operacion. |
| Tipo de desencadenador | Externo |
| Diagrama relacionado | [CU-02_registrar_venta.png](../public/diagrams/CU/CU-02_registrar_venta.png) |

#### Pasos Realizados

| No. | Accion realizada | Informacion usada para el paso |
| ---: | --- | --- |
| 1 | El vendedor inicia una nueva venta. | Sesion activa, identidad y rol del vendedor. |
| 2 | El vendedor busca y selecciona el producto solicitado. | Codigo o nombre de producto, catalogo disponible. |
| 3 | El sistema presenta precio vigente y existencia disponible. | Datos del producto, precio actual, stock actual. |
| 4 | El vendedor indica la cantidad requerida por el cliente. | Cantidad solicitada y stock disponible. |
| 5 | El sistema valida la disponibilidad y agrega el producto al detalle. | RN-01, RN-02, RN-03 y RN-05; detalle de venta. |
| 6 | El vendedor confirma el detalle y registra la forma o importe de pago. | Productos, cantidades, subtotal, total e importe recibido. |
| 7 | El sistema registra la venta y descuenta las existencias correspondientes. | Transaccion confirmada, RN-04, movimientos de inventario. |
| 8 | El sistema genera el comprobante y confirma la operacion. | Numero de venta, fecha, total y detalle de productos. |

#### Condiciones y Garantias

| Campo | Detalle |
| --- | --- |
| Precondiciones | El vendedor ha iniciado sesion; los productos estan registrados con precio vigente; existe disponibilidad suficiente para cada producto vendido. |
| Postcondiciones | La venta queda registrada; el inventario refleja el descuento de cantidades; el comprobante esta disponible para entrega o consulta. |
| Suposiciones | El pago se valida en el punto de atencion; el catalogo y precios fueron actualizados previamente por personal autorizado. |
| Garantia de exito | La transaccion conserva detalle, total, usuario responsable y ajuste verificable de inventario sin stock negativo. |
| Garantia minima | Si no se completa la venta, no se descuenta inventario ni se registra un comprobante definitivo. |
| Requerimientos cumplidos | RF-02 Registrar venta; RF-03 Buscar producto; RF-05 Actualizar inventario; RF-06 Generar comprobante. |
| Reglas relacionadas | RN-01, RN-02, RN-03, RN-04, RN-05, RN-09. |
| Cuestiones pendientes | Definir formas de pago admitidas, formato final del comprobante y politica de anulacion de ventas. |

### 2.2 CU-04 Consultar Inventario / Gestionar Inventario

| Campo | Especificacion |
| --- | --- |
| Nombre del caso de uso | Consultar inventario / Gestionar inventario |
| Area | Inventario y abastecimiento |
| Actores | Administrador (principal), Vendedor |
| Interesados | Dueno, Administrador, Vendedor, Cliente, Proveedor |
| Nivel | Objetivo de usuario |
| Descripcion | Permite revisar existencias actuales y alertas operativas para decidir reposicion, venta o ajustes documentados del inventario. |
| Evento desencadenador | El usuario autorizado necesita conocer disponibilidad o identificar productos que requieren accion operativa. |
| Tipo de desencadenador | Externo |
| Diagrama relacionado | [CU-04_consultar_inventario.png](../public/diagrams/CU/CU-04_consultar_inventario.png) |

#### Pasos Realizados

| No. | Accion realizada | Informacion usada para el paso |
| ---: | --- | --- |
| 1 | El usuario accede a la consulta de inventario. | Sesion activa y permisos de acceso. |
| 2 | El usuario ingresa criterios de busqueda o filtrado. | Codigo, nombre, categoria o estado de existencia. |
| 3 | El sistema recupera los productos coincidentes. | Catalogo de productos y saldos de inventario. |
| 4 | El sistema presenta existencias y alertas de bajo stock. | Stock actual, umbral de control y movimientos registrados. |
| 5 | El administrador identifica productos que requieren compra o ajuste. | Alertas, historico disponible y necesidades operativas. |
| 6 | El sistema conserva la consulta como soporte de una decision posterior. | Datos mostrados y usuario consultante, cuando corresponda. |

#### Condiciones y Garantias

| Campo | Detalle |
| --- | --- |
| Precondiciones | El actor ha iniciado sesion; existe catalogo registrado; los movimientos previos han sido consolidados. |
| Postcondiciones | Se muestra la disponibilidad consultada; el usuario cuenta con informacion para venta, reposicion o registro de merma. |
| Suposiciones | Las operaciones de venta, compra y merma actualizan el inventario oportunamente. |
| Garantia de exito | La consulta refleja las existencias registradas y evita decisiones basadas en saldos negativos o inconsistentes. |
| Garantia minima | Una consulta sin resultados no altera las existencias ni genera movimientos. |
| Requerimientos cumplidos | RF-04 Consultar inventario; RF-05 Actualizar inventario, como funcion relacionada. |
| Reglas relacionadas | RN-01, RN-04, RN-05, RN-09, RN-11. |
| Cuestiones pendientes | Establecer umbrales de bajo stock, frecuencia de conteo fisico y permisos para ajustes manuales. |

### 2.3 CU-10 Registrar Compra

| Campo | Especificacion |
| --- | --- |
| Nombre del caso de uso | Registrar compra |
| Area | Compras y abastecimiento |
| Actores | Administrador (principal), Proveedor |
| Interesados | Administrador, Dueno, Proveedor, Vendedor |
| Nivel | Objetivo de usuario |
| Descripcion | Documenta el ingreso de productos adquiridos a un proveedor y actualiza las existencias correspondientes. |
| Evento desencadenador | El negocio recibe productos adquiridos a un proveedor para abastecer el inventario. |
| Tipo de desencadenador | Externo |
| Diagrama relacionado | [CU-10_registrar_compra.png](../public/diagrams/CU/CU-10_registrar_compra.png) |

#### Pasos Realizados

| No. | Accion realizada | Informacion usada para el paso |
| ---: | --- | --- |
| 1 | El administrador inicia el registro de compra. | Sesion activa y rol autorizado. |
| 2 | El administrador selecciona al proveedor de la compra. | Catalogo de proveedores, identificacion del proveedor. |
| 3 | El sistema valida que el proveedor se encuentre registrado. | Datos de proveedor y RN-07. |
| 4 | El administrador incorpora productos, cantidades y costos recibidos. | Productos adquiridos, unidades, costo y documento de soporte. |
| 5 | El sistema calcula totales y presenta el resumen de compra. | Detalle de adquisicion y valores calculados. |
| 6 | El administrador confirma la compra registrada. | Proveedor, fecha, detalle y total. |
| 7 | El sistema registra el movimiento de entrada y actualiza inventario. | Compra confirmada, existencias previas y nuevas cantidades. |

#### Condiciones y Garantias

| Campo | Detalle |
| --- | --- |
| Precondiciones | El administrador ha iniciado sesion; el proveedor y los productos estan identificados o pueden registrarse conforme al procedimiento definido. |
| Postcondiciones | La compra queda documentada y el stock de los productos recibidos aumenta de acuerdo con el detalle confirmado. |
| Suposiciones | La recepcion fisica coincide con las cantidades digitadas; existe un soporte de compra verificable. |
| Garantia de exito | La operacion queda vinculada a un proveedor y genera movimientos de entrada trazables en inventario. |
| Garantia minima | Una compra incompleta o cancelada no modifica las existencias. |
| Requerimientos cumplidos | RF-11 Registrar proveedor; RF-12 Registrar compra; RF-05 Actualizar inventario. |
| Reglas relacionadas | RN-05, RN-07, RN-09. |
| Cuestiones pendientes | Definir tratamiento de compras parciales, devoluciones a proveedor y costos historicos. |

### 2.4 CU-11 Generar Reporte Diario

| Campo | Especificacion |
| --- | --- |
| Nombre del caso de uso | Generar reporte diario |
| Area | Reportes y control operativo |
| Actores | Dueno (principal), Administrador |
| Interesados | Dueno, Administrador, Contabilidad del negocio |
| Nivel | Objetivo de usuario |
| Descripcion | Consolida la informacion registrada durante una fecha para evaluar ventas, movimientos y resultados diarios. |
| Evento desencadenador | El dueno solicita conocer el desempeno de una jornada especifica. |
| Tipo de desencadenador | Externo |
| Diagrama relacionado | [CU-11_generar_reporte_diario.png](../public/diagrams/CU/CU-11_generar_reporte_diario.png) |

#### Pasos Realizados

| No. | Accion realizada | Informacion usada para el paso |
| ---: | --- | --- |
| 1 | El usuario accede a la opcion de reporte diario. | Sesion activa y permisos de consulta. |
| 2 | El usuario selecciona la fecha a consultar. | Fecha de inicio y fecha final de la jornada. |
| 3 | El sistema valida que el criterio temporal sea valido. | Fecha seleccionada y RN-12. |
| 4 | El sistema consolida ventas y movimientos del dia. | Ventas registradas, inventario y operaciones asociadas. |
| 5 | El sistema presenta totales e indicadores del reporte. | Cantidad de ventas, montos y productos relevantes. |
| 6 | El usuario revisa el resultado para la toma de decisiones. | Reporte generado y contexto operativo. |

#### Condiciones y Garantias

| Campo | Detalle |
| --- | --- |
| Precondiciones | El usuario ha iniciado sesion; existen operaciones registradas o la fecha puede reportarse sin movimientos. |
| Postcondiciones | El reporte diario se presenta para consulta y puede servir de insumo al cierre o exportacion posterior. |
| Suposiciones | Los registros operativos de la fecha son completos y no han sido alterados sin control. |
| Garantia de exito | Los resultados corresponden al dia seleccionado y se obtienen a partir de transacciones registradas. |
| Garantia minima | Una fecha invalida no genera resultados que puedan interpretarse como reporte valido. |
| Requerimientos cumplidos | RF-13 Generar reporte diario; RF-18 Consultar historial de ventas. |
| Reglas relacionadas | RN-09, RN-12. |
| Cuestiones pendientes | Determinar indicadores finales, formato de impresion/exportacion y manejo de ventas anuladas. |

### 2.5 CU-13 Realizar Cierre Diario

| Campo | Especificacion |
| --- | --- |
| Nombre del caso de uso | Realizar cierre diario |
| Area | Cierre de jornada y control financiero |
| Actores | Dueno (principal), Administrador |
| Interesados | Dueno, Administrador, Vendedor |
| Nivel | Objetivo de usuario |
| Descripcion | Formaliza la conclusion de la jornada operativa y conserva los totales asociados al dia cerrado. |
| Evento desencadenador | Finaliza la jornada comercial y corresponde consolidar formalmente sus resultados. |
| Tipo de desencadenador | Temporal |
| Diagrama relacionado | [CU-13_realizar_cierre_diario.png](../public/diagrams/CU/CU-13_realizar_cierre_diario.png) |

#### Pasos Realizados

| No. | Accion realizada | Informacion usada para el paso |
| ---: | --- | --- |
| 1 | El usuario autorizado solicita efectuar el cierre del dia. | Sesion activa, rol y fecha operativa. |
| 2 | El sistema verifica si la fecha ya fue cerrada. | Historial de cierres y RN-08. |
| 3 | El sistema obtiene las ventas registradas para la jornada. | Transacciones del dia e informacion de reportes. |
| 4 | El sistema calcula y muestra el resumen previo al cierre. | Total de ventas, operaciones y posibles observaciones. |
| 5 | El usuario revisa y confirma la ejecucion del cierre. | Resumen presentado y responsabilidad del usuario. |
| 6 | El sistema registra el cierre diario como realizado. | Fecha, usuario, totales y marca de cierre. |
| 7 | El sistema confirma el resultado y dispone la informacion para consulta. | Registro final del cierre y reporte diario asociado. |

#### Condiciones y Garantias

| Campo | Detalle |
| --- | --- |
| Precondiciones | El usuario ha iniciado sesion; la jornada corresponde a una fecha valida; el cierre no ha sido efectuado previamente. |
| Postcondiciones | La jornada queda marcada como cerrada con sus totales registrados y disponibles para control posterior. |
| Suposiciones | Las ventas del dia han sido ingresadas antes del cierre y cualquier incidencia fue documentada. |
| Garantia de exito | Existe un unico cierre registrado para la fecha, con evidencia de usuario y totales consolidados. |
| Garantia minima | Si la operacion no se confirma o el dia ya fue cerrado, no se genera un segundo cierre. |
| Requerimientos cumplidos | RF-15 Realizar cierre diario; RF-13 Generar reporte diario. |
| Reglas relacionadas | RN-08, RN-09, RN-12. |
| Cuestiones pendientes | Definir procedimiento de reapertura excepcional, manejo de diferencias y autorizaciones adicionales. |

## 3. Matriz de Trazabilidad de Casos de Uso

| Caso de uso | Requerimientos funcionales | Reglas de negocio | Actores | Diagrama relacionado |
| --- | --- | --- | --- | --- |
| CU-01 Iniciar sesion | RF-01 | RN-09 | Administrador, Vendedor, Dueno | [CU-01](../public/diagrams/CU/CU-01_iniciar_sesion.png) |
| CU-02 Registrar venta | RF-02, RF-03, RF-05, RF-06 | RN-01, RN-02, RN-03, RN-04, RN-05, RN-09 | Vendedor, Cliente | [CU-02](../public/diagrams/CU/CU-02_registrar_venta.png) |
| CU-03 Buscar producto | RF-03 | RN-09 | Vendedor | [CU-03](../public/diagrams/CU/CU-03_buscar_producto.png) |
| CU-04 Consultar inventario | RF-04, RF-05 | RN-01, RN-04, RN-05, RN-09 | Administrador, Vendedor | [CU-04](../public/diagrams/CU/CU-04_consultar_inventario.png) |
| CU-05 Registrar producto | RF-07 | RN-02, RN-09 | Administrador | [CU-05](../public/diagrams/CU/CU-05_registrar_producto.png) |
| CU-06 Editar producto | RF-08 | RN-02, RN-09 | Administrador | [CU-06](../public/diagrams/CU/CU-06_editar_producto.png) |
| CU-07 Eliminar producto | RF-09 | RN-09, RN-10 | Administrador | [CU-07](../public/diagrams/CU/CU-07_eliminar_producto.png) |
| CU-08 Actualizar precios | RF-10 | RN-02, RN-06, RN-09 | Administrador | [CU-08](../public/diagrams/CU/CU-08_actualizar_precios.png) |
| CU-09 Registrar proveedor | RF-11 | RN-09 | Administrador, Proveedor | [CU-09](../public/diagrams/CU/CU-09_registrar_proveedor.png) |
| CU-10 Registrar compra | RF-11, RF-12, RF-05 | RN-05, RN-07, RN-09 | Administrador, Proveedor | [CU-10](../public/diagrams/CU/CU-10_registrar_compra.png) |
| CU-11 Generar reporte diario | RF-13, RF-18 | RN-09, RN-12 | Dueno, Administrador | [CU-11](../public/diagrams/CU/CU-11_generar_reporte_diario.png) |
| CU-12 Generar reporte mensual | RF-14, RF-18 | RN-09, RN-12 | Dueno, Administrador | [CU-12](../public/diagrams/CU/CU-12_generar_reporte_mensual.png) |
| CU-13 Realizar cierre diario | RF-15, RF-13 | RN-08, RN-09, RN-12 | Dueno, Administrador | [CU-13](../public/diagrams/CU/CU-13_realizar_cierre_diario.png) |
| CU-14 Gestionar usuarios | RF-16, RF-01 | RN-09 | Administrador | [CU-14](../public/diagrams/CU/CU-14_gestionar_usuarios.png) |
| CU-15 Registrar merma | RF-17, RF-05 | RN-05, RN-09, RN-11 | Administrador, Vendedor | [CU-15](../public/diagrams/CU/CU-15_registrar_merma.png) |
| CU-16 Consultar historial de ventas | RF-18 | RN-09, RN-12 | Dueno, Administrador | [CU-16](../public/diagrams/CU/CU-16_consultar_historial_de_ventas.png) |
| CU-17 Exportar reportes | RF-19, RF-13, RF-14 | RN-09, RN-12 | Dueno, Administrador | [CU-17](../public/diagrams/CU/CU-17_exportar_reportes.png) |
| CU-18 Consultar dashboard | RF-20 | RN-09 | Dueno, Administrador | [CU-18](../public/diagrams/CU/CU-18_consultar_dashboard.png) |

## 4. Observaciones de Analisis

| Tema | Observacion |
| --- | --- |
| Cobertura funcional | Los 20 requerimientos funcionales proporcionados se vinculan al menos con un caso de uso; RF-05 interviene como actualizacion de existencias en ventas, compras y mermas. |
| Control de acceso | RN-09 se considera transversal a las funciones operativas realizadas por usuarios del sistema. |
| Integridad de inventario | RN-01, RN-04 y RN-05 aseguran consistencia entre ventas y disponibilidad; RN-07 y RN-11 soportan entradas y ajustes justificados. |
| Informacion ejecutiva | Los reportes, el cierre diario, la exportacion y el dashboard sustentan la toma de decisiones del dueno. |
| Decisiones pendientes | Deben definirse permisos detallados, formatos oficiales de salida, politicas de anulacion y procedimientos excepcionales de reapertura. |

