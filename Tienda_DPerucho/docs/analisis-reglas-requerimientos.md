# Analisis de Reglas de Negocio y Requerimientos

## Sistema de Gestion para Tienda de la Esquina Don Perucho

| Elemento | Detalle |
| --- | --- |
| Tipo de documento | Documento de analisis empresarial y especificacion de requerimientos |
| Proyecto | Sistema de Gestion para Tienda de la Esquina Don Perucho |
| Disciplina | Analisis y Diseno de Sistemas |
| Enfoque metodologico | Analisis orientado al negocio y al sistema, con referencia a Kendall & Kendall |
| Version | 1.0 |
| Fecha | 2026 |
| Naturaleza del proyecto | Portal documental de una solucion conceptual; no constituye un sistema productivo |

## Estructura General del Documento de Analisis

La documentacion del proyecto se organiza de forma progresiva: primero comprende el contexto y operacion de la tienda; posteriormente formaliza restricciones del negocio y requerimientos del sistema; finalmente conecta estos hallazgos con modelado, arquitectura, riesgos y experiencia de usuario.

| No. | Seccion | Proposito documental |
| ---: | --- | --- |
| 1 | Introduccion | Contextualizar la necesidad de analizar y disenar una solucion de gestion para la tienda. |
| 2 | Objetivos | Definir el objetivo general y los objetivos especificos del analisis. |
| 3 | Presentacion del proyecto | Identificar la organizacion, su contexto operativo y la propuesta documental. |
| 4 | Justificacion | Argumentar la necesidad de control, rapidez, trazabilidad y soporte de decisiones. |
| 5 | Alcance | Delimitar las capacidades estudiadas y exclusiones del proyecto. |
| 6 | Core de negocio | Describir el valor principal de la tienda como comercio minorista de proximidad. |
| 7 | Procesos del negocio | Identificar ventas, inventario, compras, reportes, cierre y administracion. |
| 8 | Analisis de reglas de negocio | Formalizar normas y restricciones que rigen la operacion. |
| 9 | Analisis de requerimientos | Traducir necesidades en capacidades y atributos de calidad del sistema propuesto. |
| 10 | Stakeholders | Identificar interesados, necesidades e influencia en la propuesta. |
| 11 | Casos de uso | Documentar interacciones funcionales entre actores y sistema. |
| 12 | Escenarios expandidos | Especificar flujos completos, condiciones y garantias de casos prioritarios. |
| 13 | Diagramas de actividad | Representar secuencias operativas y decisiones clave. |
| 14 | Modelo conceptual | Establecer conceptos centrales del dominio y sus relaciones. |
| 15 | Modelo entidad relacion | Formalizar la estructura candidata de informacion persistente. |
| 16 | Arquitectura | Presentar separacion de responsabilidades y tecnologias candidatas. |
| 17 | Riesgos | Evaluar riesgos de analisis, construccion, adopcion y continuidad. |
| 18 | Mockups | Validar pantallas y recorridos de usuario antes del desarrollo. |
| 19 | Conclusiones | Consolidar hallazgos, viabilidad y valor de la propuesta. |
| 20 | Bibliografia | Identificar fuentes metodologicas y tecnicas utilizadas. |

## Criterio de Separacion Analitica

| Dimension | Analisis de reglas de negocio | Analisis de requerimientos |
| --- | --- | --- |
| Pregunta central | Como debe operar el negocio y que restricciones debe respetar. | Que debe hacer el sistema para apoyar la operacion. |
| Origen | Politicas, controles, obligaciones operativas y criterios de la tienda. | Necesidades de actores, procesos y restricciones ya identificadas. |
| Resultado | Reglas RN que preservan integridad, autorizacion y trazabilidad. | Requerimientos RF y RNF verificables para una solucion futura. |
| Ejemplo | No puede existir una venta sin stock disponible. | El sistema debe validar existencias antes de confirmar una venta. |
| Uso en el modelado | Restringe pasos y decisiones en procesos y casos de uso. | Define funciones, interfaces, prioridades y atributos de calidad. |

# 8. Analisis de Reglas de Negocio

## 8.1 Introduccion

Las reglas de negocio representan restricciones, politicas, validaciones y normas operativas necesarias para garantizar el correcto funcionamiento de la Tienda de la Esquina Don Perucho. Su finalidad es preservar la coherencia de la operacion comercial antes de decidir como sera implementada una solucion tecnologica.

