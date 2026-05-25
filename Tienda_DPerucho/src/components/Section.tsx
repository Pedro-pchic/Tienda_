import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  eyebrow?: string
  title: string
  description?: string
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 py-12 lg:py-16"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-8 max-w-3xl">
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-950 md:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
      </div>
      {children}
    </motion.section>
  )
}
