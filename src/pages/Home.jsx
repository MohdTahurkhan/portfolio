

// // src/pages/Home.jsx
// import React, { useEffect, useRef } from "react";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import photo from "../assets/photo_placeholder.jpg";
// import car from "../assets/car_improved.svg";
// import resume from "../assets/resume.pdf";

// /* -------------------- Inline SVG logos -------------------- */
// function PythonLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M130.3 1.5c-13.7.2-27.4 0-40.9 3.1-9.7 2.1-17.1 8.9-19.9 18.4-3 10.3-.2 22.5-.2 33.7v6.3h66.7v10.6H56.2c-22.4 0-40.6 18.7-40.6 41.7v25.2c0 23 18.2 41.7 40.6 41.7h28.1v-21.2c0-8.1 6.1-14.7 14.2-14.7h66.8c22.4 0 40.6-18.7 40.6-41.7V95.3c0-23-18.2-41.7-40.6-41.7h-28.1V34.8c0-12.4-9.5-21.9-21.9-23.3-6.2-.8-12.6-1.3-18.8-1.8z" fill="#3776AB"/>
//       <path d="M125.5 252.8c13.6-.2 27.2 0 40.7-3.1 9.7-2.1 17.1-8.9 19.9-18.4 3-10.3.2-22.5.2-33.7v-6.3h-66.7v-10.6h87.8c22.4 0 40.6-18.7 40.6-41.7v-25.2c0-23-18.2-41.7-40.6-41.7h-28.1v21.2c0 8.1-6.1 14.7-14.2 14.7H97.9c-22.4 0-40.6 18.7-40.6 41.7v25.2c0 23 18.2 41.7 40.6 41.7h27z" fill="#FFE052"/>
//     </svg>
//   );
// }

// function DjangoLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="24" height="24" rx="4" fill="#092E20" />
//       <path d="M6 8h12v2H6zM6 12h7v2H6z" fill="#7ED957" />
//     </svg>
//   );
// }

// function DrfLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="12" cy="12" r="10" fill="#0EA5A9" />
//       <path d="M8 12h8M12 8v8" stroke="#00201A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );
// }

// function SqlLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <ellipse cx="12" cy="5" rx="8" ry="3" fill="#134E4A"/>
//       <path d="M4 5v8c0 1.657 3.582 3 8 3s8-1.343 8-3V5" fill="#065F46"/>
//       <ellipse cx="12" cy="13" rx="8" ry="3" fill="#0EA5A9"/>
//     </svg>
//   );
// }

// function JsLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <rect width="24" height="24" rx="3" fill="#F7DF1E" />
//       <path d="M9.5 17.2s.6.4 1.5.4c.9 0 1.1-.4 1.1-1V10h2.1v6.8c0 2.2-1.3 3.1-3.2 3.1-1.7 0-2.7-.9-3.5-1.6" fill="#000"/>
//     </svg>
//   );
// }

// function ReactLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="-11.5 -10 23 20" xmlns="http://www.w3.org/2000/svg">
//       <g stroke="#61DAFB" strokeWidth="0.9" fill="none">
//         <ellipse rx="10" ry="4.2" transform="rotate(0)"/>
//         <ellipse rx="10" ry="4.2" transform="rotate(60)"/>
//         <ellipse rx="10" ry="4.2" transform="rotate(120)"/>
//       </g>
//       <circle r="1.8" fill="#61DAFB"/>
//     </svg>
//   );
// }

// function HtmlLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <rect width="24" height="24" rx="3" fill="#E34F26"/>
//       <path d="M7 7h10l-.7 8.1L12 19l-4.3-3.9L7 7z" fill="#fff" opacity="0.15"/>
//       <path d="M7 7l1.2 12L12 19l3.8-2 .5-6.7H7z" fill="#fff"/>
//     </svg>
//   );
// }

// function CssLogo({ className = "w-6 h-6" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <rect width="24" height="24" rx="3" fill="#1572B6"/>
//       <path d="M7 7h10l-.7 8.1L12 19l-4.3-3.9L7 7z" fill="#fff" opacity="0.08"/>
//       <path d="M12 13.6l2.6-1.3.5-3.2H12V13.6z" fill="#fff"/>
//     </svg>
//   );
// }

