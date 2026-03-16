import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { PageHeader, MicroLabel } from '../components/UI';

export const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-paper min-h-screen">
        <PageHeader 
          title="Thank You" 
          subtitle="Gratitude" 
          bgImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="max-w-7xl mx-auto px-10 py-40 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="w-32 h-32 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-12"
          >
            <CheckCircle2 size={64} />
          </motion.div>
          <h2 className="serif text-5xl md:text-7xl text-ink mb-8 font-extralight tracking-tight">Your story has been <span className="italic text-gold">received.</span></h2>
          <p className="text-ink/40 text-xl font-light mb-16 max-w-2xl leading-relaxed">
            We deeply appreciate your feedback. It is through your eyes that we learn to perfect the art of Himalayan hospitality.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-12 py-6 bg-ink text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold transition-all duration-700 shadow-2xl"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Share Your Experience" 
        subtitle="Guest Feedback" 
        bgImage="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold"></span>
              <MicroLabel className="text-gold mb-0 tracking-[0.4em]">Continuous Refinement</MicroLabel>
            </div>
            <h2 className="serif text-6xl md:text-8xl font-extralight leading-[0.85] text-ink mb-12 tracking-tight">
              Honoring Your <br /><span className="italic text-gold">Perspective</span>
            </h2>
            <p className="text-ink/40 text-xl font-light mb-16 max-w-md leading-relaxed">
              Every detail of your journey matters to us. Your insights help us craft even more extraordinary experiences for future explorers.
            </p>
            
            <div className="space-y-12">
              <div className="p-10 bg-white rounded-[3rem] border border-black/5 shadow-sm relative overflow-hidden group hover:border-gold/20 transition-all duration-700">
                <MessageSquare className="text-gold mb-6" size={32} />
                <h4 className="serif text-2xl mb-4 font-light">Why Feedback Matters?</h4>
                <p className="text-ink/40 font-light leading-relaxed">
                  We believe that luxury is in the details. By sharing your experience, you help us maintain the highest standards of hospitality in the heart of the Himalayas.
                </p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all duration-700"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-16 rounded-[4rem] border border-black/5 shadow-[0_40px_80px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <MicroLabel className="text-ink/20">How would you rate your journey?</MicroLabel>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      className="transition-all duration-300 transform hover:scale-125"
                    >
                      <Star 
                        size={32} 
                        strokeWidth={1}
                        className={`${(hoveredRating || rating) >= star ? 'fill-gold text-gold' : 'text-ink/10'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <MicroLabel className="text-ink/20">Your Name</MicroLabel>
                  <input required type="text" className="w-full bg-transparent border-b border-black/10 pb-4 focus:border-gold outline-none transition-all text-xl font-light text-ink" placeholder="Full Name" />
                </div>
                <div className="space-y-4">
                  <MicroLabel className="text-ink/20">Email Address</MicroLabel>
                  <input required type="email" className="w-full bg-transparent border-b border-black/10 pb-4 focus:border-gold outline-none transition-all text-xl font-light text-ink" placeholder="you@luxury.com" />
                </div>
              </div>

              <div className="space-y-4">
                <MicroLabel className="text-ink/20">Trip Experience</MicroLabel>
                <textarea required rows={4} className="w-full bg-transparent border-b border-black/10 pb-4 focus:border-gold outline-none transition-all resize-none text-xl font-light text-ink" placeholder="Tell us about the moments that stood out..."></textarea>
              </div>

              <button type="submit" className="w-full py-6 bg-ink text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold transition-all duration-700 flex items-center justify-center gap-4 group">
                Submit Feedback
                <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
