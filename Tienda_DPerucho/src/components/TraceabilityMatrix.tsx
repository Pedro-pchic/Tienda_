import { Link2, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { traceability, type TraceStatus } from '../data/traceability'

type StatusFilter = 'Todos' | TraceStatus

const statusStyle: Record<TraceStatus, string> = {
  Trazado: 'bg-emerald-100 text-emerald-800',
  Parcial: 'bg-amber-100 text-amber-700',
  Pendiente: 'bg-stone-100 text-slate-700',
}

export function TraceabilityMatrix() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('Todos')
  const statusFilters: StatusFilter[] = ['Todos', 'Trazado', 'Parcial', 'Pendiente']
  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    return traceability.filter((item) => {
      const matchesStatus = status === 'Todos' || item.status === status
      const matchesQuery = !normalizedQuery || Object.values(item).some((value) => value.toLocaleLowerCase().includes(normalizedQuery))
      return matchesStatus && matchesQuery
    })
  }, [query, status])

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm shadow-emerald-900/5">
      <div className="border-b border-emerald-100 bg-emerald-50/70 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-emerald-800">
          <p className="flex items-center gap-2">
            <Link2 size={17} />
            Relación entre alcance, modelado y experiencia
          </p>
          <span className="rounded-full bg-white px-3 py-1 text-xs text-emerald-700 shadow-sm">
            {filteredItems.length} de {traceability.length} relaciones
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <span className="sr-only">Buscar relación</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar requisito, CU o mockup"
              className="w-full rounded-xl border border-emerald-100 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar trazabilidad por estado">
            {statusFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setStatus(filter)}
                aria-pressed={status === filter}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                  status === filter
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : 'border-emerald-100 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Requerimiento', 'Caso de uso', 'Diagrama relacionado', 'Mockup relacionado', 'Estado'].map((header) => (
                <th key={header} className="px-5 py-4 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {filteredItems.map((item) => (
              <tr key={item.requirement} className="transition hover:bg-emerald-50/70">
                <td className="whitespace-nowrap px-5 py-4 font-medium text-emerald-950">{item.requirement}</td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-700">{item.useCase}</td>
                <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-emerald-700">{item.diagram}</td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">{item.mockup}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle[item.status]}`}>{item.status}</span>
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-500">
                  No se encontraron relaciones para los filtros seleccionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
