import React from 'react'
import { motion } from 'framer-motion'
import placeholder from '../assets/photo_placeholder.jpg'

export default function Home() {
  return (
    <div className="min-h-[75vh] grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <motion.h1 initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className="text-4xl md:text-6xl font-extrabold leading-tight hero-title">
          Backend-first <span className="text-sky-400">developer</span> with a<br/>full-stack mindset.
        </motion.h1>
        <motion.p initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.12, duration:0.6}} className="text-slate-200 max-w-xl hero-sub">
          I build scalable Django APIs, solve complex data flows, and collaborate across teams to deliver polished user experiences end-to-end.
        </motion.p>

        <motion.div className="mt-6 flex gap-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.22}}>
          <a href="#resume" className="px-4 py-2 bg-sky-500 text-white rounded-md interactive">View Resume</a>
          <a href="#projects" className="px-4 py-2 border border-sky-500 text-sky-200 rounded-md interactive">See Projects</a>
        </motion.div>

        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="mt-6 grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-800 rounded-md border border-slate-700">
            <div className="text-sm text-slate-200 font-medium">Location</div>
            <div className="text-slate-400 text-xs">Bhopal, India</div>
          </div>
          <div className="p-3 bg-slate-800 rounded-md border border-slate-700">
            <div className="text-sm text-slate-200 font-medium">Role</div>
            <div className="text-slate-400 text-xs">Python Developer / Backend</div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="parallax-layer" initial={{scale:1, opacity:0}} animate={{scale:1.04, opacity:1}} transition={{duration:1.2}}>
            <div className="w-full h-full bg-animated rounded-3xl opacity-30" />
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.9}} className="w-[340px] h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-slate-700 shadow-lg">
          <img src={placeholder} alt="photo placeholder" className="w-full h-full object-cover"/>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}} className="absolute -bottom-6 right-6 p-3 bg-slate-800 rounded-xl border border-slate-700 text-slate-200 text-sm">
          Open to work · Intern / Junior
        </motion.div>
      </div>
    </div>
  )
}