En el contexto del proyecto, las reglas establecen controles sobre seis ambitos esenciales:

| Ambito | Aplicacion en la tienda |
| --- | --- |
| Control operativo | Asegura que ventas, compras, ajustes y cierres se efectuen bajo condiciones definidas. |
| Restricciones comerciales | Evita ventas inviables, precios invalidos y eliminaciones que comprometan el historial. |
| Integridad del inventario | Impide existencias negativas y obliga a reflejar movimientos derivados de operaciones. |
| Control financiero | Preserva la consistencia de reportes y cierres por periodo. |
| Seguridad | Determina que las funciones sean realizadas por usuarios autenticados y autorizados. |
| Trazabilidad | Vincula cada movimiento relevante con su causa, actor y evidencia documental. |

De acuerdo con el enfoque de analisis de sistemas de Kendall & Kendall, comprender el negocio precede al diseno de la solucion. Las reglas de negocio constituyen entradas para identificar restricciones, describir decisiones estructuradas, validar procesos y posteriormente precisar requerimientos y casos de uso. En este proyecto, las reglas no describen pantallas ni tecnologia; describen las condiciones que la operacion debe conservar para ser confiable.

## 8.2 Tabla de Reglas de Negocio

| Codigo | Regla de negocio | Justificacion empresarial | Actores involucrados | Casos de uso relacionados |
| --- | --- | --- | --- | --- |
| RN-01 | No vender sin stock. | Evita comprometer productos inexistentes, protege la atencion al cliente y mantiene confiabilidad sobre disponibilidad. | Vendedor, Cliente, Administrador | CU-02 Registrar venta; CU-04 Consultar inventario |
| RN-02 | El precio debe ser mayor a cero. | Preserva validez comercial de la venta y evita errores que ocasionen perdidas o informacion financiera distorsionada. | Administrador, Vendedor, Dueno | CU-02 Registrar venta; CU-05 Registrar producto; CU-06 Editar producto; CU-08 Actualizar precios |
| RN-03 | Toda venta debe tener al menos un producto. | Define la existencia economica de una transaccion y evita comprobantes o registros vacios. | Vendedor, Cliente | CU-02 Registrar venta |
| RN-04 | El inventario debe actualizarse despues de una venta. | Mantiene concordancia entre las salidas fisicas y el saldo disponible para nuevas operaciones. | Vendedor, Administrador, Dueno | CU-02 Registrar venta; CU-04 Consultar inventario; CU-18 Consultar dashboard |
| RN-05 | No se permite stock negativo. | Impide saldos imposibles y soporta decisiones confiables de compra, reposicion y venta. | Administrador, Vendedor, Dueno | CU-02 Registrar venta; CU-04 Consultar inventario; CU-10 Registrar compra; CU-15 Registrar merma |
| RN-06 | Solo el administrador puede modificar precios. | Reduce el riesgo de cambios no autorizados y protege la politica comercial de la tienda. | Administrador, Vendedor, Dueno | CU-08 Actualizar precios; CU-14 Gestionar usuarios |
| RN-07 | Toda compra debe registrar proveedor. | Garantiza origen verificable del abastecimiento, soporte de auditoria y seguimiento comercial. | Administrador, Proveedor, Dueno | CU-09 Registrar proveedor; CU-10 Registrar compra |
| RN-08 | El cierre diario solo puede realizarse una vez por dia. | Evita duplicidad de consolidaciones y mantiene una unica referencia oficial para resultados diarios. | Dueno, Administrador | CU-11 Generar reporte diario; CU-13 Realizar cierre diario |
| RN-09 | Todo usuario debe iniciar sesion. | Proporciona identificacion del responsable y habilita control de acceso segun funciones autorizadas. | Administrador, Vendedor, Dueno | CU-01 Iniciar sesion; CU-02 Registrar venta; CU-08 Actualizar precios; CU-13 Realizar cierre diario; CU-14 Gestionar usuarios |
| RN-10 | No se puede eliminar producto con ventas asociadas. | Conserva el historial de transacciones y evita perder evidencia relacionada con ventas ya realizadas. | Administrador, Dueno | CU-07 Eliminar producto; CU-16 Consultar historial de ventas |
| RN-11 | Las mermas deben registrar motivo. | Permite distinguir perdida, deterioro u otra causa y justifica disminuciones de existencias. | Administrador, Vendedor, Dueno | CU-04 Consultar inventario; CU-15 Registrar merma |
| RN-12 | Los reportes deben generarse con rango de fechas valido. | Evita informes inconsistentes y asegura comparabilidad de resultados financieros y operativos. | Dueno, Administrador | CU-11 Generar reporte diario; CU-12 Generar reporte mensual; CU-16 Consultar historial de ventas; CU-17 Exportar reportes |

