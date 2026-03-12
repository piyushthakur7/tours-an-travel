import React from 'react';
import { motion } from 'motion/react';
import { SectionTitle, PackageCard, PageHeader } from '../components/UI';

export const Packages = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Destinations" 
        subtitle="Explore The Valley" 
        bgImage="https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=2070&auto=format&fit=crop"
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
            image="https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=2070&auto=format&fit=crop"
            title="Kashmir Valley Wonders"
            duration="5 Days / 4 Nights"
            price="₹15,000"
          />
          <PackageCard 
            image="https://images.unsplash.com/photo-1544161515-436cefd1f16d?q=80&w=2070&auto=format&fit=crop"
            title="Ladakh Adventure"
            duration="7 Days"
            price="₹25,000"
          />
          <PackageCard 
            image="https://images.unsplash.com/photo-1624314138470-5a2f24623f10?q=80&w=2070&auto=format&fit=crop"
            title="Sinthan Top Special"
            duration="4 Days"
            price="₹12,000"
          />
          <PackageCard 
            image="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop"
            title="Gulmarg Skiing"
            duration="3 Days"
            price="₹18,000"
          />
          <PackageCard 
            size="large"
            image="https://images.unsplash.com/photo-1566232392379-afd9298e6a46?q=80&w=2070&auto=format&fit=crop"
            title="Pahalgam Retreat"
            duration="4 Days / 3 Nights"
            price="₹14,500"
          />
          <PackageCard 
            image="https://images.unsplash.com/photo-1605649487212-4d4ce3a223f6?q=80&w=2070&auto=format&fit=crop"
            title="Sonamarg Trek"
            duration="2 Days"
            price="₹8,000"
          />
        </div>
      </div>
    </div>
  );
};
