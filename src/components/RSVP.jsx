import { useState } from 'react';
import gsap from 'gsap';

export default function RSVP() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="rsvp" className="py-40 px-6 bg-[#050508] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C4A47C]/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C4A47C]/5 rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h3 className="font-script text-4xl text-[#C4A47C] mb-6">Will You Join Us?</h3>
          <h2 className="font-serif text-5xl md:text-7xl text-[#EBEBEB] opacity-90">Kindly RSVP</h2>
          <p className="font-sans text-[#EBEBEB]/50 mt-8 tracking-widest text-xs uppercase">Please respond by May 01, 2026</p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-[40px] p-10 md:p-20 border border-[#C4A47C]/20 shadow-[0_50px_100px_rgba(0,0,0,0.7)]">
          {formState === 'success' ? (
            <div className="text-center py-10 animate-fade-in">
              <h4 className="font-script text-5xl text-[#C4A47C] mb-6">Thank You!</h4>
              <p className="font-serif text-[#EBEBEB] text-xl">We've received your response. We can't wait to see you!</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-12 text-[#C4A47C] text-xs tracking-[0.3em] uppercase hover:text-[#E2C99F] transition-colors"
              >
                Edit Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-[#C4A47C]/30 py-4 focus:border-[#C4A47C] outline-none transition-colors text-[#EBEBEB] font-serif text-lg placeholder:text-gray-700"
                    placeholder="Full Name"
                  />
                </div>
                <div className="relative group">
                  <select 
                    className="w-full bg-transparent border-b border-[#C4A47C]/30 py-4 focus:border-[#C4A47C] outline-none transition-colors text-[#EBEBEB] font-serif text-lg appearance-none cursor-pointer"
                  >
                    <option className="bg-[#07070a]" value="yes">Will Attend</option>
                    <option className="bg-[#07070a]" value="no">Regretfully Decline</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input 
                    type="number" 
                    min="1"
                    placeholder="Number of Guests"
                    className="w-full bg-transparent border-b border-[#C4A47C]/30 py-4 focus:border-[#C4A47C] outline-none transition-colors text-[#EBEBEB] font-serif text-lg placeholder:text-gray-700"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Dietary Preferences"
                    className="w-full bg-transparent border-b border-[#C4A47C]/30 py-4 focus:border-[#C4A47C] outline-none transition-colors text-[#EBEBEB] font-serif text-lg placeholder:text-gray-700"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-transparent border border-[#C4A47C] text-[#C4A47C] py-6 rounded-full text-xs tracking-[0.4em] uppercase font-bold hover:bg-[#C4A47C] hover:text-[#07070a] transition-all duration-700 mt-8 relative overflow-hidden group shadow-[0_0_30px_rgba(196,164,124,0.1)]"
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
                {formState === 'submitting' ? 'Submitting...' : 'Confirm Attendance'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
