import { ArrowRight, Boxes, ClipboardCheck, ShoppingCart, Smile, Truck } from 'lucide-react'
import { Card } from './Card'
import { Section } from './Section'

const links = [
  { title: 'Abastecimiento', text: 'Compras con proveedor identificado.', icon: Truck, codes: 'RF-11 · RF-12 · CU-10' },
  { title: 'Control de inventario', text: 'Existencias confiables para operar.', icon: Boxes, codes: 'RF-04 · RF-05 · CU-04' },
  { title: 'Venta al detalle', text: 'Atención rápida y registro verificable.', icon: ShoppingCart, codes: 'RF-02 · CU-02' },
  { title: 'Atención al cliente', text: 'Disponibilidad y comprobante.', icon: Smile, codes: 'RF-03 · RF-06' },
  { title: 'Cierre diario', text: 'Resultados para decidir.', icon: ClipboardCheck, codes: 'RF-15 · CU-13' },
]

export function CoreValueChain() {
  return (
    <Section id="core" eyebrow="Valor" title="Core del negocio" description="La intermediación minorista y el suministro de proximidad convierten disponibilidad inmediata y atención rápida en valor para el cliente.">
      <Card className="relative overflow-hidden border-emerald-200 p-6 md:p-8">
        <p className="mb-7 max-w-4xl text-lg leading-8 text-slate-700">Don Perucho conecta abastecimiento, inventario y venta al detalle para ofrecer productos cotidianos cerca del cliente. El sistema propuesto no reemplaza ese valor: lo hace medible, trazable y administrable.</p>
        <div className="grid gap-3 lg:grid-cols-5">
          {links.map(({ title, text, icon: Icon, codes }, index) => (
            <div key={title} className="relative rounded-2xl bg-emerald-50 p-4">
              <Icon className="mb-4 text-emerald-600" size={22} />
              <h3 className="text-sm font-semibold text-emerald-950">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{text}</p>
              <p className="mt-4 font-mono text-[10px] text-emerald-700">{codes}</p>
              {index < links.length - 1 && <ArrowRight size={17} className="absolute -right-3 top-1/2 z-10 hidden text-emerald-500 lg:block" />}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
