import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Car, Camera, ShieldCheck, Anchor, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle, ServiceItem, PageHeader, MicroLabel } from '../components/UI';

export const Services = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Hospitality & Services" 
        subtitle="Uncompromising Standards" 
        bgImage="/dal_lake.png"
      />
      
      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-12 mb-16 text-center max-w-3xl mx-auto">
             <SectionTitle 
                subtitle="The Sinthan Commitment" 
                title="Seamless Himalayan Hospitality" 
              />
              <p className="text-ink/50 font-light leading-relaxed text-xl -mt-8">
                From the moment you arrive in the valley to your final departure, every detail is orchestrated with precision, care, and a deep respect for Kashmiri hospitality.
              </p>
          </div>

          <div className="lg:col-span-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="grid md:grid-cols-2 gap-12"
            >
              {[
                {
                  icon: Car,
                  title: "Elite Fleet Logistics",
                  desc: "Traverse the winding mountain passes in absolute comfort. Our fleet of luxury SUVs and professional mountain pilots ensure safety and elegance on every journey."
                },
                {
                  icon: Hotel,
                  title: "Curated Accommodations",
                  desc: "We partner exclusively with boutique mountain resorts and historic houseboats that meet our exacting standards for luxury and service."
                },
                {
                  icon: Camera,
                  title: "Cinematic Visuals",
                  desc: "Professional pre-wedding cinematography and adventure travel logs. We don't just guide you; we immortalize your memories against the Himalayan backdrop."
                },
                {
                  icon: Globe,
                  title: "Bespoke Journey Design",
                  desc: "Every itinerary is a custom-crafted masterpiece, designed to reflect your individual pace, preferences, and spirit of adventure."
                },
                {
                  icon: Anchor,
                  title: "The Heritage Collection",
                  desc: "Private Shikara experiences that bypass the tourist routes, offering authentic glimpses into the floating lifestyle of the Dal Lake."
                },
                {
                  icon: ShieldCheck,
                  title: "Guardian & Guide",
                  desc: "Government registered and locally rooted. Our certified guides provide unmatched safety, local access, and cultural immersion."
                }
              ].map((service, i) => (
                <div key={i} className="group p-10 bg-white rounded-[3rem] border border-black/5 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700">
                  <div className="w-16 h-16 rounded-2xl bg-paper flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 mb-8 transform group-hover:-rotate-12">
                    <service.icon size={28} />
                  </div>
                  <h4 className="serif text-3xl mb-4 text-ink group-hover:text-gold transition-colors">{service.title}</h4>
                  <p className="text-ink/40 font-light leading-relaxed mb-6">{service.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Featured Service: Sinthan Top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 relative rounded-[4rem] overflow-hidden bg-ink p-16 md:p-32 text-white shadow-2xl"
        >
          <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
            <img 
              src="/sinthan_top.png" 
              alt="Sinthan Top" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold"></span>
              <MicroLabel className="text-gold mb-0">Signature Experience</MicroLabel>
            </div>
            <h2 className="serif text-5xl md:text-8xl mb-10 font-extralight tracking-tight leading-[0.85]">Sinthan <br /><span className="italic text-gold">Grand Summit</span></h2>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-16 max-w-xl">
              At 12,000 feet, Sinthan Top is where the clouds meet the earth. We provide exclusive 4x4 access, professional cinematography, and expert guidance to the heights of the Himalayas.
            </p>
            <Link to="/contact" className="group flex items-center gap-6 text-white overflow-hidden">
               <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-all duration-700 group-hover:scale-110">
                 <ArrowRight size={28} />
               </div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Mount the Expedition</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
