import { CheckCircle2, XCircle } from 'lucide-react'
import { projectScope } from '../data/enterprise'
import { Card } from './Card'
import { Section } from './Section'

export function ProjectScope() {
  return (
    <Section id="alcance" eyebrow="Límites" title="Alcance del proyecto" description="El entregable documenta una solución candidata; no simula una plataforma productiva.">
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="border-emerald-200">
          <p className="mb-5 text-sm font-semibold text-emerald-800">Incluye</p>
          <ul className="space-y-3">
            {projectScope.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={17} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="border-stone-200">
          <p className="mb-5 text-sm font-semibold text-slate-700">No incluye</p>
          <ul className="space-y-3">
            {projectScope.excludes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <XCircle size={17} className="text-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
