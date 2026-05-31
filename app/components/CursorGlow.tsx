'use client';

import { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40"
      style={{
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(6,182,212,0.10), transparent 40%)`,
      }}
    />
  );
};

export default CursorGlow;
