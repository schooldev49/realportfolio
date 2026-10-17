import profilePic from '../assets/optimized/root/profile.jpg'
import sunset from '../assets/optimized/root/sunset.jpg'

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${sunset})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/15" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
        <div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
              Aaron Yu
            </h1>
            <p className="mb-8 mt-6 max-w-xl text-lg leading-relaxed text-slate-100/90 md:text-xl">
              I study biology, write software, and spend a lot of time outside. I like making things that are actually useful and beneficial for society.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-900 shadow-[4px_4px_0_rgba(15,23,42,0.45)] transition hover:bg-amber-100"
              >
                View Projects
              </a>
            </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:justify-self-end">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-amber-200/60" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/30 p-3 backdrop-blur-sm">
            <img
              src={profilePic}
              alt="Aaron portrait"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top transition duration-300 hover:scale-[1.02]"
            />
            <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs font-semibold tracking-[0.18em] text-white">
              <span>uchicago '31</span><span>year 0 / 4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950" />
      <div className="mx-auto h-px max-w-6xl bg-white/25" />
    </section>
  )
}

export default Hero
