import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MicroLabel, SectionTitle, PackageCard } from '../components/UI';

export const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="bg-paper selection:bg-gold selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ink">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop"
            alt="Kashmir"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <MicroLabel className="text-gold/80">Registered Tourism Agency</MicroLabel>
                <h1 className="serif text-[12vw] lg:text-[8vw] leading-[0.9] text-white font-light mb-8">
                  The Soul of <br />
                  <span className="italic text-gold">Kashmir</span>
                </h1>
                <p className="text-white/60 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
                  Complete Kashmir & Ladakh tour packages. From transportation and luxury houseboats to professional pre-wedding cinematography, we make your journey truly unforgettable.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link to="/packages" className="group flex items-center gap-4 text-white">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest">Explore Packages</span>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="relative aspect-[3/4] rounded-full overflow-hidden border border-white/10 p-2"
              >
                <img
                  src="/WhatsApp Image 2026-03-12 at 4.27.13 PM (1).jpeg"
                  alt="Culture"
                  className="w-full h-full object-cover rounded-full"
                />

              </motion.div>
            </div>
          </div>
        </div>

        {/* Vertical Rail */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 items-center z-20">
          <div className="h-24 w-[1px] bg-white/20"></div>
          <div className="flex flex-col gap-8 text-white/40">
            <Instagram size={18} className="hover:text-gold transition-colors cursor-pointer" />
            <Facebook size={18} className="hover:text-gold transition-colors cursor-pointer" />
            <Youtube size={18} className="hover:text-gold transition-colors cursor-pointer" />
          </div>
          <div className="h-24 w-[1px] bg-white/20"></div>
        </div>
      </section>

      {/* Featured Packages - Bento Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionTitle 
          subtitle="Curated Journeys" 
          title="Featured Destinations" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <PackageCard 
            size="large"
            image="/WhatsApp Image 2026-03-11 at 4.04.14 PM.jpeg"
            title="Kashmir Valley Wonders"
            duration="5 Days / 4 Nights"
            price="₹15,000"
          />

          <PackageCard 
            image="/WhatsApp Image 2026-03-11 at 4.34.50 PM.jpeg"
            title="Pahalgam Adventure"
            duration="7 Days"
            price="₹25,000"
          />

          <PackageCard 
            image="/WhatsApp Image 2026-03-12 at 4.27.14 PM.jpeg"
            title="Sinthan Top Special"
            duration="4 Days"
            price="₹12,000"
          />

        </div>
        <div className="mt-16 flex justify-center">
          <Link to="/packages" className="group flex items-center gap-4 text-ink hover:text-gold transition-colors">
             <span className="text-sm font-bold uppercase tracking-widest border-b border-ink/20 group-hover:border-gold pb-1">View All Packages</span>
             <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="serif text-2xl mb-4 text-gold">Tour Packages</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Complete Kashmir & Ladakh packages including transportation, hotels, and houseboats.
              </p>
            </div>
            <div>
              <h3 className="serif text-2xl mb-4 text-gold">Stay & Ride</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Premium hotel bookings, houseboats, and tranquil Shikara rides on the Dal Lake.
              </p>
            </div>
            <div>
              <h3 className="serif text-2xl mb-4 text-gold">Photography</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Professional pre-wedding cinematography and photography to capture your memories.
              </p>
            </div>
            <div>
              <h3 className="serif text-2xl mb-4 text-gold">Local Guidance</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Expert local guides and specialized tours to Sinthan Top and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
