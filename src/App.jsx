import { useState, useEffect } from 'react';
import MainHero from './components/MainHero';
import OurStory from './components/OurStory';
import CountdownGrid from './components/CountdownGrid';
import WeddingCeremony from './components/WeddingCeremony';
import DressCode from './components/DressCode';
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

      {/* Only render interactive global elements if opened to prevent tabbing */}
      {isOpened && <CustomCursor />}
      {isOpened && <FloatingNav />}
      
      {isOpened && <MusicPlayer autoPlay={isOpened} />}
      
      <main className={`${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'} transition-opacity duration-1000`}>
        <MainHero />
        <OurStory />
        <CountdownGrid />
        
        <div className="w-full flex justify-center py-8 opacity-20">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q 30 -5, 10 10 Q 30 25, 50 10 Q 70 -5, 90 10 Q 70 25, 50 10 Z" stroke="#C4A47C" strokeWidth="1"/>
            <circle cx="50" cy="10" r="2" fill="#C4A47C"/>
          </svg>
        </div>

        <WeddingCeremony />
        <DressCode />
        <CoupleProfiles />
        <NoteToGuests />
        <Gallery />
        <VenueLocation />
        <RSVP />
        <LeaveANote />
        <ShareInvitation />
      </main>

      {/* Final Footer */}
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
