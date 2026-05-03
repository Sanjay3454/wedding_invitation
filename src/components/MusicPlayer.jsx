import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicPlayer({ autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // High-end cinematic wedding track
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Fallback high quality
    // Better romantic track for weddings
    audioRef.current.src = 'https://cdn.pixabay.com/audio/2022/08/04/audio_2dba13a86d.mp3'; 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    if (autoPlay) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Autoplay was prevented by the browser.", e);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [autoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
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
  );
}
