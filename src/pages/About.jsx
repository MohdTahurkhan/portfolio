
import React from 'react'
import photo from '../assets/photo_placeholder.jpg'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="col-span-1 flex justify-center md:justify-start">
          <div className="w-56 h-72 rounded-2xl overflow-hidden profile-glow">
            <img src={photo} alt="Tahur Khan" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 text-slate-200">
          <p className="leading-relaxed">
            I am <strong>Mohd. Tahur Khan</strong>, a dedicated <strong>Full-Stack & Python Developer</strong> pursuing B.Tech in Artificial Intelligence & Data Science.
            I specialize in building robust backend systems using <em>Python</em> and <em>Django REST Framework</em>, designing clean RESTful APIs, and integrating reliable SQL databases.
            I also have experience building front-end interfaces with HTML, CSS and JavaScript and enjoy delivering end-to-end product features.
          </p>

          <p className="leading-relaxed">
            My work includes full lifecycle development of applications such as Incident Management Systems, School Management ERPs, event platforms, and social media replicas.
            I focus on secure authentication (JWT), payment integrations (Razorpay), API performance, and maintainable codebases.
          </p>

          <p className="leading-relaxed">
            I thrive in collaborative teams, enjoy mentoring juniors, and continually learn new tools and best practices to deliver production-ready software.
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="text-slate-400 text-sm">
              <li>Email: <a href="mailto:khantahoor568@gmail.com" className="text-sky-400">khantahoor568@gmail.com</a></li>
              <li>Phone: +91 8319171205</li>
              <li>Location: Bhopal, Madhya Pradesh, India</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/mohd-tahur-khan-b02248239" className="text-sky-400">/in/mohd-tahur-khan-b02248239</a></li>
              <li>GitHub: <a href="https://github.com/MohdTahurkhan" className="text-sky-400">github.com/MohdTahurkhan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
