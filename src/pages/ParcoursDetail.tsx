import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2, ChevronRight, GraduationCap, Lightbulb, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ProjetCard, ProjetModal } from '../components/Projets'
import { Blobs, Chip, Img, LogoTile, Reveal, SectionTitle } from '../components/ui'
import { experiencesDuParcours } from '../data/experiences'
import { getParcours, parcours } from '../data/parcours'
import { projetsDuParcours } from '../data/projets'
import type { Projet } from '../data/types'
import { usePageTheme } from '../lib/theme'
import { asset, origineStyle } from '../lib/utils'

export default function ParcoursDetail() {
  const { id = '' } = useParams()
  const p = getParcours(id)
  usePageTheme(p?.theme ?? 'neutral')
  const [ouvert, setOuvert] = useState<Projet | null>(null)
  if (!p) return <Navigate to="/parcours" replace />

  const index = parcours.findIndex((x) => x.id === p.id)
  const precedent = parcours[index - 1]
  const suivant = parcours[index + 1]
  const projetsP = projetsDuParcours(p.id)
  const xps = experiencesDuParcours(p.id)

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden">
        <Blobs />
        <div className="container-page pt-8">
          <nav className="flex items-center gap-1.5 text-[13px] font-semibold text-muted" aria-label="Fil d'Ariane">
            <Link to="/parcours" className="inline-flex items-center gap-1 hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Parcours
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{p.diplome}</span>
          </nav>

          <Reveal>
            <div className="relative mt-6 overflow-hidden rounded-3xl">
              <Img src={p.image} alt={`Campus ${p.etablissement}`} icon={GraduationCap} label={p.etablissement} className="aspect-[3/1] w-full md:aspect-[4/1]" />
              
            </div>
            <div className="card relative -mt-16 mx-4 flex flex-col gap-5 p-6 md:mx-10 md:-mt-20 md:flex-row md:items-center md:p-8">
              <LogoTile src={p.logo} name={p.etablissement} className="h-16 w-16" />
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="chip bg-tint-strong text-primary-strong">{origineStyle[p.id].label}</span>
                  <span className="text-[12px] font-semibold text-muted">{p.annees}</span>
                  {p.statut === 'en-cours' && <span className="chip bg-isis-teal/15 text-[#1f8d8d]">● En cours</span>}
                  {p.mention && <span className="chip bg-but-gold/15 text-[#7a6650]">{p.mention}</span>}
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-primary-strong md:text-4xl">{p.diplome}</h1>
                <p className="mt-1 flex flex-wrap items-center gap-1 text-sm text-body">
                  <MapPin className="h-4 w-4" /> {p.etablissement}
                  {p.etablissementDetail && <span className="text-muted">· {p.etablissementDetail}</span>} · {p.ville}
                </p>
              </div>
              {p.partenaires && (
                <div className="flex items-center gap-4 border-t border-line pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  {p.partenaires.map((pa) => (
                    <img key={pa.nom} src={asset(pa.logo)} alt={pa.nom} title={pa.nom} className="h-10 w-auto object-contain md:h-12" />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- POURQUOI ---------- */}
      <section className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-2">Pourquoi cette formation ?</p>
            <h2 className="h2">Mon choix</h2>
            <p className="mt-3 leading-relaxed text-body">{p.resume}</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-3 lg:col-span-7">
            {p.pourquoi.map((t) => (
              <div key={t} className="flex gap-3 rounded-2xl bg-tint p-5">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="leading-relaxed text-ink">{t}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- CE QUE J'Y AI APPRIS ---------- */}
      <section className="container-page py-6">
        <SectionTitle eyebrow="Programme" title="Ce que j'y ai appris" />
        <ol className="relative space-y-6 border-l-2 border-tint-strong pl-8">
          {p.apprentissages.map((e, i) => (
            <Reveal key={e.titre + i} delay={i * 0.06}>
              <li className="relative">
                <span className="absolute -left-[41px] top-5 h-4 w-4 rounded-full border-4 border-canvas bg-accent" />
                <div className="card p-5 md:p-6">
                  <p className="text-[12px] font-bold uppercase tracking-wider text-accent">{e.periode}</p>
                  <h3 className="h3 mt-1">{e.titre}</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {e.contenu.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-body">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- PROJETS ---------- */}
      {projetsP.length > 0 && (
        <section className="container-page py-14">
          <SectionTitle
            eyebrow="Réalisations"
            title="Projets réalisés"
            action={
              <Link to={`/projets?parcours=${p.id}`} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5">
                Tous les projets {origineStyle[p.id].label} <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projetsP.slice(0, 3).map((pr) => (
              <ProjetCard key={pr.id} projet={pr} onOpen={setOuvert} />
            ))}
          </div>
        </section>
      )}

      {/* ---------- STAGES ---------- */}
      {xps.length > 0 && (
        <section className="container-page py-6">
          <SectionTitle eyebrow="Terrain" title="Stages & expériences" />
          <div className="grid gap-4 md:grid-cols-2">
            {xps.map((x) => (
              <Reveal key={x.id}>
                <Link to={`/experiences#${x.id}`} className="card card-hover group flex items-center gap-4 p-5">
                  <LogoTile src={x.logo} name={x.structure} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink group-hover:text-primary">{x.poste}</p>
                    <p className="truncate text-sm text-body">
                      {x.structure} · {x.debut} — {x.fin}
                    </p>
                  </div>
                  <span className="hidden items-center gap-1 text-[13px] font-bold text-primary sm:inline-flex">
                    Voir le détail <ArrowRight className="h-4 w-4" />
                  </span>
                  <Briefcase className="h-5 w-5 text-muted sm:hidden" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------- COMPÉTENCES ---------- */}
      <section className="container-page py-14">
        <SectionTitle eyebrow="Acquis" title="Compétences acquises" />
        <div className="grid gap-4 md:grid-cols-3">
          {p.competences.map((g, i) => (
            <Reveal key={g.categorie} delay={i * 0.06}>
              <div className="card h-full p-6">
                <p className="font-semibold text-ink">{g.categorie}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NAVIGATION ENTRE PARCOURS ---------- */}
      <section className="container-page">
        <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 sm:flex-row">
          {precedent ? (
            <Link to={`/parcours/${precedent.id}`} className="btn-ghost justify-start">
              <ArrowLeft className="h-4 w-4" /> {precedent.diplome}
            </Link>
          ) : (
            <span />
          )}
          {suivant && (
            <Link to={`/parcours/${suivant.id}`} className="btn-primary">
              {suivant.diplome} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </section>

      <ProjetModal projet={ouvert} onClose={() => setOuvert(null)} />
    </>
  )
}
