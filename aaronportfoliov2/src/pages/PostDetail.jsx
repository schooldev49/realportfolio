import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import { povImages } from '../data/projects'

const labelClass = 'text-xs font-semibold tracking-[0.22em] uppercase text-amber-300/85'
const headingClass = 'text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-slate-50 mb-2'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-2xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_12px_30px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 md:p-10'

const PostDetail = () => {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="relative overflow-hidden bg-slate-900 py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/4 top-6 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/3 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
          <div className={cardClass}>
            <p className={bodyText}>Post not found.</p>
            <Link to="/blog" className="mt-6 inline-block text-amber-300 hover:text-slate-50">
              Back to blog
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.98)), url(${povImages[6].src})` }}
    >
      <div className="pointer-events-none absolute left-0 top-6 h-56 w-56 rounded-full bg-amber-200/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 bottom-8 h-48 w-48 rounded-full bg-rose-200/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <article className={`${cardClass} space-y-8`}>
          <div>
            <p className={labelClass}>Essay</p>
            <h1 className={headingClass}>{post.title}</h1>
            <p className="text-sm text-slate-400">
              {new Date(post.date).toLocaleDateString(undefined, {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>

          <div className="space-y-6 text-slate-200">
            <p className={bodyText}>WIP — this post is not published yet.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default PostDetail
