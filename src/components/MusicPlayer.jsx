import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicPlayer({ play }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    if (play && audioRef.current) {
      const attemptPlay = () => {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented, waiting for interaction", error);
          });
      };

      // Try playing with a slight delay
      const timer = setTimeout(attemptPlay, 100);
      return () => clearTimeout(timer);
    }
  }, [play]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.chosic.com/wp-content/uploads/2021/04/Indian-Summer-Indian-Instrumental-Background-Music.mp3"
        loop
        preload="auto"
      />
      {play && (
        <button
          onClick={togglePlay}
          className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-[200] p-5 rounded-full bg-white/5 backdrop-blur-xl border border-[#C4A47C]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-500 group animate-fade-in"
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <Music className="w-6 h-6 text-[#C4A47C] group-hover:text-white transition-colors" />
          ) : (
            <VolumeX className="w-6 h-6 text-[#C4A47C] group-hover:text-white transition-colors" />
          )}
          
          {isPlaying && (
            <span className="absolute inset-0 rounded-full animate-ping bg-[#C4A47C] opacity-20 pointer-events-none"></span>
          )}
        </button>
      )}
    </>
  );
}
