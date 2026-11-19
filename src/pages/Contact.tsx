import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Download, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SocialLinks } from '../components/Layout'
import { PageHeader, Reveal } from '../components/ui'
import { profil } from '../data/profil'
import { usePageTheme } from '../lib/theme'
import { asset, cx } from '../lib/utils'

type Champs = { nom: string; email: string; objet: string; message: string }
type Erreurs = Partial<Record<keyof Champs, string>>

const vide: Champs = { nom: '', email: '', objet: '', message: '' }

function valider(c: Champs): Erreurs {
  const e: Erreurs = {}
  if (c.nom.trim().length < 2) e.nom = 'Indique ton nom (2 caractères minimum).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) e.email = 'Adresse email invalide.'
  if (c.objet.trim().length < 3) e.objet = "Précise l'objet de ton message."
  if (c.message.trim().length < 20) e.message = 'Ton message doit faire au moins 20 caractères.'
  return e
}

export default function Contact() {
  usePageTheme('neutral')
  const [champs, setChamps] = useState<Champs>(vide)
  const [erreurs, setErreurs] = useState<Erreurs>({})
  const [touches, setTouches] = useState<Partial<Record<keyof Champs, boolean>>>({})
  const [etat, setEtat] = useState<'idle' | 'envoi' | 'ok' | 'erreur'>('idle')

  const maj = (k: keyof Champs, v: string) => {
    const next = { ...champs, [k]: v }
    setChamps(next)
    if (touches[k]) setErreurs(valider(next))
  }

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    const e = valider(champs)
    setErreurs(e)
    setTouches({ nom: true, email: true, objet: true, message: true })
    if (Object.keys(e).length) return

    // Avec un identifiant Formspree : envoi direct. Sinon : ouverture du client mail.
    if (profil.formspreeId) {
      setEtat('envoi')
      try {
        const r = await fetch(`https://formspree.io/f/${profil.formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(champs),
        })
        setEtat(r.ok ? 'ok' : 'erreur')
        if (r.ok) setChamps(vide)
      } catch {
        setEtat('erreur')
      }
    } else {
      const body = `${champs.message}\n\n— ${champs.nom} (${champs.email})`
      window.location.href = `mailto:${profil.email}?subject=${encodeURIComponent(champs.objet)}&body=${encodeURIComponent(body)}`
      setEtat('ok')
    }
  }

  const champ = (k: keyof Champs, label: string, props: Record<string, unknown> = {}, textarea = false) => {
    const err = touches[k] ? erreurs[k] : undefined
    const valide = touches[k] && !erreurs[k] && champs[k]
    const Comp = textarea ? 'textarea' : 'input'
    return (
      <div>
        <label htmlFor={k} className="mb-1.5 block text-[13px] font-semibold text-ink">
          {label}
        </label>
        <Comp
          id={k}
          name={k}
          value={champs[k]}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => maj(k, e.target.value)}
          onBlur={() => {
            setTouches((t) => ({ ...t, [k]: true }))
            setErreurs(valider(champs))
          }}
          aria-invalid={!!err}
          aria-describedby={err ? `${k}-err` : undefined}
          className={cx('input', textarea && 'min-h-36 resize-y', err && 'border-isis-coral focus:border-isis-coral focus:ring-isis-coral/10', valide && 'border-isis-teal')}
          {...props}
        />
        {err && (
          <p id={`${k}-err`} className="mt-1.5 flex items-center gap-1 text-[12px] font-medium text-[#c2423a]">
            <AlertCircle className="h-3.5 w-3.5" /> {err}
          </p>
        )}
      </div>
    )
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Travaillons ensemble" text="Une proposition de stage, une question sur un projet ou simplement envie d'échanger ? Écris-moi, je réponds rapidement." />

      <section className="container-page grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="card p-6 md:p-8">
            <AnimatePresence mode="wait">
              {etat === 'ok' ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-isis-teal" />
                  <h2 className="h3 mt-4">Merci pour ton message !</h2>
                  <p className="mt-2 max-w-sm text-body">
                    {profil.formspreeId ? 'Il a bien été envoyé, je te réponds au plus vite.' : 'Ton application mail s’est ouverte avec le message prérempli : il ne reste qu’à l’envoyer.'}
                  </p>
                  <button onClick={() => setEtat('idle')} className="btn-ghost mt-6">
                    Écrire un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {champ('nom', 'Nom', { autoComplete: 'name', placeholder: 'Ton nom' })}
                    {champ('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'ton@email.fr' })}
                  </div>
                  {champ('objet', 'Objet', { placeholder: 'Proposition de stage, question…' })}
                  {champ('message', 'Message', { placeholder: 'Ton message…' }, true)}
                  {etat === 'erreur' && (
                    <p className="flex items-center gap-2 rounded-xl bg-isis-coral/10 p-3 text-sm text-[#c2423a]">
                      <AlertCircle className="h-4 w-4" /> L'envoi a échoué. Réessaie ou écris-moi directement à {profil.email}.
                    </p>
                  )}
                  <button type="submit" disabled={etat === 'envoi'} className="btn-primary w-full sm:w-auto">
                    {etat === 'envoi' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Envoyer le message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4 lg:col-span-5">
          <div className="card space-y-4 p-6">
            <a href={`mailto:${profil.email}`} className="flex items-center gap-3 rounded-2xl bg-tint p-4 hover:bg-tint-strong">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-semibold text-ink">{profil.email}</span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-tint p-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-ink">{profil.localisation}</span>
            </div>
            <div>
              <p className="mb-2 text-[12px] font-semibold text-muted">Réseaux</p>
              <SocialLinks />
            </div>
          </div>
          <div className="card bg-gradient-to-br from-tint to-tint-strong p-6">
            <span className="chip bg-surface text-[#1f8d8d]">● Disponible</span>
            <p className="mt-3 font-semibold text-ink">Recherche de stage — {profil.situation.disponibilite}</p>
            <p className="mt-1 text-sm text-body">{profil.situation.mobilite}</p>
            {profil.cv && (
              <a href={asset(profil.cv)} download className="btn-primary mt-4 px-4 py-2 text-[13px]">
                <Download className="h-4 w-4" /> Télécharger mon CV
              </a>
            )}
          </div>
        </Reveal>
      </section>
    </>
  )
}
