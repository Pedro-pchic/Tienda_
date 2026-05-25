interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm shadow-emerald-900/5">
      <p className="text-3xl font-semibold text-emerald-700">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  )
}
