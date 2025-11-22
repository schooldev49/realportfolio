import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'

const labelClass = 'text-xs tracking-[0.25em] uppercase text-amber-300/80'
const headingClass = 'text-2xl md:text-3xl font-semibold text-slate-50 mb-2'
const bodyText = 'text-base md:text-lg text-slate-300 leading-relaxed'
const cardClass =
  'rounded-3xl border border-amber-50/15 bg-gradient-to-br from-white/10 via-slate-900/60 to-slate-950/80 p-8 shadow-[0_25px_60px_rgba(2,6,23,0.7)] backdrop-blur-md transition hover:-translate-y-1 md:p-10'

const PostDetail = () => {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
        <div className="pointer-events-none absolute left-1/4 top-6 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-1/3 bottom-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-8">
          <div className={cardClass}>
            <p className={bodyText}>Post not found.</p>
            <Link to="/writing" className="mt-6 inline-block text-amber-300 hover:text-slate-50">
              Back to writing
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
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
            <p className={bodyText}>
              This is where I connect the dots between what happened in the lab, on the track, or while teaching and
              what it taught me about building. Expect candid stories, not press releases.
            </p>
            <p className={bodyText}>
              I talk about trade-offs, collaboration rituals, and the tiny systems that keep experiments from imploding.
              Sometimes it&apos;s a lesson from an LLM project; other times it&apos;s a reminder scribbled mid-run.
            </p>
            <p className={bodyText}>
              I usually wrap with questions or invitations to chat—because half of the fun is hearing how other builders
              approach the same puzzles.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default PostDetail
