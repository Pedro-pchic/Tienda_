import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, ImageIcon, X } from 'lucide-react'
import { useEffect } from 'react'
import { diagramImageUrl } from '../data/diagrams'
import type { UseCaseScenario } from '../data/useCaseScenarios'
import { PriorityBadge } from './UseCaseScenarioCard'

export function UseCaseScenarioModal({ scenario, onClose }: { scenario: UseCaseScenario | null; onClose: () => void }) {
  useEffect(() => {
    if (!scenario) return
    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, scenario])

  return (
    <AnimatePresence>
      {scenario && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 p-3 backdrop-blur-md md:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.article className="max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-emerald-100 bg-white shadow-2xl" initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <header className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-emerald-100 bg-white/95 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm font-semibold text-emerald-700">{scenario.id}</span>
                <h3 className="text-2xl font-semibold text-emerald-950">{scenario.title}</h3>
                <PriorityBadge priority={scenario.priority} />
              </div>
              <button type="button" onClick={onClose} aria-label="Cerrar escenario" className="rounded-xl border border-emerald-100 p-2 text-emerald-800 transition hover:bg-rose-50 hover:text-rose-700"><X size={20} /></button>
            </header>
            <div className="grid gap-7 p-6 lg:grid-cols-[1fr_290px]">
              <div className="space-y-7">
                <InfoGrid scenario={scenario} />
                <ListBlock title="Precondiciones" items={scenario.preconditions} />
                <FlowBlock title="Flujo principal" items={scenario.mainFlow} />
                <div>
                  <SectionTitle title="Flujos alternativos / excepciones" />
                  <div className="space-y-3">
                    {scenario.alternateFlows.map((flow) => (
                      <div key={flow.code} className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                        <p className="mb-3 text-sm font-semibold text-amber-800">{flow.code} · {flow.title}</p>
                        <ol className="space-y-2 text-sm text-slate-700">{flow.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                      </div>
                    ))}
                  </div>
                </div>
                <ListBlock title="Postcondiciones" items={scenario.postconditions} />
              </div>
              <aside className="space-y-5">
                <ChipPanel title="Reglas de negocio" values={scenario.businessRules} color="cyan" />
                <ChipPanel title="Requerimientos" values={scenario.relatedRequirements} color="emerald" />
                <div className="rounded-2xl border border-emerald-100 p-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Diagrama relacionado</p>
                  <img src={diagramImageUrl(scenario.relatedDiagram)} alt={`Diagrama ${scenario.title}`} className="h-40 w-full rounded-lg bg-emerald-50 object-contain" />
                  <p className="mt-3 flex items-center gap-2 text-xs text-emerald-700"><ImageIcon size={14} /> {scenario.id} UML <ExternalLink size={12} /></p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Mockup relacionado</p>
                  <p className="mt-3 text-sm font-medium text-emerald-950">{scenario.relatedMockup}</p>
                </div>
              </aside>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function InfoGrid({ scenario }: { scenario: UseCaseScenario }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Info label="Objetivo" value={scenario.objective} />
      <Info label="Actor principal" value={scenario.mainActor} />
      <Info label="Actores secundarios" value={scenario.secondaryActors.join(', ') || 'No aplica'} />
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl bg-emerald-50 p-4"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">{label}</p><p className="mt-2 text-sm leading-6 text-slate-700">{value}</p></div>
}

function SectionTitle({ title }: { title: string }) {
  return <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{title}</h4>
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <div><SectionTitle title={title} /><ul className="space-y-2">{items.map((item) => <li key={item} className="rounded-lg border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700">{item}</li>)}</ul></div>
}

function FlowBlock({ title, items }: { title: string; items: string[] }) {
  return <div><SectionTitle title={title} /><ol className="space-y-2">{items.map((item, index) => <li key={item} className="flex gap-3 rounded-lg border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"><span className="font-mono font-semibold text-emerald-700">{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol></div>
}

function ChipPanel({ title, values, color }: { title: string; values: string[]; color: 'cyan' | 'emerald' }) {
  return <div className="rounded-2xl border border-emerald-100 p-4"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{title}</p><div className="flex flex-wrap gap-2">{values.map((value) => <span key={value} className={`rounded-md px-2.5 py-1 font-mono text-xs ${color === 'cyan' ? 'bg-cyan-50 text-cyan-700' : 'bg-emerald-50 text-emerald-700'}`}>{value}</span>)}</div></div>
}
