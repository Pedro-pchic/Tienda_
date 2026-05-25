import type { Priority } from './requirements'

export interface UseCase {
  code: string
  name: string
  actor: string
  priority: Priority
  flow: string
  exceptions: string
}

export const useCases: UseCase[] = [
  {
    code: 'CU-01',
    name: 'Iniciar sesión',
    actor: 'Usuario autorizado',
    priority: 'Alta',
    flow: 'Ingresa credenciales y obtiene acceso a las opciones correspondientes a su rol.',
    exceptions: 'Datos inválidos o acceso no autorizado.',
  },
  {
    code: 'CU-02',
    name: 'Registrar venta',
    actor: 'Cajero',
    priority: 'Alta',
    flow: 'Busca productos, agrega cantidades, confirma el total y registra el pago.',
    exceptions: 'Stock insuficiente o producto no encontrado.',
  },
  {
    code: 'CU-03',
    name: 'Buscar producto',
    actor: 'Cajero',
    priority: 'Alta',
    flow: 'Consulta el catálogo por nombre o código para seleccionar el artículo requerido.',
    exceptions: 'No se encuentran coincidencias.',
  },
  {
    code: 'CU-04',
    name: 'Consultar inventario',
    actor: 'Encargado',
    priority: 'Alta',
    flow: 'Filtra productos y consulta existencias y alertas de reposición.',
    exceptions: 'Inventario sin información actualizada.',
  },
  {
    code: 'CU-05',
    name: 'Registrar producto',
    actor: 'Encargado',
    priority: 'Media',
    flow: 'Captura datos, precio y existencia inicial del artículo nuevo.',
    exceptions: 'Código duplicado o datos incompletos.',
  },
  {
    code: 'CU-06',
    name: 'Editar producto',
    actor: 'Encargado',
    priority: 'Media',
    flow: 'Selecciona un producto registrado y modifica su información permitida.',
    exceptions: 'Producto inexistente o datos inválidos.',
  },
  {
    code: 'CU-07',
    name: 'Eliminar producto',
    actor: 'Administrador',
    priority: 'Media',
    flow: 'Solicita retirar un producto del catálogo y confirma la operación.',
    exceptions: 'Producto asociado a operaciones o eliminación no autorizada.',
  },
  {
    code: 'CU-08',
    name: 'Actualizar precios',
    actor: 'Administrador',
    priority: 'Alta',
    flow: 'Selecciona producto, registra el nuevo precio y confirma su vigencia.',
    exceptions: 'Precio inválido o cambio sin autorización.',
  },
]
