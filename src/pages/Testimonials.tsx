import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { SectionTitle, PageHeader, MicroLabel } from '../components/UI';

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Adventurer",
    content: "The trip to Sinthan Top was absolutely magical. The team handled everything perfectly, and the views were beyond words. Truly a signature experience that I will cherish forever.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "Mumbai, India"
  },
  {
    name: "Rahul Verma",
    role: "Photography Enthusiast",
    content: "Expert local knowledge! They took us to spots that aren't on the usual tourist map. Their cinematography package is world-class and captured every detail of our journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "Delhi, India"
  },
  {
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    content: "Safe, welcoming, and professional. As a solo traveler, I felt completely at ease. The heritage houseboat was the highlight of my year. Thank you for the hospitality!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "London, UK"
  },
  {
    name: "Vikram Singh",
    role: "Family Traveler",
    content: "Everything was perfectly orchestrated for my family. The kids loved the shikara ride and the guides were very patient and informative. Truly a 5-star experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "Bangalore, India"
  },
  {
    name: "Elena Rodriguez",
    role: "Backpacker",
    content: "A truly authentic experience. If you want to see the real Kashmir beyond the tourist traps, these are the people to go with. Sinthan Top is a hidden gem!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "Madrid, Spain"
  },
  {
    name: "Priya Das",
    role: "Nature Lover",
    content: "The meadows of Sonamarg were breathtaking. The logistics were seamless and the food was delicious. Can't wait to come back for another expedition.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&fit=crop",
    rating: 5,
    location: "Kolkata, India"
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-paper min-h-screen">
      <PageHeader 
        title="Guest Experiences" 
        subtitle="Voices of the Valley" 
        bgImage="/dal_lake.png"
      />

      <div className="max-w-7xl mx-auto px-10 py-40">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-gold"></span>
              <MicroLabel className="text-gold mb-0">Testimonials</MicroLabel>
              <span className="w-12 h-[1px] bg-gold"></span>
            </div>
            <h2 className="serif text-6xl md:text-8xl font-extralight text-ink mb-10 tracking-tight leading-[0.85]">
               Memories that <br /><span className="italic text-gold">Resonate</span>
            </h2>
            <p className="text-ink/40 text-xl font-light leading-relaxed">
               Discover the stories of those who have journeyed with us through the high passes and serene lakes of Kashmir.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="group bg-white p-12 rounded-[3.5rem] border border-black/5 hover:border-gold/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] rounded-full -z-10 transition-all duration-700 group-hover:bg-gold/10"></div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#c5a059" className="text-gold" />
                ))}
              </div>

              <Quote className="text-gold/10 absolute top-12 right-12" size={80} />

              <p className="serif text-2xl text-ink/70 font-light leading-relaxed mb-10 italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-6 mt-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="serif text-xl text-ink group-hover:text-gold transition-colors">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-ink/30 font-black">{testimonial.role}</p>
                    <span className="w-1 h-1 bg-ink/10 rounded-full"></span>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-ink/30 font-black">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 bg-ink rounded-[4rem] p-16 md:p-32 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-gold/10 blur-[150px] rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <MessageSquare className="text-gold mx-auto mb-10" size={48} />
            <h2 className="serif text-5xl md:text-7xl mb-10 font-extralight tracking-tight leading-none">Share Your <span className="italic text-gold">Story</span></h2>
            <p className="text-white/40 text-xl font-light mb-16">
              Recently traveled with us? We'd love to hear about your experience. Your feedback helps us perfect the art of Himalayan hospitality.
            </p>
            <a 
              href="/contact" 
              className="px-12 py-6 bg-gold text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-ink transition-all duration-700 shadow-[0_20px_40px_rgba(197,160,89,0.2)]"
            >
              Send Your Feedback
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
