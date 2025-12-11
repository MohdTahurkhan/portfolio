
import React from 'react'

const projects = [
  {
    title: 'Incident Management System (IMS)',
    tech: 'DRF, Python, SQL, JWT',
    desc: 'Full-stack incident reporting and tracking platform with role-based authentication and ticketing.'
  },
  {
    title: 'School Management System',
    tech: 'DRF, Python, SQL, Razorpay, JWT',
    desc: 'ERP with fee management (Razorpay), teacher dashboard and automated receipts.'
  },
  {
    title: 'Techno Hub (Event Platform)',
    tech: 'DRF, Python, SQL, Razorpay, JWT',
    desc: 'Event registration, sponsorship, and coordination platform with payment integration.'
  },
  {
    title: 'Pinterest & Instagram Clones',
    tech: 'HTML, CSS, JavaScript, Node.js, Express',
    desc: 'Social media replicas featuring auth, image upload, following, and commenting.'
  }
]

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-slate-800 rounded-lg section-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">{p.title}</div>
                <div className="text-sm text-slate-400">{p.tech}</div>
              </div>
            </div>
            <div className="mt-3 text-slate-300">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