// /* -------------------- Small helpers -------------------- */
// function TypewriterComp({ lines = [], speed = 36 }) {
//   const [index, setIndex] = React.useState(0);
//   const [text, setText] = React.useState("");
//   useEffect(() => {
//     let mounted = true;
//     let i = 0;
//     setText("");
//     const line = lines[index] || "";
//     function tick() {
//       if (!mounted) return;
//       if (i <= line.length) {
//         setText(line.slice(0, i));
//         i++;
//         setTimeout(tick, speed);
//       } else {
//         setTimeout(() => setIndex((s) => (s + 1) % lines.length), 1100);
//       }
//     }
//     tick();
//     return () => { mounted = false; };
//   }, [index, lines, speed]);
//   return <span className="font-mono text-sm text-emerald-300">{text}<span className="ml-1 blinking-cursor">|</span></span>;
// }

// function CounterComp({ value = 0, suffix = "" }) {
//   const [n, setN] = React.useState(0);
//   useEffect(() => {
//     const controls = animate(0, value, {
//       duration: 0.9,
//       onUpdate: (v) => setN(Math.floor(v)),
//     });
//     return () => controls.stop();
//   }, [value]);
//   return <div className="text-lg md:text-2xl font-semibold text-white">{n}{suffix}</div>;
// }

// /* simple glass box component with mouse parallax */
// function TechBadgeBox({ children }) {
//   const ref = useRef(null);
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const tx = useTransform(mx, [-50, 50], [-6, 6]);
//   const ty = useTransform(my, [-50, 50], [-6, 6]);

//   function onMove(e) {
//     if (!ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
//     const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
//     mx.set(Math.max(-1, Math.min(1, x)) * 50);
//     my.set(Math.max(-1, Math.min(1, y)) * 50);
//   }
//   function onLeave() { mx.set(0); my.set(0); }

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseLeave={onLeave}
//       style={{ x: tx, y: ty }}
//       whileHover={{ scale: 1.03 }}
//       className="p-3 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-md shadow-lg flex items-center justify-center"
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* -------------------- Main Component -------------------- */
// export default function Home() {
//   // avatar bob
//   const bob = useMotionValue(0);
//   useEffect(() => {
//     const c = animate(0, 1, {
//       duration: 2.6,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut",
//       onUpdate: (v) => bob.set((v - 0.5) * 6),
//     });
//     return () => c.stop();
//   }, []);

//   // avatar tilt
//   const avatarRef = useRef(null);
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const rotateY = useTransform(mx, [-80, 80], [8, -8]);
//   const rotateX = useTransform(my, [-80, 80], [-6, 6]);
//   function onAvatarMove(e) {
//     if (!avatarRef.current) return;
//     const r = avatarRef.current.getBoundingClientRect();
//     const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
//     const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
//     mx.set(Math.max(-1, Math.min(1, x)) * 60);
//     my.set(Math.max(-1, Math.min(1, y)) * 60);
//   }
//   function onAvatarLeave() { mx.set(0); my.set(0); }

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* animated background gradient */}
//       <div className="absolute inset-0 -z-10">
//         <div className="bg-anim" />
//       </div>

//       {/* decorative car svg (subtle) */}
//       <motion.img
//         src={car}
//         alt=""
//         initial={{ x: 40, opacity: 0.06 }}
//         animate={{ x: [-20, 20, -20] }}
//         transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
//         className="pointer-events-none absolute right-0 top-8 w-[520px] blur-[.6px] -rotate-6"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* LEFT */}
//           <div className="space-y-4">
//             <div className="text-sky-400 text-xs uppercase tracking-widest">Hey — I’m Mohd. Tahur Khan</div>

//             <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-[#8b5cf6] to-[#34d399]">Creative backend-first</span>
//               <span className="block text-slate-300 mt-1">engineer who crafts delightful products.</span>

//               <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.22 }} className="block origin-left mt-4 h-0.5 rounded bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300 w-40" />
//             </motion.h1>

//             <div className="mt-1">
//               <TypewriterComp lines={[
//                 "I design secure REST APIs and scale databases.",
//                 "I integrate payments, queues & background workers.",
//                 "I ship pragmatic features with observability."
//               ]} speed={34} />
//             </div>

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 }} className="bg-[#061226] border border-slate-700 rounded-lg p-3 font-mono text-sm text-slate-200 max-w-[560px]">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="flex gap-2">
//                   <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
//                   <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
//                   <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
//                 </div>
//                 <div className="text-xs text-slate-500">api.shell</div>
//               </div>

