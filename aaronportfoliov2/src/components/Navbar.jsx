import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm md:px-8">
        <Link
          to="/"
          className="flex flex-col text-base font-semibolds tracking-[0.2em] text-white"
        >
          aaron
        
        </Link>
        <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-slate-100 md:gap-7 md:text-sm">
          {[
            { label: 'home', to: '/' },
            { label: 'projects', to: '/projects' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b-2 border-transparent pb-1 transition hover:border-amber-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="border-b-2 border-transparent pb-1 transition hover:border-amber-300"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
