import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicPlayer({ autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      // Small delay to ensure browser acknowledges the interaction from the "Open" button
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Playback prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-[200] p-5 rounded-full bg-white/5 backdrop-blur-xl border border-[#C4A47C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-500 group"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Music className="w-6 h-6 text-[#C4A47C] group-hover:text-white transition-colors" />
        ) : (
          <VolumeX className="w-6 h-6 text-[#C4A47C] group-hover:text-white transition-colors" />
        )}
        
        {/* Ripple effect when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#C4A47C] opacity-20 pointer-events-none"></span>
        )}
      </button>
    </>
  );
}
