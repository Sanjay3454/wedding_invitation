import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WeddingCeremony() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const details = [
    {
      icon: <Calendar className="w-8 h-8 mx-auto mb-8 text-[#C4A47C]" strokeWidth={1.2} />,
      title: "Date",
      primary: "Monday, May 18, 2026",
      secondary: ""
    },
    {
      icon: <Clock className="w-8 h-8 mx-auto mb-8 text-[#C4A47C]" strokeWidth={1.2} />,
      title: "Time",
      primary: "11:25 AM – 12:05 PM",
      secondary: "Auspicious Muhurtham",
      secondaryBadge: true
    },
    {
      icon: <MapPin className="w-8 h-8 mx-auto mb-8 text-[#C4A47C]" strokeWidth={1.2} />,
      title: "Venue",
      primary: "Thimiri Bank Convention Centre",
      secondary: "Nhanamkai, Cheruvathur",
      secondaryBadge: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 text-center max-w-6xl mx-auto bg-[#07070a]"
    >
      <h2 className="font-serif text-4xl md:text-5xl text-[#EBEBEB] mb-24 opacity-90">
        Wedding Ceremony
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {details.map((detail, idx) => (
          <div 
            key={idx}
            ref={el => cardsRef.current[idx] = el}
            className="bg-white/5 backdrop-blur-md rounded-t-full pt-20 pb-16 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#C4A47C]/10 flex flex-col items-center justify-start min-h-[380px] transition-all hover:border-[#C4A47C]/30 group"
          >
            <div className="transform transition-transform group-hover:scale-110 duration-500">
              {detail.icon}
            </div>
            <h4 className="font-serif font-bold text-2xl text-[#E2C99F] mb-6 drop-shadow-sm">{detail.title}</h4>
            <p className="font-sans text-[#EBEBEB] opacity-80 mb-6 leading-relaxed">{detail.primary}</p>
            
            {detail.secondary && (
              <span className={`text-xs tracking-widest uppercase ${detail.secondaryBadge ? 'bg-[#C4A47C]/10 px-5 py-2 rounded-full text-[#C4A47C] border border-[#C4A47C]/20' : 'text-[#C4A47C] opacity-70'}`}>
                {detail.secondary}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
