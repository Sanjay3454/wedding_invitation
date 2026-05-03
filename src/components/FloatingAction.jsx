import { Send } from 'lucide-react';

export default function FloatingAction() {
  return (
    <button
      className="fixed bottom-6 right-6 md:bottom-8 md:right-24 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4A47C] text-white shadow-xl hover:bg-[#b09068] hover:-translate-y-1 transition-all duration-300 font-serif italic text-lg"
      onClick={() => {
        document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span>Message</span>
      <Send className="w-4 h-4 ml-1" />
    </button>
  );
}
