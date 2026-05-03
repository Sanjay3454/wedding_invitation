import { useState } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';

export default function LeaveANote() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000); // Reset after 5 seconds
  };

  return (
    <section className="py-32 px-6 text-center max-w-3xl mx-auto bg-[#07070a]" id="message">
      <h3 className="font-script text-4xl text-[#C4A47C] mb-6 drop-shadow-md">Leave a Note</h3>
      <h2 className="font-serif text-4xl md:text-5xl text-[#EBEBEB] mb-8 opacity-90">Anonymous Messages</h2>

      <p className="font-sans text-[#EBEBEB]/60 mb-20 max-w-xl mx-auto leading-relaxed text-sm tracking-wide">
        Share your blessings, advice, or funny stories for the bride and groom.
      </p>

      {/* Elegant Dark Glass Note Card */}
      <div className="bg-white/5 backdrop-blur-xl rounded-[20px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-[#C4A47C]/20 text-left relative p-10 md:p-16 group transition-all duration-700 hover:border-[#C4A47C]/40">
        <div className="absolute top-10 right-10 text-[#C4A47C]/30 animate-pulse">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {isSent ? (
          <div className="text-center py-20 animate-fade-in">
            <h4 className="font-script text-5xl text-[#C4A47C] mb-6">Message Sent!</h4>
            <p className="font-serif text-[#EBEBEB] text-xl opacity-80">Thank you for your warm wishes.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Dear Megha & Sarin,"
              className="w-full bg-transparent border-none outline-none font-script text-3xl text-[#E2C99F] placeholder:text-[#C4A47C]/30 focus:ring-0 pl-0 mt-2"
            />
            <textarea
              rows="3"
              required
              placeholder="Wishing you a lifetime of love and happiness..."
              className="w-full bg-transparent border-none outline-none font-script text-3xl text-[#EBEBEB]/80 placeholder:text-[#C4A47C]/30 focus:ring-0 pl-0 resize-none leading-[3.5rem]"
            ></textarea>
            <input
              type="text"
              required
              placeholder="With love,"
              className="w-full bg-transparent border-none outline-none font-script text-3xl text-[#E2C99F] placeholder:text-[#C4A47C]/30 focus:ring-0 pl-0 mb-8"
            />

            <button
              className="w-full bg-[#C4A47C] text-[#07070a] py-5 flex items-center justify-center gap-3 hover:bg-[#E2C99F] transition-all duration-500 tracking-[0.3em] font-bold text-xs rounded-full shadow-[0_15px_30px_rgba(196,164,124,0.2)] group-hover:scale-[1.02]"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: "power2.out" });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
              }}
            >
              SEND MESSAGE
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

