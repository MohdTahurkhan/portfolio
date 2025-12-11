
import React, { useEffect, useState } from 'react'
import CarSVG from './CarSVG'

export default function Loading(){ 
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const onLoad = () => setLoaded(true)
    // if window already loaded, skip
    if (document.readyState === 'complete') {
      setLoaded(true)
      return
    }
    window.addEventListener('load', onLoad)
    // safety timeout in case 'load' doesn't fire quickly
    const t = setTimeout(() => setLoaded(true), 220)
    return () => { window.removeEventListener('load', onLoad); clearTimeout(t) }
  }, [])
  if(loaded) return null
  return (
    <div className="loading-overlay fixed inset-0 z-60 flex items-center justify-center">
      <div className="loading-card text-center">
        <CarSVG className="loading-car" />
        <div className="mt-3 text-white font-semibold">Tahur Khan</div>
      </div>
    </div>
  )
}
