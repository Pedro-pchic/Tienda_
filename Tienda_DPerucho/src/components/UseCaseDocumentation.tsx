import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink, FileCheck2, Link2, Search } from 'lucide-react'
import { useState } from 'react'
import { diagramImageUrl } from '../data/diagrams'
import { documentedUseCases, expandedScenarios } from '../data/useCaseDocumentation'

export function UseCaseDocumentation({ onOpenDiagram }: { onOpenDiagram: (code: string) => void }) {
  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-3">
        <Metric value="18" label="Casos documentados" />
        <Metric value="5" label="Escenarios expandidos" />
        <Metric value="12" label="Reglas vinculadas" />
      </div>

      <DetailedUseCases />
      <DocumentedCasesTable onOpenDiagram={onOpenDiagram} />

      <div>
        <div className="mb-5 flex items-center gap-3">
          <FileCheck2 className="text-emerald-600" size={21} />
          <div>
            <h3 className="text-xl font-semibold text-emerald-950">Escenarios expandidos</h3>
            <p className="text-sm text-slate-600">Especificación formal basada en el enfoque de Kendall & Kendall.</p>
          </div>
        </div>
        <div className="space-y-4">
          {expandedScenarios.map((scenario, index) => (
            <motion.details
              key={scenario.code}
              open={index === 0}
              className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm shadow-emerald-900/5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 transition hover:bg-emerald-50/50">
                <div className="flex items-start gap-4">
                  <span className="rounded-lg bg-emerald-100 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">{scenario.code}</span>
                  <div>
                    <h4 className="font-semibold text-emerald-950">{scenario.name}</h4>
                    <p className="mt-1 text-xs text-slate-500">{scenario.area} · {scenario.actors}</p>
                  </div>
                </div>
                <ChevronDown size={18} className="shrink-0 text-emerald-600 transition group-open:rotate-180" />
              </summary>
              <div className="border-t border-emerald-100 px-5 pb-6 pt-5">
                <ScenarioOverview scenario={scenario} onOpenDiagram={onOpenDiagram} />
                <div className="mt-6 overflow-x-auto rounded-xl border border-emerald-100">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
                      <tr>
                        <th className="px-4 py-3 font-medium">No.</th>
                        <th className="px-4 py-3 font-medium">Acción realizada</th>
                        <th className="px-4 py-3 font-medium">Información usada</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-100">
                      {scenario.steps.map((step, stepIndex) => (
                        <tr key={step.action}>
                          <td className="px-4 py-3 font-mono text-emerald-700">{stepIndex + 1}</td>
                          <td className="px-4 py-3 text-emerald-950">{step.action}</td>
                          <td className="px-4 py-3 text-slate-600">{step.information}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <dl className="mt-5 grid gap-3 lg:grid-cols-2">
                  {scenario.conditions.map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-emerald-50/60 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{label}</dt>
                      <dd className="mt-2 text-sm leading-6 text-slate-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.details>
          ))}
        </div>
      </div>

      <TraceabilityTable onOpenDiagram={onOpenDiagram} />
    </div>
  )
}

function DetailedUseCases() {
  const [query, setQuery] = useState('')
  const [actor, setActor] = useState('Todos')
  const [priority, setPriority] = useState('Todas')
  const [status, setStatus] = useState('Todos')
  const actorOptions = ['Todos', 'Administrador', 'Vendedor', 'Dueño']
  const items = documentedUseCases.map((item) => ({
    ...item,
    priority: ['CU-02', 'CU-04', 'CU-10', 'CU-13'].includes(item.code) ? 'Alta' : 'Media',
    status: Number(item.code.slice(3)) <= 15 ? 'Documentado' : 'En validación',
    mockup: mockupForUseCase(item.code),
  }))
  const visible = items.filter((item) => (
    (!query || `${item.code} ${item.name}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    && (actor === 'Todos' || item.actor.includes(actor))
    && (priority === 'Todas' || item.priority === priority)
    && (status === 'Todos' || item.status === status)
  ))

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-emerald-950">Casos de uso detallados</h3>
          <p className="mt-1 text-sm text-slate-600">{visible.length} de {items.length} escenarios documentados</p>
        </div>
        <div className="grid w-full gap-2 sm:grid-cols-4 lg:w-auto">
          <label className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar CU" className="w-full rounded-xl border border-emerald-100 py-2 pl-8 pr-3 text-xs outline-none focus:border-emerald-400" />
          </label>
          <Filter value={actor} onChange={setActor} options={actorOptions} />
          <Filter value={priority} onChange={setPriority} options={['Todas', 'Alta', 'Media']} />
          <Filter value={status} onChange={setStatus} options={['Todos', 'Documentado', 'En validación']} />
        </div>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {visible.map((item) => (
          <details key={item.code} className="group rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-emerald-700">{item.code}</span>
                <span className="font-medium text-emerald-950">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag value={item.priority} />
                <ChevronDown size={15} className="text-emerald-600 transition group-open:rotate-180" />
              </div>
            </summary>
            <div className="space-y-3 border-t border-emerald-100 p-4 text-sm">
              <Row label="Objetivo" value={item.description} />
              <Row label="Actores" value={item.actor} />
              <Row label="Precondiciones" value="Usuario autenticado y datos maestros disponibles." />
              <Row label="Flujo normal" value={`El actor ejecuta ${item.name.toLocaleLowerCase()}; el sistema valida la solicitud y conserva evidencia de la operación.`} />
              <Row label="Alternativas" value="La operación se rechaza cuando no cumple reglas o faltan datos requeridos." />
              <Row label="Postcondiciones" value="Resultado registrado o consulta presentada sin alterar información indebidamente." />
              <div className="flex flex-wrap gap-2 pt-1">
                {item.requirements.split(', ').map((value) => <span key={value} className="rounded bg-emerald-50 px-2 py-1 font-mono text-[11px] text-emerald-700">{value}</span>)}
                {item.rules.split(', ').map((value) => <span key={value} className="rounded bg-cyan-50 px-2 py-1 font-mono text-[11px] text-cyan-700">{value}</span>)}
              </div>
              <Row label="Mockup relacionado" value={item.mockup} />
              <Row label="Estado" value={item.status} />
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

function mockupForUseCase(code: string) {
  const matches: Record<string, string> = {
    'CU-01': 'Login', 'CU-02': 'Punto de venta', 'CU-04': 'Inventario', 'CU-05': 'Productos',
    'CU-09': 'Proveedores', 'CU-11': 'Reportes', 'CU-13': 'Cierre diario', 'CU-14': 'Usuarios', 'CU-15': 'Mermas', 'CU-18': 'Dashboard',
  }
  return matches[code] ?? 'Pendiente de prototipo'
}

function Filter({ value, options, onChange }: { value: string; options: string[]; onChange: (value: string) => void }) {
  return <select value={value} onChange={(event) => onChange(event.target.value)} className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-xs text-slate-700 outline-none focus:border-emerald-400">{options.map((option) => <option key={option}>{option}</option>)}</select>
}

function Tag({ value }: { value: string }) {
  return <span className={`rounded-full px-2 py-1 text-[10px] font-medium ${value === 'Alta' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{value}</span>
}

function Row({ label, value }: { label: string; value: string }) {
  return <p className="leading-6 text-slate-600"><span className="font-medium text-emerald-900">{label}:</span> {value}</p>
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-5">
      <p className="text-3xl font-semibold text-emerald-700">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  )
}

function DocumentedCasesTable({ onOpenDiagram }: { onOpenDiagram: (code: string) => void }) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <Link2 className="text-emerald-600" size={21} />
        <div>
          <h3 className="text-xl font-semibold text-emerald-950">Catálogo resumido</h3>
          <p className="text-sm text-slate-600">Casos de uso normales relacionados con sus requerimientos y diagramas UML.</p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-emerald-100 bg-white shadow-sm">
        <table className="min-w-[980px] text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Código', 'Nombre', 'Actor principal', 'Descripción', 'Requerimientos', 'Diagrama'].map((label) => (
                <th key={label} className="px-4 py-4 font-medium">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {documentedUseCases.map((useCase) => (
              <tr key={useCase.code} className="transition hover:bg-emerald-50/60">
                <td className="px-4 py-3 font-mono font-semibold text-emerald-700">{useCase.code}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-emerald-950">{useCase.name}</td>
                <td className="px-4 py-3 text-slate-600">{useCase.actor}</td>
                <td className="max-w-64 px-4 py-3 leading-6 text-slate-600">{useCase.description}</td>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-emerald-700">{useCase.requirements}</td>
                <td className="px-4 py-3">
                  <button type="button" onClick={() => onOpenDiagram(useCase.code)} className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-emerald-700 transition hover:text-emerald-900">
                    Ver PNG <ExternalLink size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ScenarioOverview({
  scenario,
  onOpenDiagram,
}: {
  scenario: (typeof expandedScenarios)[number]
  onOpenDiagram: (code: string) => void
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
      <div className="grid gap-x-6 gap-y-4 text-sm sm:grid-cols-2">
        <Metadata label="Interesados" value={scenario.stakeholders} />
        <Metadata label="Nivel" value={scenario.level} />
        <Metadata label="Descripción" value={scenario.description} />
        <Metadata label="Evento desencadenador" value={scenario.trigger} />
        <Metadata label="Tipo de desencadenador" value={scenario.triggerType} />
      </div>
      <button
        type="button"
        onClick={() => onOpenDiagram(scenario.code)}
        className="self-start overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-left transition hover:border-emerald-300"
      >
        <img src={diagramImageUrl(scenario.diagram)} alt={`Diagrama ${scenario.name}`} className="h-28 w-full rounded-lg bg-white object-contain" />
        <span className="mt-3 flex items-center justify-between text-xs font-medium text-emerald-700">
          Diagrama relacionado <ExternalLink size={13} />
        </span>
      </button>
    </div>
  )
}

function Metadata({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{label}</p>
      <p className="mt-1 leading-6 text-slate-700">{value}</p>
    </div>
  )
}

function TraceabilityTable({ onOpenDiagram }: { onOpenDiagram: (code: string) => void }) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-semibold text-emerald-950">Trazabilidad funcional y reglas de negocio</h3>
      <p className="mb-5 text-sm text-slate-600">Relación empresarial entre caso de uso, requisitos, reglas y actores participantes.</p>
      <div className="overflow-x-auto rounded-2xl border border-emerald-100 bg-white">
        <table className="min-w-[900px] text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Caso de uso', 'Requerimientos funcionales', 'Reglas de negocio', 'Actores', 'Diagrama'].map((label) => (
                <th key={label} className="px-4 py-4 font-medium">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {documentedUseCases.map((useCase) => (
              <tr key={useCase.code} className="hover:bg-emerald-50/60">
                <td className="whitespace-nowrap px-4 py-3 font-medium text-emerald-950">{useCase.code} {useCase.name}</td>
                <td className="px-4 py-3 font-mono text-xs text-emerald-700">{useCase.requirements}</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">{useCase.rules}</td>
                <td className="px-4 py-3 text-slate-600">{useCase.actor}</td>
                <td className="px-4 py-3">
                  <button type="button" onClick={() => onOpenDiagram(useCase.code)} className="text-xs font-medium text-emerald-700 hover:text-emerald-900">
                    Abrir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
