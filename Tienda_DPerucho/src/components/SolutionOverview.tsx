import { ArrowDown, BarChart3, Box, Monitor, ShoppingCart, UserRound, type LucideIcon } from 'lucide-react'
import { Card } from './Card'
import { Section } from './Section'

const benefits = [
  'Centraliza ventas, inventario, productos y reportes.',
  'Ordena los procesos sin reemplazar la operación del negocio.',
  'Reduce errores manuales y mejora la trazabilidad.',
  'Facilita decisiones basadas en información disponible.',
]

const flow: Array<{ title: string; icon: LucideIcon }> = [
  { title: 'Cliente / Vendedor', icon: UserRound },
  { title: 'Interfaz del sistema', icon: Monitor },
  { title: 'Módulo de ventas', icon: ShoppingCart },
  { title: 'Inventario', icon: Box },
  { title: 'Reportes', icon: BarChart3 },
  { title: 'Decisiones del propietario', icon: UserRound },
]

export function SolutionOverview() {
  return (
    <Section id="solucion" eyebrow="Propuesta" title="Solución propuesta" description="Una solución conceptual enfocada en apoyar el servicio cercano de la tienda con control operativo y evidencia para decidir.">
      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <Card>
          <ul className="space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm leading-7 text-slate-700">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="bg-gradient-to-b from-white to-emerald-50">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Flujo conceptual</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {flow.map(({ title, icon: Icon }, index) => (
              <div key={title} className="relative">
                <div className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-emerald-100 bg-white p-3 text-center">
                  <Icon size={20} className="mb-2 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-950">{title}</span>
                </div>
                {index < flow.length - 1 && (
                  <ArrowDown className="mx-auto my-1 text-emerald-400 sm:absolute sm:-right-4 sm:top-9 sm:-rotate-90" size={17} />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  )
}
