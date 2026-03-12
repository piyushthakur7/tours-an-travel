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
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-black/5' : 'bg-transparent'}`}>
          <Link to="/" className="flex items-center gap-3">
            <Mountain size={22} className={scrolled ? 'text-gold' : 'text-white'} />
            <span className={`serif text-xl font-medium tracking-tight ${scrolled ? 'text-ink' : 'text-white'}`}>
              Kashmir Sinthan
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                  location.pathname === item.path
                    ? (scrolled ? 'text-gold' : 'text-gold')
                    : (scrolled ? 'text-ink/60 hover:text-gold' : 'text-white/70 hover:text-white')
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all ${scrolled ? 'bg-ink text-white hover:bg-gold' : 'bg-white text-ink hover:bg-gold hover:text-white'}`}
            >
              Book Now
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="text-ink" /> : <Menu className={scrolled ? 'text-ink' : 'text-white'} />}
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
