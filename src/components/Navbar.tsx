import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mountain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Packages', path: '/packages' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }

  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-10 py-4 rounded-full transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Kashmir Sinthan Top Logo" 
                className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
            <span className={`serif text-2xl font-light tracking-tight transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-white'}`}>
              Kashmir <span className="italic text-gold">Sinthan Top</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 relative group overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : (scrolled ? 'text-ink/60 hover:text-gold' : 'text-white/70 hover:text-white')
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-500 origin-left ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 transform hover:-translate-y-1 active:scale-95 ${scrolled ? 'bg-ink text-white hover:bg-gold hover:shadow-xl' : 'bg-gold text-white hover:bg-white hover:text-gold hover:shadow-[0_10px_30px_rgba(197,160,89,0.3)]'}`}
            >
              Book Your Escape
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="text-ink" size={24} /> : <Menu className={scrolled ? 'text-ink' : 'text-white'} size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <Link to="/" className="serif text-3xl text-ink">Home</Link>
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="serif text-3xl text-ink">
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
