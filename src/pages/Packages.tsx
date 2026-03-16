import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle, PackageCard, PageHeader } from '../components/UI';

export const Packages = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Destinations" 
        subtitle="Explore The Valley" 
        bgImage="/sinthan_top.png"
      />

      
      <div className="max-w-7xl mx-auto px-10 py-40">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-24"
        >
          <SectionTitle 
            subtitle="Curated Collections" 
            title="Extraordinary Journeys" 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-[450px]">
          <PackageCard 
            size="large"
            image="/sinthan_top.png"
            title="Sinthan Top Expedition"
            duration="Signature 3-Day Journey"
            price="₹15,000"
          />

          <PackageCard 
            image="/dal_lake.png"
            title="Dal Lake Serenity"
            duration="Luxury Houseboat Stay"
            price="₹8,500"
          />

          <PackageCard 
            image="/sunmarg.png"
            title="Sonamarg Meadows"
            duration="Full Day Private Tour"
            price="₹10,500"
          />

          <PackageCard 
            size="large"
            image="/tulip_garden.png"
            title="Spring in the Valley"
            duration="Heritage & Garden Tour"
            price="₹5,500"
          />
        </div>
      </div>
    </div>
  );
};