//               <div className="text-xs leading-relaxed">
//                 <div>&gt; curl -X GET /api/v1/status</div>
//                 <div className="text-emerald-300 mt-2">&gt; 200 OK — {"{uptime: '99.9%', services: 12}"}</div>
//                 <div className="text-slate-400 text-xs mt-2">Badges are in a glass box — hover to pop, small float animation applied.</div>
//               </div>
//             </motion.div>

//             <div className="mt-4 flex flex-wrap items-center gap-3">
//               <motion.a
//                 href={resume}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ y: 0 }}
//                 animate={{ y: [0, -2, 0] }}
//                 transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
//                 whileHover={{ y: -6, boxShadow: "0 18px 60px rgba(56,189,248,0.08)" }}
//                 className="relative overflow-hidden inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow"
//               >
//                 <span className="z-10">View Resume</span>
//                 <span aria-hidden className="absolute left-0 top-0 h-full w-full opacity-10" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
//               </motion.a>

//               <a href="#projects" className="px-4 py-2 rounded-full border border-slate-700 text-slate-200">See Projects</a>
//             </div>

//             <div className="mt-5 flex gap-3">
//               <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
//                 <CounterComp value={10} suffix="+" />
//                 <div className="text-xs text-slate-300">Projects</div>
//               </div>
//               <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
//                 <CounterComp value={200} />
//                 <div className="text-xs text-slate-300">Endpoints</div>
//               </div>
//               <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
//                 <CounterComp value={99} suffix="%" />
//                 <div className="text-xs text-slate-300">Uptime</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex flex-col items-center md:items-end gap-4">
//             <motion.div
//               ref={avatarRef}
//               onMouseMove={onAvatarMove}
//               onMouseLeave={onAvatarLeave}
//               style={{ translateY: bob, rotateY: rotateY, rotateX: rotateX }}
//               transition={{ type: "spring", stiffness: 90, damping: 14 }}
//               className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-sky-400/12 shadow-2xl bg-gradient-to-br from-[#0b1220]/40 to-[#071126]/40"
//             >
//               <img src={photo} alt="Tahur Khan" className="w-full h-full object-cover" draggable={false} />
//             </motion.div>

//             {/* Glass box containing tech logos (STATIC grid) */}
//             <TechBadgeBox>
//               <div className="grid grid-cols-4 gap-4 items-center justify-center">
//                 <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <PythonLogo />
//                     <div className="text-xs text-slate-100">Python</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.4, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <DjangoLogo />
//                     <div className="text-xs text-slate-100">Django</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6.6, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <DrfLogo />
//                     <div className="text-xs text-slate-100">DRF</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.8, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <SqlLogo />
//                     <div className="text-xs text-slate-100">SQL</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6.2, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <JsLogo />
//                     <div className="text-xs text-slate-100">JavaScript</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <ReactLogo />
//                     <div className="text-xs text-slate-100">React</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6.8, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <HtmlLogo />
//                     <div className="text-xs text-slate-100">HTML</div>
//                   </div>
//                 </motion.div>

//                 <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.6, repeat: Infinity }}>
//                   <div className="flex flex-col items-center gap-1">
//                     <CssLogo />
//                     <div className="text-xs text-slate-100">CSS</div>
//                   </div>
//                 </motion.div>
//               </div>
//             </TechBadgeBox>

//             <div className="w-full md:w-80 space-y-3 mt-1">
//               <motion.div initial={{ x: 8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
//                 <div className="text-xs text-sky-300 font-semibold">API Snapshot</div>
//                 <div className="text-sm text-slate-200 mt-1">Contract-first endpoints • JSON responses</div>
//               </motion.div>

//               <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.12 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
//                 <div className="text-xs text-amber-300 font-semibold">Payment Flow</div>
//                 <div className="text-sm text-slate-200 mt-1">Razorpay integration • webhooks</div>
//               </motion.div>

//               <motion.div initial={{ x: 12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.18 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
//                 <div className="text-xs text-indigo-300 font-semibold">Realtime Feed</div>
//                 <div className="text-sm text-slate-200 mt-1">WebSocket friendly • lightweight payloads</div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* small floating email bubble */}
//       <motion.a whileHover={{ scale: 1.06 }} href="mailto:khantahoor568@gmail.com" className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-sky-500 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform">✉</motion.a>

