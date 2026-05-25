import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileSearch,
  PackageX,
  Receipt,
  ScanBarcode,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import { Card } from './components/Card'
import { DiagramCard } from './components/DiagramCard'
import { DiagramModal } from './components/DiagramModal'
import { MockupCard } from './components/MockupCard'
import { MockupModal } from './components/MockupModal'
import { RequirementTable } from './components/RequirementTable'
import { RiskCard } from './components/RiskCard'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { StatCard } from './components/StatCard'
import { UseCaseCard } from './components/UseCaseCard'
import { diagramCategories, diagrams, type Diagram, type DiagramCategory } from './data/diagrams'
import { mockupCategories, mockups, type Mockup, type MockupCategory } from './data/mockups'
import { processes } from './data/processes'
import { requirements } from './data/requirements'
import { risks } from './data/risks'
import { useCases } from './data/useCases'

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

  return (
    <div className="min-h-screen bg-[#f7faf5] text-slate-700">
      <Sidebar />
      <main className="px-5 pb-16 pt-20 md:ml-72 md:px-10 md:pt-0 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <section id="inicio" className="scroll-mt-24 py-14 lg:py-20">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                <ScanBarcode size={16} />
                Proyecto documental de ingeniería
              </div>
              <div className="grid gap-10 xl:grid-cols-[1fr_360px] xl:items-end">
                <div>
                  <p className="mb-4 font-medium text-emerald-700">Análisis y Diseño de Sistemas</p>
                  <h1 className="text-4xl font-semibold leading-tight tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                    Tienda de la Esquina <span className="text-emerald-600">Don Perucho</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Portal de presentación técnica que documenta el entendimiento del negocio, la solución propuesta y el diseño candidato para digitalizar la operación minorista.
                  </p>
                  <a href="#problema" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-700">
                    Explorar análisis <ArrowRight size={18} />
                  </a>
                </div>
                <Card className="border-emerald-200 bg-gradient-to-br from-white to-emerald-50">
                  <p className="text-sm font-medium text-emerald-700">Solución propuesta</p>
                  <p className="mt-4 leading-7 text-slate-700">
                    Diseñar un sistema de gestión que centralice ventas, inventario, precios y reportes, reduciendo errores y respaldando decisiones del propietario.
                  </p>
                </Card>
              </div>
              <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard value="25" label="Requerimientos funcionales" />
                <StatCard value="7" label="Requerimientos no funcionales" />
                <StatCard value="15" label="Casos de uso" />
                <StatCard value="6" label="Procesos clave" />
              </div>
            </motion.div>
          </section>

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

          <Section id="core" eyebrow="Valor" title="Core del negocio">
            <Card className="relative overflow-hidden border-emerald-200 p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-300/25 blur-3xl" />
              <p className="relative text-2xl font-semibold text-emerald-950 md:text-3xl">
                “Intermediación minorista y suministro de proximidad”
              </p>
              <p className="relative mt-6 max-w-3xl leading-8 text-slate-600">
                Don Perucho genera valor al ofrecer productos cotidianos cerca del cliente, con rapidez, disponibilidad inmediata y venta al detalle. El diseño prioriza conservar esa agilidad mientras incorpora control y datos confiables.
              </p>
            </Card>
          </Section>

          <Section id="procesos" eyebrow="Operación" title="Procesos del negocio" description="Seis flujos concentran la actividad que debe comprender y respaldar una futura solución.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {processes.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="p-5">
                  <Icon size={22} className="mb-5 text-emerald-600" />
                  <h3 className="mb-2 font-medium text-emerald-950">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{description}</p>
                </Card>
              ))}
            </div>
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

          <Section id="requerimientos" eyebrow="Alcance" title="Requerimientos" description="Muestra inicial preparada para ampliarse hasta el inventario completo de 25 RF y 7 RNF desde la fuente de datos.">
            <RequirementTable requirements={requirements} />
          </Section>

          <Section id="casos" eyebrow="Interacción" title="Casos de uso" description="Casos principales que traducen la operación de la tienda en comportamiento esperado del sistema.">
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {useCases.map((useCase) => <UseCaseCard key={useCase.code} useCase={useCase} />)}
            </div>
          </Section>

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

          <Section id="riesgos" eyebrow="Control" title="Matriz de riesgos" description="Aspectos que deben atenderse durante validación, modelado y posterior construcción del sistema.">
            <div className="grid gap-4 lg:grid-cols-2">
              {risks.map((risk) => <RiskCard key={risk.risk} risk={risk} />)}
            </div>
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
        </div>
      </main>
      <DiagramModal diagram={selectedDiagram} onClose={() => setSelectedDiagram(null)} />
      <MockupModal mockup={selectedMockup} onClose={() => setSelectedMockup(null)} />
    </div>
  )
}

export default App
