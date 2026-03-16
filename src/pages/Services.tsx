import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Car, Camera, ShieldCheck, Anchor, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle, ServiceItem, PageHeader, MicroLabel } from '../components/UI';

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
                title="Transportation & Logistics" 
                desc="A fleet of luxury SUVs (Innova Crysta, Scorpio) and comfortable sedans driven by experienced mountain pilots. We ensure safety on every sharp bend and offer 24/7 support for all your travel needs."
              />
              <ServiceItem 
                icon={Hotel} 
                title="Premium Hotel & Houseboat Stays" 
                desc="Carefully curated hotels in Srinagar, Pahalgam, and Gulmarg. Experience the heritage of traditional luxury houseboats on Dal Lake, blending Kashmiri hospitality with modern luxury."
              />
              <ServiceItem 
                icon={Camera} 
                title="Cinematic Photography & Videography" 
                desc="Capture your love story or adventure with our professional pre-wedding cinematography. We provide high-end gear and expert shooters who know the most photogenic spots in the valley. [Watch our latest work](https://www.instagram.com/reel/DVw5X4fEkBC/)"
              />
              <ServiceItem 
                icon={Anchor} 
                title="Cultural Shikara Experiences" 
                desc="Go beyond the usual tourist routes. Our private Shikara tours include sunrise vegetable market visits, floating garden tours, and traditional Kashmiri high tea on the water."
              />
              <ServiceItem 
                icon={Globe} 
                title="Bespoke Tour Itineraries" 
                desc="From family vacations to extreme adventure trips to Ladakh and Sinthan Top, we design all-inclusive, hassle-free packages tailored to your preferences."
              />
              <ServiceItem 
                icon={ShieldCheck} 
                title="Local Expert Guides" 
                desc="Unlock the secrets of the valley with our certified local guides. Experience authentic Kashmiri culture, cuisine, and hidden gems that only locals know."
              />
            </motion.div>
          </div>
        </div>

        {/* Featured Service: Sinthan Top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative rounded-[3rem] overflow-hidden bg-ink p-12 md:p-24 text-white"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/sinthan_top.png" 
              alt="Sinthan Top" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <MicroLabel className="text-gold">Our Signature Experience</MicroLabel>
            <h2 className="serif text-4xl md:text-6xl mb-8">Sinthan Top Adventure</h2>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
              At 12,000 feet, Sinthan Top is where the clouds meet the earth. As specialists in this region, we provide exclusive access, specialized mountain vehicles, and expert guides who know every inch of this majestic pass. Experience the snow even in peak summer.
            </p>
            <ul className="grid grid-cols-2 gap-6 mb-12">
              <li className="flex items-center gap-3 text-sm font-light text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Specialized 4x4 Transit
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Snow Point Access
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Professional Photography
              </li>
              <li className="flex items-center gap-3 text-sm font-light text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                Customized Itineraries
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-gold px-10 py-5 rounded-full text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition-all duration-500">
              Book the Adventure <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