## 8.3 Relacion de Reglas con Procesos

| Proceso | Reglas aplicadas | Objetivo empresarial |
| --- | --- | --- |
| Venta | RN-01, RN-02, RN-03, RN-04, RN-05, RN-09 | Registrar ventas realizables, cobrables y vinculadas a una disminucion valida de inventario. |
| Inventario | RN-01, RN-04, RN-05, RN-10, RN-11 | Mantener saldos confiables, preservar historial y explicar cada ajuste de existencia. |
| Compras | RN-05, RN-07, RN-09 | Asegurar que las entradas de productos tengan proveedor identificable y actualicen disponibilidad. |
| Reportes | RN-09, RN-12 | Entregar informacion consultable por usuarios autorizados y basada en periodos consistentes. |
| Cierre diario | RN-08, RN-09, RN-12 | Consolidar una unica version oficial de los resultados de cada jornada. |
| Gestion de usuarios | RN-06, RN-09 | Restringir acciones sensibles y asignar responsabilidad sobre cambios operativos. |

### Interpretacion por Proceso

| Proceso | Forma en que las reglas afectan la operacion |
| --- | --- |
| Venta | La atencion puede concluir unicamente cuando existen productos disponibles, precios validos y registro de usuario responsable; la venta origina inmediatamente el ajuste de stock. |
| Inventario | Los saldos se consideran evidencia de control; por ello no pueden volverse negativos ni modificarse sin una operacion justificable, como compra, venta o merma. |
| Compras | El reabastecimiento no constituye un simple incremento de cantidades: requiere conocer su proveedor para control comercial y posterior verificacion. |
| Reportes | La informacion gerencial debe derivar de periodos definidos y de datos autorizados, evitando interpretaciones ambiguas de ventas o movimientos. |
| Cierre diario | La tienda necesita una referencia unica de resultado por fecha para evitar duplicidad de conteos y diferencias en seguimiento financiero. |
| Gestion de usuarios | La responsabilidad se asigna mediante autenticacion y permisos, especialmente en funciones que modifican precios o informacion sensible. |

## 8.4 Impacto de las Reglas

### Impacto Operativo

Las reglas operativas convierten una ejecucion informal en un conjunto de actividades controlables. RN-01, RN-03, RN-04 y RN-05 ordenan el flujo de venta e inventario: la venta debe contener articulos, comprobar disponibilidad y reflejar el movimiento de salida. Esto disminuye interrupciones al atender clientes y permite que el personal utilice una referencia comun sobre productos disponibles.

### Impacto Financiero

RN-02, RN-08 y RN-12 protegen la interpretacion economica de la operacion. Un precio valido evita registrar ingresos incorrectos; un cierre unico por fecha impide duplicar resultados; y los rangos temporales validos permiten comparar reportes. En conjunto, estas reglas respaldan decisiones del dueno sobre ventas, abastecimiento y evaluacion del negocio.

### Impacto Administrativo

RN-06, RN-07 y RN-10 determinan responsabilidades administrativas. El cambio de precios queda limitado al administrador; las compras conservan el proveedor que las origino; y la eliminacion de productos no destruye evidencia historica. Estas condiciones facilitan una administracion consistente del catalogo y de las relaciones de abastecimiento.

### Impacto de Seguridad

RN-09 formaliza la identificacion del usuario antes de ejecutar operaciones. Su valor no se limita a permitir acceso: habilita la atribucion de responsabilidad y sustenta futuros controles por rol. Al combinarse con RN-06, diferencia funciones ordinarias de venta de acciones sensibles como modificar precios.

### Impacto en Auditoria

La auditoria operacional requiere reconstruir que ocurrio, cuando y por que. RN-07 vincula compras con proveedores; RN-08 protege el cierre como evidencia diaria; RN-10 conserva la relacion de productos con ventas historicas; y RN-11 exige justificar las mermas. Estas reglas proporcionan base para revisiones posteriores y explicacion de diferencias.

### Impacto en Trazabilidad

