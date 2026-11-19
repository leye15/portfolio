import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProjetCard, ProjetModal } from '../components/Projets'
import { PageHeader } from '../components/ui'
import { categoriesProjet, projets } from '../data/projets'
import type { CategorieProjet, Origine, Projet } from '../data/types'
import { usePageTheme } from '../lib/theme'
import { cx, origineStyle } from '../lib/utils'

// On n'affiche que les parcours qui ont au moins un projet
const origines: (Origine | 'tous')[] = ['tous', ...(['bac', 'but', 'isis', 'perso'] as Origine[]).filter((o) => projets.some((p) => p.origine === o))]

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        'rounded-full px-4 py-2 text-[13px] font-semibold transition-all',
        active ? 'bg-primary text-white shadow-[0_6px_16px_rgba(91,63,196,0.25)]' : 'bg-surface text-body ring-1 ring-line hover:bg-tint hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}

export default function ProjetsPage() {
  usePageTheme('neutral')
  const [params, setParams] = useSearchParams()
  const origine = (params.get('parcours') as Origine | null) ?? 'tous'
  const [categorie, setCategorie] = useState<CategorieProjet | 'toutes'>('toutes')
  const [ouvert, setOuvert] = useState<Projet | null>(null)

  const setOrigine = (o: Origine | 'tous') => {
    const next = new URLSearchParams(params)
    if (o === 'tous') next.delete('parcours')
    else next.set('parcours', o)
    setParams(next, { replace: true })
  }

  const filtres = projets.filter(
    (p) => (origine === 'tous' || p.origine === origine) && (categorie === 'toutes' || p.categories.includes(categorie)),
  )

  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Projets & réalisations"
        text="Projets d'école, hackathons et projets personnels. Filtre par parcours ou par thématique, puis clique sur une carte pour voir le détail."
      />

      <section className="container-page">
        <div className="card mb-8 space-y-4 p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <span className="w-28 shrink-0 text-[12px] font-bold uppercase tracking-wider text-muted">Parcours</span>
            <div className="flex flex-wrap gap-2">
              {origines.map((o) => (
                <FilterChip key={o} active={origine === o} onClick={() => setOrigine(o)}>
                  {o === 'tous' ? 'Tous' : origineStyle[o].label}
                </FilterChip>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <span className="w-28 shrink-0 text-[12px] font-bold uppercase tracking-wider text-muted">Thématique</span>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={categorie === 'toutes'} onClick={() => setCategorie('toutes')}>
                Toutes
              </FilterChip>
              {categoriesProjet.filter((c) => projets.some((p) => p.categories.includes(c))).map((c) => (
                <FilterChip key={c} active={categorie === c} onClick={() => setCategorie(c)}>
                  {c}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted">
          {filtres.length} projet{filtres.length > 1 ? 's' : ''}
        </p>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtres.map((p) => (
              <ProjetCard key={p.id} projet={p} onOpen={setOuvert} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtres.length === 0 && (
          <div className="card p-10 text-center text-body">Aucun projet pour ce filtre pour le moment.</div>
        )}
      </section>

      <ProjetModal projet={ouvert} onClose={() => setOuvert(null)} />
    </>
  )
}
