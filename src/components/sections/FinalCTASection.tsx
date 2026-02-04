'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Frown, Sparkles, Lock } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{top: number, left: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate sparkle positions only on client side
    const newSparkles = [...Array(15)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Západ slnka na Bali"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#264653]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/90 via-[#264653]/60 to-[#FFD9A0]/20" />
      </div>

      {/* Floating mystical elements */}
      <div className="absolute inset-0">
        {mounted && sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD9A0]/30 rounded-full animate-pulse"
            style={{
              top: `${sparkle.top}%`,
              left: `${sparkle.left}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`
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
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
            Tvoja Vnútorná Sila<br />
            <span className="text-[#FFD9A0] font-dancing-script">Čaká</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <p className="text-2xl text-white/90 leading-relaxed">
              Hlboko v tebe žije žena, ktorá pozná svoju hodnotu, dôveruje svojej intuícii 
              a žije v súlade so svojou pravdou.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Možno ju cítiš len ako tichý šepot, možno ako hlasné volanie. 
              Nech už je to akokoľvek, je čas ju konečne oslobodiť.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <p className="text-lg text-white/90 italic leading-relaxed">
                &ldquo;Každá žena má právo žiť ako bohyňa - mocná, krásna, slobodná. 
                Tento retreat je tvojou bránou k tomuto životu.&rdquo;
              </p>
              <p className="text-[#FFD9A0] mt-4 font-dancing-script text-xl">
                - Stanka
              </p>
            </div>
          </div>

          {/* Final decision moment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Máš dve možnosti:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <Frown className="w-12 h-12 text-white/60" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Zostať rovnaká</h4>
                  <p className="text-white/70 text-sm">
                    Pokračovať v živote, ako ho poznáš. Možno sa jedného dňa vrátiš na túto stránku 
                    a budeš ľutovať, že si nemala odvahu.
                  </p>
                </div>
                
                <div className="bg-[#FFD9A0]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFD9A0]/50">
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-12 h-12 text-[#FFD9A0]" />
                  </div>
                  <h4 className="text-[#FFD9A0] font-semibold mb-3">Transformovať sa</h4>
                  <p className="text-white/90 text-sm">
                    Urobiť krok do neznáma a objaviť ženu, ktorou si vždy mala byť. 
                    Vrátiť sa domov ako bohyňa.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-2xl text-white font-semibold">
                Akú voľbu urobíš?
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-6 bg-[#FFD9A0] text-[#264653] font-bold text-2xl rounded-full hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-2xl hover:shadow-[#FFD9A0]/25 overflow-hidden"
              >
                <span className="relative z-10">Vyberám si Transformáciu</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
              
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4 text-white/60" />
                <p className="text-white/60 text-sm">
                  Bezpečná rezervácia • Early Bird zľava do 28. februára • Obmedzený počet miest
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sacred closing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-white/20"
          >
            <p className="text-xl text-white/80 font-dancing-script">
              Vráť sa domov k sebe, sestra.
            </p>
            <p className="text-white/60 mt-2">
              Tvoja cesta začína jediným kliknutím.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
