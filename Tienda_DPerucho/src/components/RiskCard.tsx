import { AlertTriangle } from 'lucide-react'
import type { Risk } from '../data/risks'
import { Card } from './Card'

interface RiskCardProps {
  risk: Risk
}

export function RiskCard({ risk }: RiskCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <AlertTriangle className="mt-1 shrink-0 text-amber-400" size={20} />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-medium text-emerald-950">{risk.risk}</h3>
            <span className={`rounded-full px-2.5 py-1 text-xs ${risk.impact === 'Alto' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
              {risk.impact}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{risk.mitigation}</p>
        </div>
      </div>
    </Card>
  )
}
