import { useEffect, useRef, useState } from 'react'

const DeferredBackground = ({ backgroundImage, children, className, style, ...props }) => {
  const sectionRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '500px 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      {...props}
      className={className}
      style={style}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
          shouldLoad ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: shouldLoad ? backgroundImage : undefined }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default DeferredBackground
