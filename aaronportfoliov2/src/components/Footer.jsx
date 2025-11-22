const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-300 md:flex-row md:px-8">
        <p className="text-slate-200">
          © {year} Aaron Yu — coded between sunrise runs, lab sprints, and tutoring sessions.
        </p>
        <div className="flex items-center gap-5 text-amber-200">
          <a className="border-b border-transparent pb-0.5 hover:border-amber-300" href="mailto:hello@aaronyu.com">
            Email
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
    </footer>
  )
}

export default Footer
