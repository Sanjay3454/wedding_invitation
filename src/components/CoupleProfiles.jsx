import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CoupleProfiles() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 text-center max-w-5xl mx-auto bg-[#07070a]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-4 relative">
        
        {/* Bride */}
        <div className="flex-1 text-center group">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C4A47C] mb-8 font-medium opacity-70">Bride</p>
          <h2 className="font-script text-6xl md:text-7xl text-[#FCFAF8] mb-8 drop-shadow-md group-hover:text-[#E2C99F] transition-colors duration-500">Megha Suvarnan</h2>
          <div className="w-12 h-[1px] bg-[#C4A47C]/30 mx-auto mb-8" />
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3">Daughter of</p>
          <p className="font-serif text-[#EBEBEB] opacity-80 text-lg italic">Mr. Suvarnan & Mrs. Rekha Suvarnan</p>
        </div>

        {/* Heart Divider */}
        <div className="flex-shrink-0 relative h-48 w-20 flex justify-center items-center">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C4A47C]/40 to-transparent absolute top-0" />
          <div className="relative z-10 bg-[#07070a] py-4">
            <svg className="w-10 h-10 text-[#C4A47C] fill-current animate-pulse shadow-[0_0_20px_rgba(196,164,124,0.2)]" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>

        {/* Groom */}
        <div className="flex-1 text-center group">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C4A47C] mb-8 font-medium opacity-70">Groom</p>
          <h2 className="font-script text-6xl md:text-7xl text-[#FCFAF8] mb-8 drop-shadow-md group-hover:text-[#E2C99F] transition-colors duration-500">Sarin PV</h2>
          <div className="w-12 h-[1px] bg-[#C4A47C]/30 mx-auto mb-8" />
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3">Son of</p>
          <p className="font-serif text-[#EBEBEB] opacity-80 text-lg italic">Mr. Sasi & Mrs. Raji Sasi</p>
        </div>

      </div>
    </section>
  );
}
