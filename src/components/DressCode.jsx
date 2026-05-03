import { Shirt, Sparkles, Palette } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="py-40 px-6 bg-[#07070a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h3 className="font-script text-4xl text-[#C4A47C] mb-6">Guest Info</h3>
          <h2 className="font-serif text-5xl md:text-7xl text-[#EBEBEB] opacity-90">Dress Code & Palette</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Dress Code Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-[30px] p-12 border border-[#C4A47C]/10 text-center group hover:border-[#C4A47C]/30 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="w-16 h-16 bg-[#C4A47C]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <Shirt className="w-8 h-8 text-[#C4A47C]" />
            </div>
            <h4 className="font-serif text-2xl text-[#E2C99F] mb-6">Dress Code</h4>
            <p className="font-sans text-[#EBEBEB]/70 leading-relaxed text-sm tracking-wide">
              We would love for our guests to join us in their finest <strong className="text-[#C4A47C]">Traditional or Black-Tie</strong> attire. Let's make the day look as beautiful as it feels.
            </p>
          </div>

          {/* Color Palette Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-[30px] p-12 border border-[#C4A47C]/10 text-center group hover:border-[#C4A47C]/30 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="w-16 h-16 bg-[#C4A47C]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <Palette className="w-8 h-8 text-[#C4A47C]" />
            </div>
            <h4 className="font-serif text-2xl text-[#E2C99F] mb-6">Color Palette</h4>
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#E2C99F] shadow-lg" />
              <div className="w-8 h-8 rounded-full bg-[#C4A47C]" />
              <div className="w-8 h-8 rounded-full bg-[#EBEBEB]" />
              <div className="w-8 h-8 rounded-full bg-[#2A2522]" />
            </div>
            <p className="font-sans text-[#EBEBEB]/70 leading-relaxed text-sm tracking-wide">
              We suggest tones of <strong className="text-[#C4A47C]">Gold, Cream, and Deep Earthy tones</strong> to match our wedding theme.
            </p>
          </div>

          {/* Special Requests Card */}
          <div className="bg-white/5 backdrop-blur-md rounded-[30px] p-12 border border-[#C4A47C]/10 text-center group hover:border-[#C4A47C]/30 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="w-16 h-16 bg-[#C4A47C]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-8 h-8 text-[#C4A47C]" />
            </div>
            <h4 className="font-serif text-2xl text-[#E2C99F] mb-6">Your Presence</h4>
            <p className="font-sans text-[#EBEBEB]/70 leading-relaxed text-sm tracking-wide italic">
              "Your love and presence are the only gifts we require. However, if you wish to honor us with a gift, a contribution towards our future together would be sincerely appreciated."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
