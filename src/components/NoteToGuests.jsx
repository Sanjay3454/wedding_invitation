import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NoteToGuests() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current.children,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section 
      id="details" 
      className="py-32 px-6 text-center max-w-4xl mx-auto bg-[#07070a]"
    >
      <div ref={containerRef}>
        <h2 className="font-serif text-5xl md:text-7xl mb-12 text-[#EBEBEB] opacity-90 drop-shadow-md">
          A Note to Our Guests
        </h2>
        
        <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#EBEBEB]/70 mb-12 max-w-3xl mx-auto italic">
          "We are so incredibly excited to share this special day with our favorite people. Your love, support, and presence mean the world to us as we begin our new chapter together. Get ready for a day of joy, laughter, and unforgettable memories!"
        </p>
        
        <div className="mt-20 text-center">
          <p className="font-script text-4xl md:text-5xl text-[#C4A47C] mb-4 opacity-80">With love,</p>
          <p className="font-script text-6xl md:text-7xl text-[#E2C99F] drop-shadow-lg animate-pulse">Megha & Sarin</p>
        </div>
      </div>
    </section>
  );
}
