
import React, { useEffect, useRef } from 'react';
import CarSVG from './CarSVG';

export default function Cursor() {
  const ref = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dest = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      dest.current.x = e.clientX;
      dest.current.y = e.clientY;
      el.classList.add('cursor-moving');
      clearTimeout(el._t);
      el._t = setTimeout(() => el.classList.remove('cursor-moving'), 200);
    };

    const tick = () => {
      // simple lerp for trailing effect
      pos.current.x += (dest.current.x - pos.current.x) * 0.18;
      pos.current.y += (dest.current.y - pos.current.y) * 0.18;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="cursor-wrapper" aria-hidden>
      <div ref={ref} className="cursor-car-wrapper cursor-lowvis">
        <CarSVG className="cursor-car" />
      </div>
    </div>
  );
}
