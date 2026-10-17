import { useParams, Link } from 'react-router-dom'
import { projects, povImages } from '../data/projects'

const labelClass = 'text-xs font-semibold tracking-[0.22em] uppercase text-amber-300/85'
const headingClass = 'text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_12px_30px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 md:p-10'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className={cardClass}>
            <p className={bodyText}>Project not found.</p>
            <Link to="/projects" className="mt-6 inline-block text-amber-200 hover:text-slate-50">
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.98)), url(${povImages[4].src})` }}
    >
      <div className="pointer-events-none absolute left-1/3 top-6 h-56 w-56 rounded-full bg-amber-200/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/4 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <article className={`${cardClass} space-y-8`}>
          <div>
            <p className={labelClass}>Project</p>
            <h1 className={headingClass}>{project.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-amber-50/10 px-3 py-1 text-xs text-amber-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.images?.[0] && (
            <div className="relative overflow-hidden rounded-2xl border border-amber-50/15">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 to-transparent" />
              <img src={project.images[0]} alt={project.title} className="w-full object-cover" />
            </div>
          )}

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Overview</h2>
            <p className={`mt-3 ${bodyText}`}>{project.overview}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Approach</h2>
            <p className={`mt-3 ${bodyText}`}>{project.approach}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Impact</h2>
            <p className={`mt-3 ${bodyText}`}>{project.impact}</p>
          </section>
        </article>
      </div>
    </section>
  )
}

export default ProjectDetail
