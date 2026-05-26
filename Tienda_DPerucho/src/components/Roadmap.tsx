import { motion } from 'framer-motion'
import { Boxes, ClipboardList, Flag, LayoutPanelTop, SearchCheck, Waypoints, type LucideIcon } from 'lucide-react'
import { roadmap, type RoadmapStatus } from '../data/roadmap'
import { Section } from './Section'

const stepIcons: LucideIcon[] = [SearchCheck, SearchCheck, ClipboardList, ClipboardList, Waypoints, Boxes, Boxes, LayoutPanelTop, LayoutPanelTop, SearchCheck, Flag]
const statusStyles: Record<RoadmapStatus, string> = {
  Documentado: 'bg-emerald-50 text-emerald-700',
  'En validación': 'bg-cyan-50 text-cyan-700',
  Preparado: 'bg-teal-50 text-teal-700',
  Planificado: 'bg-slate-100 text-slate-600',
}

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Ruta del proyecto" title="Roadmap de análisis y diseño" description="Secuencia metodológica utilizada para convertir el problema operativo en una propuesta documentada y trazable.">
      <div className="relative grid gap-4 lg:grid-cols-4 xl:grid-cols-6 lg:gap-3">
        <div className="absolute left-5 top-0 h-full w-px bg-emerald-100 lg:hidden" />
        <motion.div
          className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-500 to-cyan-400 lg:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        />
        {roadmap.map((step, index) => (
          <motion.article
            key={step.number}
            className="relative ml-12 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm lg:ml-0"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="absolute -left-12 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 lg:static lg:mb-4">
              {(() => {
                const Icon = stepIcons[index]
                return <Icon size={18} />
              })()}
            </span>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-semibold text-emerald-700">{step.number}</span>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[step.status]}`}>{step.status}</span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-emerald-950">{step.title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-600">{step.description}</p>
            <p className="mt-4 text-[11px] text-slate-500">{step.week} · {step.deliverable}</p>
            <div className="mt-3 h-1.5 rounded-full bg-emerald-50"><div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: `${step.progress}%` }} /></div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
