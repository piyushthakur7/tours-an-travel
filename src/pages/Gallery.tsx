import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader, MicroLabel } from '../components/UI';
import { X, Maximize2 } from 'lucide-react';

const images = [
  "WhatsApp Image 2026-03-11 at 4.04.13 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.14 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.14 PM (2).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.14 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.15 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.15 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.16 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.16 PM (2).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.16 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.17 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.17 PM (2).jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.17 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.04.18 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.06 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.06 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.07 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.07 PM (2).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.07 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.08 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.08 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.09 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.09 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.10 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.06.10 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.34.50 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.34.51 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.34.51 PM (2).jpeg",
  "WhatsApp Image 2026-03-11 at 4.34.51 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.34.52 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.35.22 PM.jpeg",
  "WhatsApp Image 2026-03-11 at 4.35.23 PM (1).jpeg",
  "WhatsApp Image 2026-03-11 at 4.35.23 PM.jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.13 PM.jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.14 PM (1).jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.14 PM.jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.15 PM (1).jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.15 PM (2).jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.15 PM.jpeg",
  "WhatsApp Image 2026-03-12 at 4.27.16 PM.jpeg"
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Gallery" 
        subtitle="Visual Journey" 
        bgImage={`/${images[0]}`}
      />
      
      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-gold"></span>
            <MicroLabel className="text-gold mb-0">Captured Moments</MicroLabel>
            <span className="w-12 h-[1px] bg-gold"></span>
          </div>
          <h2 className="serif text-6xl md:text-8xl font-extralight text-ink mb-10 tracking-tight leading-[0.85]">
             The Himalayan <br /><span className="italic text-gold">Perspective</span>
          </h2>
          <p className="text-ink/40 text-xl font-light leading-relaxed">
             A curated anthology of landscapes, local encounters, and the raw beauty of the Sinthan Top summit.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: (index % 6) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-paper shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={`/${img}`}
                alt={`Kashmir Odyssey ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={28} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-white font-black mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                   Enlarge Frame
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={`/${selectedImage}`}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
