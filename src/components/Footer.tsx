import React from 'react';
import { Instagram, Facebook, Youtube, Mountain, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white py-24 border-t border-white/5 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative">
                <img src="/logo.png" alt="Kashmir Sinthan Top Logo" className="h-14 w-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
              <span className="serif text-3xl font-light tracking-tight">
                Kashmir <span className="italic text-gold">Sinthan Top</span>
              </span>
            </Link>
            <p className="text-white/40 font-light max-w-sm mb-10 leading-relaxed text-lg">
              Crafting extraordinary Himalayan experiences for the discerning traveler. Government registered and locally inspired.
            </p>
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "https://www.instagram.com/kashmir_sinthan_top/" },
                { icon: Facebook, href: "https://www.facebook.com/kashmirsinthantop/" },
                { icon: MessageCircle, href: "https://wa.me/919797125922", color: "#25D366" },
                { icon: Youtube, href: "https://www.youtube.com/@KashmirSinthanTop" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 hover:scale-110 ${social.color ? `hover:bg-[${social.color}] hover:border-[${social.color}]` : 'hover:bg-gold hover:border-gold hover:text-ink'}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="serif text-xl mb-8 text-gold font-light tracking-wide">Explore</h4>
            <ul className="space-y-5">
              {[
                { name: 'Destinations', path: '/packages' },
                { name: 'Luxury Hotels', path: '/hotels' },
                { name: 'Our Services', path: '/services' },
                { name: 'The Legacy', path: '/about' },
                { name: 'Get in Touch', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-gold transition-all duration-300 text-sm font-light tracking-widest uppercase flex items-center gap-3 group">
                    <span className="w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-8 text-gold font-light tracking-wide">Contact</h4>
            <ul className="space-y-6 text-white/40 text-sm font-light tracking-wider">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">Enquiries</span>
                <span className="text-white/60">+91 9797125922</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">Email</span>
                <span className="text-white/60">kashmirsinthan@gmail.com</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-1">Our Base</span>
                <span className="text-white/60">Dessu, Daksum, Anantnag, J&K</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Kashmir Sinthan Top. All rights reserved.</p>
            <p className="mt-2 text-white/10">Architecture by <a href="https://www.webtotalsolution.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Web Total Solution</a></p>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
