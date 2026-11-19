import { ArrowRight, BookOpen, Calculator, Camera, Cpu, Dumbbell, Film, GraduationCap, HandHeart, Plane, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Img, PageHeader, Reveal, SectionTitle } from '../components/ui'
import { asset } from '../lib/utils'
import { centresInteret, enCeMoment, galerie } from '../data/interets'
import type { CentreInteret } from '../data/types'
import { usePageTheme } from '../lib/theme'
import { cx } from '../lib/utils'

const icones: Record<CentreInteret['icone'], typeof Cpu> = {
  'hand-heart': HandHeart,
  dumbbell: Dumbbell,
  cpu: Cpu,
  plane: Plane,
  camera: Camera,
  book: BookOpen,
  film: Film,
  calculator: Calculator,
}
const iconesMoment = [BookOpen, GraduationCap, Search]

export default function CentresInteret() {
  usePageTheme('neutral')
  return (
    <>
      <PageHeader eyebrow="Centres d'intérêt" title="Au-delà du code" text="Ce qui me nourrit en dehors des cours, et ce que ça m'apporte dans mon métier d'ingénieure." />

      {/* En ce moment */}
      <section className="container-page mb-10">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {enCeMoment.map((m, i) => {
              const Icon = iconesMoment[i % iconesMoment.length]
              return (
                <div key={m.type} className="flex items-center gap-3 rounded-2xl bg-tint p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-primary shadow-card">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{m.type}</p>
                    <p className="font-semibold text-ink">{m.titre}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* Cartes */}
      <section className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centresInteret.map((c, i) => {
          const Icon = icones[c.icone]
          return (
            <Reveal key={c.id} delay={(i % 3) * 0.06} className={cx(i === 0 && 'lg:col-span-2')}>
              <article className="card card-hover group h-full overflow-hidden">
                <div className="overflow-hidden">
                  <Img src={c.image} alt={c.titre} icon={Icon} className={cx('w-full transition-transform duration-300 group-hover:scale-[1.03]', i === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]')} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h2 className="h3">{c.titre}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-body">{c.description}</p>
                  <p className="mt-3 text-sm text-ink">
                    <span className="font-semibold text-primary">Ce que ça m'apporte : </span>
                    {c.apport}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.softSkills.map((s) => (
                      <Link key={s} to="/competences" className="chip bg-tint text-primary-strong hover:bg-tint-strong">
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </section>

      {/* Galerie photo */}
      <section className="container-page mt-20">
        <SectionTitle eyebrow="Photographie" title="Mes inspirations" text="Les ambiances qui me plaisent : couchers de soleil, reflets, néons et art graphique." />
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {galerie.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.05}>
              <div className="group overflow-hidden rounded-2xl shadow-card">
                <img src={asset(g.src)} alt={g.alt} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <Reveal>
          <div className="card flex flex-col items-center gap-4 bg-gradient-to-r from-tint to-tint-strong p-10 text-center">
            <h2 className="h2">Envie d'échanger ?</h2>
            <p className="max-w-lg text-body">Sur un projet, un stage ou simplement une passion commune : écris-moi !</p>
            <Link to="/contact" className="btn-primary">
              Me contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
