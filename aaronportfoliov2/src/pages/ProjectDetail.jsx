import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

const labelClass = 'text-xs tracking-[0.25em] uppercase text-amber-300/80'
const headingClass = 'text-2xl md:text-3xl font-semibold text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-3xl border border-amber-50/15 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-8 shadow-[0_25px_60px_rgba(2,6,23,0.7)] backdrop-blur-md transition hover:-translate-y-1 md:p-10'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
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

          <div className="relative overflow-hidden rounded-2xl border border-amber-50/15">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Overview</h2>
            <p className={`mt-3 ${bodyText}`}>
              This is where I share why the project mattered, who I was building with, and the weird constraints that
              forced creative decisions. Expect shoutouts to labmates, mentors, and the notebooks full of scribbles that
              got us unstuck.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Approach</h2>
            <p className={`mt-3 ${bodyText}`}>
              I walk through the data wrangling, modeling choices, and lab validation loops—plus the little rituals
              (sunrise runs, rubber-duck debugging) that helped the ideas click. This is the messy middle in detail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">Impact</h2>
            <p className={`mt-3 ${bodyText}`}>
              Here I wrap with the outcomes: what shipped, who used it, and how it changed our next steps. Sometimes
              it&apos;s a live product; other times it&apos;s a better question—that honesty stays in the story.
            </p>
          </section>
        </article>
      </div>
    </section>
  )
}

export default ProjectDetail
