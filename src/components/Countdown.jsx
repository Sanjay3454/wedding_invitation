import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll animation for countdown
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
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section 
      id="countdown" 
      ref={sectionRef}
      className="py-32 px-6 bg-[#FAF7F2] text-center"
    >
      <div className="max-w-4xl mx-auto glass-dark bg-white/40 p-12 rounded-2xl shadow-xl border border-white/50">
        <h2 className="font-serif italic text-3xl md:text-5xl text-[#C99A9A] mb-12">
          We're Getting Married
        </h2>
        
        <div className="flex justify-center gap-4 md:gap-12 flex-wrap">
          {timeBlocks.map((block, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-serif text-[#1E3A2A] w-20 md:w-32">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-[#666] mt-2">
                {block.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
