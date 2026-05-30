import React, { useEffect, useRef } from 'react';

/**
 * CursorGlow — a radial gradient spotlight that chases the cursor
 * with a smooth liquid/elastic lag using linear interpolation (lerp).
 *
 * How it works:
 *  - `tx, ty` = target (actual mouse position)
 *  - `cx, cy` = current rendered position (starts at center)
 *  - Each frame: cx += (tx - cx) * EASE  ← closes the gap by EASE% every frame
 *  - This creates the buttery-smooth "liquid following" feel
 */

const EASE = 0.07; // lower = more lag / more liquid (try 0.04–0.12)

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Mutable refs — no state updates needed, zero re-renders
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafId = useRef<number>(0);
  const active = useRef(false);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Track the real cursor position
    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (!active.current) {
        active.current = true;
        loop();
      }
    };

    const onMouseLeave = () => {
      active.current = false;
      cancelAnimationFrame(rafId.current);
      el.style.opacity = '0';
    };

    const onMouseEnter = () => {
      el.style.opacity = '1';
    };

    // The animation loop — runs every frame while cursor is on the page
    const loop = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      // Lerp: close the gap by EASE% each frame → liquid lag
      current.current.x += dx * EASE;
      current.current.y += dy * EASE;

      el.style.background = `radial-gradient(
        700px circle at ${current.current.x}px ${current.current.y}px,
        rgba(123, 92, 245, 0.22) 0%,
        rgba(0, 229, 195, 0.10) 38%,
        transparent 65%
      )`;

      // Keep running while the difference is noticeable (> 0.5px)
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        rafId.current = requestAnimationFrame(loop);
      } else {
        // Snap to exact position and stop the loop to save CPU
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        active.current = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 1,
        transition: 'opacity 0.5s ease',
        willChange: 'background',
      }}
    />
  );
}
