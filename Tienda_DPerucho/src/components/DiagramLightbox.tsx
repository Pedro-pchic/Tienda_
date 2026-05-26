import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Diagram } from '../data/diagrams'
import { diagramImageUrl } from '../data/diagrams'

interface DiagramLightboxProps {
  diagrams: Diagram[]
  selected: Diagram | null
  onSelect: (diagram: Diagram) => void
  onClose: () => void
}

export function DiagramLightbox({ diagrams, selected, onSelect, onClose }: DiagramLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const selectedIndex = selected ? diagrams.findIndex((diagram) => diagram.id === selected.id) : -1

  const showPrevious = () => {
    if (selectedIndex < 0) return
    onSelect(diagrams[(selectedIndex - 1 + diagrams.length) % diagrams.length])
  }
  const showNext = () => {
    if (selectedIndex < 0) return
    onSelect(diagrams[(selectedIndex + 1) % diagrams.length])
  }

  useEffect(() => {
    if (!selected) return

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  })

  const openFullscreen = () => {
    panelRef.current?.requestFullscreen?.().catch(() => undefined)
  }

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/85 p-3 backdrop-blur-md md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            className="grid h-full max-h-[95vh] w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl lg:grid-cols-[minmax(0,1fr)_330px]"
            initial={{ scale: 0.97, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 10 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-emerald-50 p-4 sm:p-10">
              <button type="button" onClick={showPrevious} aria-label="Diagrama anterior" className="lightbox-nav left-3">
                <ChevronLeft />
              </button>
              <img
                src={diagramImageUrl(selected.image)}
                alt={`Diagrama UML ampliado: ${selected.title}`}
                className="max-h-full max-w-full rounded-xl bg-white object-contain shadow-lg"
              />
              <button type="button" onClick={showNext} aria-label="Diagrama siguiente" className="lightbox-nav right-3">
                <ChevronRight />
              </button>
            </div>
            <aside className="relative overflow-y-auto border-t border-emerald-100 p-6 lg:border-l lg:border-t-0">
              <div className="mb-10 flex items-center justify-between gap-2">
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  {selectedIndex + 1} / {diagrams.length}
                </span>
                <div className="flex gap-2">
                <button type="button" onClick={openFullscreen} aria-label="Abrir pantalla completa" className="modal-control">
                  <Maximize size={18} />
                </button>
                <button type="button" onClick={onClose} aria-label="Cerrar lightbox" className="modal-control">
                  <X size={20} />
                </button>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">UML · {selected.category}</span>
              <p className="mt-7 font-mono text-sm font-semibold text-emerald-700">{selected.id}</p>
              <h3 id="lightbox-title" className="mt-3 text-2xl font-semibold text-emerald-950">{selected.title}</h3>
              <p className="mt-5 text-sm leading-7 text-slate-600">{selected.description}</p>
              <p className="mt-10 text-xs leading-5 text-slate-500">Use las flechas del teclado para navegar o `ESC` para cerrar.</p>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
