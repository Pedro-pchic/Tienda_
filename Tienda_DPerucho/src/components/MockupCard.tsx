import { motion } from 'framer-motion'
import { Expand, ImageOff, UserRound } from 'lucide-react'
import { useState } from 'react'
import type { Mockup } from '../data/mockups'
import { mockupImageUrl } from '../data/mockups'

interface MockupCardProps {
  mockup: Mockup
  onOpen: (mockup: Mockup) => void
}

export function MockupCard({ mockup, onOpen }: MockupCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5 transition hover:border-emerald-300 hover:shadow-emerald-900/10"
    >
      <button
        type="button"
        aria-label={`Ver pantalla ${mockup.title}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-emerald-950"
        onClick={() => onOpen(mockup)}
      >
        {imageError ? (
          <MockupFallback />
        ) : (
          <img
            src={mockupImageUrl(mockup.image)}
            alt={`Mockup de ${mockup.title}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
          />
        )}
        {!imageError && (
          <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pb-5 opacity-0 transition group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white">
              <Expand size={16} /> Ver pantalla
            </span>
          </span>
        )}
      </button>
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-mono text-xs font-semibold text-emerald-700">{mockup.id}</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">
            {mockup.status}
          </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{mockup.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-emerald-950">{mockup.title}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{mockup.description}</p>
        <div className="mt-5 flex items-center gap-2 border-t border-emerald-100 pt-4 text-sm text-slate-600">
          <UserRound size={16} className="text-emerald-600" />
          {mockup.actor}
        </div>
        <button
          type="button"
          onClick={() => onOpen(mockup)}
          className="mt-5 w-full rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-medium text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Ver pantalla
        </button>
      </div>
    </motion.article>
  )
}

export function MockupFallback() {
  return (
    <span className="flex h-full w-full flex-col items-center justify-center border-b border-dashed border-emerald-200 bg-emerald-50 text-slate-500">
      <ImageOff size={32} className="mb-3 text-emerald-600" />
      <span className="text-sm">Mockup pendiente</span>
    </span>
  )
}
