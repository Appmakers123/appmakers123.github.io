import React, { useState, useEffect, useRef } from 'react';

const MovableLogo: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: window.innerWidth - 80,
      y: window.innerHeight - 80,
    });
  }, []);

  const start = (clientX: number, clientY: number) => {
    setIsDragging(true);
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const move = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    let x = clientX - offset.current.x;
    let y = clientY - offset.current.y;
    const maxX = window.innerWidth - 72;
    const maxY = window.innerHeight - 72;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    setPosition({ x, y });
  };

  const end = () => setIsDragging(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) =>
      move(e.touches[0].clientX, e.touches[0].clientY);
    const onUp = () => end();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging]);

  return (
    <div
      onMouseDown={e => start(e.clientX, e.clientY)}
      onTouchStart={e => start(e.touches[0].clientX, e.touches[0].clientY)}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 100,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        padding: 8,
        borderRadius: '50%',
        background: 'rgba(15,23,42,0.9)',
        border: '1px solid rgba(245,158,11,0.5)',
        boxShadow: '0 0 20px rgba(245,158,11,0.3)',
      }}
      title="Drag me!"
    >
      <img
        src="/logop.jpg"
        alt="CosmicSutra Logo"
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
};

export default MovableLogo;
