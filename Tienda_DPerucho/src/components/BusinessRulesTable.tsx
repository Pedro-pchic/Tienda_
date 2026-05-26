import { Filter, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { businessRules, type RuleSeverity, type ValidationStatus } from '../data/businessRules'

export function BusinessRulesTable() {
  const [severity, setSeverity] = useState<'Todas' | RuleSeverity>('Todas')
  const [actor, setActor] = useState('Todos')
  const [useCase, setUseCase] = useState('Todos')
  const [validation, setValidation] = useState<'Todas' | ValidationStatus>('Todas')
  const actors = [...new Set(businessRules.map((item) => item.actor))]
  const useCases = [...new Set(businessRules.map((item) => item.useCase))]
  const filtered = useMemo(() => businessRules.filter((item) => (
    (severity === 'Todas' || item.severity === severity)
    && (actor === 'Todos' || item.actor === actor)
    && (useCase === 'Todos' || item.useCase === useCase)
    && (validation === 'Todas' || item.validation === validation)
  )), [actor, severity, useCase, validation])

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm">
      <div className="border-b border-emerald-100 bg-emerald-50/70 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 font-medium text-emerald-900"><ShieldCheck size={18} /> Controles operativos y validaciones</p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-700">{filtered.length} reglas visibles</span>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <Selector label="Severidad" value={severity} onChange={(value) => setSeverity(value as 'Todas' | RuleSeverity)} options={['Todas', 'Media', 'Alta', 'Crítica']} />
          <Selector label="Actor" value={actor} onChange={setActor} options={['Todos', ...actors]} />
          <Selector label="Caso de uso" value={useCase} onChange={setUseCase} options={['Todos', ...useCases]} />
          <Selector label="Validación" value={validation} onChange={(value) => setValidation(value as 'Todas' | ValidationStatus)} options={['Todas', 'Automática', 'Control de rol', 'Programada']} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[1220px] text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Código', 'Regla', 'Justificación', 'Actor', 'Caso de uso', 'Riesgo asociado', 'Severidad', 'Impacto', 'Validación'].map((header) => (
                <th key={header} className="px-4 py-4 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {filtered.map((rule) => (
              <tr key={rule.code} className="transition hover:bg-emerald-50/60">
                <td className="px-4 py-4 font-mono font-semibold text-emerald-700">{rule.code}</td>
                <td className="max-w-52 px-4 py-4 font-medium text-emerald-950">{rule.rule}</td>
                <td className="max-w-60 px-4 py-4 text-slate-600">{rule.justification}</td>
                <td className="px-4 py-4 text-slate-700">{rule.actor}</td>
                <td className="px-4 py-4 font-mono text-emerald-700">{rule.useCase}</td>
                <td className="px-4 py-4 text-slate-600">{rule.risk}</td>
                <td className="px-4 py-4"><Severity value={rule.severity} /></td>
                <td className="px-4 py-4 text-slate-600">{rule.impact}</td>
                <td className="px-4 py-4 text-emerald-700">{rule.validation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Selector({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <Filter size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none rounded-xl border border-emerald-100 bg-white py-2.5 pl-8 pr-3 text-xs text-slate-700 outline-none focus:border-emerald-400">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )
}

function Severity({ value }: { value: RuleSeverity }) {
  const style = value === 'Crítica' ? 'bg-rose-100 text-rose-700' : value === 'Alta' ? 'bg-amber-100 text-amber-700' : 'bg-cyan-100 text-cyan-700'
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${style}`}>{value}</span>
}
