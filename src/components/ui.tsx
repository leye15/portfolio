import { motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { Building2, ImageIcon, type LucideIcon } from 'lucide-react'
import type { Origine, SourceCompetence } from '../data/types'
import { asset, cx, origineStyle } from '../lib/utils'

/** Apparition douce au défilement. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={cx('min-w-0', className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string
  title: string
  text?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="h2">{title}</h2>
        {text && <p className="mt-3 text-[15px] leading-relaxed text-body">{text}</p>}
      </div>
      {action}
    </div>
  )
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx('chip bg-tint text-primary-strong', className)}>{children}</span>
}

export function OrigineBadge({ origine }: { origine: Origine | SourceCompetence }) {
  const s = origineStyle[origine]
  return <span className={cx('chip', s.className)}>{s.label}</span>
}

/**
 * Image avec placeholder : si `src` est vide ou introuvable,
 * affiche un dégradé aux couleurs du thème avec une icône.
 */
export function Img({
  src,
  alt,
  icon: Icon = ImageIcon,
  className,
  label,
}: {
  src?: string
  alt: string
  icon?: LucideIcon
  className?: string
  label?: string
}) {
  const [error, setError] = useState(false)
  if (!src || error) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cx(
          'relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-tint-strong via-tint to-[var(--t-blob-2)]',
          className,
        )}
      >
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/10" />
        <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-accent/15" />
        <div className="relative flex flex-col items-center gap-2 text-primary/70">
          <Icon className="h-9 w-9" strokeWidth={1.5} />
          {label && <span className="text-[11px] font-semibold uppercase tracking-wider">{label}</span>}
        </div>
      </div>
    )
  }
  return <img src={asset(src)} alt={alt} className={cx('object-cover', className)} onError={() => setError(true)} loading="lazy" />
}

/** Tuile blanche pour un logo d'établissement / d'entreprise (initiales si pas de logo). */
export function LogoTile({ src, name, className }: { src?: string; name: string; className?: string }) {
  const [error, setError] = useState(false)
  // Sans logo : sigle en majuscules s'il existe (ISIS, BUT, CHU…), sinon une icône
  const sigle = name.split(/[\s'’]+/).find((w) => /^[A-ZÉ]{2,6}$/.test(w))
  return (
    <div className={cx('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface p-2 shadow-card', className)}>
      {src && !error ? (
        <img src={asset(src)} alt={`Logo ${name}`} className="max-h-full max-w-full object-contain" onError={() => setError(true)} />
      ) : (
        sigle ? (
        <span className="text-[13px] font-extrabold tracking-tight text-primary">{sigle}</span>
      ) : (
        <Building2 className="h-6 w-6 text-primary" strokeWidth={1.75} />
      )
      )}
    </div>
  )
}

export function Blobs() {
  return (
    <>
      <div className="blob -top-24 left-1/4 h-96 w-96" style={{ background: 'var(--t-blob-1)' }} />
      <div className="blob right-0 top-1/3 h-80 w-80" style={{ background: 'var(--t-blob-2)' }} />
      <div className="blob bottom-0 left-0 h-64 w-64 opacity-70" style={{ background: 'var(--t-blob-3)' }} />
    </>
  )
}

/** En-tête simple pour les pages internes. */
export function PageHeader({ eyebrow, title, text, children }: { eyebrow: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-10 pt-14 md:pb-14 md:pt-20">
      <Blobs />
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="h1 max-w-3xl">{title}</h1>
          {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-body md:text-lg">{text}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}
