import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Brand, SidebarPanel } from './SidebarPanel'

export function MobileSidebar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-emerald-400/10 bg-[#003b2f]/95 px-5 py-3.5 shadow-lg shadow-emerald-950/10 backdrop-blur md:hidden">
        <Brand compact />
        <span className="mr-auto ml-3 text-sm font-medium text-emerald-50">Portal técnico</span>
        <button
          type="button"
          className="rounded-xl border border-emerald-400/20 bg-white/[0.04] p-2.5 text-emerald-100 transition hover:bg-white/10"
          aria-label="Abrir navegación"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar navegación"
              className="fixed inset-0 z-40 bg-emerald-950/75 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              aria-label="Navegación móvil"
              className="fixed inset-y-0 left-0 z-50 w-[min(20rem,88vw)] border-r border-emerald-400/10 bg-[#003b2f] shadow-2xl shadow-emerald-950/45 md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 29, stiffness: 290 }}
            >
              <button
                type="button"
                aria-label="Cerrar navegación"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-5 z-10 rounded-lg p-2 text-emerald-100/70 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
              <SidebarPanel activeId={activeId} onSelect={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
