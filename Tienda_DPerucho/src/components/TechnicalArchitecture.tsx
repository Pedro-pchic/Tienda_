import { motion } from 'framer-motion'
import { Activity, Database, GlobeLock, HardDriveDownload, Monitor, ServerCog } from 'lucide-react'
import { Section } from './Section'

const layers = [
  { title: 'Cliente', technologies: ['Navegador', 'POS'], icon: Monitor, detail: 'Acceso de vendedor, administrador y dueño.' },
  { title: 'NGINX Reverse Proxy', technologies: ['HTTPS local', 'Balanceo'], icon: GlobeLock, detail: 'Entrada controlada y distribución de solicitudes.' },
  { title: 'Frontend React', technologies: ['React', 'Vite'], icon: Monitor, detail: 'Experiencia rápida para operación y consulta.' },
  { title: 'Spring Boot API', technologies: ['REST', 'Healthchecks'], icon: ServerCog, detail: 'Reglas, autorización y servicios del dominio.' },
  { title: 'MariaDB', technologies: ['Datos', 'Transacciones'], icon: Database, detail: 'Persistencia consistente de operación.' },
  { title: 'Operación', technologies: ['Backups', 'Logs', 'Netdata'], icon: HardDriveDownload, detail: 'Respaldo, diagnóstico y monitoreo.' },
]

export function TechnicalArchitecture() {
  return (
    <Section id="arquitectura-tecnica" eyebrow="Infraestructura candidata" title="Arquitectura Técnica Real" description="Topología moderna candidata para una implementación futura, desacoplada del portal documental actual.">
      <div className="relative rounded-3xl border border-emerald-100 bg-white p-6 md:p-8">
        <div className="grid gap-3 lg:grid-cols-6">
          {layers.map(({ title, technologies, icon: Icon, detail }, index) => (
            <motion.article key={title} className="relative rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/60 p-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Icon size={20} className="mb-4 text-emerald-600" />
              <h3 className="text-sm font-semibold text-emerald-950">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-slate-600">{detail}</p>
              <div className="mt-4 flex flex-wrap gap-1">{technologies.map((tech) => <span key={tech} className="rounded bg-emerald-100/70 px-2 py-1 text-[10px] text-emerald-700">{tech}</span>)}</div>
              {index < layers.length - 1 && <span className="absolute -right-3 top-1/2 hidden h-px w-3 bg-cyan-400 lg:block" />}
            </motion.article>
          ))}
        </div>
        <div className="mt-8 grid gap-5 rounded-2xl bg-emerald-950 p-6 text-emerald-50 lg:grid-cols-[220px_1fr]">
          <p className="flex items-center gap-2 font-semibold"><Activity size={18} className="text-cyan-300" /> ¿Por qué es adecuada?</p>
          <p className="text-sm leading-7 text-emerald-100/75">Separa interfaz, lógica y datos; facilita respaldos y monitoreo; permite iniciar con una instalación pequeña mediante Docker Compose y evolucionar a balanceo de carga sin redefinir el dominio del negocio.</p>
        </div>
      </div>
    </Section>
  )
}
