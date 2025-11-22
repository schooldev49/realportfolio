import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { projects } from '../data/projects'
import { posts } from '../data/posts'

const sectionLabel = 'text-xs tracking-[0.25em] uppercase text-amber-300/80'
const sectionHeading = 'text-2xl md:text-3xl font-semibold text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-3xl border border-amber-50/15 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_20px_45px_rgba(2,6,23,0.65)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(2,6,23,0.75)]'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)
  const featuredPosts = posts.slice(0, 3)

  return (
    <div className="pb-24">
      <section id="hero" className="pt-12">
        <Hero />
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24" id="about">
        <div className="pointer-events-none absolute left-1/4 top-6 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/5 bottom-4 h-48 w-48 rounded-full bg-pink-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-amber-50/10 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 px-6 py-12 shadow-[0_20px_45px_rgba(2,6,23,0.65)] backdrop-blur-md md:px-10">
          <p className={sectionLabel}>About</p>
          <h2 className={sectionHeading}>Turning research questions into tools</h2>
          <p className={bodyText}>
            I build systems at the intersection of computational biology, machine learning, and biotech product
            teams. My current obsession is translating raw bench data into models and workflows that scientists
            actually use—from therapeutic discovery pipelines to adaptive study tools for first-gen students. Outside
            research, you&apos;ll probably find me running with friends, debugging something strange, or teaching
            biology to students online.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24" id="featured-projects">
        <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-rose-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className={sectionLabel}>Featured Projects</p>
              <h2 className={sectionHeading}>Recent work</h2>
              <p className={bodyText}>
                Experiments and build logs from days split between wet labs, Jupyter notebooks, and coffee-fueled
                brainstorming with collaborators.
              </p>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-amber-300 hover:text-slate-50">
              See everything
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className={cardClass}>
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-amber-50/10 px-3 py-1 text-xs text-amber-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24" id="featured-writing">
        <div className="pointer-events-none absolute left-1/3 top-4 h-56 w-56 rounded-full bg-amber-200/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/4 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className={sectionLabel}>Featured Writing</p>
              <h2 className={sectionHeading}>Notes from the field</h2>
              <p className={bodyText}>
                Quick essays from long runs, lab mishaps, and the teaching moments that make science feel human.
              </p>
            </div>
            <Link to="/writing" className="text-sm font-semibold text-amber-300 hover:text-slate-50">
              See everything
            </Link>
          </div>
          <div className="space-y-6">
            {featuredPosts.map((post) => (
              <article key={post.slug} className={cardClass}>
                <p className="text-sm text-slate-400">{new Date(post.date).toLocaleDateString()}</p>
                <Link
                  to={`/writing/${post.slug}`}
                  className="mt-2 block text-xl font-semibold text-slate-50 hover:text-amber-200 md:text-2xl"
                >
                  {post.title}
                </Link>
                <p className={`${bodyText} mt-3 text-base md:text-lg`}>{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24" id="contact">
        <div className="pointer-events-none absolute -left-6 top-8 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 bottom-4 h-52 w-52 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-amber-50/15 bg-gradient-to-br from-amber-50/15 via-slate-900/60 to-slate-950/80 px-6 py-16 text-center shadow-[0_25px_60px_rgba(2,6,23,0.7)] backdrop-blur-lg md:px-10">
          <p className={sectionLabel}>Contact</p>
          <h2 className={sectionHeading}>Let&apos;s collaborate</h2>
          <p className={bodyText}>
            Email me or find me online. I love chatting about biotech, ML, and building tools for students—and I&apos;ll
            probably reply with a run route or playlist recommendation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-amber-200">
            <a className="border-b border-transparent pb-0.5 hover:border-amber-300" href="mailto:hello@aaronyu.com">
              hello@aaronyu.com
            </a>
            <a
              className="border-b border-transparent pb-0.5 hover:border-amber-300"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="border-b border-transparent pb-0.5 hover:border-amber-300"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
