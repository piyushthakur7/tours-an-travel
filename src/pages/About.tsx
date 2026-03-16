import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle, PageHeader, MicroLabel } from '../components/UI';

export const About = () => {
  return (
    <div className="bg-paper min-h-screen overflow-hidden">
      <PageHeader 
        title="The Legacy" 
        subtitle="Our Story" 
        bgImage="/sinthan_top.png"
      />


      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-[4rem] overflow-hidden aspect-[3/4] shadow-[0_40px_100px_rgba(0,0,0,0.15)] group-hover:shadow-[0_60px_120px_rgba(0,0,0,0.2)] transition-all duration-700"
            >
              <img
                src="/WhatsApp Image 2026-03-12 at 4.27.13 PM (1).jpeg"
                alt="Kashmir Culture"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"></div>
            </motion.div>
            
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-gold/5 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gold/10 blur-[150px] rounded-full -z-10"></div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute -bottom-16 -right-10 bg-white/95 backdrop-blur-3xl p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-20 hidden md:block border border-black/5"
            >
              <div className="flex items-center gap-6">
                <div>
                   <p className="serif text-7xl text-gold mb-1 font-extralight tracking-tight leading-none">10<span className="text-4xl text-gold/40">+</span></p>
                   <p className="text-[10px] uppercase tracking-[0.4em] font-black text-ink/30 mt-2">Years of Legacy</p>
                </div>
                <div className="w-[1px] h-16 bg-black/5 mx-4"></div>
                <p className="text-ink/40 text-[10px] uppercase tracking-widest font-bold leading-relaxed max-w-[100px]">
                   A decade of <br />unmatched <br />craftsmanship
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold"></span>
              <MicroLabel className="text-gold mb-0">Our Heritage</MicroLabel>
            </div>
            <h2 className="serif text-6xl md:text-8xl font-extralight leading-[0.85] text-ink mb-12 tracking-tight">
              Rooted in the <br /><span className="italic text-gold font-normal">Himalayas</span>
            </h2>
            <div className="space-y-10">
              <p className="text-ink/60 text-2xl font-light leading-relaxed italic">
                "Born in the serene village of Dessu, Daksum, we were raised by the mountains we now share with the world."
              </p>
              <p className="text-ink/40 text-lg font-light leading-relaxed max-w-xl">
                 Founded by Ishfaq Ahmed Agoo, Kashmir Sinthan Top was built on a singular vision: to reveal the true, unfiltered majesty of the Himalayas through the eyes of those who call them home. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                <div className="text-ink">
                  <h4 className="serif text-2xl mb-4 italic text-gold font-light">Authentic Access</h4>
                  <p className="text-xs text-ink/30 font-bold uppercase tracking-widest leading-loose">We open doors to offbeat santuaries that remain hidden from conventional itineraries.</p>
                </div>
                <div className="text-ink">
                  <h4 className="serif text-2xl mb-4 italic text-gold font-light">Precision Safety</h4>
                  <p className="text-xs text-ink/30 font-bold uppercase tracking-widest leading-loose">Elite mountain navigation and dedicated support systems at every altitude of your journey.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
