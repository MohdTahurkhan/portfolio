
import React, { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import ExperienceSection from "../components/ExperienceSection";
import resume from "../assets/resume.pdf"; // update path if needed
import photo from "../assets/photo_placeholder.jpg";

function AnimatedNumber({ value = 0, duration = 0.9, suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [value, duration, suffix]);
  return <span ref={ref}>{0}{suffix}</span>;
}

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false);

  const skills = [
    { name: "Python", pct: 90 },
    { name: "Django / DRF", pct: 86 },
    { name: "React & Vite", pct: 82 },
    { name: "JavaScript (ES6+)", pct: 76 },
    { name: "SQL (Postgres/MySQL)", pct: 78 },
    { name: "Docker / CI-CD", pct: 64 },
  ];

  const metrics = [
    { label: "Years Learning", value: 4, suffix: "+" },
    { label: "Projects", value: 10, suffix: "+" },
    { label: "Endpoints Built", value: 200 },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={photo} alt="Tahur" className="w-20 h-20 rounded-full object-cover ring-2 ring-sky-500/30 shadow-md" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-100">Mohd. Tahur Khan</h1>
            <div className="text-sm text-slate-400 mt-1">B.Tech — Artificial Intelligence & Data Science</div>
            <div className="text-sm text-slate-400 mt-1">Backend-focused Full-Stack Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resume}
            download="Mohd_Tahur_Resume.pdf"
            className="px-3 py-2 rounded-md bg-sky-500 text-white text-sm shadow hover:scale-105 transition"
            aria-label="Download resume"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>

          <button
            onClick={() => setShowViewer(true)}
            className="px-3 py-2 rounded-md border border-slate-700 text-slate-200 text-sm hover:bg-slate-800 transition"
          >
            Open Viewer
          </button>
        </div>
      </div>

      {/* contact + quick details */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 grid md:grid-cols-3 gap-3 text-sm text-slate-400"
      >
        <div>📍 Bhopal, Madhya Pradesh, India</div>
        <div>✉️ <a className="text-sky-400" href="mailto:khantahoor568@gmail.com">khantahoor568@gmail.com</a></div>
        <div>📞 +91 8319171205</div>
      </motion.div>

      {/* objective */}
      <motion.section initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6 p-4 bg-slate-800 rounded-md">
        <h2 className="text-lg font-semibold text-slate-100">Career Objective</h2>
        <p className="text-slate-300 mt-2">
          Motivated developer specialized in building secure, maintainable backends and pragmatic frontends.
          Seeking a role where I can contribute to product quality, scale APIs, and learn modern infrastructure patterns.
        </p>
      </motion.section>

      {/* two-column layout: left projects + skills, right education & experience */}
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {/* left column (projects & skills) */}
        <div className="md:col-span-2 space-y-4">
          <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-4 bg-slate-800 rounded-md">
            <h2 className="text-lg font-semibold text-slate-100">Key Projects</h2>

            <div className="mt-3 space-y-3 text-slate-300">
              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-md p-3 bg-slate-900/30">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-slate-100">Incident Management System (IMS)</div>
                    <div className="text-xs text-slate-400">DRF, Python, Postgres, JWT</div>
                  </div>
                  <div className="text-xs text-slate-400">Role: Backend & API</div>
                </div>
                <p className="text-xs mt-2 text-slate-300">
                  Built a production-grade incident tracking system with multi-stage workflows, SLA timers, priority routing, attachments,
                  audit logs, and analytics. Focused on secure APIs (JWT), efficient SQL queries and robust pagination for large datasets.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.04 }} className="rounded-md p-3 bg-slate-900/30">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-slate-100">School Management System</div>
                    <div className="text-xs text-slate-400">DRF, MySQL, Razorpay</div>
                  </div>
                  <div className="text-xs text-slate-400">Role: Full-Stack</div>
                </div>
                <p className="text-xs mt-2 text-slate-300">
                  Developed ERP modules for fee management (Razorpay), teacher dashboards, automated receipts and reconciliations. Implemented webhooks,
                  idempotent transactions and exportable financial reports.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="rounded-md p-3 bg-slate-900/30">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-slate-100">Pinterest & Instagram Clones</div>
                    <div className="text-xs text-slate-400">HTML, CSS, JS, Node, Express</div>
                  </div>
                  <div className="text-xs text-slate-400">Role: Frontend & Backend</div>
                </div>
                <p className="text-xs mt-2 text-slate-300">
                  Built responsive social feed prototypes with auth, image uploads, follow systems, infinite scroll and search. Focused on UX and deployability.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* skills */}
          <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.04 }} className="p-4 bg-slate-800 rounded-md">
            <h2 className="text-lg font-semibold text-slate-100">Technical Skills</h2>

            <div className="mt-3 space-y-3">
              {skills.map((s, idx) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-slate-300">
                    <span>{s.name}</span>
                    <span><AnimatedNumber value={s.pct} duration={1.1} suffix="%" /></span>
                  </div>

                  <div className="w-full bg-slate-700 h-2 rounded mt-1 overflow-hidden">
                    <motion.div
                      className="h-2 rounded bg-gradient-to-r from-sky-400 to-indigo-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 * idx }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* right column (education, metrics, certifications) */}
        <div className="space-y-4">
          <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-4 bg-slate-800 rounded-md">
            <h2 className="text-lg font-semibold text-slate-100">Education</h2>
            <ul className="mt-2 text-slate-300 text-sm space-y-2">
              <li>
                <div className="font-medium">Sagar Group of Institutions — SISTec (B.Tech)</div>
                <div className="text-xs text-slate-400">Artificial Intelligence & Data Science (2021–2025)</div>
              </li>
              <li>
                <div className="font-medium">All Saints' School, Gandhinagar, Bhopal</div>
                <div className="text-xs text-slate-400">12th (CBSE) — 2021</div>
              </li>
            </ul>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.04 }} className="p-4 bg-slate-800 rounded-md">
            <h2 className="text-lg font-semibold text-slate-100">Quick Metrics</h2>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {metrics.map((m) => (
                <motion.div key={m.label} className="p-3 rounded-md bg-slate-900/30" whileHover={{ y: -4 }}>
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-2xl font-semibold text-slate-100">
                    <AnimatedNumber value={m.value} duration={0.85} suffix={m.suffix || ""} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="p-4 bg-slate-800 rounded-md">
            <h2 className="text-lg font-semibold text-slate-100">Certifications</h2>
            <ul className="mt-2 text-slate-300 text-sm list-disc ml-5">
              <li>React — Sheriyans Coding School</li>
              <li>Front-End Development — Sheriyans Coding School</li>
              <li>Back-End Development — Sheriyans Coding School</li>
              <li>15-day Python Training — SISTec</li>
            </ul>
          </motion.section>
        </div>
      </div>

      {/* Experience section component (kept as-is) */}
      <div className="mt-6">
        <ExperienceSection />
      </div>

      {/* strengths & hobbies + footer */}
      <motion.section initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }} className="mt-6 p-4 bg-slate-800 rounded-md">
        <h2 className="text-lg font-semibold text-slate-100">Strengths & Hobbies</h2>
        <p className="text-slate-300 mt-2">Leadership · Teamwork · Problem-solving</p>
        <p className="text-slate-300 mt-2">Hobbies: Coding · Online games</p>

        <div className="mt-4 text-sm text-slate-400">
          <div>LinkedIn: <a className="text-sky-400" href="https://www.linkedin.com/in/mohd-tahur-khan-b02248239" target="_blank" rel="noreferrer">/in/mohd-tahur-khan-b02248239</a></div>
          <div>GitHub: <a className="text-sky-400" href="https://github.com/MohdTahurkhan" target="_blank" rel="noreferrer">github.com/MohdTahurkhan</a></div>
        </div>
      </motion.section>

      {/* PDF viewer modal */}
      {showViewer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowViewer(false)} />
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.18 }} className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
            <div className="flex items-center justify-between p-3 border-b border-slate-700">
              <div className="text-sm text-slate-200 font-semibold">Resume — Mohd. Tahur Khan</div>
              <div className="flex items-center gap-2">
                <a href={resume} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded bg-white/6">Open in new tab</a>
                <button onClick={() => setShowViewer(false)} className="text-xs px-3 py-1 rounded bg-white/6">Close</button>
              </div>
            </div>

            <iframe src={resume} title="Resume" className="w-full h-full" style={{ border: "none" }} />
          </motion.div>
        </div>
      )}

      {/* print friendly adjustments */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .bg-slate-800, .bg-slate-900 { background-color: transparent !important; color: #000 !important; }
          a::after { content: ''; }
          img { max-width: 120px; }
        }
      `}</style>
    </div>
  );
}