Las reglas sirven como enlace entre proceso, requerimiento y caso de uso. Por ejemplo, RN-04 origina la necesidad de actualizar inventario despues de vender, y esa necesidad se refleja en RF-05 y en CU-02. De modo similar, RN-12 se traduce en restricciones para RF-13, RF-14, RF-18 y RF-19. Esta relacion permite verificar que la futura solucion no solo muestre funciones, sino que respete la logica del negocio.

# 9. Analisis de Requerimientos

## 9.1 Introduccion

Los requerimientos permiten formalizar las necesidades funcionales y no funcionales del sistema propuesto. Mientras las reglas de negocio indican las condiciones que la tienda debe respetar, los requerimientos especifican el comportamiento y los atributos de calidad necesarios para apoyar dichas condiciones mediante una futura solucion de informacion.

Desde una perspectiva alineada con Kendall & Kendall, el analisis de requerimientos transforma necesidades de los usuarios, observaciones de procesos y restricciones del negocio en especificaciones comprensibles, verificables y trazables. Este trabajo comprende:

| Aspecto | Aplicacion en el proyecto |
| --- | --- |
| System Requirements | Definicion de capacidades que la solucion deberia ofrecer a sus actores. |
| Analisis funcional | Identificacion de operaciones requeridas para ventas, inventario, compras, reportes y administracion. |
| Comportamiento esperado | Determinacion de entradas, resultados y validaciones asociadas a cada operacion. |
| Calidad del software | Definicion de atributos como usabilidad, seguridad, rendimiento y mantenibilidad. |
| Necesidades tecnicas | Consideracion de continuidad, respaldo y evolucion futura de la informacion. |

La especificacion que sigue no implica construccion inmediata del sistema; constituye la base analitica para validar alcance, modelar casos de uso, construir prototipos y evaluar una futura implementacion.

## 9.2 Requerimientos Funcionales

| Codigo | Requerimiento | Descripcion | Prioridad | Actor principal |
| --- | --- | --- | --- | --- |
| RF-01 | Iniciar sesion | Validar la identidad del usuario y permitir el acceso acorde con su rol autorizado. | Alta | Administrador / Vendedor / Dueno |
| RF-02 | Registrar venta | Registrar la transaccion comercial con productos, cantidades, total y responsable. | Alta | Vendedor |
| RF-03 | Buscar producto | Consultar productos por codigo, nombre u otro criterio operativo durante la atencion. | Alta | Vendedor |
| RF-04 | Consultar inventario | Mostrar existencias y disponibilidad para apoyar venta y reposicion. | Alta | Administrador / Vendedor |
| RF-05 | Actualizar inventario | Reflejar movimientos derivados de ventas, compras y mermas. | Alta | Administrador |
| RF-06 | Generar comprobante | Producir evidencia resumida de una venta confirmada. | Media | Vendedor |
| RF-07 | Registrar producto | Incorporar nuevos productos con informacion basica y datos comerciales. | Alta | Administrador |
| RF-08 | Editar producto | Modificar datos autorizados de un producto existente. | Media | Administrador |
| RF-09 | Eliminar producto | Retirar productos sin comprometer operaciones historicas asociadas. | Media | Administrador |
| RF-10 | Actualizar precios | Registrar precios vigentes por producto con autorizacion administrativa. | Alta | Administrador |
| RF-11 | Registrar proveedor | Mantener identificacion de proveedores vinculados al abastecimiento. | Media | Administrador |
| RF-12 | Registrar compra | Registrar recepcion de productos adquiridos e incrementar sus existencias. | Alta | Administrador |
| RF-13 | Generar reporte diario | Consolidar ventas y movimientos de una jornada determinada. | Alta | Dueno |
| RF-14 | Generar reporte mensual | Presentar resultados acumulados de un mes seleccionado. | Media | Dueno |
| RF-15 | Realizar cierre diario | Consolidar oficialmente los resultados finales de la jornada. | Alta | Dueno |
| RF-16 | Gestionar usuarios | Administrar usuarios y autorizaciones operativas del sistema propuesto. | Media | Administrador |
| RF-17 | Registrar merma | Documentar disminuciones de inventario ocasionadas por perdida o deterioro. | Media | Administrador |
| RF-18 | Consultar historial de ventas | Recuperar operaciones anteriores para seguimiento y auditoria. | Media | Dueno |
| RF-19 | Exportar reportes | Obtener una salida documental de informacion consolidada. | Baja | Dueno |
| RF-20 | Consultar dashboard | Visualizar indicadores ejecutivos de la operacion comercial. | Media | Dueno |

