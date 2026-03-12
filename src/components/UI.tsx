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
  <Link to="/contact" className={size === "large" ? 'md:col-span-2 md:row-span-2' : ''}>
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group overflow-hidden rounded-[2.5rem] bg-ink h-full min-h-[300px]`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end">
            <div>
              <MicroLabel className="text-white/60 mb-2">{duration}</MicroLabel>
              <h3 className={`serif text-white font-light mb-2 ${size === "large" ? 'text-4xl' : 'text-2xl'}`}>{title}</h3>
              <p className="text-gold font-mono text-sm">{price}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
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
