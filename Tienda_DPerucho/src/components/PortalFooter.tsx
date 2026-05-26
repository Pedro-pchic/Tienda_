import { motion } from 'framer-motion'
import { BookOpenText, GraduationCap } from 'lucide-react'

export function PortalFooter() {
  return (
    <motion.footer
      className="relative mt-12 overflow-hidden rounded-3xl border border-emerald-100 bg-white px-6 py-7 shadow-sm shadow-emerald-900/5 md:px-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.42 }}
    >
      <div className="absolute -right-12 -top-20 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
            <GraduationCap size={14} />
            Proyecto académico
          </span>
          <p className="mt-5 text-base font-semibold text-emerald-950">Tienda Don Perucho</p>
          <p className="mt-1 text-sm text-slate-600">Análisis y Diseño de Sistemas · 2026</p>
        </div>
        <div className="max-w-sm sm:text-right">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
            <BookOpenText size={16} />
            Portal interactivo de documentación técnica
          </p>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent sm:ml-auto sm:w-52" />
          <p className="mt-4 text-xs text-slate-500">Análisis, modelado, arquitectura y experiencia UX/UI</p>
        </div>
      </div>
    </motion.footer>
  )
}
