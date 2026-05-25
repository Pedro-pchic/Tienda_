import { AnimatePresence, motion } from 'framer-motion'
import {
  Boxes,
  ChartNoAxesColumn,
  CircleAlert,
  ClipboardCheck,
  FileText,
  Flag,
  GitBranch,
  Goal,
  Home,
  Layers3,
  Menu,
  Route,
  Store,
  TriangleAlert,
  UsersRound,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
}

const navigation: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'roadmap', label: 'Roadmap', icon: Route },
  { id: 'resumen', label: 'Vista ejecutiva', icon: ChartNoAxesColumn },
  { id: 'problema', label: 'Problema', icon: CircleAlert },
  { id: 'objetivos', label: 'Objetivos', icon: Goal },
  { id: 'solucion', label: 'Solución', icon: Layers3 },
  { id: 'alcance', label: 'Alcance', icon: ClipboardCheck },
  { id: 'core', label: 'Core del negocio', icon: Store },
  { id: 'procesos', label: 'Procesos', icon: Route },
  { id: 'diagramas', label: 'Diagramas', icon: Boxes },
  { id: 'requerimientos', label: 'Requerimientos', icon: FileText },
  { id: 'trazabilidad', label: 'Trazabilidad', icon: GitBranch },
  { id: 'casos', label: 'Casos de uso', icon: ClipboardCheck },
  { id: 'arquitectura', label: 'Arquitectura', icon: Layers3 },
  { id: 'tecnologias', label: 'Tecnologías', icon: Wrench },
  { id: 'stakeholders', label: 'Stakeholders', icon: UsersRound },
  { id: 'riesgos', label: 'Riesgos', icon: TriangleAlert },
  { id: 'mockups', label: 'Mockups', icon: Flag },
  { id: 'conclusion', label: 'Conclusión', icon: Goal },
]

function Navigation({ activeId, onSelect }: { activeId: string; onSelect?: () => void }) {
  return (
    <nav aria-label="Secciones del portal" className="space-y-1">
      {navigation.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={onSelect}
          aria-current={activeId === id ? 'location' : undefined}
          className={`group relative flex items-center gap-3 rounded-xl px-4 py-2 text-sm transition ${
            activeId === id
              ? 'bg-white/12 text-white shadow-sm shadow-emerald-400/10'
              : 'text-emerald-100/75 hover:bg-white/10 hover:text-white'
          }`}
        >
          {activeId === id && <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-emerald-300" />}
          <Icon size={17} className={`transition ${activeId === id ? 'text-emerald-300' : 'group-hover:text-emerald-300'}`} />
          {label}
        </a>
      ))}
    </nav>
  )
}

export function Sidebar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('inicio')

  useEffect(() => {
    const targets = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-emerald-900 bg-emerald-950 p-6 backdrop-blur md:flex">
        <Brand />
        <div className="mt-8 min-h-0 flex-1 overflow-y-auto pr-1">
          <p className="mb-4 px-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">Documento</p>
          <Navigation activeId={activeId} />
        </div>
        <div className="mt-5 border-t border-emerald-800 pt-5">
          <p className="mb-3 inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">Portal técnico</p>
          <p className="text-xs text-emerald-300/60">Análisis y Diseño de Sistemas · 2026</p>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-emerald-900 bg-emerald-950 px-5 py-4 backdrop-blur md:hidden">
        <Brand compact />
        <button
          type="button"
          className="rounded-lg border border-emerald-700 p-2 text-emerald-100"
          aria-label="Abrir navegación"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={21} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Cerrar navegación"
              className="fixed inset-0 z-40 bg-emerald-950/75 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-emerald-900 bg-emerald-950 p-6 md:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <Brand />
                <button type="button" aria-label="Cerrar navegación" onClick={() => setOpen(false)} className="text-emerald-100">
                  <X size={22} />
                </button>
              </div>
              <div className="mt-10">
                <Navigation activeId={activeId} onSelect={() => setOpen(false)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
        <Store size={21} />
      </span>
      {!compact && (
        <span>
          <strong className="block text-sm text-white">Don Perucho</strong>
          <span className="text-xs text-emerald-200/70">Portal técnico</span>
        </span>
      )}
    </a>
  )
}
