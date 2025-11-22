import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const labelClass = 'text-xs tracking-[0.25em] uppercase text-amber-300/80'
const headingClass = 'text-2xl md:text-3xl font-semibold text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'flex flex-col rounded-3xl border border-amber-50/15 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_25px_50px_rgba(2,6,23,0.7)] backdrop-blur-md transition duration-300 hover:-translate-y-1'

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/5 top-6 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-4 h-56 w-56 rounded-full bg-rose-300/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12">
          <p className={labelClass}>Projects</p>
          <h1 className={headingClass}>Case studies & experiments</h1>
          <p className={`${bodyText} max-w-3xl`}>
            Work that blends bio questions, ML workflows, and the occasional track workout. Each project comes with
            plenty of messy notes so future collaborators can see how I think.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className={cardClass}>
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-slate-50">{project.title}</h2>
              <p className="mt-3 flex-1 text-slate-300">{project.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-amber-50/10 px-3 py-1 text-xs text-amber-200">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-100"
              >
                Read the full story
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
