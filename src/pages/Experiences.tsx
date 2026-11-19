import { ArrowRight, Calendar, CheckCircle2, ExternalLink, Lightbulb, MapPin } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Chip, Img, LogoTile, OrigineBadge, PageHeader, Reveal } from '../components/ui'
import { experiences } from '../data/experiences'
import { usePageTheme } from '../lib/theme'
import { asset, cx, origineStyle } from '../lib/utils'

export default function Experiences() {
  usePageTheme('neutral')
  const { hash } = useLocation()

  // Défilement vers l'expérience ciblée (#id) depuis une autre page
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <PageHeader
        eyebrow="Expériences"
        title="Stages & expériences professionnelles"
        text="Ce que j'ai fait sur le terrain, ce que j'y ai appris et les compétences que j'ai développées."
      />

      <section className="container-page space-y-10">
        {experiences.map((x) => (
          <Reveal key={x.id}>
            <article id={x.id} className="card scroll-mt-28 overflow-hidden">
              <div className={cx('grid', x.image && 'lg:grid-cols-12')}>
                {/* Colonne visuelle (seulement s'il y a une photo) */}
                {x.image && (
                  <div className="relative lg:col-span-4">
                    <Img src={x.image} alt={x.structure} label={x.structure} className="h-56 w-full lg:h-full" />
                    <LogoTile src={x.logo} name={x.structure} className="absolute bottom-4 left-4" />
                  </div>
                )}

                {/* Contenu */}
                <div className={cx('p-6 md:p-8', x.image && 'lg:col-span-8')}>
                  {!x.image && <LogoTile src={x.logo} name={x.structure} className="mb-4" />}
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <OrigineBadge origine={x.parcours} />
                    <span className="chip bg-tint text-primary-strong">{x.type}</span>
                    <span className="chip bg-canvas text-body ring-1 ring-line">{x.duree}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-ink">{x.poste}</h2>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-body">
                    <span className="font-semibold text-secondary">{x.structure}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {x.ville}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {x.debut} — {x.fin}
                    </span>
                  </p>

                  <p className="mt-5 leading-relaxed text-body">{x.contexte}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="eyebrow mb-3">Missions</p>
                      <ul className="space-y-2">
                        {x.missions.map((m) => (
                          <li key={m} className="flex gap-2 text-sm text-ink">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Ce que j'ai appris</p>
                      <ul className="space-y-2">
                        {x.apprentissages.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-ink">
                            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {x.difficultes && x.difficultes.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-line p-5">
                      <p className="eyebrow mb-3">Difficultés & prise de recul</p>
                      <ul className="space-y-3">
                        {x.difficultes.map((d) => (
                          <li key={d.probleme} className="text-sm">
                            <p className="font-semibold text-ink">{d.probleme}</p>
                            <p className="mt-0.5 text-body">→ {d.solution}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {x.resultats.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {x.resultats.map((r) => (
                        <div key={r.label} className="rounded-2xl bg-tint p-4">
                          <p className="text-2xl font-extrabold text-primary">{r.valeur}</p>
                          <p className="text-xs text-body">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="mb-2 text-[12px] font-semibold text-muted">Compétences développées</p>
                      <div className="flex flex-wrap gap-1.5">
                        {x.competences.map((c) => (
                          <Chip key={c}>{c}</Chip>
                        ))}
                        {x.stack.map((s) => (
                          <span key={s} className="chip bg-canvas text-body ring-1 ring-line">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">
                      {x.liens?.map((l) => (
                        <a key={l.url} href={asset(l.url)} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-[13px]">
                          {l.label} <ExternalLink className="h-4 w-4" />
                        </a>
                      ))}
                      <Link to={`/parcours/${x.parcours}`} className="inline-flex items-center gap-1 text-[13px] font-bold text-primary">
                        Parcours {origineStyle[x.parcours].label} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
