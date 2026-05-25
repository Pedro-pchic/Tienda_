import type { PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren {
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 ${className}`}>
      {children}
    </div>
  )
}
