import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'

const siteUrl = 'https://simplydeveloper.dev'

const defaultMeta = {
  title: 'Aaron Yu | Computational Biology & Software',
  description:
    'Aaron Yu is a student developer working across computational biology, machine learning, research, and useful software tools.',
}

const setMeta = (attribute, value, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const SEO = () => {
  const location = useLocation()

  useEffect(() => {
    const project = location.pathname.startsWith('/projects/')
      ? projects.find((item) => `/projects/${item.slug}` === location.pathname)
      : null
    const meta = project
      ? {
          title: `${project.title} | Aaron Yu`,
          description: project.shortDescription,
        }
      : location.pathname === '/projects'
        ? {
            title: 'Selected Projects | Aaron Yu',
            description: 'Selected research, software, biology, and education projects by Aaron Yu.',
          }
        : defaultMeta
    const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`
    const isProjectSubpage = location.pathname.startsWith('/projects/')

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', isProjectSubpage ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [location.pathname])

  return null
}

export default SEO
