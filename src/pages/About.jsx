
// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import photo from "../assets/photo_placeholder.jpg";
import resume from "../assets/resume.pdf";

/* ---------- small helper: animated number ---------- */
function AnimatedNumber({ value = 0, duration = 1.0, format = (v) => Math.round(v) }) {
  const ref = useRef(null);
  useEffect(() => {
    let controls = animate(0, value, {
      duration,
      onUpdate(latest) {
        if (ref.current) ref.current.innerText = format(latest);
      },
    });
    return () => controls.stop();
  }, [value, duration, format]);
  return <span ref={ref}>{format(0)}</span>;
}

/* ---------- main component ---------- */
export default function About() {
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
  const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeRight = { hidden: { opacity: 0, x: 36 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

  const skills = [
    { name: "Python", level: 90 },
    { name: "Django / DRF", level: 88 },
    { name: "React & Vite", level: 82 },
    { name: "JavaScript (ES6+)", level: 76 },
    { name: "SQL (Postgres/MySQL)", level: 78 },
    { name: "Docker / CI-CD", level: 60 },
  ];

  const projects = [
    { title: "Incident Management System", desc: "Role-based ticketing, analytics, secure JWT auth.", tech: "Django • DRF • Postgres" },
    { title: "School Management ERP", desc: "Fees (Razorpay), dashboards, teacher & parent portals.", tech: "Django • MySQL" },
    { title: "Portfolio & Social clones", desc: "Responsive UIs, auth, image uploads.", tech: "React • Node" },
  ];

  /* avatar hover tilt values (using motion values for smoother 3D tilt) */
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateY = useTransform(tiltX, [-20, 20], [8, -8]);
  const rotateX = useTransform(tiltY, [-20, 20], [-6, 6]);

  function onAvatarMove(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1..1
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    tiltX.set(x * 12);
    tiltY.set(y * 12);
  }
  function onAvatarLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div className="max-w-6xl mx-auto py-14 px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-slate-100"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Avatar */}
        <motion.div
          className="col-span-1 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div
            className="w-60 h-76 rounded-2xl overflow-hidden relative transform-gpu"
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            style={{ perspective: 900 }}
            onMouseMove={onAvatarMove}
            onMouseLeave={onAvatarLeave}
          >
            <motion.img
              src={photo}
              alt="Tahur Khan"
              className="w-full h-full object-cover rounded-2xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ rotateY, rotateX }}
            />
            <div
              aria-hidden
              className="absolute -inset-1 rounded-2xl pointer-events-none"
              style={{
                boxShadow: "0 18px 40px rgba(56,189,248,0.05), 0 8px 30px rgba(99,102,241,0.03)",
                borderRadius: 16,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-gradient-to-r from-white/3 to-transparent text-xs text-slate-100/80 backdrop-blur-sm"
            >
              <div className="font-semibold">Mohd. Tahur Khan</div>
              <div className="text-[11px] text-slate-200/70">Full-Stack & Python Developer</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main text + skillbars */}
        <motion.div
          className="md:col-span-2 space-y-6 text-slate-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
        >
          <motion.div variants={fadeRight}>
            <p className="leading-relaxed text-base">
              Hi — I’m <strong>Mohd. Tahur Khan</strong>, a <strong>Full-Stack & Python Developer</strong> pursuing B.Tech in Artificial Intelligence & Data Science.
              I build maintainable backends with Django REST Framework, design clean RESTful APIs, and craft interactive front-ends using React.
            </p>

            <p className="leading-relaxed mt-2 text-sm text-slate-300">
              I focus on secure authentication (JWT), payment integration (Razorpay), API performance tuning, and deploying reliable services using containers & CI/CD.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href={resume}
                download="Mohd_Tahur_Resume.pdf"
                className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm shadow hover:scale-105 transition-transform flex items-center gap-2"
                aria-label="Download resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block">
                  <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-block px-4 py-2 border border-slate-600 text-slate-200 rounded-lg text-sm hover:bg-slate-700 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* metrics with small motion */}
          <motion.div className="grid sm:grid-cols-3 gap-4" variants={fadeRight}>
            <motion.div className="p-3 rounded-xl bg-gradient-to-t from-slate-800/40 to-transparent" whileHover={{ y: -6 }}>
              <div className="text-xs text-slate-400">Years Learning</div>
              <div className="text-2xl font-semibold text-slate-100"><AnimatedNumber value={4} format={(v) => `${Math.floor(v)}+`} duration={0.8} /></div>
            </motion.div>
            <motion.div className="p-3 rounded-xl bg-gradient-to-t from-slate-800/40 to-transparent" whileHover={{ y: -6 }}>
              <div className="text-xs text-slate-400">Projects</div>
              <div className="text-2xl font-semibold text-slate-100"><AnimatedNumber value={10} format={(v) => `${Math.floor(v)}+`} duration={0.9} /></div>
            </motion.div>
            <motion.div className="p-3 rounded-xl bg-gradient-to-t from-slate-800/40 to-transparent" whileHover={{ y: -6 }}>
              <div className="text-xs text-slate-400">Primary Tech</div>
              <div className="text-2xl font-semibold text-slate-100">Python • React</div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeRight}>
            <h3 className="text-lg font-semibold text-slate-100 mb-3">Key Skills</h3>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="w-full"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  <div className="flex justify-between mb-1 text-sm text-slate-300">
                    <span>{s.name}</span>
                    <span><AnimatedNumber value={s.level} duration={1.2} format={(v) => `${Math.round(v)}%`} /></span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      whileHover={{ scaleX: 1.02 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <motion.h4
          className="text-xl font-semibold text-slate-100 mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h4>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              className="group p-4 rounded-2xl bg-slate-900/30 transform-gpu"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.025 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ perspective: 800 }}
            >
              <motion.div
                className="tilt-card p-3 rounded-lg"
                initial={{ rotateX: 0, rotateY: 0 }}
                whileHover={{ rotateX: 6, rotateY: -6 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-slate-100">{p.title}</div>
                      <div className="text-slate-300 text-sm mt-1">{p.desc}</div>
                      <div className="text-xs text-slate-400 mt-2">{p.tech}</div>
                    </div>
                    <div className="text-xs text-sky-300 ml-4">View</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <motion.div
        id="contact"
        className="mt-10 p-5 rounded-2xl bg-slate-900/40 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-slate-100 mb-3">Contact</h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
          <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <strong className="text-slate-200">Email:</strong>{" "}
            <a href="mailto:khantahoor568@gmail.com" className="text-sky-400">khantahoor568@gmail.com</a>
          </motion.li>

          <motion.li initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.06 }}>
            <strong className="text-slate-200">Phone:</strong> +91 8319171205
          </motion.li>

          <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.12 }}>
            <strong className="text-slate-200">Location:</strong> Bhopal, Madhya Pradesh, India
          </motion.li>

          <motion.li initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.18 }}>
            <strong className="text-slate-200">LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/mohd-tahur-khan-b02248239" className="text-sky-400" target="_blank" rel="noreferrer">/in/mohd-tahur-khan-b02248239</a>
          </motion.li>

          <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.24 }}>
            <strong className="text-slate-200">GitHub:</strong>{" "}
            <a href="https://github.com/MohdTahurkhan" className="text-sky-400" target="_blank" rel="noreferrer">github.com/MohdTahurkhan</a>
          </motion.li>
        </ul>
      </motion.div>

      <style jsx>{`
        .tilt-card {
          transform-origin: center;
          transition: transform 200ms ease;
        }
        .group:hover .tilt-card {
          transform: rotateX(6deg) rotateY(-6deg);
        }
      `}</style>
    </div>
  );
}
