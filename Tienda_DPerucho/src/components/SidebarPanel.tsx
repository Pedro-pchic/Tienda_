import { motion } from 'framer-motion'
import { BookOpenText, ExternalLink, Store } from 'lucide-react'
import { navigationGroups } from '../data/navigation'

interface SidebarPanelProps {
  activeId: string
  onSelect?: () => void
}

export function SidebarPanel({ activeId, onSelect }: SidebarPanelProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden px-5 pb-5 pt-6">
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-28 left-[2.05rem] w-px bg-gradient-to-b from-transparent via-emerald-400/15 to-transparent" />

      <Brand onSelect={onSelect} />

      <nav aria-label="Secciones del portal" className="relative mt-6 min-h-0 flex-1 space-y-5 overflow-y-auto pr-1 sidebar-scrollbar">
        {navigationGroups.map(({ title, items }) => (
          <section key={title} aria-label={title}>
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/55">{title}</p>
            <div className="space-y-0.5">
              {items.map(({ id, label, icon: Icon, badge }) => {
                const active = activeId === id
                return (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    title={label}
                    onClick={onSelect}
                    aria-current={active ? 'location' : undefined}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.16 }}
                    className={`group relative flex items-center gap-3 rounded-xl border-l-[3px] px-3 py-1.5 text-[13px] transition-colors ${
                      active
                        ? 'border-emerald-400 bg-gradient-to-r from-emerald-500/15 to-cyan-400/[0.06] text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                        : 'border-transparent text-emerald-100/70 hover:border-emerald-400/25 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-xl bg-emerald-300/[0.03]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.18 }}
                      />
                    )}
                    <Icon
                      size={16}
                      className={`shrink-0 transition-colors ${active ? 'text-emerald-300' : 'text-emerald-300/60 group-hover:text-cyan-300'}`}
                    />
                    <span className="truncate">{label}</span>
                    {badge && (
                      <span className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${active ? 'bg-emerald-300/15 text-emerald-200' : 'bg-white/[0.06] text-emerald-200/65'}`}>
                        {badge}
                      </span>
                    )}
                  </motion.a>
                )
              })}
            </div>
          </section>
        ))}
      </nav>

      <ProgressCard />
      <SidebarFooter />
    </div>
  )
}

export function Brand({ compact = false, onSelect }: { compact?: boolean; onSelect?: () => void }) {
  return (
    <a href="#inicio" onClick={onSelect} className="relative flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-emerald-950 shadow-lg shadow-emerald-400/20">
        <Store size={21} />
      </span>
      {!compact && (
        <span className="min-w-0">
          <span className="flex items-center gap-2">
            <strong className="block text-sm text-white">Don Perucho</strong>
            <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-200">v1.0</span>
          </span>
          <span className="block text-xs text-emerald-100/60">Portal técnico</span>
          <span className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" />
            Documentación activa
          </span>
        </span>
      )}
    </a>
  )
}

function ProgressCard() {
  return (
    <div className="relative mt-5 rounded-2xl border border-emerald-400/10 bg-white/[0.04] p-4">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-medium text-emerald-100">Avance documental</span>
        <span className="font-semibold text-cyan-300">85%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-emerald-950">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 shadow-[0_0_12px_rgba(45,212,191,0.45)]"
          initial={{ width: 0 }}
          animate={{ width: '85%' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
      <p className="mt-2 text-[11px] leading-4 text-emerald-100/55">Artefactos principales documentados</p>
    </div>
  )
}

function SidebarFooter() {
  return (
    <footer className="mt-4 border-t border-emerald-400/10 pt-4">
      <span className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
        Portal técnico
      </span>
      <p className="mt-3 text-xs text-emerald-100/70">Análisis y Diseño de Sistemas</p>
      <p className="text-[11px] text-emerald-100/45">2026</p>
      <div className="my-3 h-px w-10 bg-gradient-to-r from-emerald-400 to-transparent" />
      <a href="#inicio" className="inline-flex items-center gap-2 text-xs text-emerald-300/80 transition hover:text-cyan-200">
        <BookOpenText size={13} />
        Documentación
        <ExternalLink size={11} />
      </a>
    </footer>
  )
}
