export interface EntityDefinition {
  name: string
  purpose: string
  attributes: Array<{ name: string; type: 'PK' | 'FK' | 'Atributo' }>
  relationships: string[]
}

export const entities: EntityDefinition[] = [
  { name: 'Usuario', purpose: 'Persona autorizada para operar.', attributes: [{ name: 'id_usuario', type: 'PK' }, { name: 'id_rol', type: 'FK' }, { name: 'nombre', type: 'Atributo' }, { name: 'estado', type: 'Atributo' }], relationships: ['Rol 1:N Usuario', 'Usuario 1:N Venta'] },
  { name: 'Rol', purpose: 'Permisos por responsabilidad.', attributes: [{ name: 'id_rol', type: 'PK' }, { name: 'nombre', type: 'Atributo' }], relationships: ['Rol 1:N Usuario'] },
  { name: 'Producto', purpose: 'Artículo comercializable.', attributes: [{ name: 'id_producto', type: 'PK' }, { name: 'id_categoria', type: 'FK' }, { name: 'precio', type: 'Atributo' }], relationships: ['Categoría 1:N Producto', 'Producto 1:1 Inventario'] },
  { name: 'Categoría', purpose: 'Clasificación del catálogo.', attributes: [{ name: 'id_categoria', type: 'PK' }, { name: 'nombre', type: 'Atributo' }], relationships: ['Categoría 1:N Producto'] },
  { name: 'Inventario', purpose: 'Saldo disponible por producto.', attributes: [{ name: 'id_inventario', type: 'PK' }, { name: 'id_producto', type: 'FK' }, { name: 'stock', type: 'Atributo' }], relationships: ['Producto 1:1 Inventario'] },
  { name: 'Venta', purpose: 'Cabecera de transacción.', attributes: [{ name: 'id_venta', type: 'PK' }, { name: 'id_usuario', type: 'FK' }, { name: 'fecha', type: 'Atributo' }, { name: 'total', type: 'Atributo' }], relationships: ['Venta 1:N DetalleVenta'] },
  { name: 'DetalleVenta', purpose: 'Productos vendidos.', attributes: [{ name: 'id_detalle', type: 'PK' }, { name: 'id_venta', type: 'FK' }, { name: 'id_producto', type: 'FK' }, { name: 'cantidad', type: 'Atributo' }], relationships: ['Venta 1:N DetalleVenta', 'Producto 1:N DetalleVenta'] },
  { name: 'Proveedor', purpose: 'Origen de abastecimiento.', attributes: [{ name: 'id_proveedor', type: 'PK' }, { name: 'nombre', type: 'Atributo' }], relationships: ['Proveedor 1:N Compra'] },
  { name: 'Compra', purpose: 'Entrada de productos.', attributes: [{ name: 'id_compra', type: 'PK' }, { name: 'id_proveedor', type: 'FK' }, { name: 'fecha', type: 'Atributo' }], relationships: ['Compra 1:N DetalleCompra'] },
  { name: 'DetalleCompra', purpose: 'Artículos recibidos.', attributes: [{ name: 'id_detalle_compra', type: 'PK' }, { name: 'id_compra', type: 'FK' }, { name: 'id_producto', type: 'FK' }], relationships: ['Compra 1:N DetalleCompra'] },
  { name: 'Merma', purpose: 'Salida justificada.', attributes: [{ name: 'id_merma', type: 'PK' }, { name: 'id_producto', type: 'FK' }, { name: 'motivo', type: 'Atributo' }], relationships: ['Producto 1:N Merma'] },
  { name: 'CierreDiario', purpose: 'Consolidación de jornada.', attributes: [{ name: 'id_cierre', type: 'PK' }, { name: 'fecha', type: 'Atributo' }, { name: 'total_ventas', type: 'Atributo' }], relationships: ['CierreDiario agrupa Venta'] },
]
