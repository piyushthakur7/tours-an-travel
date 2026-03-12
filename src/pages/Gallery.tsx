import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/UI';
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
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-ink/5"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={`/${img}`}
                alt={`Kashmir Gallery ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white" size={24} />
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
