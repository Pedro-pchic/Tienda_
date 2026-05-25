import type { Requirement } from '../data/requirements'

interface RequirementTableProps {
  requirements: Requirement[]
}

export function RequirementTable({ requirements }: RequirementTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm shadow-emerald-900/5">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-emerald-950 text-xs uppercase tracking-wider text-emerald-100">
            <tr>
              {['Código', 'Requerimiento', 'Tipo', 'Prioridad', 'Área'].map((header) => (
                <th key={header} className="px-5 py-4 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {requirements.map((requirement) => (
              <tr key={requirement.code} className="transition hover:bg-emerald-50">
                <td className="px-5 py-4 font-mono font-medium text-emerald-700">{requirement.code}</td>
                <td className="px-5 py-4 text-emerald-950">{requirement.requirement}</td>
                <td className="px-5 py-4 text-slate-700">{requirement.type}</td>
                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${requirement.priority === 'Alta' ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-slate-700'}`}>
                    {requirement.priority}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-600">{requirement.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
