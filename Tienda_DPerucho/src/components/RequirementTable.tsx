import { useMemo, useState } from 'react'
import type { Priority, Requirement, RequirementType } from '../data/requirements'
import { RequirementFilters } from './RequirementFilters'

interface RequirementTableProps {
  requirements: Requirement[]
}

export function RequirementTable({ requirements }: RequirementTableProps) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<'Todos' | RequirementType>('Todos')
  const [priority, setPriority] = useState<'Todos' | Priority>('Todos')
  const filteredRequirements = useMemo(() => {
    const term = query.toLocaleLowerCase()
    return requirements.filter((requirement) => {
      const matchesQuery = [requirement.code, requirement.requirement, requirement.area]
        .some((value) => value.toLocaleLowerCase().includes(term))
      const matchesType = type === 'Todos' || requirement.type === type
      const matchesPriority = priority === 'Todos' || requirement.priority === priority
      return matchesQuery && matchesType && matchesPriority
    })
  }, [priority, query, requirements, type])

  return (
    <>
      <RequirementFilters
        query={query}
        type={type}
        priority={priority}
        resultCount={filteredRequirements.length}
        onQueryChange={setQuery}
        onTypeChange={setType}
        onPriorityChange={setPriority}
      />
      <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm shadow-emerald-900/5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
              <tr>
                {['Código', 'Requerimiento', 'Tipo', 'Prioridad', 'Área'].map((header) => (
                  <th key={header} className="px-5 py-4 font-medium">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {filteredRequirements.map((requirement) => (
                <tr key={requirement.code} className="transition hover:bg-emerald-50">
                  <td className="px-5 py-4 font-mono font-medium text-emerald-700">{requirement.code}</td>
                  <td className="px-5 py-4 text-emerald-950">{requirement.requirement}</td>
                  <td className="px-5 py-4 text-slate-700">{requirement.type}</td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      requirement.priority === 'Alta'
                        ? 'bg-emerald-100 text-emerald-800'
                        : requirement.priority === 'Media'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-stone-100 text-slate-700'
                    }`}>
                      {requirement.priority}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{requirement.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredRequirements.length === 0 && (
            <p className="px-5 py-10 text-center text-sm text-slate-500">No se encontraron requerimientos con los filtros seleccionados.</p>
          )}
        </div>
      </div>
    </>
  )
}
