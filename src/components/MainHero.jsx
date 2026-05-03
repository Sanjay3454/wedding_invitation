import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MainHero() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const diamondRef = useRef(null);

  useEffect(() => {
    // Subtle float animation for the diamond background
    gsap.to(diamondRef.current, {
      y: -20,
      rotation: 45,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Cinematic reveal
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(diamondRef.current,
      { opacity: 0, scale: 0.8, rotation: 35 },
      { opacity: 1, scale: 1, rotation: 45, duration: 2, ease: "power2.out" }
    )
    .fromTo(textContainerRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power3.out" },
      "-=1.5"
    );

  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#07070a] flex flex-col items-center justify-center overflow-hidden" id="home">
      
      {/* Dark gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,20,25,0)_0%,#07070a_80%)] z-0 pointer-events-none" />

      {/* Subtle Diamond Background Shape */}
      <div 
        ref={diamondRef}
        className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-[#C4A47C]/10 bg-gradient-to-br from-[#C4A47C]/[0.02] to-transparent z-0 pointer-events-none mix-blend-screen"
        style={{ transform: 'rotate(45deg)' }}
      />

      {/* Main Centered Content */}
      <div ref={textContainerRef} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        
        <p className="font-sans text-[8px] md:text-[10px] tracking-[0.4em] text-[#C4A47C] uppercase opacity-80 mb-6 md:mb-8">
          Together with their families
        </p>

        <h1 className="font-script text-7xl md:text-9xl lg:text-[130px] text-[#E2C99F] leading-[1.2] py-4 drop-shadow-[0_0_25px_rgba(196,164,124,0.3)] bg-gradient-to-r from-[#E2C99F] via-white to-[#E2C99F] bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
          Megha
        </h1>
        
        <div className="my-1 flex items-center justify-center">
          <span className="font-serif italic text-3xl md:text-5xl text-[#C4A47C] opacity-80">
            &
          </span>
        </div>
        
        <h1 className="font-script text-7xl md:text-9xl lg:text-[130px] text-[#E2C99F] leading-[1.2] py-4 drop-shadow-[0_0_25px_rgba(196,164,124,0.3)] bg-gradient-to-r from-[#E2C99F] via-white to-[#E2C99F] bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
          Sarin
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 my-8 md:my-10 opacity-60">
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C4A47C]" />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C4A47C" strokeWidth="1" className="rotate-45">
            <rect x="2" y="2" width="20" height="20" />
            <circle cx="12" cy="12" r="4" fill="#C4A47C" />
          </svg>
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C4A47C]" />
        </div>

        <p className="font-serif italic text-lg md:text-2xl text-[#EBEBEB] tracking-wide mb-2 drop-shadow-md">
          Monday, May 18, 2026
        </p>
        
        <p className="font-sans text-[9px] md:text-xs tracking-[0.3em] text-[#C4A47C] uppercase opacity-80">
          Kerala, India
        </p>
      </div>

      {/* Scroll indicator with mouse icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-70 animate-bounce">
        <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#C4A47C] mb-3">
          Scroll
        </span>
        <div className="w-5 h-8 border border-[#C4A47C] rounded-full flex justify-center pt-2">
          <div className="w-1 h-1.5 bg-[#C4A47C] rounded-full animate-pulse" />
        </div>
      </div>
      
    </section>
  );
}