## 9.3 Clasificacion Funcional

### Modulo Ventas

| Elemento | Detalle |
| --- | --- |
| Descripcion | Agrupa funciones requeridas para atender al cliente, localizar productos, confirmar la transaccion y proporcionar evidencia de venta. |
| Requerimientos relacionados | RF-02 Registrar venta; RF-03 Buscar producto; RF-06 Generar comprobante. |
| Actores | Vendedor, Cliente. |
| Objetivo operativo | Disminuir tiempo de atencion y registrar ventas con informacion verificable. |
| Reglas condicionantes | RN-01, RN-02, RN-03, RN-04, RN-05, RN-09. |

### Modulo Inventario

| Elemento | Detalle |
| --- | --- |
| Descripcion | Controla disponibilidad, movimientos de existencias y ajustes justificados de productos. |
| Requerimientos relacionados | RF-04 Consultar inventario; RF-05 Actualizar inventario; RF-07 Registrar producto; RF-08 Editar producto; RF-09 Eliminar producto; RF-17 Registrar merma. |
| Actores | Administrador, Vendedor, Dueno. |
| Objetivo operativo | Mantener saldos confiables y proporcionar soporte oportuno para ventas y reposicion. |
| Reglas condicionantes | RN-01, RN-02, RN-04, RN-05, RN-10, RN-11. |

### Modulo Compras

| Elemento | Detalle |
| --- | --- |
| Descripcion | Documenta proveedores y adquisiciones que generan entradas al inventario. |
| Requerimientos relacionados | RF-11 Registrar proveedor; RF-12 Registrar compra; RF-05 Actualizar inventario. |
| Actores | Administrador, Proveedor, Dueno. |
| Objetivo operativo | Controlar el abastecimiento y rastrear el origen de las existencias recibidas. |
| Reglas condicionantes | RN-05, RN-07, RN-09. |

### Modulo Reportes

| Elemento | Detalle |
| --- | --- |
| Descripcion | Presenta informacion consolidada para seguimiento operativo, control diario y evaluacion gerencial. |
| Requerimientos relacionados | RF-13 Generar reporte diario; RF-14 Generar reporte mensual; RF-15 Realizar cierre diario; RF-18 Consultar historial de ventas; RF-19 Exportar reportes; RF-20 Consultar dashboard. |
| Actores | Dueno, Administrador. |
| Objetivo operativo | Facilitar decisiones basadas en resultados periodicos consistentes y consultables. |
| Reglas condicionantes | RN-08, RN-09, RN-12. |

### Modulo Administracion

| Elemento | Detalle |
| --- | --- |
| Descripcion | Contiene funciones de gobierno del catalogo y de usuarios con incidencia en controles sensibles. |
| Requerimientos relacionados | RF-07 Registrar producto; RF-08 Editar producto; RF-09 Eliminar producto; RF-10 Actualizar precios; RF-16 Gestionar usuarios. |
| Actores | Administrador, Dueno. |
| Objetivo operativo | Mantener informacion maestra consistente y limitar operaciones criticas a responsables autorizados. |
| Reglas condicionantes | RN-02, RN-06, RN-09, RN-10. |

### Modulo Seguridad

| Elemento | Detalle |
| --- | --- |
| Descripcion | Proporciona identificacion de usuarios y base conceptual para permisos segun responsabilidad. |
| Requerimientos relacionados | RF-01 Iniciar sesion; RF-16 Gestionar usuarios. |
| Actores | Administrador, Vendedor, Dueno. |
| Objetivo operativo | Asociar cada accion a un usuario autorizado y reducir modificaciones no controladas. |
| Reglas condicionantes | RN-06, RN-09. |

## 9.4 Requerimientos No Funcionales

