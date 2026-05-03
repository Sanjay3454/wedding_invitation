import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function GlobalEffects() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const petalsRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.children;
    
    // 1. Elegant, slow twinkling and subtle drifting for stars
    gsap.to(particles, {
      y: "-=150",
      x: () => `+=${Math.random() * 60 - 30}`,
      opacity: () => Math.random() * 0.4 + 0.2,
      duration: () => Math.random() * 15 + 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { amount: 20, from: "random" }
    });

    // 2. Floating 3D-like Petals / Leaves (Deep Parallax)
    if (petalsRef.current) {
      const petals = petalsRef.current.children;
      gsap.to(petals, {
        y: "100vh",
        x: "random(-100, 100)",
        rotation: "random(0, 720)",
        duration: "random(15, 25)",
        repeat: -1,
        ease: "none",
        stagger: { amount: 20, from: "random" }
      });
    }

    // 3. Mouse Spotlight Tracking
    const handleMouseMove = (e) => {
      gsap.to(spotlightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* A. Cursor Spotlight - A soft glow that illuminates the dark theme */}
      <div 
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(196,164,124,0.06)_0%,rgba(196,164,124,0)_70%)] pointer-events-none z-0 mix-blend-screen"
      />

      {/* B. Global Grain/Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* C. Refined Starry Particles */}
      <div ref={containerRef} className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const isLarge = Math.random() > 0.8;
          const size = isLarge ? 'w-[4px] h-[4px] blur-[1px]' : 'w-[2px] h-[2px]';
          return (
            <div
              key={i}
              className={`absolute rounded-full bg-[#E2C99F] shadow-[0_0_8px_rgba(226,201,159,0.5)] ${size}`}
              style={{
                top: `${Math.random() * 110 - 5}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.3
              }}
            />
          );
        })}
      </div>

      {/* D. Floating Petals / Leaves (Deep Background Elements) */}
      <div ref={petalsRef} className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 md:w-10 md:h-10 blur-[3px] md:blur-[6px]"
            style={{
              top: '-10%',
              left: `${Math.random() * 100}%`,
            }}
          >
            <svg viewBox="0 0 100 100" fill="#C4A47C" className="opacity-30">
              <path d="M50 0 C70 30 100 50 100 75 C100 90 80 100 50 100 C20 100 0 90 0 75 C0 50 30 30 50 0" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}



