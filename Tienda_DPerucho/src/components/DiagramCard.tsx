import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import type { Diagram } from '../data/diagrams'
import { diagramImageUrl } from '../data/diagrams'

interface DiagramCardProps {
  diagram: Diagram
  onOpen: (diagram: Diagram) => void
}

export function DiagramCard({ diagram, onOpen }: DiagramCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5 transition hover:border-emerald-300"
    >
      <button
        type="button"
        aria-label={`Expandir diagrama ${diagram.title}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-white/95"
        onClick={() => onOpen(diagram)}
      >
        <img
          src={diagramImageUrl(diagram.image)}
          alt={`Diagrama UML: ${diagram.title}`}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-emerald-950/0 transition group-hover:bg-emerald-950/35">
          <span className="translate-y-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            Ver diagrama
          </span>
        </span>
      </button>
      <div className="p-5">
        <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-700">
          UML · {diagram.category}
        </span>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold text-emerald-700">{diagram.id}</p>
            <h3 className="mt-2 font-semibold text-emerald-950">{diagram.title}</h3>
          </div>
          <button
            type="button"
            onClick={() => onOpen(diagram)}
            aria-label={`Abrir ${diagram.title} en pantalla completa`}
            className="rounded-lg border border-emerald-100 p-2 text-slate-500 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            <Expand size={17} />
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{diagram.description}</p>
      </div>
    </motion.article>
  )
}
