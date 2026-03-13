import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle, PackageCard, PageHeader } from '../components/UI';

export const Packages = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Destinations" 
        subtitle="Explore The Valley" 
        bgImage="/WhatsApp Image 2026-03-11 at 4.04.14 PM.jpeg"
      />

      
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <SectionTitle 
            subtitle="Curated Journeys" 
            title="Explore Our Packages" 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <PackageCard 
            size="large"
            image="https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=2070&auto=format&fit=crop"
            title="Ladakh Adventure"
            duration="10 Days / 9 Nights"
            price="₹45,000"
          />
          
          <PackageCard 
            size="large"
            image="/WhatsApp Image 2026-03-11 at 4.04.14 PM.jpeg"
            title="Kashmir Eternal Beauty"
            duration="6 Days / 5 Nights"
            price="₹18,500"
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

          <PackageCard 
            image="/WhatsApp Image 2026-03-11 at 4.04.13 PM.jpeg"
            title="Gulmarg Skiing"
            duration="3 Days"
            price="₹18,000"
          />

          <PackageCard 
            image="/WhatsApp Image 2026-03-12 at 4.27.13 PM.jpeg"
            title="Sonamarg Trek"
            duration="2 Days"
            price="₹8,000"
          />

        </div>
      </div>
    </div>
  );
};
