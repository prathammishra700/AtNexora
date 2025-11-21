import React, { useState, useEffect } from 'react';
import { Menu, X, Command, User } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio Tools', id: 'tools' },
    { name: 'Features', id: 'features' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg transform rotate-45"></div>
            <Command className="relative text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">AtNexora</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('auth')}
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center gap-2 border border-white/5"
          >
            <User className="w-4 h-4" /> Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-16 left-0 w-full border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium text-left ${
                currentPage === link.id ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </button>
          ))}
           <button 
              onClick={() => handleNavClick('auth')}
              className="text-lg font-medium text-left text-purple-400"
            >
              Login / Register
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;