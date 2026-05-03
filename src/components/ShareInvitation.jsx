import { Camera, Link as LinkIcon, MessageCircle } from 'lucide-react';

export default function ShareInvitation() {
  return (
    <section className="py-40 px-6 text-center max-w-4xl mx-auto border-t border-[#C4A47C]/10 bg-[#07070a]">
      <h3 className="font-script text-4xl text-[#C4A47C] mb-6 drop-shadow-md">Spread the Joy</h3>
      <h2 className="font-serif text-4xl md:text-5xl text-[#EBEBEB] mb-16 opacity-90">Share This Invitation</h2>
      
      <div className="flex flex-wrap justify-center gap-6 mb-24">
        {[
          { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' },
          { icon: <Camera className="w-5 h-5" />, label: 'Instagram' },
          { icon: <LinkIcon className="w-5 h-5" />, label: 'Copy Link' },
        ].map((btn, i) => (
          <button key={i} className="flex items-center gap-3 bg-white/5 border border-[#C4A47C]/20 rounded-full px-8 py-4 text-xs tracking-widest uppercase text-[#EBEBEB] hover:bg-[#C4A47C] hover:text-[#07070a] transition-all duration-500 shadow-lg hover:scale-105">
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </div>

      <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-8 font-medium">Use our wedding hashtag</p>
      <div className="inline-block bg-white/5 rounded-3xl px-16 py-10 border border-[#C4A47C]/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md relative group">
        <span className="font-script text-5xl md:text-7xl text-[#E2C99F] group-hover:text-white transition-colors duration-500 drop-shadow-lg">#MeghaWedsSarin</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C4A47C] rounded-full animate-ping opacity-20" />
      </div>
    </section>
  );
}
