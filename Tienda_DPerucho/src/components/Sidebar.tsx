import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navigationItems } from '../data/navigation'
import { MobileSidebar } from './MobileSidebar'
import { SidebarPanel } from './SidebarPanel'

function useActiveSection() {
  const [activeId, setActiveId] = useState(() => {
    const hash = window.location.hash.slice(1)
    return navigationItems.some(({ id }) => id === hash) ? hash : 'inicio'
  })

  useEffect(() => {
    const targets = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const visibleSections = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.boundingClientRect.top)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        const nearestSection = [...visibleSections.entries()].sort((left, right) => Math.abs(left[1]) - Math.abs(right[1]))[0]
        if (nearestSection) setActiveId(nearestSection[0])
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.1] },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return activeId
}

export function Sidebar() {
  const activeId = useActiveSection()

  return (
    <>
      <motion.aside
        aria-label="Panel de documentación"
        className="fixed inset-y-0 left-0 z-30 hidden w-80 border-r border-emerald-400/10 bg-[#003b2f] shadow-xl shadow-emerald-950/10 backdrop-blur md:block"
        initial={{ x: -22, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
      >
        <SidebarPanel activeId={activeId} />
      </motion.aside>
      <MobileSidebar activeId={activeId} />
    </>
  )
}
