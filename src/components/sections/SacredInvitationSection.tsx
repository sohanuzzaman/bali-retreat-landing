'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';

const SacredInvitationSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#A8DADC]/20">
      {/* Lemurian light code patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#A8DADC] transform rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#CBAACB] transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#FFD9A0] transform -rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Sacred text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#264653] mb-6 leading-tight">
                Milá sestro,<br />
                <span className="text-[#FFD9A0] font-dancing-script text-5xl md:text-6xl">slyšíš to volání?</span>
              </h2>
              
              <div className="space-y-6 text-lg text-[#264653]/80 leading-relaxed">
                <p>
                  Hluboko v tobě se probouzí něco pradávného. Vzpomínka na časy, kdy ženy žily v harmonii 
                  se svou vnitřní moudrostí, kdy každý den byl posvátným rituálem a každý dech spojením s božským.
                </p>
                
                <p>
                  Možná cítíš, že jsi se vzdálila své pravé podstatě. Možná toužíš po hlubším spojení 
                  se sebou samou, po prostoru, kde můžeš být autentická, zranitelná a zároveň mocná.
                </p>
                
                <p className="font-semibold text-[#264653]">
                  Tento retreat není jen dovolená. Je to <em>návrat domů k sobě</em>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#CBAACB]/20 to-[#A8DADC]/20 rounded-2xl p-8 border border-[#CBAACB]/30">
              <blockquote className="text-xl font-playfair italic text-[#264653] text-center">
                &ldquo;V každé ženě spí bohyně. Stačí jen najít odvahu ji probudit.&rdquo;
              </blockquote>
              <p className="text-center text-[#264653]/60 mt-4 font-dancing-script text-lg">
                - Stanka & Andrejka
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-[#A8DADC] text-[#264653] font-semibold rounded-full hover:bg-[#A8DADC]/80 transition-all duration-300 shadow-lg group"
            >
              Pokračuj v cestě
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right side - Mystical imagery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Žena v meditaci při východu slunce na Bali"
                width={600}
                height={800}
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/40 via-transparent to-[#FFD9A0]/20" />
              
              {/* Floating mystical elements */}
              <div className="absolute top-10 right-10 w-8 h-8 bg-[#FFD9A0]/60 rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#CBAACB]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 left-8 w-4 h-4 bg-[#A8DADC]/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Sacred geometry overlay */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#FFD9A0]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-[#CBAACB]/30 transform rotate-45" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SacredInvitationSection;