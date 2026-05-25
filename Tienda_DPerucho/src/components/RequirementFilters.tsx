import { Search } from 'lucide-react'
import type { Priority, RequirementType } from '../data/requirements'

interface RequirementFiltersProps {
  query: string
  type: 'Todos' | RequirementType
  priority: 'Todos' | Priority
  resultCount: number
  onQueryChange: (query: string) => void
  onTypeChange: (type: 'Todos' | RequirementType) => void
  onPriorityChange: (priority: 'Todos' | Priority) => void
}

export function RequirementFilters({
  query,
  type,
  priority,
  resultCount,
  onQueryChange,
  onTypeChange,
  onPriorityChange,
}: RequirementFiltersProps) {
  return (
    <div className="mb-5 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm shadow-emerald-900/5">
      <div className="grid gap-3 lg:grid-cols-[1fr_180px_160px_auto] lg:items-center">
        <label className="relative">
          <span className="sr-only">Buscar requerimientos</span>
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar por código, requerimiento o área"
            className="w-full rounded-xl border border-emerald-100 bg-emerald-50/50 py-2.5 pl-10 pr-3 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white"
          />
        </label>
        <FilterSelect label="Tipo" value={type} options={['Todos', 'Funcional', 'No funcional']} onChange={onTypeChange} />
        <FilterSelect label="Prioridad" value={priority} options={['Todos', 'Alta', 'Media', 'Baja']} onChange={onPriorityChange} />
        <span className="justify-self-start rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 lg:justify-self-end">
          {resultCount} resultados
        </span>
      </div>
    </div>
  )
}

interface FilterSelectProps<T extends string> {
  label: string
  value: T
  options: readonly T[]
  onChange: (value: T) => void
}

function FilterSelect<T extends string>({ label, value, options, onChange }: FilterSelectProps<T>) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
        className="w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-emerald-400"
      >
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}
