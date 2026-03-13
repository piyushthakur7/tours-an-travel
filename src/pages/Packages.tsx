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
            image="/tulip_garden.png"
            title="Tulip Garden Special"
            duration="1 Day Heritage Tour"
            price="₹2,500"
          />
          
          <PackageCard 
            size="large"
            image="/sunmarg.png"
            title="Sonamarg Valley (Sunmarg)"
            duration="2 Days / 1 Night"
            price="₹8,500"
          />

          <PackageCard 
            image="/dal_lake.png"
            title="Dal Lake Experience"
            duration="1 Day Shikara & Stay"
            price="₹4,500"
          />

          <PackageCard 
            image="/sinthan_top.png"
            title="Sinthan Top Adventure"
            duration="3 Days / 2 Nights"
            price="₹12,000"
          />
        </div>
      </div>
    </div>
  );
};
