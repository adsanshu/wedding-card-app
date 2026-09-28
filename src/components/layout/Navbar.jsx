import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar({ onOpenDiary }) {
  const { isUnlocked, lockDiary } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Invitation', href: '#invite' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venue', href: '#venue' },
    { name: 'Family', href: '#family' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-gold/30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Monogram */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-maroon text-gold flex items-center justify-center font-bold text-lg border border-gold">
            ॐ
          </div>
          <span className="font-serifCustom text-xl text-maroon font-bold">शुभ विवाह</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-maroon transition-colors">
              {link.name}
            </a>
          ))}
          
          <button
            onClick={isUnlocked ? lockDiary : onOpenDiary}
            className="bg-maroon text-gold px-4 py-1.5 rounded-full text-xs font-bold border border-gold/50 shadow-sm hover:bg-maroon/90 transition"
          >
            {isUnlocked ? '🔓 Diary Unlocked' : '🔒 Diary Lock'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={isUnlocked ? lockDiary : onOpenDiary}
            className="bg-maroon text-gold px-3 py-1 rounded-full text-xs font-bold border border-gold/50"
          >
            {isUnlocked ? '🔓 Diary' : '🔒 Lock'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-maroon p-1">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-gold/30 px-4 py-3 space-y-2 text-center text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-1 text-gray-700 hover:text-maroon"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}