//       <style>{`
//         /* animated radial background */
//         .bg-anim {
//           width:100%; height:100%;
//           background:
//             radial-gradient(900px 420px at 10% 10%, rgba(56,189,248,0.06), transparent 8%),
//             radial-gradient(700px 320px at 90% 80%, rgba(139,92,246,0.05), transparent 10%),
//             linear-gradient(180deg, #05060a 0%, #07102a 45%, #071426 100%);
//           animation: bgshift 20s linear infinite;
//         }
//         @keyframes bgshift {
//           0% { filter: hue-rotate(0deg); }
//           50% { filter: hue-rotate(8deg); }
//           100% { filter: hue-rotate(0deg); }
//         }

//         .blinking-cursor { animation: blink 1s steps(2,start) infinite; color: #60A5FA; }
//         @keyframes blink { to { visibility: hidden; } }

//         @media (max-width: 900px) {
//           section { min-height: auto; padding-bottom: 40px; }
//           /* reduce motion on small screens */
//           .tech-box, .bg-anim { animation: none !important; }
//         }
//       `}</style>
//     </section>
//   );
// }

// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import photo from "../assets/photo_placeholder.jpg";
import car from "../assets/car_improved.svg";
import resume from "../assets/resume.pdf";

/* -------------------- Inline SVG logos -------------------- */
function PythonLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M130.3 1.5c-13.7.2-27.4 0-40.9 3.1-9.7 2.1-17.1 8.9-19.9 18.4-3 10.3-.2 22.5-.2 33.7v6.3h66.7v10.6H56.2c-22.4 0-40.6 18.7-40.6 41.7v25.2c0 23 18.2 41.7 40.6 41.7h28.1v-21.2c0-8.1 6.1-14.7 14.2-14.7h66.8c22.4 0 40.6-18.7 40.6-41.7V95.3c0-23-18.2-41.7-40.6-41.7h-28.1V34.8c0-12.4-9.5-21.9-21.9-23.3-6.2-.8-12.6-1.3-18.8-1.8z" fill="#3776AB"/>
      <path d="M125.5 252.8c13.6-.2 27.2 0 40.7-3.1 9.7-2.1 17.1-8.9 19.9-18.4 3-10.3.2-22.5.2-33.7v-6.3h-66.7v-10.6h87.8c22.4 0 40.6-18.7 40.6-41.7v-25.2c0-23-18.2-41.7-40.6-41.7h-28.1v21.2c0 8.1-6.1 14.7-14.2 14.7H97.9c-22.4 0-40.6 18.7-40.6 41.7v25.2c0 23 18.2 41.7 40.6 41.7h27z" fill="#FFE052"/>
    </svg>
  );
}

function DjangoLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <path d="M6 8h12v2H6zM6 12h7v2H6z" fill="#7ED957" />
    </svg>
  );
}

function DrfLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#0EA5A9" />
      <path d="M8 12h8M12 8v8" stroke="#00201A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SqlLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="#134E4A"/>
      <path d="M4 5v8c0 1.657 3.582 3 8 3s8-1.343 8-3V5" fill="#065F46"/>
      <ellipse cx="12" cy="13" rx="8" ry="3" fill="#0EA5A9"/>
    </svg>
  );
}

function JsLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M9.5 17.2s.6.4 1.5.4c.9 0 1.1-.4 1.1-1V10h2.1v6.8c0 2.2-1.3 3.1-3.2 3.1-1.7 0-2.7-.9-3.5-1.6" fill="#000"/>
    </svg>
  );
}

function ReactLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="-11.5 -10 23 20" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#61DAFB" strokeWidth="0.9" fill="none">
        <ellipse rx="10" ry="4.2" transform="rotate(0)"/>
        <ellipse rx="10" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="10" ry="4.2" transform="rotate(120)"/>
      </g>
      <circle r="1.8" fill="#61DAFB"/>
    </svg>
  );
}

function HtmlLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#E34F26"/>
      <path d="M7 7h10l-.7 8.1L12 19l-4.3-3.9L7 7z" fill="#fff" opacity="0.15"/>
      <path d="M7 7l1.2 12L12 19l3.8-2 .5-6.7H7z" fill="#fff"/>
    </svg>
  );
}

function CssLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#1572B6"/>
      <path d="M7 7h10l-.7 8.1L12 19l-4.3-3.9L7 7z" fill="#fff" opacity="0.08"/>
      <path d="M12 13.6l2.6-1.3.5-3.2H12V13.6z" fill="#fff"/>
    </svg>
  );
}

/* -------------------- Small helpers -------------------- */
function TypewriterComp({ lines = [], speed = 36 }) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  useEffect(() => {
    let mounted = true;
    let i = 0;
    setText("");
    const line = lines[index] || "";
    function tick() {
      if (!mounted) return;
      if (i <= line.length) {
        setText(line.slice(0, i));
        i++;
        setTimeout(tick, speed);
      } else {
        setTimeout(() => setIndex((s) => (s + 1) % lines.length), 1100);
      }
    }
    tick();
    return () => { mounted = false; };
  }, [index, lines, speed]);
  return <span className="font-mono text-sm text-emerald-300">{text}<span className="ml-1 blinking-cursor">|</span></span>;
}

function CounterComp({ value = 0, suffix = "" }) {
  const [n, setN] = React.useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.9,
      onUpdate: (v) => setN(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value]);
  return <div className="text-lg md:text-2xl font-semibold text-white">{n}{suffix}</div>;
}

/* simple glass box component with mouse parallax */
function TechBadgeBox({ children }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useTransform(mx, [-50, 50], [-6, 6]);
  const ty = useTransform(my, [-50, 50], [-6, 6]);

  function onMove(e) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    mx.set(Math.max(-1, Math.min(1, x)) * 50);
    my.set(Math.max(-1, Math.min(1, y)) * 50);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: tx, y: ty }}
      whileHover={{ scale: 1.03 }}
      className="p-3 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-md shadow-lg flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

