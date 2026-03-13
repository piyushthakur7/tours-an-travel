import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SectionTitle, MicroLabel, PageHeader } from '../components/UI';

export const Contact = () => {
  return (
    <div className="bg-ink min-h-screen text-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach Out" 
        bgImage="https://images.unsplash.com/photo-1605649487212-4d4ce3a223f6?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              light
              subtitle="Inquiry" 
              title="Let's Design Your Journey" 
            />
            <p className="text-white/60 text-lg font-light mb-12 max-w-md leading-relaxed">
               Whether you want to explore the valleys or scale the peaks, our local experts are here to craft the perfect itinerary for you.
            </p>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-6 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <MicroLabel className="mb-1 text-white/40">Direct Line</MicroLabel>
                  <p className="serif text-2xl md:text-3xl hover:text-gold transition-colors cursor-pointer break-all">+91 9797125922</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <MicroLabel className="mb-1 text-white/40">Email Address</MicroLabel>
                  <p className="serif text-xl md:text-2xl hover:text-gold transition-colors cursor-pointer break-all">kashmirsinthan@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <MicroLabel className="mb-1 text-white/40">Headquarters</MicroLabel>
                  <p className="serif text-xl md:text-2xl">Dessu, Daksum, Anantnag, J&K</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full -z-10 blur-[100px] opacity-10"></div>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <MicroLabel className="text-white/40">Your Name</MicroLabel>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-gold outline-none transition-colors text-lg" placeholder="Ishfaq Ahmed" />
                </div>
                <div className="space-y-3">
                  <MicroLabel className="text-white/40">Phone Number</MicroLabel>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-gold outline-none transition-colors text-lg" placeholder="+91" />
                </div>
              </div>
              <div className="space-y-3">
                <MicroLabel className="text-white/40">Destination</MicroLabel>
                <select className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-gold outline-none transition-colors appearance-none text-lg">
                  <option className="bg-ink text-white">Complete Tour Package</option>
                  <option className="bg-ink text-white">Kashmir Eternal Beauty</option>
                  <option className="bg-ink text-white">Ladakh Adventure</option>
                  <option className="bg-ink text-white">Sinthan Top Special</option>
                  <option className="bg-ink text-white">Custom Itinerary</option>
                </select>
              </div>
              <div className="space-y-3">
                <MicroLabel className="text-white/40">Message</MicroLabel>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-gold outline-none transition-colors resize-none text-lg" placeholder="Tell us about your dream trip..."></textarea>
              </div>
              <div className="flex flex-col xl:flex-row gap-4">
                <button className="flex-1 py-4 bg-gold text-white rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl shadow-gold/20 flex items-center justify-center gap-2">
                  Submit <ArrowRight size={16} />
                </button>
                <div className="flex flex-col sm:flex-row gap-4 flex-[2]">
                  <a 
                    href="https://wa.me/919797125922" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white hover:text-[#25D366] transition-all duration-500 shadow-2xl shadow-[#25D366]/20 flex items-center justify-center gap-2 px-2"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+919797125922" 
                    className="flex-1 py-4 bg-ink text-white border border-white/20 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-gold hover:border-gold transition-all duration-500 shadow-2xl flex items-center justify-center gap-2 px-2"
                  >
                    <Phone size={16} /> Call Us
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
