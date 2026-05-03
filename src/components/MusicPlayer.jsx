import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Music, VolumeX } from 'lucide-react';

export default function MusicPlayer({ play }) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Sync isPlaying with the 'play' prop from the Gate
  useEffect(() => {
    if (play) setIsPlaying(true);
  }, [play]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="fixed top-[-100px] left-[-100px] pointer-events-none opacity-0">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=m65jhGwtWrg"
          playing={play && isPlaying}
          loop={true}
          volume={0.7}
          muted={!play} // Start muted then unmute on interaction if needed
          width="1px"
          height="1px"
          onStart={() => setIsPlaying(true)}
          config={{
            youtube: {
              playerVars: { 
                autoplay: 1, 
                controls: 0, 
                modestbranding: 1,
                origin: window.location.origin
              }
            }
          }}
        />
      </div>
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
