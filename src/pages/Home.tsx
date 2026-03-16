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
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 scale-110">
          <img
            src="/sinthan_top.png"
            alt="Kashmir"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/20"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full pt-32">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[1px] bg-gold"></span>
                  <MicroLabel className="text-gold mb-0 tracking-[0.4em]">Government Registered Agency</MicroLabel>
                </div>
                <h1 className="serif text-[14vw] lg:text-[10vw] leading-[0.85] text-white font-light mb-10">
                  Behold the <br />
                  <span className="italic text-gold">Grandeur</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                  <p className="text-white/50 text-xl max-w-lg font-light leading-relaxed">
                    Extraordinary journeys through the heart of the Himalayas. Discover Sinthan Top with the valley's premier travel specialists.
                  </p>
                  <div className="flex flex-wrap gap-10">
                    <Link to="/packages" className="group relative">
                      <div className="absolute -inset-4 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center gap-4 text-white">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-700 group-hover:scale-110">
                          <ArrowRight size={24} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Signature Packages</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </motion.div>

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
      <section className="py-40 max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <SectionTitle 
            subtitle="Signature Collections" 
            title="Curated Destinations" 
          />
          <Link to="/packages" className="group flex items-center gap-6 text-gold mb-4">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-gold/20 group-hover:border-gold pb-2 transition-all">Explore Full Collection</span>
             <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
               <ArrowRight size={18} />
             </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[450px]">
          <PackageCard 
            size="large"
            image="/sinthan_top.png"
            title="Sinthan Top Summit"
            duration="Exclusive 3-Day Alpine Retreat"
            price="₹15,000"
          />

          <PackageCard 
            image="/dal_lake.png"
            title="Dal Lake Serenity"
            duration="Luxury Houseboat Experience"
            price="₹8,500"
          />

          <PackageCard 
            image="/sunmarg.png"
            title="Sonamarg Meadows"
            duration="Private Valley Expedition"
            price="₹10,500"
          />
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

      {/* Testimonials - Editorial Layout */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4 sticky top-40">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-gold"></span>
                <MicroLabel className="text-gold mb-0">Guest Experiences</MicroLabel>
              </div>
              <h2 className="serif text-6xl md:text-7xl font-extralight leading-[0.85] text-ink mb-12 tracking-tight">
                Voices of <br /><span className="italic text-gold">the Valley</span>
              </h2>
              <p className="text-ink/40 text-xl font-light leading-relaxed mb-12">
                "We don't just provide tours; we curate life-long memories. Our guests are our greatest storytellers."
              </p>
              <div className="flex gap-4">
                 <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-paper">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Guest" />
                     </div>
                   ))}
                 </div>
                 <div className="text-ink">
                    <p className="text-sm font-bold tracking-widest mt-1">2,000+</p>
                    <p className="text-[9px] uppercase tracking-widest text-ink/40">Happy Explorers</p>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {[
                {
                  name: "Anjali Sharma",
                  role: "Adventurer",
                  content: "The trip to Sinthan Top was absolutely magical. The team handled everything perfectly, and the views were beyond words. Truly a signature experience.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
                },
                {
                  name: "Rahul Verma",
                  role: "Photography Enthusiast",
                  content: "Expert local knowledge! They took us to spots that aren't on the usual tourist map. Their cinematography package is world-class.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop"
                },
                {
                  name: "Sarah Jenkins",
                  role: "Solo Traveler",
                  content: "Safe, welcoming, and professional. As a solo traveler, I felt completely at ease. The heritage houseboat was the highlight of my year.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop"
                }
              ].map((testimonial, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 1 }}
                  className="group p-12 bg-paper rounded-[3.5rem] border border-black/5 hover:border-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.03)] transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 blur-[80px] rounded-full -z-10 transition-all duration-700 group-hover:bg-gold/10"></div>
                  <p className="serif text-3xl text-ink/70 font-light leading-relaxed mb-10 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl transition-transform duration-500 group-hover:scale-110">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="serif text-2xl text-ink group-hover:text-gold transition-colors">{testimonial.name}</h4>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-ink/30 font-black mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Immersion */}
      <section className="py-40 bg-ink relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-gold/20 blur-[200px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <span className="w-1px h-20 bg-gold/30 mb-8"></span>
            <MicroLabel className="text-gold">Stay Connected</MicroLabel>
            <h2 className="serif text-6xl md:text-8xl font-extralight text-white mb-12 tracking-tighter">Follow the <br /><span className="italic text-gold">Odyssey</span></h2>
            <p className="text-white/40 text-xl font-light leading-relaxed mb-16">
              Join our community for daily inspirations from the heights of the Himalayas and the heart of the valley.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
              {[
                { icon: Instagram, label: "Instagram", id: "@kashmir_sinthan_top", href: "https://www.instagram.com/kashmir_sinthan_top/" },
                { icon: Facebook, label: "Facebook", id: "Kashmir Sinthan Top", href: "https://www.facebook.com/kashmirsinthantop/" },
                { icon: Youtube, label: "Youtube", id: "Kashmir Sinthan Top", href: "https://www.youtube.com/@KashmirSinthanTop" },
                { icon: ArrowRight, label: "Blog", id: "Travel Chronicles", href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-10 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-700"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-500 mb-8 transform group-hover:-rotate-12 mx-auto">
                    <social.icon size={24} />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-black mb-1">{social.label}</p>
                  <p className="text-[11px] text-white/70 group-hover:text-white transition-colors truncate">{social.id}</p>
                </a>
              ))}
            </div>
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
