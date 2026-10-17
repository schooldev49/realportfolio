import { useState } from 'react'
import { projects, povImages } from '../data/projects'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const project = projects[activeIndex]
  const projectImages = project.images ?? []

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-slate-900 bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(2, 6, 23, 0.96), rgba(2, 6, 23, 0.84) 42%, rgba(2, 6, 23, 0.98)), url(${povImages[0].src})`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <header className="flex items-end justify-between gap-6 border-b border-white/15 pb-5">
          <div className="flex items-center gap-5">
            <p className="text-sm font-semibold tracking-[0.28em] text-white">Selected projects</p>
          </div>
          <span className="hidden text-xs tracking-[0.18em] text-slate-500 md:block">auraful projects</span>
        </header>

        <div className="mt-8 flex gap-7 overflow-x-auto border-b border-white/15 pb-5 [scrollbar-color:#fbbf24_transparent]">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                setActiveIndex(index)
                setActiveImageIndex(0)
              }}
              className={`group shrink-0 border-b pb-3 text-left text-sm transition md:text-base ${
                index === activeIndex
                  ? 'border-amber-300 text-white'
                  : 'border-transparent text-slate-400 hover:border-white/30 hover:text-slate-200'
              }`}
            >
              <span className="mr-2 text-[0.65rem] font-semibold tracking-[0.18em] text-amber-300/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.title}
            </button>
          ))}
        </div>

        <article className="grid gap-10 py-14 md:grid-cols-[15rem_1fr] md:gap-16 md:py-20">
          <aside className="flex flex-row justify-between gap-6 text-sm text-slate-400 md:block">
            {project.links?.length > 0 && (
                <div className="mt-8 flex flex-col items-start gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex border-b border-amber-300 pb-1 text-amber-300 hover:text-white"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            <div className="md:mt-12">
               
              <div className="flex flex-wrap gap-2 md:max-w-[12rem]">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-white/15 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
             
            </div>
          </aside>

          <div>
            <h1 className="mt-3 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-200 md:text-2xl">
              {project.shortDescription}
            </p>

            <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/85">Overview</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{project.overview}</p>
              </section>
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/85">Approach</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{project.approach}</p>
              </section>
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/85">Impact</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{project.impact}</p>
              </section>
            </div>

            {projectImages.length > 0 && (
              <figure className="group relative mt-12 overflow-hidden border border-white/15 bg-slate-900">
                <img
                  src={projectImages[activeImageIndex]}
                  alt={project.title}
                  decoding="async"
                  className={`aspect-[16/8] w-full transition duration-700 ${
                    project.imageFits?.[activeImageIndex] === 'contain'
                      ? 'bg-white object-contain'
                      : 'object-cover group-hover:scale-[1.02]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-5 text-xs uppercase tracking-[0.18em] text-white/75">
                  Aaron Yu / selected work
                </figcaption>
                {projectImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous project image"
                    onClick={() => setActiveImageIndex((index) => (index - 1 + projectImages.length) % projectImages.length)}
                    className="absolute bottom-4 right-16 border border-white/30 bg-slate-950/60 px-3 py-2 text-lg text-white transition hover:border-amber-300 hover:text-amber-200"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Next project image"
                    onClick={() => setActiveImageIndex((index) => (index + 1) % projectImages.length)}
                    className="absolute bottom-4 right-4 border border-white/30 bg-slate-950/60 px-3 py-2 text-lg text-white transition hover:border-amber-300 hover:text-amber-200"
                  >
                    →
                  </button>
                  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                    {projectImages.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Show project image ${index + 1}`}
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2 w-2 rounded-full transition ${index === activeImageIndex ? 'bg-amber-300' : 'bg-white/50 hover:bg-white'}`}
                      />
                    ))}
                  </div>
                </>
                )}
              </figure>
            )}
          </div>
        </article>

        <footer className="flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.18em] text-slate-500">
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </footer>
      </div>
    </section>
  )
}

export default Projects
