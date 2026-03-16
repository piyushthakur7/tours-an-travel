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

      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="grid lg:grid-cols-2 gap-32">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold"></span>
              <MicroLabel className="text-gold mb-0 tracking-[0.4em]">Inquiry</MicroLabel>
            </div>
            <h2 className="serif text-6xl md:text-8xl font-extralight leading-[0.85] text-white mb-12 tracking-tight">
              Design Your <br /><span className="italic text-gold">Masterpiece</span>
            </h2>
            <p className="text-white/40 text-xl font-light mb-16 max-w-md leading-relaxed">
               Whether you seek the tranquility of the valley or the challenge of the peaks, our local experts will craft your signature itinerary.
            </p>
            <div className="space-y-12">
              {[
                { icon: Phone, label: "Direct Line", value: "+91 9797125922", type: "tel" },
                { icon: Mail, label: "Email Address", value: "kashmirsinthan@gmail.com", type: "mailto" },
                { icon: MapPin, label: "Headquarters", value: "Dessu, Daksum, Anantnag, J&K" }
              ].map((contact, i) => (
                <div key={i} className="flex gap-8 items-center group">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-500 transform group-hover:-rotate-12">
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <MicroLabel className="mb-2 text-white/20">{contact.label}</MicroLabel>
                    <p className="serif text-3xl group-hover:text-gold transition-colors duration-500 font-light text-white">
                      {contact.type ? <a href={`${contact.type}:${contact.value}`}>{contact.value}</a> : contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full -z-10 blur-[120px]"></div>
            <h3 className="serif text-4xl mb-12 font-light">Personal Inquiry</h3>
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <MicroLabel className="text-white/20">Name</MicroLabel>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-gold outline-none transition-all text-xl font-light text-white" placeholder="Full Name" />
                </div>
                <div className="space-y-4">
                  <MicroLabel className="text-white/20">Contact</MicroLabel>
                  <input type="tel" className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-gold outline-none transition-all text-xl font-light text-white" placeholder="+91" />
                </div>
              </div>
              <div className="space-y-4">
                <MicroLabel className="text-white/20">Nature of Interest</MicroLabel>
                <select className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-gold outline-none transition-all appearance-none text-xl font-light cursor-pointer text-white">
                  <option className="bg-ink text-white">Signature Expedition</option>
                  <option className="bg-ink text-white">Luxury Stay Inquiry</option>
                  <option className="bg-ink text-white">Cinematography Request</option>
                  <option className="bg-ink text-white">Bespoke Itinerary</option>
                </select>
              </div>
              <div className="space-y-4">
                <MicroLabel className="text-white/20">The Vision</MicroLabel>
                <textarea rows={3} className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-gold outline-none transition-all resize-none text-xl font-light text-white" placeholder="Describe your dream journey..."></textarea>
              </div>
              <div className="flex flex-col gap-6 pt-6">
                <button className="w-full py-6 bg-gold text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-ink transition-all duration-700 shadow-[0_20px_40px_rgba(197,160,89,0.2)]">
                  Submit Request
                </button>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/919797125922" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-black uppercase tracking-[0.3em] text-[9px] hover:bg-[#25D366] hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+919797125922" 
                    className="flex-1 py-5 bg-white/5 text-white border border-white/10 rounded-full font-black uppercase tracking-[0.3em] text-[9px] hover:bg-white hover:text-ink transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    <Phone size={14} /> Direct Call
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.468208647842!2d75.4241036!3d33.6166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e2197148ae0c7b%3A0x67ee656c2d1b7b7!2sDaksum%2C%20Jammu%20and%20Kashmir%20192202!5e0!3m2!1sen!2sin!4v1710345678901!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};
