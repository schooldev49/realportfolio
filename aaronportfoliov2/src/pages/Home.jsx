import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import DeferredBackground from '../components/DeferredBackground'
import { projects, povImages } from '../data/projects'

const sectionHeading = 'text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_12px_30px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-slate-800/80'

const Home = () => {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="pb-24">
      <section id="hero">
        <Hero />
      </section>

      <DeferredBackground
        className="relative -mt-16 overflow-hidden bg-slate-950 bg-cover bg-center pb-20 pt-36 md:pb-32 md:pt-48"
        id="about"
        backgroundImage={`linear-gradient(180deg, rgba(2, 6, 23, 1) 0%, rgba(2, 6, 23, 0.96) 18%, rgba(2, 6, 23, 0.68) 82%, rgba(2, 6, 23, 1) 100%), url(${povImages[7].src})`}
      >
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">A little about me</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">
            I'm an incoming student at the University of Chicago, where I plan to study molecular engineering on the Bioengineering track. I work on biology and software projects, usually with a notebook open and too many Chrome tabs.
            I started with a love for coding back in middle school, making fun games like a platformer game in C++ <a href="https://jumpy-game.netlify.app" className="text-amber-300 hover:text-white">here</a>. In high school, I became interested in biology and started exploring how I could apply programming and machine learning to biological problems. especially in cancer immunology at <a href="https://isef.net/project/cbio050-xneocrypt-ranking-noncanonical-tumor-antigens" className="text-amber-300 hover:text-white">ISEF 2026</a>. I'm excited to continue exploring the intersection of biology and software in college, and to keep building useful tools for curious people.
          </p>
          
        </div>
      </DeferredBackground>

      <DeferredBackground
        className="relative overflow-hidden bg-slate-900 bg-cover bg-center py-16 md:py-24"
        id="featured-projects"
        backgroundImage={`linear-gradient(180deg, rgba(2, 6, 23, 1) 0%, rgba(2, 6, 23, 0.78) 16%, rgba(2, 6, 23, 0.9) 84%, rgba(2, 6, 23, 1) 100%), url(${povImages[3].src})`}
      >
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className={sectionHeading}>Recent work</h2>
              <p className={bodyText}>
                A few things I&apos;ve worked on recently.
              </p>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-amber-300 hover:text-white">
              See all projects ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.slug} className={cardClass}>
                {project.images?.[0] && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="mb-5 aspect-[16/9] w-full object-cover"
                  />
                )}
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.shortDescription}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-amber-100/80">
                  {project.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-amber-50/10 px-3 py-1 text-xs text-amber-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </DeferredBackground>

      <DeferredBackground
        className="relative overflow-hidden bg-slate-900 bg-cover bg-center py-20 md:py-28"
        id="contact"
        backgroundImage={`linear-gradient(180deg, rgba(2, 6, 23, 0.98) 0%, rgba(2, 6, 23, 0.72) 18%, rgba(2, 6, 23, 0.82) 82%, rgba(2, 6, 23, 0.98) 100%), url(${povImages[9].src})`}
      >
        <div className="relative mx-auto max-w-6xl px-6 py-4 text-center md:px-10">
          <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">Let&apos;s collaborate</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            Want to talk about a project, research, or just say hi? Send me an email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-amber-200">
            <a className="border-b border-transparent pb-0.5 hover:border-amber-300" href="mailto:ay.aaron.yu@gmail.com">
              ay.aaron.yu@gmail.com
            </a>
            <a
              className="border-b border-transparent pb-0.5 hover:border-amber-300"
              href="https://www.linkedin.com/in/aaron-yu-980873332/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="border-b border-transparent pb-0.5 hover:border-amber-300"
              href="https://github.com/schooldev49"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </DeferredBackground>
    </div>
  )
}

export default Home
