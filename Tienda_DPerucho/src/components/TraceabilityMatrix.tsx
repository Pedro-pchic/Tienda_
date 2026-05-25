import { Link2 } from 'lucide-react'
import { traceability, type TraceStatus } from '../data/traceability'

const statusStyle: Record<TraceStatus, string> = {
  Trazado: 'bg-emerald-100 text-emerald-800',
  Parcial: 'bg-amber-100 text-amber-700',
  Pendiente: 'bg-stone-100 text-slate-700',
}

export function TraceabilityMatrix() {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm shadow-emerald-900/5">
      <div className="flex items-center gap-2 border-b border-emerald-100 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
        <Link2 size={17} />
        Relación entre alcance, modelado y experiencia
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Requerimiento', 'Caso de uso', 'Diagrama relacionado', 'Mockup relacionado', 'Estado'].map((header) => (
                <th key={header} className="px-5 py-4 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {traceability.map((item) => (
              <tr key={item.requirement} className="transition hover:bg-emerald-50/70">
                <td className="whitespace-nowrap px-5 py-4 font-medium text-emerald-950">{item.requirement}</td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-700">{item.useCase}</td>
                <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-emerald-700">{item.diagram}</td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">{item.mockup}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle[item.status]}`}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
