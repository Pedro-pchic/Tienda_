import {
  AlertTriangle,
  BarChart3,
  BookOpenText,
  CheckCircle,
  ClipboardCheck,
  ClipboardList,
  FileText,
  GitBranch,
  Home,
  Info,
  Layers,
  Layers3,
  Network,
  Route,
  Store,
  Target,
  Users,
  Workflow,
  Wrench,
  Flag,
  type LucideIcon,
} from 'lucide-react'

export interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  badge?: string
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

export const navigationGroups: NavigationGroup[] = [
  {
    title: 'Presentación',
    items: [
      { id: 'inicio', label: 'Inicio', icon: Home },
      { id: 'roadmap', label: 'Roadmap', icon: Route },
      { id: 'resumen', label: 'Vista ejecutiva', icon: BarChart3 },
    ],
  },
  {
    title: 'Análisis',
    items: [
      { id: 'problema', label: 'Problema', icon: Info },
      { id: 'objetivos', label: 'Objetivos', icon: Target },
      { id: 'solucion', label: 'Solución', icon: Layers },
      { id: 'alcance', label: 'Alcance', icon: ClipboardList },
      { id: 'core', label: 'Core del negocio', icon: Store },
      { id: 'procesos', label: 'Procesos', icon: Workflow },
      { id: 'reglas', label: 'Reglas de negocio', icon: ClipboardCheck, badge: '15' },
    ],
  },
  {
    title: 'Diseño',
    items: [
      { id: 'diagramas', label: 'Diagramas', icon: Network, badge: '18' },
      { id: 'modelo-er', label: 'Modelo ER', icon: Layers3, badge: '12' },
      { id: 'requerimientos', label: 'Requerimientos', icon: FileText, badge: '32' },
      { id: 'historias', label: 'Historias de usuario', icon: BookOpenText, badge: '10' },
      { id: 'trazabilidad', label: 'Trazabilidad', icon: GitBranch },
      { id: 'casos', label: 'Casos de uso', icon: ClipboardCheck },
      { id: 'escenarios', label: 'Escenarios', icon: FileText, badge: '15' },
      { id: 'arquitectura', label: 'Arquitectura', icon: Layers3 },
      { id: 'arquitectura-tecnica', label: 'Arquitectura técnica', icon: Network },
      { id: 'tecnologias', label: 'Tecnologías', icon: Wrench },
      { id: 'stakeholders', label: 'Stakeholders', icon: Users },
      { id: 'riesgos', label: 'Riesgos', icon: AlertTriangle, badge: '6' },
      { id: 'mockups', label: 'Mockups', icon: Flag, badge: '12' },
    ],
  },
  {
    title: 'Cierre',
    items: [
      { id: 'conclusion', label: 'Conclusión', icon: CheckCircle },
    ],
  },
]

export const navigationItems = navigationGroups.flatMap(({ items }) => items)
