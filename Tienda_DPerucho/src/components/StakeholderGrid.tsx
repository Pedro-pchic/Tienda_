import { UserRound } from 'lucide-react'
import { stakeholders } from '../data/enterprise'
import { Card } from './Card'
import { Section } from './Section'

export function StakeholderGrid() {
  return (
    <Section id="stakeholders" eyebrow="Interesados" title="Stakeholders" description="Actores cuyo trabajo o experiencia se beneficia de una solución bien analizada.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stakeholders.map((stakeholder) => (
          <Card key={stakeholder.role} className="flex gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <UserRound size={20} />
            </span>
            <div>
              <h3 className="font-semibold text-emerald-950">{stakeholder.role}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stakeholder.interest}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
