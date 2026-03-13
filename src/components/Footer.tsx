import React from 'react';
import { Instagram, Facebook, Youtube, Mountain, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Mountain size={28} className="text-gold" />
              <span className="serif text-2xl font-medium tracking-tight">
                Kashmir Sinthan Top
              </span>
            </Link>
            <p className="text-white/60 font-light max-w-sm mb-8 leading-relaxed">
              Experience the breathtaking landscapes of the Himalayas through the eyes of those who call it home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/919797125922" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ink transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/packages" className="text-white/60 hover:text-gold transition-colors text-sm font-light">Destinations & Packages</Link></li>
              <li><Link to="/hotels" className="text-white/60 hover:text-gold transition-colors text-sm font-light">Hotel Booking</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors text-sm font-light">Our Services</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-gold transition-colors text-sm font-light">The Legacy</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors text-sm font-light">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm font-light">
              <li>+91 9797125922</li>
              <li>kashmirsinthan@gmail.com</li>
              <li>Dessu, Daksum, Anantnag, J&K</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Kashmir Sinthan Top Tour & Travel. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
