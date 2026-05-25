import { Braces, Database, Layers3, Server, Workflow, type LucideIcon } from 'lucide-react'
import { technologyGroups } from '../data/enterprise'
import { Card } from './Card'
import { Section } from './Section'

const icons: LucideIcon[] = [Braces, Server, Database, Workflow, Layers3]

export function TechnologyOverview() {
  return (
    <Section id="tecnologias" eyebrow="Implementación futura" title="Tecnologías propuestas" description="Stack recomendado para una etapa posterior de construcción, separado de este portal documental.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {technologyGroups.map((group, index) => {
          const Icon = icons[index]
          return (
            <Card key={group.title} className="p-5">
              <Icon size={21} className="mb-4 text-emerald-600" />
              <h3 className="text-sm font-semibold text-emerald-950">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700">
                    {technology}
                  </span>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
