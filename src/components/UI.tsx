import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MicroLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`label-caps block mb-4 ${className}`}>{children}</span>
);

export const PageHeader = ({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage: string }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-ink">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
         >
           <MicroLabel className="text-gold/80">{subtitle}</MicroLabel>
           <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-white font-light mb-6 leading-tight md:leading-tight">
             {title}
           </h1>
         </motion.div>
      </div>
    </section>
  );
};

export const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
  <div className="mb-16">
    <MicroLabel>{subtitle}</MicroLabel>
    <h2 className={`serif text-4xl md:text-6xl font-light leading-tight ${light ? 'text-white' : 'text-ink'}`}>
      {title}
    </h2>
  </div>
);

export const PackageCard = ({ image, title, price, duration, size = "small" }: { image: string, title: string, price: string, duration: string, size?: "small" | "large" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -15, scale: 1.01 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`${size === "large" ? 'md:col-span-2 md:row-span-2' : ''} relative group overflow-hidden rounded-[3rem] bg-ink h-full min-h-[350px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]`}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
    
    <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
      <div className="translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
        <div className="flex justify-between items-end gap-6">
          <Link to="/contact" className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold/50 group-hover:w-12 transition-all duration-500"></span>
              <MicroLabel className="text-gold mb-0">{duration}</MicroLabel>
            </div>
            <h3 className={`serif text-white font-light mb-2 leading-tight ${size === "large" ? 'text-5xl lg:text-6xl' : 'text-3xl'}`}>{title}</h3>
            <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
               <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Starting from</span>
               <p className="text-gold font-mono text-lg font-bold">{price}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-3">
            <a 
              href={`https://wa.me/919797125922?text=I'm interested in the ${title} package`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 hover:rotate-12 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              title="Book via WhatsApp"
              onClick={(e) => e.stopPropagation()}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <Link 
              to="/contact" 
              className="w-14 h-14 rounded-full bg-white text-ink flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-75 hover:bg-gold hover:text-white hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
              title="More Details"
            >
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ServiceItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group py-12 border-b border-black/5 flex flex-col md:flex-row gap-8 items-start md:items-center transition-all hover:px-4 cursor-pointer">
    <div className="w-16 h-16 rounded-2xl bg-paper border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
      <Icon size={28} />
    </div>
    <div className="flex-1">
      <h4 className="serif text-2xl mb-2 text-ink">{title}</h4>
      <p className="text-ink/50 max-w-xl font-light">{desc}</p>
    </div>
    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight size={24} className="text-gold" />
    </div>
  </div>
);
