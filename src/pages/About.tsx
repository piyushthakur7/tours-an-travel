import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle, PageHeader } from '../components/UI';

export const About = () => {
  return (
    <div className="bg-paper min-h-screen overflow-hidden">
      <PageHeader 
        title="The Legacy" 
        subtitle="Our Story" 
        bgImage="/WhatsApp Image 2026-03-11 at 4.04.14 PM.jpeg"
      />


      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="/WhatsApp Image 2026-03-12 at 4.27.13 PM (1).jpeg"
                alt="Kashmir"
                className="w-full h-full object-cover"
              />

            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gold rounded-full -z-10 blur-3xl opacity-20"></div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block"
            >
              <p className="serif text-5xl text-gold mb-1">10+</p>
              <p className="label-caps">Years of Legacy</p>
            </motion.div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              subtitle="The Legacy" 
              title="Born in the Valley, Raised by the Mountains" 
            />
            <p className="text-ink/70 text-lg font-light leading-relaxed mb-8">
              Ishfaq Ahmed Agoo founded Kashmir Sinthan Top with a simple vision: to share the true, unfiltered beauty of his homeland with the world. 
            </p>
            <p className="text-ink/70 text-lg font-light leading-relaxed mb-12">
              Based in the serene village of Dessu, Daksum, we operate at the gateway to Sinthan Top, offering access to offbeat locations that most tourists never see.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 hover:border-gold/30 transition-colors">
                <h4 className="serif text-xl mb-2 italic text-gold">Authenticity</h4>
                <p className="text-sm text-ink/70">Real local connections and stories that bring the culture to life.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-black/5 hover:border-gold/30 transition-colors">
                <h4 className="serif text-xl mb-2 italic text-gold">Safety</h4>
                <p className="text-sm text-ink/70">Expert mountain navigation and support at every altitude.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
