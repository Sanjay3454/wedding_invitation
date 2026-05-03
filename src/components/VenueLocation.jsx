import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VenueLocation() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="location" className="py-40 px-6 bg-[#07070a]">
      <div className="text-center mb-20">
        <h3 className="font-serif italic text-2xl md:text-3xl text-[#C4A47C] mb-4 drop-shadow-sm">Find Us</h3>
        <h2 className="font-serif text-5xl md:text-7xl text-[#EBEBEB] opacity-90">Venue Location</h2>
      </div>

      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-[#C4A47C]/20 relative group"
      >
        <div className="w-full h-[550px] transform transition-transform duration-700 group-hover:scale-[1.02]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.478956973347!2d75.1114251!3d12.2536852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba465b8c306dce5%3A0x6b7fc80c85b512be!2sNileshwar%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          ></iframe>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C4A47C]/40 rounded-tl-[40px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C4A47C]/40 rounded-br-[40px] pointer-events-none" />
      </div>
    </section>
  );
}
