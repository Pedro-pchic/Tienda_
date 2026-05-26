import { AlertTriangle } from 'lucide-react'
import { risks, type RiskLevel, type RiskValue } from '../data/risks'

const levelStyle: Record<RiskLevel, string> = {
  Bajo: 'bg-emerald-100 text-emerald-700',
  Medio: 'bg-cyan-100 text-cyan-700',
  Alto: 'bg-amber-100 text-amber-700',
  Crítico: 'bg-rose-100 text-rose-700',
}

export function RiskDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 xl:grid-cols-[320px_1fr]">
        <Heatmap />
        <div className="overflow-x-auto rounded-2xl border border-emerald-100 bg-white">
          <table className="min-w-[900px] text-left text-sm">
            <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
              <tr>{['Riesgo', 'Criticidad', 'Mitigación', 'Etapa', 'Responsable', 'Estado'].map((item) => <th key={item} className="px-4 py-4 font-medium">{item}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {risks.map((risk) => (
                <tr key={risk.risk} className="hover:bg-emerald-50/50">
                  <td className="px-4 py-4 font-medium text-emerald-950">{risk.risk}</td>
                  <td className="px-4 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${levelStyle[risk.level]}`}>{risk.level}</span></td>
                  <td className="max-w-64 px-4 py-4 text-slate-600">{risk.mitigation}</td>
                  <td className="px-4 py-4 text-slate-600">{risk.stage}</td>
                  <td className="px-4 py-4 text-slate-600">{risk.owner}</td>
                  <td className="px-4 py-4 text-emerald-700">{risk.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Heatmap() {
  const values: RiskValue[] = [4, 3, 2, 1]
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <p className="mb-5 flex items-center gap-2 font-semibold text-emerald-950"><AlertTriangle size={18} className="text-amber-500" /> Mapa de calor</p>
      <div className="grid grid-cols-[20px_repeat(4,1fr)] gap-1 text-center text-[10px] text-slate-500">
        {values.map((impact) => (
          <div key={impact} className="contents">
            <span className="flex items-center">{impact}</span>
            {([1, 2, 3, 4] as RiskValue[]).map((probability) => {
              const total = impact * probability
              const matches = risks.filter((risk) => risk.impact === impact && risk.probability === probability).length
              const color = total >= 12 ? 'bg-rose-400' : total >= 8 ? 'bg-amber-300' : total >= 4 ? 'bg-cyan-200' : 'bg-emerald-100'
              return <span key={probability} title={`${matches} riesgos`} className={`flex h-12 items-center justify-center rounded-lg font-semibold text-slate-700 ${color}`}>{matches || '-'}</span>
            })}
          </div>
        ))}
        <span />
        {[1, 2, 3, 4].map((item) => <span key={item}>{item}</span>)}
      </div>
      <p className="mt-4 text-xs text-slate-500">Impacto vertical · Probabilidad horizontal</p>
    </div>
  )
}
