import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, ChevronRight, Layers3 } from 'lucide-react'
import { architecturePath } from '../data/enterprise'

const badges = ['Proyecto académico', 'Análisis de Sistemas', 'Diseño conceptual', 'UML']
const metrics = [
  { value: '25', label: 'RF' },
  { value: '7', label: 'RNF' },
  { value: '15', label: 'Casos de Uso' },
  { value: '6', label: 'Procesos' },
  { value: '4', label: 'Capas Arquitectónicas' },
]

export function ExecutiveHero() {
  return (
    <section id="inicio" className="scroll-mt-24 py-12 lg:py-16">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-900/5 sm:p-10 lg:p-12"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="absolute -right-32 -top-36 h-96 w-96 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-96 bg-gradient-to-r from-emerald-100/10 to-teal-100/60 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                <BadgeCheck size={13} />
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-9 grid gap-10 xl:grid-cols-[1fr_390px] xl:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Portal ejecutivo</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                Sistema de Gestión para Tienda Don Perucho
              </h1>
              <p className="mt-5 text-lg font-medium text-emerald-700">Análisis • Modelado • Arquitectura • UX/UI</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Portal interactivo para presentar la resolución, análisis y diseño conceptual de un sistema de información para una tienda de proximidad.
              </p>
              <a href="#roadmap" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-700">
                Revisar documentación <ArrowRight size={18} />
              </a>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-950 to-emerald-800 p-5 text-white shadow-xl">
              <div className="mb-5 flex items-center gap-2 text-sm text-emerald-100">
                <Layers3 size={18} />
                Arquitectura conceptual
              </div>
              <div className="space-y-2">
                {architecturePath.map((layer, index) => (
                  <div key={layer}>
                    <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium">{layer}</div>
                    {index < architecturePath.length - 1 && <ChevronRight size={16} className="mx-auto my-1 rotate-90 text-emerald-300" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.06 }}
              >
                <p className="text-3xl font-semibold text-emerald-700">{metric.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
