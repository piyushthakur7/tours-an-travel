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
                <div className="flex flex-wrap gap-8">
                  <Link to="/packages" className="group flex items-center gap-4 text-white">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest">Explore Packages</span>
                  </Link>
                  <a 
                    href="https://www.instagram.com/reel/DVw5X4fEkBC/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-white"
                  >
                    <div className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                      <Youtube size={20} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest">Watch Our Story</span>
                  </a>
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
            <a href="https://www.instagram.com/kashmir_sinthan_top/" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} className="hover:text-gold transition-colors cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/kashmirsinthantop/" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} className="hover:text-gold transition-colors cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/@KashmirSinthanTop" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} className="hover:text-gold transition-colors cursor-pointer" />
            </a>
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
            image="/dal_lake.png"
            title="Dal Lake Experience"
            duration="1 Day Shikara & Stay"
            price="₹4,500"
          />

          <PackageCard 
            image="/sunmarg.png"
            title="Sonamarg Valley"
            duration="2 Days Tour"
            price="₹8,500"
          />

          <PackageCard 
            image="/sinthan_top.png"
            title="Sinthan Top Adventure"
            duration="3 Days / 2 Nights"
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

      {/* Cinematic Showcase */}
      <section className="py-32 bg-ink text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <MicroLabel className="text-gold">Cinematic Experiences</MicroLabel>
              <h2 className="serif text-5xl md:text-7xl mb-8 leading-tight">Your Journey, <br /><span className="italic text-gold">Immortalized</span></h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                We don't just guide you through the valley; we capture the soul of your adventure. Our professional cinematography team uses the stunning Kashmiri landscape as the backdrop for your personal story.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  "Professional Pre-wedding Shoots",
                  "4K Drone Cinematography",
                  "Adventure Travel Vlogs",
                  "Cultural Storytelling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm tracking-widest uppercase font-semibold text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[9/16] max-w-[400px] mx-auto group"
            >
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full group-hover:bg-gold/40 transition-all duration-700"></div>
              <div className="relative h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <iframe 
                  src="https://www.instagram.com/reel/DVw5X4fEkBC/embed" 
                  className="w-full h-full border-0"
                  scrolling="no"
                  allowTransparency
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[12px] border-ink rounded-[3rem]"></div>
              </div>
              
              <a 
                href="https://www.instagram.com/reel/DVw5X4fEkBC/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gold flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-500 z-20"
              >
                <Youtube size={32} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            subtitle="Voices of the Valley" 
            title="What Our Guests Say" 
          />
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Anjali Sharma",
                role: "Adventurer",
                content: "The trip to Sinthan Top was absolutely magical. The team handled everything perfectly, and the views were beyond words.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop"
              },
              {
                name: "Rahul Verma",
                role: "Photography Enthusiast",
                content: "Expert local knowledge! They took us to spots that aren't on the usual tourist map. Highly recommend their photography package.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop"
              },
              {
                name: "Sarah Jenkins",
                role: "Solo Traveler",
                content: "Safe, welcoming, and professional. As a solo traveler, I felt completely at ease. Truly the best way to see Kashmir.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-8 border border-ink/5 rounded-3xl hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xl">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <p className="mt-8 text-ink/70 font-light italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="serif text-xl text-ink group-hover:text-gold transition-colors">{testimonial.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <h3 className="serif text-2xl mb-4 text-gold underline md:no-underline decoration-gold/30"><Link to="/hotels" className="hover:underline transition-all">Hotel Booking</Link></h3>
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
