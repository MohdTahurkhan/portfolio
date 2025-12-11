
import React from 'react'

export default function ExperienceSection(){
  return (
    <div className="space-y-4 experience-timeline">
      <h2 className="text-2xl font-bold">Experience</h2>

      <div className="p-4 bg-slate-800 rounded-md section-card experience-item">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-lg font-semibold">Python Developer — LGS Techno Hub</div>
            <div className="text-sm text-slate-400">Bhopal · On-site · Internship</div>
            <div className="text-xs text-slate-500">Jul 2025 - Present · 6 mos</div>
          </div>
        </div>
        <ul className="list-disc ml-5 mt-3 text-slate-400">
          <li>Developed and maintained backend APIs using Python and Django / DRF.</li>
          <li>Integrated databases and optimized queries for better performance.</li>
          <li>Built secure and scalable RESTful services and implemented role-based access control.</li>
          <li>Worked on bug fixing, debugging, and improving application performance.</li>
          <li>Collaborated with frontend team, handled deployments and version control (Git).</li>
        </ul>
      </div>

      <div className="p-4 bg-slate-800 rounded-md section-card experience-item">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-lg font-semibold">Python Backend Trainee — LGS Techno Hub</div>
            <div className="text-sm text-slate-400">Apr 2025 - Jun 2025 · 3 mos</div>
          </div>
        </div>
        <ul className="list-disc ml-5 mt-3 text-slate-400">
          <li>Learned core Python programming and backend fundamentals.</li>
          <li>Practiced API development using Django / DRF and assisted senior developers.</li>
          <li>Worked on modules, debugging tasks, and code optimization.</li>
          <li>Gained hands-on experience with Git, REST APIs, and basic deployment.</li>
        </ul>
      </div>
    </div>
  )
}
