
import React, { useEffect, useState } from 'react'
import CarSVG from './CarSVG'

export default function Intro(){
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400) // ~1.9s for effect
    return () => clearTimeout(t)
  }, [])
  if(!show) return null
  return (
    <div className="intro-overlay fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="intro-card px-6 py-4 rounded-xl">
        <div className="text-lg font-bold">Welcome — Tahur Khan</div>
        <div className="text-sm text-gray-300">Driving you through my portfolio...</div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="car-runner" aria-hidden>
          <div className="car-trail" />
          <CarSVG className="car-runner-img enhanced" />
        </div>
      </div>
    </div>
  )
}