| Codigo | Tipo | Descripcion | Objetivo |
| --- | --- | --- | --- |
| RNF-01 | Usabilidad | La interfaz candidata debe presentar flujos comprensibles, consistentes y adecuados para usuarios con diferentes niveles de experiencia tecnologica. | Reducir esfuerzo de aprendizaje y errores durante tareas frecuentes. |
| RNF-02 | Seguridad | El sistema futuro debe controlar autenticacion, autorizaciones y acceso a operaciones sensibles. | Proteger datos y asignar responsabilidad sobre las operaciones. |
| RNF-03 | Rendimiento | Las operaciones habituales de consulta y registro deben responder oportunamente en el contexto operativo de la tienda. | Evitar demoras en atencion y consulta de informacion. |
| RNF-04 | Disponibilidad | La solucion futura debe estar accesible durante los horarios requeridos por la operacion y contemplar recuperacion ante interrupciones. | Mantener continuidad del servicio comercial. |
| RNF-05 | Escalabilidad | La propuesta debe admitir crecimiento en productos, ventas, usuarios y reportes sin redisenos innecesarios. | Soportar evolucion futura del negocio. |
| RNF-06 | Mantenibilidad | La solucion deberia separar responsabilidades y conservar documentacion suficiente para cambios posteriores. | Facilitar correccion, evolucion y soporte tecnico. |
| RNF-07 | Respaldo de datos | La informacion critica debera respaldarse y contar con mecanismos definidos de recuperacion. | Minimizar perdida de evidencia operativa y financiera. |

## 9.5 Analisis de Requerimientos No Funcionales

### Usabilidad

La tienda opera bajo presion de tiempo durante la atencion al cliente. Por ello, RNF-01 exige recorridos claros para ventas, busqueda de producto y consulta de inventario. Una interfaz comprensible disminuye errores de captura, reduce capacitacion requerida y favorece que los actores adopten la solucion sin interrumpir el servicio.

| Relacion | Detalle |
| --- | --- |
| Experiencia de usuario | Prioriza formularios breves, informacion visible y retroalimentacion inmediata. |
| Procesos favorecidos | Venta, inventario, compra y reportes. |
| Evidencia futura | Validacion de mockups con vendedor, administrador y dueno. |

### Seguridad

RNF-02 responde a la necesidad de identificar responsables y restringir operaciones sensibles. La autenticacion vinculada con permisos debe proteger la actualizacion de precios, la gestion de usuarios y los cierres diarios. Este atributo deriva directamente de RN-06 y RN-09.

| Relacion | Detalle |
| --- | --- |
| Control de acceso | Diferenciar permisos del vendedor, administrador y dueno. |
| Informacion protegida | Precios, cierres, usuarios, reportes e historial. |
| Evidencia futura | Definicion de roles, bitacora de acciones y pruebas de autorizacion. |

### Rendimiento

RNF-03 se orienta a evitar que la tecnologia deteriore la rapidez de la tienda. Consultar un producto, confirmar una venta o observar inventario son operaciones que deben resolverse sin demoras perceptibles en la atencion cotidiana.

| Relacion | Detalle |
| --- | --- |
| Rendimiento operativo | Apoya fluidez en filas de clientes y consultas de stock. |
| Operaciones criticas | Buscar producto, registrar venta, consultar inventario y dashboard. |
| Evidencia futura | Medicion de tiempos de respuesta bajo volumen representativo de datos. |

### Disponibilidad

RNF-04 reconoce que una interrupcion durante horario comercial afecta ventas y control de existencias. La solucion candidata debera considerar continuidad de acceso, procedimientos ante fallas y recuperacion de las operaciones pendientes.

| Relacion | Detalle |
| --- | --- |
| Continuidad del negocio | Permite sostener registro y consulta durante la jornada. |
| Riesgos mitigados | Paralizacion de venta y ausencia de evidencia de movimientos. |
| Evidencia futura | Procedimiento de contingencia y criterios de recuperacion. |

### Escalabilidad

RNF-05 permite que la solucion evolucione con el negocio. Aunque el proyecto actual es conceptual, la arquitectura y el modelo de informacion deberan considerar incremento de productos, transacciones, proveedores, usuarios y periodos reportados.

| Relacion | Detalle |
| --- | --- |
| Crecimiento futuro | Nuevas categorias, mayor historial y multiples usuarios. |
| Decisiones de diseno | Separacion por modulos y estructura de datos consistente. |
| Evidencia futura | Revision de arquitectura frente a volumen incremental. |

### Mantenibilidad

RNF-06 favorece una futura implementacion ordenada. La separacion entre ventas, inventario, compras, reportes, administracion y seguridad permite ubicar cambios sin afectar innecesariamente otras funciones. La presente documentacion contribuye a dicha mantenibilidad al identificar reglas y requerimientos de manera trazable.

| Relacion | Detalle |
| --- | --- |
| Calidad tecnica | Reduce acoplamiento conceptual entre responsabilidades. |
| Soporte al cambio | Permite localizar reglas afectadas ante cambios comerciales. |
| Evidencia futura | Arquitectura documentada, pruebas y control de versiones. |

