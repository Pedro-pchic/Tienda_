import { motion } from 'framer-motion'
import {
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileSearch,
  PackageX,
  Receipt,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import { ArtifactDashboard } from './components/ArtifactDashboard'
import { ActivityProcessGallery } from './components/ActivityProcessGallery'
import { BusinessRulesTable } from './components/BusinessRulesTable'
import { Card } from './components/Card'
import { CoreValueChain } from './components/CoreValueChain'
import { DiagramCard } from './components/DiagramCard'
import { DiagramLightbox } from './components/DiagramLightbox'
import { ExecutiveHero } from './components/ExecutiveHero'
import { EntityRelationshipModel } from './components/EntityRelationshipModel'
import { MockupCard } from './components/MockupCard'
import { MockupModal } from './components/MockupModal'
import { PortalFooter } from './components/PortalFooter'
import { ProjectScope } from './components/ProjectScope'
import { RequirementTable } from './components/RequirementTable'
import { RiskDashboard } from './components/RiskDashboard'
import { Roadmap } from './components/Roadmap'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { SolutionOverview } from './components/SolutionOverview'
import { StakeholderGrid } from './components/StakeholderGrid'
import { TechnologyOverview } from './components/TechnologyOverview'
import { TechnicalArchitecture } from './components/TechnicalArchitecture'
import { TraceabilityMatrix } from './components/TraceabilityMatrix'
import { UseCaseDocumentation } from './components/UseCaseDocumentation'
import { UseCaseScenarios } from './components/UseCaseScenarios'
import { UserStoriesSection } from './components/UserStoriesSection'
import { diagramCategories, diagrams, type Diagram, type DiagramCategory } from './data/diagrams'
import { mockupCategories, mockups, type Mockup, type MockupCategory } from './data/mockups'
import { requirements } from './data/requirements'

const problems = [
  { title: 'Ventas manuales', text: 'La anotación informal dificulta auditar operaciones.', icon: Receipt },
  { title: 'Inventario sin control exacto', text: 'No existe certeza inmediata sobre disponibilidad.', icon: PackageX },
  { title: 'Errores en precios', text: 'Los cambios no centralizados generan cobros incorrectos.', icon: CircleDollarSign },
  { title: 'Pérdidas de productos', text: 'Las diferencias de stock no se detectan oportunamente.', icon: ShieldCheck },
  { title: 'Falta de reportes', text: 'El propietario decide sin indicadores consolidados.', icon: FileSearch },
  { title: 'Lentitud al atender clientes', text: 'Buscar productos y sumar totales consume tiempo.', icon: Clock3 },
]

const objectives = [
  'Modelar la venta y el movimiento de inventario con información verificable.',
  'Definir requerimientos funcionales y de calidad alineados con la operación.',
  'Diseñar interfaces ágiles para ventas, productos, inventario y reportes.',
  'Plantear una arquitectura organizada que facilite una futura implementación.',
]

const layers = [
  { name: 'Capa de Presentación', detail: 'Pantallas, navegación, formularios y retroalimentación para cada actor.' },
  { name: 'Capa de Aplicación', detail: 'Casos de uso: venta, compra, inventario, reportes y cierre diario.' },
  { name: 'Capa de Dominio', detail: 'Reglas para producto, precio, existencia, transacción y validaciones.' },
  { name: 'Capa de Infraestructura', detail: 'Persistencia futura, respaldos, exportación e integración de dispositivos.' },
]

function App() {
  const [selectedDiagram, setSelectedDiagram] = useState<Diagram | null>(null)
  const [activeCategory, setActiveCategory] = useState<'Todas' | DiagramCategory>('Todas')
  const [selectedMockup, setSelectedMockup] = useState<Mockup | null>(null)
  const [activeMockupCategory, setActiveMockupCategory] = useState<'Todos' | MockupCategory>('Todos')
  const filteredDiagrams = activeCategory === 'Todas'
    ? diagrams
    : diagrams.filter((diagram) => diagram.category === activeCategory)
  const filteredMockups = activeMockupCategory === 'Todos'
    ? mockups
    : mockups.filter((mockup) => mockup.category === activeMockupCategory)
  const openUseCaseDiagram = (code: string) => {
    const diagram = diagrams.find((item) => item.id === code)
    if (diagram) setSelectedDiagram(diagram)
  }

  return (
    <div className="min-h-screen bg-[#f7faf5] text-slate-700">
      <Sidebar />
      <main className="px-5 pb-16 pt-20 md:ml-80 md:px-10 md:pt-0 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <ExecutiveHero />
          <Roadmap />
          <ArtifactDashboard />

          <Section id="problema" eyebrow="Diagnóstico" title="Problema del negocio" description="La operación manual limita la velocidad de atención y la trazabilidad necesaria para administrar una tienda de proximidad.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {problems.map(({ title, text, icon: Icon }) => (
                <Card key={title} className="p-5">
                  <Icon className="mb-5 text-emerald-600" />
                  <h3 className="mb-2 font-semibold text-emerald-950">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="objetivos" eyebrow="Dirección" title="Objetivos" description="La propuesta parte del proceso real para definir una solución clara, usable y viable.">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
              <Card className="border-emerald-200">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">Objetivo general</p>
                <p className="mt-5 text-lg leading-8 text-emerald-950">
                  Analizar y diseñar un sistema de información que mejore el control operativo y la toma de decisiones de la Tienda Don Perucho.
                </p>
              </Card>
              <Card>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Objetivos específicos</p>
                <ul className="space-y-4">
                  {objectives.map((objective) => (
                    <li key={objective} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-600" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          <SolutionOverview />
          <ProjectScope />

          <CoreValueChain />

          <Section id="procesos" eyebrow="Operación" title="Procesos / Diagramas de Actividad" description="Seis flujos documentan actores, reglas y requerimientos mediante previews operativos tipo UML/BPMN.">
            <ActivityProcessGallery />
          </Section>

          <Section id="diagramas" eyebrow="Modelado UML" title="Galería de diagramas" description="Explore los artefactos UML exportados desde draw.io y amplíelos para la exposición técnica.">
            <div className="mb-8 flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar diagramas por categoría">
              {(['Todas', ...diagramCategories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeCategory === category
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-emerald-100 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {filteredDiagrams.length > 0 ? (
              <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredDiagrams.map((diagram) => (
                  <DiagramCard key={diagram.id} diagram={diagram} onOpen={setSelectedDiagram} />
                ))}
              </motion.div>
            ) : (
              <Card className="flex min-h-52 flex-col items-center justify-center border-dashed text-center">
                <FileSearch size={35} className="mb-4 text-emerald-600" />
                <p className="font-medium text-emerald-950">Categoría preparada para nuevos artefactos</p>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Agregue los SVG o PNG correspondientes en <span className="font-mono text-emerald-700">public/diagrams/</span> y regístrelos en los datos de la galería.
                </p>
              </Card>
            )}
          </Section>

          <Section id="modelo-er" eyebrow="Modelo de información" title="Modelo Entidad Relación interactivo" description="Entidades candidatas, claves y cardinalidades que soportan ventas, inventario, compras y control diario.">
            <EntityRelationshipModel />
          </Section>

          <Section id="reglas" eyebrow="Control empresarial" title="Reglas de negocio" description="Restricciones operativas, riesgos y validaciones necesarias para preservar el funcionamiento confiable de la tienda.">
            <BusinessRulesTable />
          </Section>

          <Section id="requerimientos" eyebrow="Alcance" title="Requerimientos" description="Inventario completo de 25 requerimientos funcionales y 7 no funcionales, trazados a casos de uso e historias de usuario.">
            <RequirementTable requirements={requirements} />
          </Section>

          <Section id="historias" eyebrow="Agile" title="Historias de usuario" description="Historias priorizadas con formato Como rol, quiero necesidad, para beneficio, enlazadas a requerimientos, casos de uso y mockups.">
            <UserStoriesSection />
          </Section>

          <Section id="trazabilidad" eyebrow="Cobertura" title="Matriz de trazabilidad" description="Relación inicial entre necesidades funcionales, comportamiento documentado, diagramas disponibles y pantallas candidatas.">
            <TraceabilityMatrix />
          </Section>

          <Section id="casos" eyebrow="Interacción" title="Casos de uso" description="Catálogo de 18 interacciones documentadas, escenarios expandidos y trazabilidad de requerimientos conforme al análisis del sistema.">
            <UseCaseDocumentation onOpenDiagram={openUseCaseDiagram} />
          </Section>

          <UseCaseScenarios />

          <Section id="arquitectura" eyebrow="Diseño candidato" title="Arquitectura por capas" description="La separación de responsabilidades reduce acoplamiento y permite evolucionar cada parte de una futura implementación.">
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <Card key={layer.name} className="flex flex-col gap-3 p-5 md:flex-row md:items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-mono text-emerald-700">{index + 1}</span>
                  <h3 className="w-60 font-semibold text-emerald-950">{layer.name}</h3>
                  <p className="text-sm leading-6 text-slate-600">{layer.detail}</p>
                </Card>
              ))}
            </div>
          </Section>

          <TechnicalArchitecture />
          <TechnologyOverview />
          <StakeholderGrid />

          <Section id="riesgos" eyebrow="Control" title="Matriz de riesgos" description="Aspectos que deben atenderse durante validación, modelado y posterior construcción del sistema.">
            <RiskDashboard />
          </Section>

          <Section id="mockups" eyebrow="UX/UI" title="Mockups propuestos" description="Galería de pantallas candidatas para documentar y validar la experiencia antes de iniciar el desarrollo funcional.">
            <div className="mb-8 flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar mockups por categoría">
              {(['Todos', ...mockupCategories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveMockupCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeMockupCategory === category
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-emerald-100 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredMockups.map((mockup) => (
                <MockupCard key={mockup.id} mockup={mockup} onOpen={setSelectedMockup} />
              ))}
            </motion.div>
          </Section>

          <Section id="conclusion" eyebrow="Cierre" title="Conclusión final">
            <Card className="border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-8 md:p-10">
              <p className="max-w-4xl text-lg leading-8 text-slate-700">
                Este proyecto demuestra que comprender el negocio antes de programar es esencial para construir soluciones útiles. El portal sintetiza la propuesta desde el análisis del problema, los requerimientos y el modelado hasta la arquitectura candidata y la experiencia UX/UI, estableciendo una base coherente para una futura implementación.
              </p>
              <p className="mt-8 text-sm font-medium text-emerald-700">Tienda de la Esquina Don Perucho · Análisis y Diseño de Sistemas</p>
            </Card>
          </Section>
          <PortalFooter />
        </div>
      </main>
      <DiagramLightbox diagrams={diagrams} selected={selectedDiagram} onSelect={setSelectedDiagram} onClose={() => setSelectedDiagram(null)} />
      <MockupModal mockup={selectedMockup} onClose={() => setSelectedMockup(null)} />
    </div>
  )
}

export default App
