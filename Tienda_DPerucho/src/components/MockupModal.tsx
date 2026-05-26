import { AnimatePresence, motion } from 'framer-motion'
import { ImageOff, Layers3, Target, UserRound, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Mockup } from '../data/mockups'
import { mockupImageUrl } from '../data/mockups'

interface MockupModalProps {
  mockup: Mockup | null
  onClose: () => void
}

export function MockupModal({ mockup, onClose }: MockupModalProps) {
  useEffect(() => {
    if (!mockup) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [mockup, onClose])

  return (
    <AnimatePresence>
      {mockup && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mockup-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 p-3 backdrop-blur-md md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <MockupContent key={mockup.id} mockup={mockup} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MockupContent({ mockup, onClose }: { mockup: Mockup; onClose: () => void }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className="grid max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-2xl lg:grid-cols-[minmax(0,1fr)_360px]"
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex min-h-64 items-center justify-center overflow-auto bg-emerald-950 p-4 md:p-7">
        {imageError ? (
          <div className="flex min-h-64 w-full flex-col items-center justify-center rounded-xl border border-dashed border-emerald-700 text-emerald-100">
            <ImageOff size={38} className="mb-4 text-emerald-300" />
            <p>Mockup pendiente</p>
          </div>
        ) : (
          <img
            src={mockupImageUrl(mockup.image)}
            alt={`Pantalla ampliada de ${mockup.title}`}
            onError={() => setImageError(true)}
            className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-xl"
          />
        )}
      </div>
      <aside className="relative overflow-y-auto border-t border-emerald-100 p-6 lg:border-l lg:border-t-0">
        <button
          type="button"
          aria-label="Cerrar pantalla"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg border border-emerald-200 p-2 text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-50"
        >
          <X size={19} />
        </button>
        <p className="pr-12 font-mono text-xs font-semibold text-emerald-700">{mockup.id} · {mockup.category}</p>
        <h3 id="mockup-title" className="mt-4 pr-10 text-2xl font-semibold text-emerald-950">{mockup.title}</h3>
        <span className="mt-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
          {mockup.status}
        </span>
        <p className="mt-6 text-sm leading-7 text-slate-600">{mockup.description}</p>
        <div className="mt-8 space-y-6 border-t border-emerald-100 pt-6 text-sm">
          <Metadata icon={UserRound} label="Actor principal" value={mockup.actor} />
          <Metadata icon={Target} label="Objetivo" value={mockup.objective} />
          <Metadata icon={Layers3} label="Categoría" value={mockup.category} />
          <Metadata icon={Layers3} label="Trazabilidad RF / CU" value={mockup.related} />
        </div>
      </aside>
    </motion.div>
  )
}

interface MetadataProps {
  icon: typeof UserRound
  label: string
  value: string
}

function Metadata({ icon: Icon, label, value }: MetadataProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} className="mt-0.5 shrink-0 text-emerald-600" />
      <div>
        <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <p className="leading-6 text-emerald-950">{value}</p>
      </div>
    </div>
  )
}