### Respaldo y Recuperacion

RNF-07 protege la informacion que sustenta inventario, ventas, compras, reportes y cierres. La perdida de estos datos impediria reconstruir la operacion y afectaria decisiones financieras. Por ello, una implementacion posterior debera especificar frecuencia de respaldo, responsabilidad, almacenamiento y procedimiento de restauracion.

| Relacion | Detalle |
| --- | --- |
| Proteccion de informacion | Conserva movimientos, cierres y datos maestros del negocio. |
| Auditoria | Permite recuperar evidencia ante falla o perdida accidental. |
| Evidencia futura | Politica de copias de seguridad y prueba periodica de restauracion. |

## Matriz Integradora: Regla, Requerimiento y Caso de Uso

| Regla de negocio | Necesidad del sistema derivada | Requerimientos funcionales principales | Casos de uso de evidencia |
| --- | --- | --- | --- |
| RN-01 No vender sin stock | Verificar disponibilidad antes de confirmar la transaccion. | RF-02, RF-04 | CU-02, CU-04 |
| RN-02 Precio mayor a cero | Validar precio al registrar, editar o vender productos. | RF-02, RF-07, RF-08, RF-10 | CU-02, CU-05, CU-06, CU-08 |
| RN-03 Venta con al menos un producto | Exigir detalle antes de registrar la venta. | RF-02 | CU-02 |
| RN-04 Actualizar inventario tras venta | Generar movimiento de salida asociado a transaccion. | RF-02, RF-05 | CU-02, CU-04 |
| RN-05 Sin stock negativo | Rechazar salidas superiores a disponibilidad y validar ajustes. | RF-02, RF-05, RF-12, RF-17 | CU-02, CU-10, CU-15 |
| RN-06 Solo administrador modifica precios | Autorizar la funcion segun rol. | RF-01, RF-10, RF-16 | CU-01, CU-08, CU-14 |
| RN-07 Compra con proveedor | Asociar toda compra a proveedor identificado. | RF-11, RF-12 | CU-09, CU-10 |
| RN-08 Un cierre diario | Comprobar ausencia de cierre previo para la fecha. | RF-13, RF-15 | CU-11, CU-13 |
| RN-09 Inicio de sesion | Identificar usuario antes de funciones internas. | RF-01, RF-16 | CU-01, CU-14 |
| RN-10 Conservar productos vendidos | Proteger historial al intentar retirar producto. | RF-09, RF-18 | CU-07, CU-16 |
| RN-11 Merma con motivo | Solicitar causa del ajuste de perdida. | RF-05, RF-17 | CU-15 |
| RN-12 Rango valido en reportes | Validar periodos de consulta y exportacion. | RF-13, RF-14, RF-18, RF-19 | CU-11, CU-12, CU-16, CU-17 |

## Conclusiones de las Secciones 8 y 9

La separacion entre reglas de negocio y requerimientos fortalece el analisis del proyecto. Las reglas RN representan condiciones propias de la Tienda Don Perucho que deben conservarse independientemente de la tecnologia seleccionada. Los requerimientos RF y RNF transforman esas condiciones y las necesidades de los actores en una especificacion candidata para una solucion futura.

Este tratamiento permite:

| Beneficio | Resultado para el proyecto |
| --- | --- |
| Claridad de negocio | Se identifican controles comerciales, administrativos y financieros sin confundirlos con pantallas o implementacion. |
| Trazabilidad | Cada regla puede vincularse con requerimientos y casos de uso verificables. |
| Calidad del analisis | Se incorpora tanto el comportamiento funcional como atributos de seguridad, continuidad y evolucion. |
| Preparacion para diseno | La arquitectura, los mockups y los diagramas pueden validarse contra criterios explicitamente documentados. |

## Bibliografia

| Fuente | Aplicacion en el documento |
| --- | --- |
| Kendall, K. E. y Kendall, J. E. *Analisis y diseno de sistemas*. Pearson Educacion. | Referente metodologico para analisis de sistemas, determinacion de requerimientos, especificacion de procesos y modelado UML. |
| Kendall, K. E. y Kendall, J. E. *Systems Analysis and Design*, 10th ed. Pearson, 2019. | Referencia complementaria sobre analisis, diseno y trazabilidad de requerimientos. |

