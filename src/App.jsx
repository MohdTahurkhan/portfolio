import React from 'react'
import ExperienceSection from './components/ExperienceSection'

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gray-50">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Tahur Khan</h1>
        <p className="text-gray-600 mt-2">Python Developer · Backend (Django / DRF) · Open to internships & junior roles</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section id="about" className="rounded-2xl p-6 bg-white shadow-sm border">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-700">
            Backend-focused developer with hands-on experience building RESTful APIs using Python, Django, and Django REST Framework.
            Experienced with database integration, query optimization, authentication/authorization, deployments and collaborating with frontend teams.
          </p>
        </section>

        <ExperienceSection />

        <section id="contact" className="rounded-2xl p-6 bg-white shadow-sm border">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <ul className="text-gray-700">
            <li>Email: <a href="mailto:your.email@example.com" className="text-sky-600">your.email@example.com</a></li>
            <li>LinkedIn: <span className="text-gray-600">/in/your-linkedin</span></li>
            <li>GitHub: <span className="text-gray-600">/your-github</span></li>
          </ul>
        </section>
      </main>
    </div>
  )
}
