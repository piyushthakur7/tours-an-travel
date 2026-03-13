import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Car, Camera, ShieldCheck, Anchor, Globe } from 'lucide-react';
import { SectionTitle, ServiceItem, PageHeader } from '../components/UI';

export const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Our Services" 
        subtitle="Beyond Sightseeing" 
        bgImage="https://images.unsplash.com/photo-1544161515-436cefd1f16d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div 
               className="sticky top-32"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="Our Expertise" 
                title="Seamless Travel Experiences" 
              />
              <p className="text-ink/60 font-light leading-relaxed mb-8 text-lg">
                From the moment you land to your final departure, we handle every detail with local precision and care. We are your trusted guides in the valley.
              </p>
              <div className="flex items-center gap-4 text-gold font-bold text-xs uppercase tracking-widest bg-ink/5 p-4 rounded-2xl w-fit">
                <ShieldCheck size={20} className="text-gold" />
                Govt. Registered Agency
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ServiceItem 
                icon={Car} 
                title="Transportation" 
                desc="A fleet of luxury SUVs and comfortable sedans driven by experienced mountain pilots. We ensure safety on every sharp bend."
              />
              <ServiceItem 
                icon={Hotel} 
                title="Hotel & Houseboat Booking" 
                desc="Carefully curated hotels and traditional luxury houseboats that blend Kashmiri hospitality with modern luxury."
              />
              <ServiceItem 
                icon={Camera} 
                title="Photography & Videography" 
                desc="Professional pre-wedding cinematography and photography expeditions to capture your special moments in the valley."
              />
              <ServiceItem 
                icon={Anchor} 
                title="Shikara Rides" 
                desc="Experience the tranquil beauty of Dal Lake and Nigeen Lake with our curated private Shikara tours."
              />
              <ServiceItem 
                icon={Globe} 
                title="Complete Tour Packages" 
                desc="All-inclusive tour packages covering Kashmir and Ladakh, designed for a hassle-free and immersive experience."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
