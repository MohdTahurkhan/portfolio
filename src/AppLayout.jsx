import React from 'react'
import Nav from './components/Nav'
import Cursor from './components/Cursor'
import Intro from './components/Intro'
import Loading from './components/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 md:p-12">
      <Loading />
      <Cursor />
      <Intro />
      <Cursor />
      <Nav />
      <Intro />
      <div className="max-w-6xl mx-auto">
        <main className="scroll-smooth">
          <section id="home" className="min-h-screen flex items-center">
            <Home />
          </section>

          <section id="about" className="min-h-screen flex items-center">
            <About />
          </section>

          <section id="projects" className="min-h-screen flex items-center">
            <Projects />
          </section>

          <section id="resume" className="min-h-screen flex items-center">
            <Resume />
          </section>

          <section id="contact" className="min-h-screen flex items-center">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  )
}
