import profilePic from '../assets/PROFILEPIC.png'
import sunset from '../assets/sunset.jpg'

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${sunset})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent" />
      <div className="pointer-events-none absolute -left-6 top-16 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 bottom-12 h-60 w-60 rounded-full bg-pink-400/15 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-24 md:flex-row md:items-center md:px-8">
        <div className="w-full md:w-2/3">
          <div className="inline-block w-full max-w-xl rounded-3xl border border-amber-50/20 bg-amber-50/10 px-8 py-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-md md:px-10 md:py-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-amber-300/90">
              Hi, I&apos;m Aaron.
            </p>
            <h1 className="mb-3 text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
              Building toward the next horizon.
            </h1>
            <div className="h-1 w-12 rounded-full bg-amber-300/90 animate-pulse" />
            <p className="mb-8 mt-4 max-w-xl text-base text-slate-100/90 md:text-lg">
              Runner. Builder. Bio + CS nerd.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-slate-900 shadow-md transition hover:bg-amber-100"
              >
                View Projects
              </a>
              <a
                href="/writing"
                className="inline-flex items-center justify-center rounded-full border border-amber-200/60 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Writing
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center md:w-1/3">
          <div className="relative">
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full border border-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 rounded-full border border-amber-200/30" aria-hidden="true" />
            <img
              src={profilePic}
              alt="Aaron portrait"
              className="h-52 w-52 rounded-full border border-white/20 object-cover ring-4 ring-amber-100/60 shadow-2xl transition duration-300 hover:scale-105 md:h-64 md:w-64"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90 pointer-events-none" />

    </section>
  )
}

export default Hero
