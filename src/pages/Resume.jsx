
import React from 'react'
import ExperienceSection from '../components/ExperienceSection'

export default function Resume(){
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Mohd. Tahur Khan</h1>
      <p className="text-slate-400">B.Tech – Artificial Intelligence & Data Science</p>
      <div className="flex gap-6 mt-2 text-sm text-slate-400">
        <div>📍 Bhopal, Madhya Pradesh, India</div>
        <div>✉️ khantahoor568@gmail.com</div>
        <div>📞 +91 8319171205</div>
      </div>

      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Career Objective</h2>
        <p className="text-slate-400 mt-2">A motivated developer with in-depth knowledge of programming languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while continuing to develop my skills.</p>
      </section>

      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc ml-5 mt-2 text-slate-400">
          <li><strong>Sagar Group of Institutions – SISTec, Gandhinagar Campus, Bhopal</strong> — B.Tech in Artificial Intelligence & Data Science (2021–2025)</li>
          <li><strong>All Saints' School, Gandhinagar, Bhopal</strong> — 12th (CBSE) (2021)</li>
          <li><strong>All Saints' School, Gandhinagar, Bhopal</strong> — 10th (CBSE) (2019)</li>
        </ul>
      </section>

      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-2 space-y-3 text-slate-400">
          <div>
            <div className="font-semibold">Incident Management System (IMS)</div>
            <div className="text-sm">DRF, Python, SQL, JWT</div>
            <div className="text-xs mt-1">Developed full-stack incident reporting and tracking platform with role-based authentication (JWT), ticketing, and status tracking.</div>
          </div>
          <div>
            <div className="font-semibold">School Management System</div>
            <div className="text-sm">DRF, Python, SQL, Razorpay, JWT</div>
            <div className="text-xs mt-1">Built a school ERP with fee management (Razorpay integration), teacher dashboard, and automated receipt generation.</div>
          </div>
          <div>
            <div className="font-semibold">Techno Hub (Event Platform)</div>
            <div className="text-sm">DRF, Python, SQL, Razorpay, JWT</div>
            <div className="text-xs mt-1">Event management portal handling registration, sponsors, payments and coordination workflows.</div>
          </div>
          <div>
            <div className="font-semibold">Pinterest & Instagram Clones</div>
            <div className="text-sm">HTML, CSS, JavaScript, Node.js, Express</div>
            <div className="text-xs mt-1">Built social replicas with authentication, image upload, following, and commenting features.</div>
          </div>
        </div>
      </section>

      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <p className="text-slate-400 mt-2">Python · Django REST Framework · SQL · HTML · CSS · JavaScript · Node.js · JWT · Razorpay</p>
      </section>

<section className="mt-4 p-4 bg-slate-800 rounded-md">
  <h2 className="text-xl font-semibold">Skill Proficiency</h2>
  <div className="mt-3 space-y-3">
    <div>
      <div className="flex justify-between text-sm"><span>Python</span><span>90%</span></div>
      <div className="w-full bg-slate-700 h-2 rounded mt-1"><div className="bg-sky-400 h-2 rounded" style={{width: '90%'}}></div></div>
    </div>
    <div>
      <div className="flex justify-between text-sm"><span>Django / DRF</span><span>82%</span></div>
      <div className="w-full bg-slate-700 h-2 rounded mt-1"><div className="bg-sky-400 h-2 rounded" style={{width: '82%'}}></div></div>
    </div>
    <div>
      <div className="flex justify-between text-sm"><span>SQL</span><span>78%</span></div>
      <div className="w-full bg-slate-700 h-2 rounded mt-1"><div className="bg-sky-400 h-2 rounded" style={{width: '78%'}}></div></div>
    </div>
  </div>
</section>



      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Certifications & Workshops</h2>
        <ul className="list-disc ml-5 mt-2 text-slate-400">
          <li>React — Sheriyans Coding School</li>
          <li>Front-End Development — Sheriyans Coding School</li>
          <li>Back-End Development — Sheriyans Coding School</li>
          <li>15-day Python Training — SISTec</li>
        </ul>
      </section>

      <ExperienceSection />

      <section className="mt-4 p-4 bg-slate-800 rounded-md">
        <h2 className="text-xl font-semibold">Strengths & Hobbies</h2>
        <p className="text-slate-400 mt-2">Leadership · Teamwork · Problem-solving</p>
        <p className="text-slate-400 mt-2">Hobbies: Coding · Online games</p>
      </section>

      <section className="mt-6 text-sm text-slate-400">
        <div>LinkedIn: <a href="https://www.linkedin.com/in/mohd-tahur-khan-b02248239" className="text-sky-400">/in/mohd-tahur-khan-b02248239</a></div>
        <div>GitHub: <a href="https://github.com/MohdTahurkhan" className="text-sky-400">github.com/MohdTahurkhan</a></div>
      </section>
    </div>
  )
}
