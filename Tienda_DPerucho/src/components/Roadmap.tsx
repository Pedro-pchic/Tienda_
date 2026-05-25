import { motion } from 'framer-motion'
import { roadmap } from '../data/enterprise'
import { Section } from './Section'

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Ruta del proyecto" title="Roadmap de análisis y diseño" description="Secuencia metodológica utilizada para convertir el problema operativo en una propuesta documentada y trazable.">
      <div className="relative grid gap-4 lg:grid-cols-6 lg:gap-3">
        <div className="absolute left-5 top-0 h-full w-px bg-emerald-200 lg:left-0 lg:top-7 lg:h-px lg:w-full" />
        {roadmap.map((step, index) => (
          <motion.article
            key={step.number}
            className="relative ml-12 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm lg:ml-0 lg:mt-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="absolute -left-12 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-mono text-sm font-semibold text-white lg:-top-12 lg:left-4">
              {step.number}
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">{step.status}</span>
            <h3 className="mt-4 text-sm font-semibold text-emerald-950">{step.title}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-600">{step.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
