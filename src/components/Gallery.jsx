import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    // Parallax scrolling for images
    gsap.fromTo(img1Ref.current,
      { y: 50 },
      {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(img2Ref.current,
      { y: 100 },
      {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section 
      id="gallery"
      ref={containerRef}
      className="py-40 px-6 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 overflow-hidden bg-[#07070a]"
    >
      <div 
        ref={img1Ref}
        className="w-full max-w-[400px] aspect-[3/4] rounded-t-full overflow-hidden border border-[#C4A47C]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative group"
      >
        <img 
          src="/images/couple_placeholder.png" 
          alt="Couple" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale-[30%] group-hover:grayscale-0 brightness-[0.85] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-t-full pointer-events-none" />
      </div>

      <div 
        ref={img2Ref}
        className="w-full max-w-[400px] aspect-[3/4] rounded-t-full overflow-hidden border border-[#C4A47C]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative group"
      >
        <img 
          src="/images/gallery_rings.png" 
          alt="Rings and Flowers" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out filter grayscale-[30%] group-hover:grayscale-0 brightness-[0.85] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-t-full pointer-events-none" />
      </div>
    </section>
  );
}
