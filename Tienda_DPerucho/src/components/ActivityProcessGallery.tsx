import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Expand, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { processes, type BusinessProcess } from '../data/processes'

export function ActivityProcessGallery() {
  const [selected, setSelected] = useState<BusinessProcess | null>(null)

  useEffect(() => {
    if (!selected) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selected])

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {processes.map((process) => (
          <motion.article key={process.id} className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5" whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
            <div className="border-b border-emerald-100 bg-gradient-to-br from-emerald-950 to-emerald-800 p-4">
              <ActivityPreview steps={process.steps} compact />
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><process.icon size={20} /></span>
                <div>
                  <p className="font-mono text-[11px] text-emerald-700">{process.id}</p>
                  <h3 className="font-semibold text-emerald-950">{process.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{process.description}</p>
              <p className="mt-4 text-xs text-slate-500">Actor principal: <span className="font-medium text-emerald-800">{process.actor}</span></p>
              <Chips values={process.requirements} />
              <Chips values={process.rules} muted />
              <button type="button" onClick={() => setSelected(process)} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/15 transition hover:bg-cyan-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                <Expand size={15} /> Ver detalle
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="w-full max-w-5xl rounded-3xl border border-emerald-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,59,47,0.28)] md:p-8" initial={{ scale: 0.97, y: 16, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.97, y: 16, opacity: 0 }} transition={{ duration: 0.22 }} onClick={(event) => event.stopPropagation()}>
              <div className="mb-7 flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">{selected.id} · Flujo operativo</p>
                  <h3 className="mt-2 text-2xl font-semibold text-emerald-950 md:text-3xl">{selected.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{selected.description}</p>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="rounded-xl border border-emerald-200 bg-white p-2.5 text-emerald-800 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700" aria-label="Cerrar detalle"><X size={19} /></button>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 md:p-5">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-700">Secuencia del proceso</p>
                <ActivityPreview steps={selected.steps} detailed />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <Detail label="Actor principal" value={selected.actor} />
                <Detail label="Requerimientos" value={selected.requirements.join(', ')} />
                <Detail label="Reglas aplicadas" value={selected.rules.join(', ')} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ActivityPreview({ steps, compact = false, detailed = false }: { steps: string[]; compact?: boolean; detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row">
            <motion.div
              className="flex min-h-20 w-full items-center gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-left text-emerald-950 shadow-sm shadow-emerald-900/5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, borderColor: 'rgb(52 211 153)' }}
              transition={{ delay: index * 0.055, duration: 0.18 }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 font-mono text-xs font-bold text-emerald-800">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-sm font-semibold leading-5 text-slate-900">{step}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <>
                <ArrowDown className="shrink-0 text-emerald-600 md:hidden" size={22} />
                <ArrowRight className="hidden shrink-0 text-emerald-600 md:block" size={24} />
              </>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex items-center ${compact ? 'gap-1' : 'flex-col gap-2 sm:flex-row'}`}>
      {steps.map((step, index) => (
        <div key={step} className={`flex items-center ${compact ? 'gap-1' : 'w-full gap-2'}`}>
          <span className={`flex flex-1 items-center justify-center rounded-lg border border-emerald-300/20 bg-white/10 text-center text-emerald-50 ${compact ? 'min-h-12 px-1 text-[9px]' : 'min-h-16 px-3 text-sm'}`}>{step}</span>
          {index < steps.length - 1 && <ArrowRight className="shrink-0 text-cyan-300" size={compact ? 11 : 17} />}
        </div>
      ))}
    </div>
  )
}

function Chips({ values, muted = false }: { values: string[]; muted?: boolean }) {
  return <div className="mt-3 flex flex-wrap gap-1.5">{values.map((value) => <span key={value} className={`rounded-md px-2 py-1 font-mono text-[11px] ${muted ? 'bg-slate-50 text-slate-600' : 'bg-emerald-50 text-emerald-700'}`}>{value}</span>)}</div>
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm shadow-emerald-900/[0.03]"><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">{label}</p><p className="mt-2 text-sm font-medium leading-6 text-slate-800">{value}</p></div>
}
