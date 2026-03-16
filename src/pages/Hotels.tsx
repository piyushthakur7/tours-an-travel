import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Anchor, MapPin, Star, Coffee, Wifi } from 'lucide-react';
import { SectionTitle, PageHeader, MicroLabel } from '../components/UI';

const HotelCard = ({ image, name, location, price, type }: { image: string, name: string, location: string, price: string, type: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-700 border border-black/5"
  >
    <div className="relative h-80 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute top-6 left-6">
        <span className="px-5 py-2.5 bg-white/95 backdrop-blur-xl rounded-full text-[9px] uppercase tracking-[0.2em] font-black text-ink shadow-xl">
          {type}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
    <div className="p-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="serif text-3xl text-ink mb-2 font-light group-hover:text-gold transition-colors duration-500">{name}</h3>
          <div className="flex items-center gap-2 text-ink/30 text-xs font-medium tracking-wide">
            <MapPin size={12} className="text-gold" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-8 mb-10 text-ink/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-paper flex items-center justify-center group-hover:bg-gold/10 transition-colors">
            <Wifi size={14} className="group-hover:text-gold" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold">Fiber WiFi</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-paper flex items-center justify-center group-hover:bg-gold/10 transition-colors">
            <Coffee size={14} className="group-hover:text-gold" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold">Breakfast</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-black/5">
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-ink/20 font-black mb-1">Starting from</p>
          <p className="text-2xl font-mono text-ink italic">{price}<span className="text-xs font-sans text-ink/20 not-italic ml-1">/night</span></p>
        </div>
        <a 
          href={`https://wa.me/919797125922?text=I'm interested in booking ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-ink text-white flex items-center justify-center hover:bg-gold hover:shadow-[0_10px_20px_rgba(197,160,89,0.3)] transition-all duration-500 transform hover:-rotate-12"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </div>
    </div>
  </motion.div>
);

export const Hotels = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Luxury Stays" 
        subtitle="Curated Accommodations" 
        bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-12 text-center max-w-2xl mx-auto">
            <SectionTitle 
              subtitle="Where Comfort Meets Culture" 
              title="Handpicked Stays for Every Journey" 
            />
            <p className="text-ink/60 font-light leading-relaxed text-lg -mt-8">
              From historic houseboats on the Dal Lake to boutique mountain resorts in Sinthan Top, we ensure your nights are as magical as your days.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HotelCard 
            type="Boutique Hotel"
            name="Sinthan Heights Resort"
            location="Sinthan Top, Anantnag"
            price="₹5,500"
            image="/sinthan_top.png"
          />
          <HotelCard 
            type="Luxury Houseboat"
            name="Heritage Palace Houseboat"
            location="Dal Lake, Srinagar"
            price="₹8,000"
            image="/dal_lake.png"
          />
          <HotelCard 
            type="Mountain Retreat"
            name="Pahalgam Pines View"
            location="Pahalgam"
            price="₹6,200"
            image="/room_wooden.jpeg"
          />
          <HotelCard 
            type="Premium Hotel"
            name="Gulmarg Grand Hotel"
            location="Gulmarg"
            price="₹12,500"
            image="/room_luxury.jpeg"
          />
          <HotelCard 
            type="Houseboat"
            name="Golden Tulip Houseboat"
            location="Nigeen Lake"
            price="₹6,500"
            image="/room_modern.jpeg"
          />
          <HotelCard 
            type="Boutique Stay"
            name="The Heritage Retreat"
            location="Srinagar Heritage District"
            price="₹7,800"
            image="/heritage_winter.jpeg"
          />
        </div>

        {/* Feature Section */}
        <div className="mt-32 bg-ink rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <MicroLabel className="text-gold">Tailored Concierge</MicroLabel>
              <h2 className="serif text-4xl md:text-5xl mb-8 leading-tight">Need a custom <br /> hotel recommendation?</h2>
              <p className="text-white/60 font-light text-lg mb-12">
                Our local experts can help you find the perfect stay based on your group size, budget, and preferred locations across Kashmir and Ladakh.
              </p>
              <div className="flex flex-wrap gap-6">
                 <a 
                  href="https://wa.me/919797125922?text=I need help with hotel bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gold text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-ink transition-all duration-500 shadow-2xl shadow-gold/20"
                >
                  Ask an Expert
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Luxury" className="rounded-2xl aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=2070&auto=format&fit=crop" alt="Room" className="rounded-2xl aspect-square object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
