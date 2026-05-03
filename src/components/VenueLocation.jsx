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
        <h3 className="font-script text-4xl text-[#C4A47C] mb-6 drop-shadow-md">The Venue</h3>
        <h2 className="font-serif text-5xl md:text-7xl text-[#EBEBEB] opacity-90">Thimiri Bank Convention Centre</h2>
        <p className="font-sans text-[#EBEBEB]/60 mt-6 tracking-widest text-xs uppercase">Nhanamkai, Cheruvathur, Kerala 671313</p>
      </div>

      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-[#C4A47C]/20 relative group"
      >
        <div className="w-full h-[550px] transform transition-transform duration-700 group-hover:scale-[1.01]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.223!2d75.222375!3d12.283667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46618585e5135%3A0xe6c21e6467362035!2sThimiri%20Bank%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.7)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Thimiri Bank Convention Centre"
          ></iframe>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C4A47C]/40 rounded-tl-[40px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C4A47C]/40 rounded-br-[40px] pointer-events-none" />
      </div>
    </section>
  );
}
