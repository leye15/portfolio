import { Brain, Code2, Languages, Stethoscope, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeader, Reveal } from '../components/ui'
import { groupesCompetences } from '../data/competences'
import { profil } from '../data/profil'
import type { GroupeCompetences } from '../data/types'
import { usePageTheme } from '../lib/theme'
import { cx, lienSource, origineStyle } from '../lib/utils'

const icones: Record<GroupeCompetences['icone'], typeof Brain> = {
  brain: Brain,
  code: Code2,
  wrench: Wrench,
  stethoscope: Stethoscope,
}

const niveaux = ['', 'Notions', 'Bases', 'Intermédiaire', 'Avancé', 'Expert']

export default function Competences() {
  usePageTheme('neutral')
  return (
    <>
      <PageHeader
        eyebrow="Compétences"
        title="Compétences & technologies"
        text="Ce que je sais faire, mon niveau, et où je l'ai appris. Clique sur un badge pour voir le parcours, le stage ou les projets correspondants."
      >
        <div className="mt-6 flex flex-wrap gap-2 text-[12px] text-muted">
          {(['but', 'isis', 'stage', 'projet', 'mobilite'] as const).map((s) => (
            <span key={s} className={cx('chip', origineStyle[s].className)}>
              {origineStyle[s].label}
            </span>
          ))}
          <span className="self-center">= origine de la compétence</span>
        </div>
      </PageHeader>

      <section className="container-page grid gap-6 md:grid-cols-2">
        {groupesCompetences.map((g, gi) => {
          const Icon = icones[g.icone]
          return (
            <Reveal key={g.id} delay={gi * 0.06}>
              <div className="card h-full p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint-strong text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="h3">{g.titre}</h2>
                    <p className="text-sm text-muted">{g.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-5">
                  {g.competences.map((c) => (
                    <li key={c.nom}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-ink">{c.nom}</span>
                        <div className="flex flex-wrap gap-1">
                          {c.sources.map((s) => (
                            <Link key={s} to={lienSource(s)} className={cx('chip hover:opacity-80', origineStyle[s].className)}>
                              {origineStyle[s].label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex flex-1 gap-1" role="meter" aria-valuemin={1} aria-valuemax={5} aria-valuenow={c.niveau} aria-label={`Niveau ${c.nom}`}>
                          {[1, 2, 3, 4, 5].map((n) => (
                            <span key={n} className={cx('h-1.5 flex-1 rounded-full', n <= c.niveau ? 'bg-primary' : 'bg-line')} />
                          ))}
                        </div>
                        <span className="w-24 text-right text-[12px] font-semibold text-muted">{niveaux[c.niveau]}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </section>

      <section className="container-page mt-6">
        <Reveal>
          <div className="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:p-8">
            <div className="flex items-center gap-3 md:w-60">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint-strong text-primary">
                <Languages className="h-5 w-5" />
              </span>
              <h2 className="h3">Langues</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {profil.langues.map((l) => (
                <span key={l.langue} className="rounded-2xl bg-tint px-4 py-2 text-sm">
                  <span className="font-semibold text-ink">{l.langue}</span> <span className="text-muted">· {l.niveau}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
