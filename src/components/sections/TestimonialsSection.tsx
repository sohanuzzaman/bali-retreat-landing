'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: 'Vrátila jsem se jako úplně jiná žena. Konečně vím, kdo skutečně jsem a co chci od života. Stanka a Ayka mi pomohly najít mou vnitřní bohyni.',
    author: 'Petra K.',
    location: 'Praha',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    transformation: 'Z vyčerpané matky na sebevědomou ženu'
  },
  {
    quote: 'Nikdy jsem nezažila tak hluboké spojení se sebou samou. Rituály s kakaem otevřely mé srdce způsobem, který jsem si nikdy nedokázala představit.',
    author: 'Markéta S.',
    location: 'Brno',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    transformation: 'Objevila svou kreativní sílu'
  },
  {
    quote: 'Bali retreat změnil můj život. Naučila jsem se milovat sebe samu a konečně jsem našla odvahu opustit toxický vztah. Jsem vděčná za každý moment.',
    author: 'Jana M.',
    location: 'Ostrava',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    transformation: 'Našla sílu pro nový začátek'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#A8DADC]/10 to-[#CBAACB]/10">
      {/* Mystical background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#FFD9A0]/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#264653] mb-6">
            <span className="text-[#FFD9A0] font-dancing-script">Posvátné</span> Příběhy Transformace
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Každá žena, která prošla tímto retreatom, má svůj jedinečný příběh probuzení.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#A8DADC]/30 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD9A0]/5 to-[#CBAACB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex justify-center mb-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFD9A0] fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#264653]/80 italic leading-relaxed mb-6 text-center">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full border-2 border-[#FFD9A0]/30 object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD9A0] rounded-full animate-pulse" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-[#264653]">{testimonial.author}</p>
                      <p className="text-[#264653]/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Transformation */}
                  <div className="bg-[#A8DADC]/20 rounded-2xl p-4 text-center border border-[#A8DADC]/30">
                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#FFD9A0]" />
                      <p className="text-[#264653] font-medium text-sm">
                        {testimonial.transformation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;