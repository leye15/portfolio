import type { Origine, ParcoursId, SourceCompetence } from '../data/types'

/** Résout un chemin de /public en tenant compte du base path du site. */
export const asset = (path?: string) => {
  if (!path) return ''
  if (/^(https?:|data:|mailto:)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ')

/** Libellé + classes de couleur pour chaque origine (badge de parcours). */
export const origineStyle: Record<Origine | 'stage' | 'projet' | 'mobilite', { label: string; className: string }> = {
  bac: { label: 'Bac', className: 'bg-bac/10 text-bac' },
  but: { label: 'BUT', className: 'bg-but/10 text-but' },
  isis: { label: 'ISIS', className: 'bg-isis/10 text-isis' },
  perso: { label: 'Perso', className: 'bg-isis-teal/15 text-[#1f8d8d]' },
  stage: { label: 'Stage', className: 'bg-isis-amber/20 text-[#8e6400]' },
  projet: { label: 'Projet', className: 'bg-isis-coral/15 text-[#c2423a]' },
  mobilite: { label: 'Erasmus+', className: 'bg-isis-pink/15 text-[#8a3aa3]' },
}

export const lienSource = (s: SourceCompetence) => {
  if (s === 'stage' || s === 'mobilite') return '/experiences'
  if (s === 'projet') return '/projets'
  return `/parcours/${s satisfies ParcoursId}`
}
