import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-slate-100 md:px-8">
        <Link
          to="/"
          className="flex flex-col rounded-2xl bg-white/5 px-4 py-2 text-base font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-amber-500/10"
        >
          Aaron Yu
          <span className="text-[0.6rem] font-normal normal-case tracking-[0.3em] text-amber-200/80">
            runs + research notes
          </span>
        </Link>
        <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider md:gap-6 md:text-sm">
          {[
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: 'Writing', to: '/writing' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b-2 border-transparent pb-1 transition hover:border-amber-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#contact"
            className="border-b-2 border-transparent pb-1 transition hover:border-amber-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
