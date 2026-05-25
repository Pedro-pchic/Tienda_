import { motion } from 'framer-motion'
import { Boxes, FileText, Layers3, Monitor, Route, ShieldAlert, ClipboardCheck, Settings2, type LucideIcon } from 'lucide-react'
import { Section } from './Section'

const artifacts: Array<{ value: string; label: string; icon: LucideIcon }> = [
  { value: '25', label: 'Requerimientos funcionales', icon: FileText },
  { value: '7', label: 'Requerimientos no funcionales', icon: Settings2 },
  { value: '15', label: 'Casos de uso', icon: ClipboardCheck },
  { value: '8', label: 'Diagramas cargados', icon: Boxes },
  { value: '6', label: 'Procesos del negocio', icon: Route },
  { value: '4', label: 'Capas arquitectónicas', icon: Layers3 },
  { value: '6', label: 'Riesgos identificados', icon: ShieldAlert },
  { value: '6', label: 'Mockups propuestos', icon: Monitor },
]

export function ArtifactDashboard() {
  return (
    <Section id="resumen" eyebrow="Cobertura" title="Vista ejecutiva del análisis" description="Inventario condensado de los artefactos y decisiones documentadas en el portal.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {artifacts.map(({ value, label, icon: Icon }, index) => (
          <motion.div
            key={label}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm shadow-emerald-900/5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035 }}
          >
            <Icon className="mb-5 text-emerald-600" size={21} />
            <p className="text-3xl font-semibold text-emerald-950">{value}</p>
            <p className="mt-2 text-sm text-slate-600">{label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
