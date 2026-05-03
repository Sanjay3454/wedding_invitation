import { useState } from 'react';
import { Camera, Link as LinkIcon, MessageCircle, Check } from 'lucide-react';

export default function ShareInvitation() {
  const [copied, setCopied] = useState(false);
  const websiteUrl = window.location.href;
  const shareText = "You're invited to Megha & Sarin's Wedding! View the invitation here: ";

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + websiteUrl)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    navigator.clipboard.writeText(shareText + websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // Note: Instagram doesn't support direct link sharing via URL schemes easily, 
    // so we copy to clipboard and notify the user.
    alert("Text and Link copied! You can now paste it in your Instagram story or DM.");
  };

  return (
    <section className="py-40 px-6 text-center max-w-4xl mx-auto border-t border-[#C4A47C]/10 bg-[#07070a]">
      <h3 className="font-script text-4xl text-[#C4A47C] mb-6 drop-shadow-md">Spread the Joy</h3>
      <h2 className="font-serif text-4xl md:text-5xl text-[#EBEBEB] mb-16 opacity-90">Share This Invitation</h2>
      
      <div className="flex flex-wrap justify-center gap-6 mb-24">
        <button onClick={handleWhatsApp} className="flex items-center gap-3 bg-white/5 border border-[#C4A47C]/20 rounded-full px-8 py-4 text-xs tracking-widest uppercase text-[#EBEBEB] hover:bg-[#C4A47C] hover:text-[#07070a] transition-all duration-500 shadow-lg hover:scale-105">
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
        <button onClick={handleInstagram} className="flex items-center gap-3 bg-white/5 border border-[#C4A47C]/20 rounded-full px-8 py-4 text-xs tracking-widest uppercase text-[#EBEBEB] hover:bg-[#C4A47C] hover:text-[#07070a] transition-all duration-500 shadow-lg hover:scale-105">
          <Camera className="w-5 h-5" />
          Instagram
        </button>
        <button onClick={handleCopy} className="flex items-center gap-3 bg-white/5 border border-[#C4A47C]/20 rounded-full px-8 py-4 text-xs tracking-widest uppercase text-[#EBEBEB] hover:bg-[#C4A47C] hover:text-[#07070a] transition-all duration-500 shadow-lg hover:scale-105">
          {copied ? <Check className="w-5 h-5 text-green-400" /> : <LinkIcon className="w-5 h-5" />}
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>

      <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500 mb-8 font-medium">Use our wedding hashtag</p>
      <div className="inline-block bg-white/5 rounded-[20px] md:rounded-3xl px-8 md:px-16 py-6 md:py-10 border border-[#C4A47C]/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md relative group max-w-full overflow-hidden">
        <span className="font-script text-3xl sm:text-4xl md:text-7xl text-[#E2C99F] group-hover:text-white transition-colors duration-500 drop-shadow-lg break-words block">#MeghaWedsSarin</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#C4A47C] rounded-full animate-ping opacity-20" />
      </div>
    </section>
  );
}
