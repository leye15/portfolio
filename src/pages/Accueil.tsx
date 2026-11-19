import { ArrowRight, Briefcase, Calendar, FolderGit2, Globe2, GraduationCap, HeartPulse, Layers, Mail, MapPin, PlayCircle, Sparkles, UserRound } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SocialLinks } from '../components/Layout'
import { ProjetCard, ProjetModal } from '../components/Projets'
import { Blobs, Chip, Img, LogoTile, OrigineBadge, Reveal, SectionTitle } from '../components/ui'
import { nombreTechnologies } from '../data/competences'
import { experiences } from '../data/experiences'
import { parcours } from '../data/parcours'
import { profil } from '../data/profil'
import { projets } from '../data/projets'
import type { Projet } from '../data/types'
import { usePageTheme } from '../lib/theme'

export default function Accueil() {
  usePageTheme('neutral')
  const [ouvert, setOuvert] = useState<Projet | null>(null)
  const aLaUne = projets.filter((p) => p.aLaUne).slice(0, 3)
  const derniereXp = experiences[0]
  const videoId = profil.video?.match(/(?:v=|youtu\.be\/)([\w-]{11})/)?.[1]

  // Statistiques calculées automatiquement à partir des données
  const stats = [
    { icon: FolderGit2, valeur: projets.length, label: 'Projets réalisés', detail: 'SAÉ, école & perso', tag: 'Global' },
    { icon: Briefcase, valeur: experiences.filter((x) => x.type === 'Stage').length, label: 'Stages', detail: 'En France et au Sénégal', tag: 'Terrain' },
    {
      icon: Globe2,
      valeur: experiences.filter((x) => x.type === 'Mobilité internationale').length,
      label: 'Mobilités Erasmus+',
      detail: 'Belgique, Espagne',
      tag: 'International',
    },
    { icon: Layers, valeur: nombreTechnologies, label: 'Technologies', detail: 'R, Python, SQL, Shiny…', tag: 'Stack' },
  ]

  return (
    <>
      {/* ---------- HERO : qui suis-je ---------- */}
      <section className="relative isolate overflow-hidden pb-12 pt-12 md:pb-20 md:pt-20">
        <Blobs />
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-tint-strong px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-strong">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Portfolio · Santé numérique
            </span>
            <div>
              <h1 className="h1 md:text-6xl">
                {profil.prenom} {profil.nom}
              </h1>
              <p className="mt-3 text-lg font-semibold text-primary md:text-xl">{profil.titre} — ISIS Castres</p>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-body md:text-lg">
              <strong className="font-semibold text-ink">{profil.accroche}</strong> {profil.presentation}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="chip bg-but/10 text-but">
                <GraduationCap className="mr-1 h-3.5 w-3.5" /> BUT Science des Données
              </span>
              <span className="chip bg-isis/10 text-isis">
                <Sparkles className="mr-1 h-3.5 w-3.5" /> Élève-ingénieure @ ISIS
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/parcours" className="btn-primary">
                Voir mon parcours <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                <Mail className="h-4 w-4" /> Me contacter
              </Link>
            </div>
            <SocialLinks className="pt-1" />
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute inset-0 scale-105 rounded-[32px] bg-gradient-to-tr from-tint-strong via-[var(--t-blob-2)] to-[var(--t-blob-3)] blur-xl" />
              <div className="relative rounded-[28px] bg-surface p-2.5 shadow-card-hover">
                <Img src={profil.photo} alt={`Portrait de ${profil.prenom} ${profil.nom}`} icon={UserRound} label="Ta photo" className="aspect-[4/5] w-full rounded-[22px]" />
                <div className="absolute -bottom-4 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between gap-2 rounded-full bg-surface/95 px-4 py-3 shadow-card-hover backdrop-blur-md">
                  <span className="flex items-center gap-2 text-[13px] font-bold text-ink">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-isis-teal opacity-70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1f8d8d]" />
                    </span>
                    Ouverte aux opportunités
                  </span>
                  <span className="chip bg-tint-strong text-primary-strong">{profil.situation.disponibilite}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- OÙ J'EN SUIS ---------- */}
      <section className="container-page">
        <Reveal>
          <div className="card relative overflow-hidden bg-gradient-to-r from-surface via-tint to-tint-strong p-6 md:p-10">
            <HeartPulse className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-primary opacity-[0.05]" />
            <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="eyebrow">Où j'en suis aujourd'hui</span>
                  <span className="chip bg-isis-teal/15 text-[#1f8d8d]">● En cours</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">{profil.situation.titre}</h2>
                <p className="mt-2 leading-relaxed text-body">{profil.situation.description}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2">
                <span className="chip bg-surface px-4 py-2 text-[12px] text-primary-strong shadow-card">
                  <MapPin className="mr-1.5 h-4 w-4" /> {profil.situation.mobilite}
                </span>
                <span className="chip bg-surface px-4 py-2 text-[12px] text-primary-strong shadow-card">
                  <Calendar className="mr-1.5 h-4 w-4" /> Dispo : {profil.situation.disponibilite}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- STATISTIQUES ---------- */}
      <section className="container-page py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="card card-hover flex h-full flex-col p-5 md:p-6">
                <div className="flex items-center justify-between text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">{s.tag}</span>
                </div>
                <div className="mt-5 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">{s.valeur}</div>
                <div className="mt-1 font-semibold text-ink">{s.label}</div>
                <p className="mt-0.5 text-xs text-muted">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- VIDÉO DE PRÉSENTATION ---------- */}
      {videoId && (
        <section className="container-page py-12">
          <Reveal>
            <div className="card grid items-center gap-8 overflow-hidden p-6 md:p-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-2">En vidéo</p>
                <h2 className="h2">Me découvrir en quelques minutes</h2>
                <p className="mt-3 leading-relaxed text-body">Une courte présentation de mon parcours et de mon projet de stage.</p>
                <a href={profil.video} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5">
                  <PlayCircle className="h-4 w-4" /> Ouvrir sur YouTube
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-tint shadow-card">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title="Vidéo de présentation"
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* ---------- APERÇU PARCOURS ---------- */}
      <section className="container-page py-12">
        <SectionTitle
          eyebrow="Mon parcours"
          title="Du bac au diplôme d'ingénieur"
          action={
            <Link to="/parcours" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5">
              Tout le parcours <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-3">
          {parcours.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link to={`/parcours/${p.id}`} className="card card-hover group flex h-full items-center gap-4 p-5">
                <LogoTile src={p.logo} name={p.etablissement} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <OrigineBadge origine={p.id} />
                    {p.statut === 'en-cours' && <span className="text-[11px] font-bold text-[#1f8d8d]">En cours</span>}
                  </div>
                  <p className="mt-1 truncate font-semibold text-ink group-hover:text-primary">{p.diplome}</p>
                  <p className="truncate text-xs text-muted">{p.annees}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PROJETS PHARES ---------- */}
      <section className="container-page py-12">
        <SectionTitle
          eyebrow="Travaux majeurs"
          title="Projets phares"
          action={
            <Link to="/projets" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5">
              Voir tous les projets <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {aLaUne.map((p) => (
            <ProjetCard key={p.id} projet={p} onOpen={setOuvert} />
          ))}
        </div>
      </section>

      {/* ---------- DERNIÈRE EXPÉRIENCE ---------- */}
      {derniereXp && (
        <section className="container-page py-12">
          <Reveal>
            <div className="card p-6 md:p-10">
              <SectionTitle
                eyebrow="Dernière expérience"
                title="Sur le terrain"
                action={
                  <Link to="/experiences" className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5">
                    Toutes mes expériences <ArrowRight className="h-4 w-4" />
                  </Link>
                }
              />
              <div className="grid items-center gap-5 rounded-2xl bg-tint p-5 lg:grid-cols-12">
                <div className="lg:col-span-1">
                  <LogoTile src={derniereXp.logo} name={derniereXp.structure} />
                </div>
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-ink">{derniereXp.poste}</span>
                    <span className="font-semibold text-secondary">@ {derniereXp.structure}</span>
                    <span className="chip bg-surface text-primary-strong">{derniereXp.duree}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{derniereXp.contexte}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {derniereXp.stack.map((s) => (
                      <Chip key={s} className="bg-surface">
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 lg:col-span-3 lg:flex-col lg:items-end">
                  <span className="inline-flex items-center gap-1.5 text-sm text-body">
                    <Calendar className="h-4 w-4" /> {derniereXp.debut} — {derniereXp.fin}
                  </span>
                  <Link to={`/experiences#${derniereXp.id}`} className="btn bg-surface px-4 py-2 text-[13px] text-primary shadow-card hover:bg-tint-strong">
                    Lire le détail <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      <ProjetModal projet={ouvert} onClose={() => setOuvert(null)} />
    </>
  )
}
