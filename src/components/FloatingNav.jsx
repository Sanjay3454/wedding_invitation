import { useState, useEffect } from 'react';

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-in-out px-6 md:px-12 flex justify-between items-center ${
        isScrolled 
          ? 'py-4 bg-[#07070a]/80 backdrop-blur-md shadow-md' 
          : 'py-8 bg-transparent'
      }`}
    >
      {/* Top Left Initials */}
      <div className="text-[#C4A47C] font-script text-3xl md:text-5xl drop-shadow-md py-2 flex items-center">
        M&S
      </div>

      {/* Top Right Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-[#EBEBEB] hover:text-[#C4A47C]' : 'text-[#EBEBEB] hover:text-[#C4A47C]'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
      
      {/* Mobile Menu Button (Hamburger) */}
      <button className="md:hidden text-[#C4A47C]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </nav>
  );
}
