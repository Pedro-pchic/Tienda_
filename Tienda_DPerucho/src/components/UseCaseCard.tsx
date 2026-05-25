import type { UseCase } from '../data/useCases'
import { Card } from './Card'

interface UseCaseCardProps {
  useCase: UseCase
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-xs font-semibold text-emerald-700">{useCase.code}</span>
          <h3 className="mt-2 text-lg font-semibold text-emerald-950">{useCase.name}</h3>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-800">{useCase.priority}</span>
      </div>
      <p className="mb-4 text-sm text-slate-600"><span className="text-emerald-950">Actor:</span> {useCase.actor}</p>
      <p className="text-sm leading-6 text-slate-700">{useCase.flow}</p>
      <div className="mt-auto border-t border-emerald-100 pt-4 text-sm text-slate-600">
        <span className="text-emerald-950">Excepción:</span> {useCase.exceptions}
      </div>
    </Card>
  )
}
