import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function InvitationGate({ onOpen }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef(null);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });

    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      gsap.to(particles, {
        y: "random(-150, 150)",
        x: "random(-150, 150)",
        opacity: "random(0.2, 0.9)",
        scale: "random(0.5, 1.5)",
        duration: "random(4, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });
    }

    tl.fromTo(textRef.current.children, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );

  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    const tl = gsap.timeline({
      onComplete: () => {
        if (onOpen) onOpen();
      }
    });

    // Fade out text, ring, and particles
    tl.to([textRef.current, ringRef.current, particlesRef.current], {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    })
    // Slide the dark gate upwards
    .to(containerRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=0.2");
  };

  return (
    <section 
      ref={containerRef}
      className="fixed inset-0 z-[100] w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0910] text-[#E2C99F] origin-top"
    >
      {/* Deep Background with subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,164,124,0.08)_0%,rgba(10,9,16,1)_70%)] pointer-events-none" />

      {/* Magical Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#E2C99F] blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Decorative Gold Rings */}
      <div 
        ref={ringRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none opacity-30"
      >
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" stroke="#C4A47C" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="260" stroke="#C4A47C" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="240" stroke="#C4A47C" strokeWidth="0.5" opacity="0.5" />
          
          {/* Elegant Starbursts/Diamonds */}
          <path d="M300 10 L305 30 L325 35 L305 40 L300 60 L295 40 L275 35 L295 30 Z" fill="#C4A47C" />
          <path d="M300 540 L305 560 L325 565 L305 570 L300 590 L295 570 L275 565 L295 560 Z" fill="#C4A47C" />
          <path d="M10 300 L30 295 L35 275 L40 295 L60 300 L40 305 L35 325 L30 305 Z" fill="#C4A47C" />
          <path d="M540 300 L560 295 L565 275 L570 295 L590 300 L570 305 L565 325 L560 305 Z" fill="#C4A47C" />
        </svg>
      </div>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl">
        <h3 className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#E2C99F] mb-2 opacity-80">
          You are cordially invited
        </h3>
        <h3 className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#E2C99F] mb-10 md:mb-14 opacity-80">
          To the wedding celebration of
        </h3>
        
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="font-script text-7xl md:text-[140px] text-[#FCFAF8] leading-none mb-4 text-glow-strong" style={{ textShadow: '0 0 30px rgba(196, 164, 124, 0.4), 0 0 60px rgba(196, 164, 124, 0.2)'}}>
            Megha
          </h1>
          <span className="font-serif italic text-3xl md:text-5xl text-[#C4A47C] my-2 md:my-4">&</span>
          <h1 className="font-script text-7xl md:text-[140px] text-[#FCFAF8] leading-none mt-4 text-glow-strong" style={{ textShadow: '0 0 30px rgba(196, 164, 124, 0.4), 0 0 60px rgba(196, 164, 124, 0.2)'}}>
            Sarin
          </h1>
        </div>
        
        <p className="font-serif italic text-sm md:text-lg tracking-widest text-[#E2C99F] mb-14 opacity-90">
          May 18, 2026 <span className="mx-3 text-[#C4A47C]">•</span> Kerala
        </p>

        <button 
          className="relative overflow-hidden group border border-[#C4A47C]/40 bg-white/5 backdrop-blur-md text-[#E2C99F] px-10 py-4 text-xs md:text-sm tracking-[0.25em] uppercase transition-all duration-700 rounded-sm hover:tracking-[0.35em] hover:bg-white/10 hover:border-[#C4A47C] hover:shadow-[0_0_25px_rgba(196,164,124,0.2)]"
          onClick={handleOpen}
          onMouseMove={(e) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
          }}
        >
          <span className="relative z-10">Open Invitation</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#C4A47C]/20 to-transparent group-hover:animate-shimmer" />
        </button>
      </div>
    </section>
  );
}
