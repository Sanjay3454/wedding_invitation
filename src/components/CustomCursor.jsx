import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Main dot follows instantly
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Follower has a lag/elastic effect for "addictive" feel
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea') || target.tagName === 'BUTTON' || target.tagName === 'A';
      
      if (isInteractive) {
        setIsHovering(true);
        gsap.to(follower, {
          scale: 2.5,
          backgroundColor: "rgba(196, 164, 124, 0.15)",
          borderWidth: "1px",
          borderColor: "rgba(196, 164, 124, 0.5)",
          duration: 0.4,
          ease: "elastic.out(1, 0.3)"
        });
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 0.5,
          duration: 0.3
        });
      } else {
        setIsHovering(false);
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(196, 164, 124, 0.3)",
          duration: 0.4,
          ease: "power3.out"
        });
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#C4A47C] rounded-full pointer-events-none z-[10000] mix-blend-difference -translate-x-1/2 -translate-y-1/2" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-[#C4A47C]/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" 
      />
    </>
  );
}
