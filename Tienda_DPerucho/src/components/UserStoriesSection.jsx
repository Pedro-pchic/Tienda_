import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { userStories, userStoryRoles } from '../data/userStories.js'
import { UserStoryCard } from './UserStoryCard'

export function UserStoriesSection() {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('Todos')

  const filteredStories = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    return userStories.filter((story) => {
      const matchesRole = role === 'Todos' || story.role === role
      const matchesQuery = !normalizedQuery || [story.code, story.title]
        .some((value) => value.toLocaleLowerCase().includes(normalizedQuery))
      return matchesRole && matchesQuery
    })
  }, [query, role])

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm shadow-emerald-900/5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:w-80">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <span className="sr-only">Buscar historia de usuario</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por código o título"
              className="w-full rounded-xl border border-emerald-100 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar historias por rol">
            {userStoryRoles.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setRole(option)}
                aria-pressed={role === option}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                  role === option
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : 'border-emerald-100 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          {filteredStories.length} de {userStories.length} historias visibles
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredStories.map((story) => (
          <UserStoryCard key={story.code} story={story} />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="rounded-lg border border-dashed border-emerald-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
          No se encontraron historias para los filtros seleccionados.
        </div>
      )}
    </div>
  )
}
