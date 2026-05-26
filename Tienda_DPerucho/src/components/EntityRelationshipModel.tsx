import { AnimatePresence, motion } from 'framer-motion'
import { Database, Expand, X } from 'lucide-react'
import { useState } from 'react'
import { entities, type EntityDefinition } from '../data/entityModel'

export function EntityRelationshipModel() {
  const [selected, setSelected] = useState<EntityDefinition | null>(null)
  return (
    <>
      <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 font-medium text-emerald-950"><Database size={19} className="text-emerald-600" /> 12 entidades principales · Modelo candidato</p>
          <div className="flex gap-2 text-[11px]"><Badge type="PK" /><Badge type="FK" /></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {entities.map((entity) => (
            <motion.button key={entity.name} type="button" onClick={() => setSelected(entity)} whileHover={{ y: -3 }} className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-4 text-left transition hover:border-emerald-300 hover:bg-white">
              <div className="mb-3 flex items-center justify-between"><h3 className="font-semibold text-emerald-950">{entity.name}</h3><Expand size={14} className="text-emerald-600" /></div>
              {entity.attributes.slice(0, 3).map((attribute) => <Attribute key={attribute.name} {...attribute} />)}
              <p className="mt-3 truncate text-[11px] text-slate-500">{entity.relationships[0]}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/80 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="w-full max-w-md rounded-2xl bg-white p-6" initial={{ scale: 0.97 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()}>
              <div className="flex justify-between"><div><p className="text-xs uppercase tracking-wider text-emerald-600">Entidad</p><h3 className="mt-1 text-2xl font-semibold text-emerald-950">{selected.name}</h3></div><button type="button" className="modal-control" onClick={() => setSelected(null)}><X size={17} /></button></div>
              <p className="mt-4 text-sm text-slate-600">{selected.purpose}</p>
              <div className="mt-5 rounded-xl border border-emerald-100 p-4">{selected.attributes.map((attribute) => <Attribute key={attribute.name} {...attribute} />)}</div>
              <div className="mt-5 space-y-2">{selected.relationships.map((relationship) => <p key={relationship} className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{relationship}</p>)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Attribute({ name, type }: { name: string; type: 'PK' | 'FK' | 'Atributo' }) {
  return <p className="mb-1.5 flex items-center gap-2 font-mono text-xs text-slate-700"><Badge type={type} /> {name}</p>
}

function Badge({ type }: { type: 'PK' | 'FK' | 'Atributo' }) {
  const style = type === 'PK' ? 'bg-emerald-600 text-white' : type === 'FK' ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-500'
  return <span className={`inline-flex min-w-8 justify-center rounded px-1.5 py-0.5 font-sans text-[10px] font-semibold ${style}`}>{type}</span>
}
