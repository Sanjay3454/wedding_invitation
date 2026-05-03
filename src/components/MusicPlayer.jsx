import { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicPlayer({ autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Placeholder audio for the wedding
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/16/audio_f5eb803566.mp3?filename=romantic-piano-110051.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

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
  }, []);

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
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 p-4 rounded-full glass shadow-xl hover:scale-110 transition-transform duration-300"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <Music className="w-6 h-6 text-[#2A2522]" />
      ) : (
        <VolumeX className="w-6 h-6 text-[#2A2522]" />
      )}
      
      {/* Ripple effect when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full animate-ping bg-[#C4A47C] opacity-20"></span>
      )}
    </button>
  );
}
