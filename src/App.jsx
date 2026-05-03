import { useState, useEffect } from 'react';
import MainHero from './components/MainHero';
import CountdownGrid from './components/CountdownGrid';
import WeddingCeremony from './components/WeddingCeremony';
import CoupleProfiles from './components/CoupleProfiles';
import NoteToGuests from './components/NoteToGuests';
import Gallery from './components/Gallery';
import VenueLocation from './components/VenueLocation';
import RSVP from './components/RSVP';
import LeaveANote from './components/LeaveANote';
import ShareInvitation from './components/ShareInvitation';
import MusicPlayer from './components/MusicPlayer';
import FloatingNav from './components/FloatingNav';
import FloatingAction from './components/FloatingAction';
import CustomCursor from './components/CustomCursor';
import InvitationGate from './components/InvitationGate';
import GlobalEffects from './components/GlobalEffects';
import { Heart } from 'lucide-react';

const SaveTheDateSection = () => (
  <section className="py-32 px-6 bg-[#07070a] text-center">
    <div className="max-w-4xl mx-auto">
      <h3 className="font-script text-4xl text-[#C4A47C] mb-6">Save the Date</h3>
      <div className="relative group max-w-2xl mx-auto mb-12">
        <div className="absolute -inset-4 border border-[#C4A47C]/20 rounded-[40px] group-hover:border-[#C4A47C]/40 transition-colors duration-700" />
        <div className="relative rounded-[30px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 aspect-video md:aspect-[16/9]">
          <img 
            src="/images/image copy 7.png" 
            alt="Megha & Sarin" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-0 w-full text-center">
            <p className="font-script text-4xl text-white drop-shadow-lg">Together Forever</p>
          </div>
        </div>
      </div>
      <h2 className="font-serif text-5xl text-[#FCFAF8] opacity-90 drop-shadow-lg">Megha & Sarin</h2>
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C4A47C] mt-4 font-medium opacity-70">A Journey of Love Begins</p>
    </div>
  </section>
);

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showGate, setShowGate] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-[#07070a] overflow-x-hidden selection:bg-[#C4A47C] selection:text-white">
      {showGate && (
        <InvitationGate 
          onOpen={() => {
            setIsOpened(true);
            setTimeout(() => setShowGate(false), 500); // Unmount after animation finishes
          }} 
        />
      )}

      {isOpened && <CustomCursor />}
      {isOpened && <FloatingNav />}
      {isOpened && <MusicPlayer autoPlay={isOpened} />}
      
      <main className={`${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'} transition-opacity duration-1000`}>
        <MainHero />
        <SaveTheDateSection />
        <CountdownGrid />
        
        <div className="w-full flex justify-center py-8 opacity-20">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q 30 -5, 10 10 Q 30 25, 50 10 Q 70 -5, 90 10 Q 70 25, 50 10 Z" stroke="#C4A47C" strokeWidth="1"/>
            <circle cx="50" cy="10" r="2" fill="#C4A47C"/>
          </svg>
        </div>

        <WeddingCeremony />
        <CoupleProfiles />
        <NoteToGuests />
        <Gallery />
        <VenueLocation />
        <RSVP />
        <LeaveANote />
        <ShareInvitation />
      </main>

      <footer className="py-24 px-6 text-center text-[#EBEBEB] bg-[#050508]">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-script text-6xl md:text-7xl mb-4 text-[#C4A47C]">Megha & Sarin</h2>
          <p className="font-serif tracking-widest text-sm uppercase text-gray-500 mb-12">
            May 18, 2026
          </p>
          <p className="font-sans text-[10px] text-gray-600 flex items-center gap-2">
            Made with <Heart className="w-3 h-3 text-[#C4A47C] fill-current" /> for Megha & Sarin
          </p>
        </div>
      </footer>

      {isOpened && <FloatingAction />}
      <GlobalEffects />
    </div>
  );
}

export default App;
