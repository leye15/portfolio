import { ArrowRight, GraduationCap, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Img, LogoTile, OrigineBadge, PageHeader, Reveal } from '../components/ui'
import { parcours } from '../data/parcours'
import { usePageTheme } from '../lib/theme'
import { cx } from '../lib/utils'

const couleurNoeud = { bac: 'bg-bac', but: 'bg-but', isis: 'bg-isis' } as const
const couleurBordure = { bac: 'border-t-bac', but: 'border-t-but', isis: 'border-t-isis' } as const

export default function Parcours() {
  usePageTheme('neutral')
  return (
    <>
      <PageHeader
        eyebrow="Parcours"
        title="Du baccalauréat au cycle ingénieur"
        text="Trois étapes qui m'ont menée du développement informatique à la santé numérique. Clique sur une étape pour découvrir le détail : pourquoi ce choix, ce que j'y ai appris, mes projets et mes stages."
      />

      <section className="container-page">
        <div className="relative">
          {/* Ligne verticale de l'arborescence */}
          <div className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-gradient-to-b from-bac via-but to-isis md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10 md:space-y-16">
            {parcours.map((p, i) => {
              const gauche = i % 2 === 0
              return (
                <li key={p.id} className="relative grid items-center gap-6 pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                  {/* Nœud */}
                  <div
                    className={cx(
                      'absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-card ring-4 ring-canvas md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
                      couleurNoeud[p.id],
                    )}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  {/* Carte */}
                  <Reveal className={cx(gauche ? 'md:col-start-1' : 'md:col-start-2')}>
                    <article className={cx('card card-hover overflow-hidden border-t-4', couleurBordure[p.id])}>
                      <div className="relative">
                        <Img src={p.image} alt={`Campus ${p.etablissement}`} icon={GraduationCap} label={p.etablissement} className="aspect-[4/1] w-full" />
                        <LogoTile src={p.logo} name={p.etablissement} className="absolute -bottom-7 left-6" />
                      </div>
                      <div className="p-6 pt-10">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <OrigineBadge origine={p.id} />
                          <span className="text-[12px] font-semibold text-muted">{p.annees}</span>
                          {p.statut === 'en-cours' && <span className="chip bg-isis-teal/15 text-[#1f8d8d]">● En cours</span>}
                        </div>
                        <h2 className="h3">{p.diplome}</h2>
                        <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                          <MapPin className="h-3.5 w-3.5" /> {p.etablissement}, {p.ville}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-body">{p.resume}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.tags.map((t) => (
                            <span key={t} className="chip bg-canvas text-body ring-1 ring-line">
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/parcours/${p.id}`}
                          className={cx('btn mt-6 text-white hover:opacity-90', couleurNoeud[p.id])}
                        >
                          Découvrir ce parcours <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  </Reveal>

                  {/* Repère d'années côté opposé (desktop) */}
                  <div className={cx('hidden md:block', gauche ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1 md:text-right')}>
                    <p className="text-5xl font-extrabold tracking-tight text-line">{String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-1 text-sm font-semibold text-muted">{p.annees}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
    </>
  )
}
