import React from 'react';
import { motion } from 'motion/react';
import { Hotel, Anchor, MapPin, Star, Coffee, Wifi } from 'lucide-react';
import { SectionTitle, PageHeader, MicroLabel } from '../components/UI';

const HotelCard = ({ image, name, location, price, type }: { image: string, name: string, location: string, price: string, type: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5"
  >
    <div className="relative h-72 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-6 left-6">
        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-ink">
          {type}
        </span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="serif text-2xl text-ink mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-ink/40 text-sm">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex text-gold">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
        </div>
      </div>
      
      <div className="flex gap-6 mb-8 text-ink/40">
        <div className="flex items-center gap-2">
          <Wifi size={16} />
          <span className="text-xs">Free Wifi</span>
        </div>
        <div className="flex items-center gap-2">
          <Coffee size={16} />
          <span className="text-xs">Breakfast</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-black/5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Starting from</p>
          <p className="text-xl font-mono text-ink">{price}<span className="text-sm font-sans text-ink/40">/night</span></p>
        </div>
        <a 
          href={`https://wa.me/919797125922?text=I'm interested in booking ${name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-ink text-white rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-gold transition-colors"
        >
          Book Now
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
