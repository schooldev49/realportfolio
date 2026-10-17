import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Writing from './pages/Writing'
import PostDetail from './pages/PostDetail'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const target = document.querySelector(location.hash)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:slug" element={<PostDetail />} />
          <Route path="/blog" element={<Writing />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
