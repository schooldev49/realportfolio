import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { povImages } from '../data/projects'

const labelClass = 'text-xs font-semibold tracking-[0.22em] uppercase text-amber-300/85'
const headingClass = 'text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_12px_30px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-slate-800/80 md:p-8'

const Writing = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.97)), url(${povImages[2].src})` }}
    >
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-pink-200/12 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <header className="mb-12">
          <p className={labelClass}>Blog</p>
          <h1 className={headingClass}>Blog</h1>
          <p className={bodyText}>WIP — posts are being edited and will be published here soon.</p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className={cardClass}>
              <p className="text-sm text-slate-400">
                {new Date(post.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-2 block text-2xl font-semibold text-slate-50 hover:text-amber-200 md:text-3xl"
              >
                {post.title}
              </Link>
              <p className="mt-3 text-base text-slate-300 md:text-lg">{post.summary}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-amber-300 hover:text-white"
              >
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing
