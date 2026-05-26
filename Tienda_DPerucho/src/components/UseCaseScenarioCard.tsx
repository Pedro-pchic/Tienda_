import { motion } from 'framer-motion'
import { ArrowRight, UserRound } from 'lucide-react'
import type { UseCaseScenario } from '../data/useCaseScenarios'

export function UseCaseScenarioCard({ scenario, onOpen }: { scenario: UseCaseScenario; onOpen: (scenario: UseCaseScenario) => void }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm shadow-emerald-900/5 transition hover:border-emerald-300">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-lg bg-emerald-50 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">{scenario.id}</span>
        <PriorityBadge priority={scenario.priority} />
      </div>
      <h3 className="text-lg font-semibold text-emerald-950">{scenario.title}</h3>
      <p className="mt-3 flex items-center gap-2 text-sm text-slate-600"><UserRound size={15} className="text-emerald-600" /> {scenario.mainActor}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{scenario.objective}</p>
      <button type="button" onClick={() => onOpen(scenario)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700">
        Ver escenario <ArrowRight size={15} />
      </button>
    </motion.article>
  )
}

export function PriorityBadge({ priority }: { priority: UseCaseScenario['priority'] }) {
  const color = priority === 'Crítica' ? 'bg-rose-100 text-rose-700' : priority === 'Alta' ? 'bg-amber-100 text-amber-700' : 'bg-cyan-100 text-cyan-700'
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${color}`}>{priority}</span>
}
