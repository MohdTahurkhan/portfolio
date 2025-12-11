
import React from 'react'

export default function CarSVG(props){
  const cls = props.className || ''
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 88" className={cls} aria-hidden>
      <g id="car-body" transform="translate(0,0)">
        <rect x="30" y="24" rx="14" ry="14" width="160" height="44" fill="#0ea5e9" />
        <path d="M42 24 C66 8, 120 8, 150 24" fill="#0369a1" />
        <rect x="74" y="12" rx="8" ry="8" width="72" height="28" fill="#7dd3fc" />
        <g className="wheel wheel-left" transform="translate(70,64)">
          <circle className="tire" cx="0" cy="0" r="12" fill="#111827" />
          <circle className="hub" cx="0" cy="0" r="4" fill="#9ca3af" />
        </g>
        <g className="wheel wheel-right" transform="translate(150,64)">
          <circle className="tire" cx="0" cy="0" r="12" fill="#111827" />
          <circle className="hub" cx="0" cy="0" r="4" fill="#9ca3af" />
        </g>
        <path d="M96 16 L138 16 L132 36 L102 36 Z" fill="rgba(255,255,255,0.25)"/>
        <circle cx="190" cy="44" r="4" fill="#fef08a" />
      </g>
    </svg>
  )
}
