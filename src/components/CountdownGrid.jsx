import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CountdownGrid() {
  const sectionRef = useRef(null);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    const targetDate = new Date("May 18, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section 
      id="countdown" 
      ref={sectionRef}
      className="py-32 px-6 text-center bg-[#07070a]"
    >
      <h3 className="font-script text-4xl md:text-5xl text-[#C4A47C] mb-6 drop-shadow-md">
        Mark Your Calendar
      </h3>
      <h2 className="font-serif text-4xl md:text-5xl text-[#EBEBEB] mb-16 opacity-90">
        Counting Down to Our Big Day
      </h2>
      
      <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap max-w-4xl mx-auto">
        {timeBlocks.map((block, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#C4A47C]/20 bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-500"
          >
            <div className="text-3xl md:text-4xl font-serif text-[#E2C99F] font-bold drop-shadow-sm">
              {String(block.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C4A47C] mt-2 font-medium opacity-80">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
