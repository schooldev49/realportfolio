import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const labelClass = 'text-xs tracking-[0.25em] uppercase text-amber-300/80'
const headingClass = 'text-2xl md:text-3xl font-semibold text-slate-50 mb-4'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-3xl border border-amber-50/15 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_25px_60px_rgba(2,6,23,0.7)] backdrop-blur-md transition duration-300 hover:-translate-y-1 md:p-8'

const Writing = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-pink-200/12 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <header className="mb-12">
          <p className={labelClass}>Writing</p>
          <h1 className={headingClass}>Lab notes & essays</h1>
          <p className={bodyText}>
            Stream-of-consciousness reflections from track workouts, lab benches, and teaching sessions—written to keep
            the work honest and a little playful.
          </p>
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
                to={`/writing/${post.slug}`}
                className="mt-2 block text-2xl font-semibold text-slate-50 hover:text-amber-200 md:text-3xl"
              >
                {post.title}
              </Link>
              <p className="mt-3 text-base text-slate-300 md:text-lg">{post.summary}</p>
              <Link
                to={`/writing/${post.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-amber-300 hover:text-slate-50"
              >
                Read the full note →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Writing
