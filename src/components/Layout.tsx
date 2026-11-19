import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Download, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profil } from '../data/profil'
import { asset, cx } from '../lib/utils'
import { GithubIcon, LinkedinIcon } from './ui'

export const navigation = [
  { to: '/', label: 'Accueil' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/experiences', label: 'Expériences' },
  { to: '/projets', label: 'Projets' },
  { to: '/competences', label: 'Compétences' },
  { to: '/centres-interet', label: "Centres d'intérêt" },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cx(
      'rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors',
      isActive ? 'bg-tint-strong text-primary-strong' : 'text-body hover:bg-tint hover:text-ink',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-surface/90 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-sm font-extrabold text-white shadow-card">
            {profil.prenom[0]}
            {profil.nom[0]}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-ink">
              {profil.prenom} {profil.nom}
            </span>
            <span className="text-[11px] font-semibold text-muted">Data & IA santé — ISIS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
          {navigation.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {profil.cv && (
            <a href={asset(profil.cv)} download className="btn-primary px-4 py-2 text-[13px]">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Télécharger CV</span>
            </a>
          )}
          <button
            className="rounded-xl p-2 text-body hover:bg-tint xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-surface xl:hidden"
            aria-label="Navigation mobile"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navigation.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    cx('rounded-xl px-4 py-3 text-[15px] font-semibold', isActive ? 'bg-tint-strong text-primary-strong' : 'text-body hover:bg-tint')
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export function SocialLinks({ className }: { className?: string }) {
  const item = 'flex h-10 w-10 items-center justify-center rounded-full bg-tint text-body transition-colors hover:bg-tint-strong hover:text-primary'
  return (
    <div className={cx('flex items-center gap-2', className)}>
      {profil.github && (
        <a href={profil.github} target="_blank" rel="noopener noreferrer" className={item} aria-label="GitHub">
          <GithubIcon className="h-[18px] w-[18px]" />
        </a>
      )}
      {profil.linkedin && (
        <a href={profil.linkedin} target="_blank" rel="noopener noreferrer" className={item} aria-label="LinkedIn">
          <LinkedinIcon className="h-[18px] w-[18px]" />
        </a>
      )}
      <a href={`mailto:${profil.email}`} className={item} aria-label="Email">
        <Mail className="h-[18px] w-[18px]" />
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="font-bold text-ink">
              {profil.prenom} {profil.nom}
            </span>
            <span className="chip bg-isis/10 text-isis">ISIS Castres</span>
          </div>
          <p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} — Ingénierie, data & IA au service de la santé.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] font-semibold text-body" aria-label="Liens de pied de page">
          {navigation.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-muted hover:text-primary">
          <ArrowUp className="h-4 w-4" /> Haut de page
        </button>
      </div>
    </footer>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <AnimatePresence mode="wait">
          <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
