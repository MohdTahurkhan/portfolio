
import React from 'react'

export default function Nav() {
  return (
    <nav className="w-full py-3 flex items-center justify-between fixed top-4 left-0 right-0 max-w-6xl mx-auto z-50 px-4 md:px-0 backdrop-blur-sm bg-black/20 rounded-lg">
      <div className="text-lg font-bold text-white">Tahur<span className="text-sky-400">K</span></div>
      <div className="flex items-center gap-2">
        <a href="#home" className="text-sky-200 hover:text-white px-3 py-1">Home</a>
        <a href="#about" className="text-sky-200 hover:text-white px-3 py-1">About</a>
        <a href="#projects" className="text-sky-200 hover:text-white px-3 py-1">Projects</a>
        <a href="#resume" className="text-sky-200 hover:text-white px-3 py-1">Resume</a>
        <a href="#contact" className="text-sky-200 hover:text-white px-3 py-1">Contact</a>
      </div>
    </nav>
  )
}
