import { ChevronDown, ClipboardCheck, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { Card } from './Card'

const priorityStyle = {
  Alta: 'bg-emerald-100 text-emerald-800',
  Media: 'bg-amber-100 text-amber-700',
  Baja: 'bg-stone-100 text-slate-700',
}

function TagList({ label, items }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 font-mono text-xs text-emerald-700">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function UserStoryCard({ story }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="flex h-full flex-col rounded-lg p-0">
      <div className="border-b border-emerald-100 px-5 py-4">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs font-bold text-emerald-700">{story.code}</p>
            <h3 className="mt-1 text-lg font-semibold text-emerald-950">{story.title}</h3>
          </div>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${priorityStyle[story.priority]}`}>
            {story.priority}
          </span>
        </div>
        <p className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
          Como <span className="font-semibold text-emerald-950">{story.role.toLowerCase()}</span>, quiero {story.need}, para {story.benefit}.
        </p>
      </div>

      <div className="grid flex-1 gap-4 px-5 py-4 sm:grid-cols-2">
        <TagList label="RF relacionados" items={story.relatedRequirements} />
        <TagList label="CU relacionados" items={story.relatedUseCases} />
        <div className="sm:col-span-2">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Mockup relacionado</p>
          <p className="inline-flex items-center gap-2 rounded-lg border border-emerald-100 bg-white px-3 py-2 text-sm font-medium text-slate-700">
            <Layers3 size={15} className="text-emerald-600" />
            {story.relatedMockup}
          </p>
        </div>
      </div>

      <div className="border-t border-emerald-100">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
        >
          <span className="inline-flex items-center gap-2">
            <ClipboardCheck size={16} />
            Criterios de aceptación
          </span>
          <ChevronDown size={17} className={`transition ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="space-y-3 border-t border-emerald-100 bg-emerald-50/60 px-5 py-4">
            {story.acceptanceCriteria.map((criterion) => (
              <li key={criterion} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {criterion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  )
}
