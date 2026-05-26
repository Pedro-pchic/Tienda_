import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useCaseScenarios, type ScenarioPriority, type UseCaseScenario } from '../data/useCaseScenarios'
import { Section } from './Section'
import { UseCaseScenarioCard } from './UseCaseScenarioCard'
import { UseCaseScenarioModal } from './UseCaseScenarioModal'

type PriorityFilter = 'Todos' | ScenarioPriority

export function UseCaseScenarios() {
  const [query, setQuery] = useState('')
  const [priority, setPriority] = useState<PriorityFilter>('Todos')
  const [selected, setSelected] = useState<UseCaseScenario | null>(null)
  const filters: PriorityFilter[] = ['Todos', 'Crítica', 'Alta', 'Media']
  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    return useCaseScenarios.filter((scenario) => (
      (priority === 'Todos' || scenario.priority === priority)
      && (!term || `${scenario.id} ${scenario.title} ${scenario.mainActor}`.toLocaleLowerCase().includes(term))
    ))
  }, [priority, query])

  return (
    <>
      <Section id="escenarios" eyebrow="Especificación textual" title="Escenarios de casos de uso" description="Documentación interactiva de los escenarios prioritarios, sus flujos, reglas, requerimientos y artefactos relacionados.">
        <div className="mb-7 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-medium text-emerald-950"><span className="text-2xl font-semibold text-emerald-700">15</span> escenarios documentados</p>
            <label className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar código, título o actor" className="w-full rounded-xl border border-emerald-100 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-emerald-400" />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar escenarios por prioridad">
            {filters.map((filter) => (
              <button key={filter} type="button" onClick={() => setPriority(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${priority === filter ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-emerald-100 text-slate-600 hover:border-emerald-300 hover:text-emerald-700'}`}>
                {filter}
              </button>
            ))}
            <span className="ml-auto self-center text-xs text-slate-500">{visible.length} resultados</span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((scenario) => <UseCaseScenarioCard key={scenario.id} scenario={scenario} onOpen={setSelected} />)}
        </div>
      </Section>
      <UseCaseScenarioModal scenario={selected} onClose={() => setSelected(null)} />
    </>
  )
}
