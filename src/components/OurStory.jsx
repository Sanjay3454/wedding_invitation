import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;
    
    items.forEach((item, index) => {
      gsap.fromTo(item, 
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -50 : 50 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  const milestones = [
    {
      year: "2020",
      title: "First Encounter",
      description: "A chance meeting that changed everything. A simple 'hello' turned into hours of conversation."
    },
    {
      year: "2022",
      title: "The Journey Begins",
      description: "From traveling across the country to sharing quiet mornings, our bond grew stronger every day."
    },
    {
      year: "2024",
      title: "The Proposal",
      description: "Under a starlit sky, we promised each other a lifetime of love and adventure."
    }
  ];

  return (
    <section id="story" ref={sectionRef} className="py-40 px-6 bg-[#07070a] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h3 className="font-script text-4xl text-[#C4A47C] mb-6">Our Journey</h3>
        <h2 className="font-serif text-5xl md:text-7xl text-[#EBEBEB] opacity-90">How It All Started</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C4A47C]/0 via-[#C4A47C]/30 to-[#C4A47C]/0 hidden md:block" />

        <div className="space-y-24 md:space-y-0">
          {milestones.map((item, idx) => (
            <div 
              key={idx}
              ref={el => itemsRef.current[idx] = el}
              className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C4A47C] rounded-full hidden md:block shadow-[0_0_15px_rgba(196,164,124,0.5)] z-10" />

              {/* Content Card */}
              <div className="w-full md:w-[42%] text-center md:text-left">
                <span className="font-serif text-2xl text-[#C4A47C] mb-4 block">{item.year}</span>
                <h4 className="font-serif text-3xl text-[#E2C99F] mb-6 drop-shadow-md">{item.title}</h4>
                <p className="font-sans text-[#EBEBEB]/70 leading-relaxed italic">"{item.description}"</p>
              </div>

              {/* Spacer for MD screens */}
              <div className="hidden md:block w-[42%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