/* -------------------- Main Component -------------------- */
export default function Home() {
  // avatar bob
  const bob = useMotionValue(0);
  useEffect(() => {
    const c = animate(0, 1, {
      duration: 2.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      onUpdate: (v) => bob.set((v - 0.5) * 6),
    });
    return () => c.stop();
  }, []);

  // avatar tilt
  const avatarRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useTransform(mx, [-80, 80], [8, -8]);
  const rotateX = useTransform(my, [-80, 80], [-6, 6]);
  function onAvatarMove(e) {
    if (!avatarRef.current) return;
    const r = avatarRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    mx.set(Math.max(-1, Math.min(1, x)) * 60);
    my.set(Math.max(-1, Math.min(1, y)) * 60);
  }
  function onAvatarLeave() { mx.set(0); my.set(0); }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-anim" />
      </div>

      {/* decorative car svg (subtle) */}
      <motion.img
        src={car}
        alt="decorative car"
        initial={{ x: 0, opacity: 0.06, rotate: 0, scale: 1 }}
        animate={{
          x: [0, 40, 40, 0],       // one-side drift (visible)
          rotate: [0, 3, -3, 0],   // gentle rotate
          scale: [1, 1.05, 1.03, 1] // slow subtle zoom
        }}
        transition={{
          duration: 600,          // 600s = 10 minutes
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.6, 0.9, 1]
        }}
        className="pointer-events-none absolute right-0 top-8 w-[520px] blur-[.4px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT */}
          <div className="space-y-4">
            <div className="text-sky-400 text-xs uppercase tracking-widest">Hey — I’m Mohd. Tahur Khan</div>

            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-[#8b5cf6] to-[#34d399]">Creative backend-first</span>
              <span className="block text-slate-300 mt-1">engineer who crafts delightful products.</span>

              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.22 }} className="block origin-left mt-4 h-0.5 rounded bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-300 w-40" />
            </motion.h1>

            <div className="mt-1">
              <TypewriterComp lines={[
                "I design secure REST APIs and scale databases.",
                "I integrate payments, queues & background workers.",
                "I ship pragmatic features with observability."
              ]} speed={34} />
            </div>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 }} className="bg-[#061226] border border-slate-700 rounded-lg p-3 font-mono text-sm text-slate-200 max-w-[560px]">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>
                <div className="text-xs text-slate-500">api.shell</div>
              </div>

              <div className="text-xs leading-relaxed">
                <div>&gt; curl -X GET /api/v1/status</div>
                <div className="text-emerald-300 mt-2">&gt; 200 OK — {"{uptime: '99.9%', services: 12}"}</div>
                <div className="text-slate-400 text-xs mt-2">Badges are in a glass box — hover to pop, small float animation applied.</div>
              </div>
            </motion.div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -6, boxShadow: "0 18px 60px rgba(56,189,248,0.08)" }}
                className="relative overflow-hidden inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow"
              >
                <span className="z-10">View Resume</span>
                <span aria-hidden className="absolute left-0 top-0 h-full w-full opacity-10" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
              </motion.a>

              <a href="#projects" className="px-4 py-2 rounded-full border border-slate-700 text-slate-200">See Projects</a>
            </div>

            <div className="mt-5 flex gap-3">
              <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
                <CounterComp value={10} suffix="+" />
                <div className="text-xs text-slate-300">Projects</div>
              </div>
              <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
                <CounterComp value={200} />
                <div className="text-xs text-slate-300">Endpoints</div>
              </div>
              <div className="p-3 rounded-lg bg-white/4 border border-white/6 text-center w-28">
                <CounterComp value={99} suffix="%" />
                <div className="text-xs text-slate-300">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <motion.div
              ref={avatarRef}
              onMouseMove={onAvatarMove}
              onMouseLeave={onAvatarLeave}
              style={{ translateY: bob, rotateY: rotateY, rotateX: rotateX }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-sky-400/12 shadow-2xl bg-gradient-to-br from-[#0b1220]/40 to-[#071126]/40"
            >
              <img src={photo} alt="Tahur Khan" className="w-full h-full object-cover" draggable={false} />
            </motion.div>

            {/* Glass box containing tech logos (STATIC grid) */}
            <TechBadgeBox>
              <div className="grid grid-cols-4 gap-4 items-center justify-center">
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <PythonLogo />
                    <div className="text-xs text-slate-100">Python</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.4, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <DjangoLogo />
                    <div className="text-xs text-slate-100">Django</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6.6, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <DrfLogo />
                    <div className="text-xs text-slate-100">DRF</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.8, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <SqlLogo />
                    <div className="text-xs text-slate-100">SQL</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6.2, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <JsLogo />
                    <div className="text-xs text-slate-100">JavaScript</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <ReactLogo />
                    <div className="text-xs text-slate-100">React</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6.8, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <HtmlLogo />
                    <div className="text-xs text-slate-100">HTML</div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 5.6, repeat: Infinity }}>
                  <div className="flex flex-col items-center gap-1">
                    <CssLogo />
                    <div className="text-xs text-slate-100">CSS</div>
                  </div>
                </motion.div>
              </div>
            </TechBadgeBox>

            <div className="w-full md:w-80 space-y-3 mt-1">
              <motion.div initial={{ x: 8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
                <div className="text-xs text-sky-300 font-semibold">API Snapshot</div>
                <div className="text-sm text-slate-200 mt-1">Contract-first endpoints • JSON responses</div>
              </motion.div>

              <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.12 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
                <div className="text-xs text-amber-300 font-semibold">Payment Flow</div>
                <div className="text-sm text-slate-200 mt-1">Razorpay integration • webhooks</div>
              </motion.div>

              <motion.div initial={{ x: 12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.18 }} whileHover={{ y: -6 }} className="p-3 rounded-lg bg-white/3 border border-white/6">
                <div className="text-xs text-indigo-300 font-semibold">Realtime Feed</div>
                <div className="text-sm text-slate-200 mt-1">WebSocket friendly • lightweight payloads</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* small floating email bubble */}
      <motion.a whileHover={{ scale: 1.06 }} href="mailto:khantahoor568@gmail.com" className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-sky-500 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform">✉</motion.a>

      <style>{`
        /* animated radial background */
        .bg-anim {
          width:100%; height:100%;
          background:
            radial-gradient(900px 420px at 10% 10%, rgba(56,189,248,0.06), transparent 8%),
            radial-gradient(700px 320px at 90% 80%, rgba(139,92,246,0.05), transparent 10%),
            linear-gradient(180deg, #05060a 0%, #07102a 45%, #071426 100%);
          animation: bgshift 20s linear infinite;
        }
        @keyframes bgshift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(8deg); }
          100% { filter: hue-rotate(0deg); }
        }

        .blinking-cursor { animation: blink 1s steps(2,start) infinite; color: #60A5FA; }
        @keyframes blink { to { visibility: hidden; } }

        @media (max-width: 900px) {
          section { min-height: auto; padding-bottom: 40px; }
          /* reduce motion on small screens */
          .tech-box, .bg-anim { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
