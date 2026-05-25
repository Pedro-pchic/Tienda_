import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, RotateCcw, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Diagram } from '../data/diagrams'
import { diagramImageUrl } from '../data/diagrams'

interface DiagramModalProps {
  diagram: Diagram | null
  onClose: () => void
}

export function DiagramModal({ diagram, onClose }: DiagramModalProps) {
  useEffect(() => {
    if (!diagram) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [diagram, onClose])

  return (
    <AnimatePresence>
      {diagram && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="diagram-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 p-3 backdrop-blur-md md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent key={diagram.id} diagram={diagram} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ModalContent({ diagram, onClose }: { diagram: Diagram; onClose: () => void }) {
  const [zoom, setZoom] = useState(1)
  const zoomIn = () => setZoom((value) => Math.min(value + 0.2, 2))
  const zoomOut = () => setZoom((value) => Math.max(value - 0.2, 0.6))

  return (
    <motion.div
      className="flex h-full max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-2xl"
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-100 px-5 py-4">
        <div>
          <p className="font-mono text-xs font-semibold text-emerald-700">{diagram.id} · {diagram.category}</p>
          <h3 id="diagram-title" className="mt-1 text-lg font-semibold text-emerald-950">{diagram.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={zoomOut} aria-label="Alejar diagrama" className="modal-control">
            <Minus size={18} />
          </button>
          <span className="w-14 text-center text-sm text-slate-600">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={zoomIn} aria-label="Acercar diagrama" className="modal-control">
            <Plus size={18} />
          </button>
          <button type="button" onClick={() => setZoom(1)} aria-label="Restablecer zoom" className="modal-control ml-1">
            <RotateCcw size={17} />
          </button>
          <button type="button" aria-label="Cerrar modal" onClick={onClose} className="modal-control ml-3">
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center overflow-auto bg-emerald-50 p-4 md:p-8">
        <motion.img
          animate={{ scale: zoom }}
          transition={{ duration: 0.2 }}
          src={diagramImageUrl(diagram.image)}
          alt={`Diagrama UML ampliado: ${diagram.title}`}
          className="max-h-full max-w-full rounded-lg bg-white object-contain shadow-xl"
        />
      </div>
    </motion.div>
  )
}
