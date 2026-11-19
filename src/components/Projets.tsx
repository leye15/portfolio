import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronRight, ExternalLink, FileText, FolderGit2, PlayCircle, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Projet } from '../data/types'
import { getParcours } from '../data/parcours'
import { asset, origineStyle } from '../lib/utils'
import { Chip, GithubIcon, Img, OrigineBadge } from './ui'

export function ProjetCard({ projet, onOpen }: { projet: Projet; onOpen: (p: Projet) => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="card card-hover group flex h-full flex-col p-5 md:p-6"
    >
      <button onClick={() => onOpen(projet)} className="flex flex-1 flex-col text-left" aria-label={`Voir le détail : ${projet.titre}`}>
        <div className="relative mb-5 overflow-hidden rounded-2xl">
          <Img src={projet.image} alt={projet.titre} icon={FolderGit2} className="aspect-[16/9] w-full transition-transform duration-300 group-hover:scale-[1.03]" />
          <div className="absolute left-3 top-3 flex gap-1.5">
            <span className="rounded-full bg-surface/90 backdrop-blur-sm">
              <OrigineBadge origine={projet.origine} />
            </span>
          </div>
        </div>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {projet.stack.slice(0, 3).map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <h3 className="h3 group-hover:text-primary">
          {projet.titre}
          {projet.video && <PlayCircle className="ml-1.5 inline h-4 w-4 align-[-2px] text-primary" aria-label="Contient une vidéo" />}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">{projet.resume}</p>
      </button>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-[12px] font-semibold text-muted">
          {projet.categories[0]} · {projet.annee}
        </span>
        <button onClick={() => onOpen(projet)} className="inline-flex items-center gap-1 text-[13px] font-bold text-primary">
          Détails <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  )
}

export function ProjetModal({ projet, onClose }: { projet: Projet | null; onClose: () => void }) {
  useEffect(() => {
    if (!projet) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [projet, onClose])

  const parcours = projet && projet.origine !== 'perso' ? getParcours(projet.origine) : undefined
  const videoId = projet?.video?.match(/(?:v=|youtu\.be\/)([\w-]{11})/)?.[1]

  return (
    <AnimatePresence>
      {projet && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/35 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="projet-titre"
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line bg-surface shadow-modal sm:rounded-3xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Img src={projet.image} alt={projet.titre} icon={FolderGit2} className="aspect-[21/9] w-full" />
              <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-surface/90 p-2 text-ink shadow-card hover:bg-surface" aria-label="Fermer">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <OrigineBadge origine={projet.origine} />
                {projet.categories.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
                <span className="text-[12px] font-semibold text-muted">{projet.annee}</span>
              </div>
              <h2 id="projet-titre" className="h2">
                {projet.titre}
              </h2>
              <p className="mt-4 leading-relaxed text-body">{projet.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-tint p-4">
                  <p className="eyebrow mb-1">Mon rôle</p>
                  <p className="text-sm text-ink">{projet.role}</p>
                </div>
                {projet.resultats && (
                  <div className="rounded-2xl bg-tint p-4">
                    <p className="eyebrow mb-1">Résultats</p>
                    <ul className="space-y-1 text-sm text-ink">
                      {projet.resultats.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {projet.videoFichier && (
                <div className="mt-6">
                  <p className="eyebrow mb-2">Démonstration</p>
                  <video className="w-full rounded-2xl bg-ink" src={asset(projet.videoFichier)} controls preload="metadata" playsInline />
                </div>
              )}

              {videoId && (
                <div className="mt-6">
                  <p className="eyebrow mb-2">Vidéo du projet</p>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-tint">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                      title={`Vidéo : ${projet.titre}`}
                      loading="lazy"
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {projet.recul && (
                <div className="mt-4 rounded-2xl border border-line p-4 text-sm">
                  <p className="eyebrow mb-1">Prise de recul</p>
                  <p className="text-ink">{projet.recul}</p>
                </div>
              )}

              <p className="eyebrow mb-2 mt-6">Stack technique</p>
              <div className="flex flex-wrap gap-1.5">
                {projet.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {projet.demo && (
                  <a href={projet.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <ExternalLink className="h-4 w-4" /> Démo
                  </a>
                )}
                {projet.documents?.map((d) => (
                  <a key={d.url} href={asset(d.url)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FileText className="h-4 w-4" /> {d.label}
                  </a>
                ))}
                {projet.video && (
                  <a href={projet.video} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <PlayCircle className="h-4 w-4" /> Vidéo sur YouTube
                  </a>
                )}
                {projet.github && (
                  <a href={projet.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
                {parcours && (
                  <Link to={`/parcours/${parcours.id}`} className="btn-ghost" onClick={onClose}>
                    Voir le parcours {origineStyle[parcours.id].label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
