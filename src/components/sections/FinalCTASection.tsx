'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Frown, Sparkles, Lock } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Západ slunce na Bali"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#264653]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/90 via-[#264653]/60 to-[#FFD9A0]/20" />
      </div>

      {/* Floating mystical elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD9A0]/30 rounded-full animate-pulse"
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
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
            Tvá Bohyně<br />
            <span className="text-[#FFD9A0] font-dancing-script">Čeká</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <p className="text-2xl text-white/90 leading-relaxed">
              Hluboko v tobě žije žena, která zná svou hodnotu, důvěřuje své intuici 
              a žije v souladu se svou pravdou.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed">
              Možná ji cítíš jen jako tichý šepot, možná jako hlasité volání. 
              Ať už je to jakkoliv, je čas ji konečně osvobodit.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <p className="text-lg text-white/90 italic leading-relaxed">
                &ldquo;Každá žena má právo žít jako bohyně - mocná, krásná, svobodná. 
                Tento retreat je tvou branou k tomuto životu.&rdquo;
              </p>
              <p className="text-[#FFD9A0] mt-4 font-dancing-script text-xl">
                - Stanka & Andrejka
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
                Máš dvě možnosti:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex justify-center mb-4">
                    <Frown className="w-12 h-12 text-white/60" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Zůstat stejná</h4>
                  <p className="text-white/70 text-sm">
                    Pokračovat v životě, jak ho znáš. Možná se jednou vrátíš k této stránce 
                    a budeš litovat, že jsi neměla odvahu.
                  </p>
                </div>
                
                <div className="bg-[#FFD9A0]/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFD9A0]/50">
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-12 h-12 text-[#FFD9A0]" />
                  </div>
                  <h4 className="text-[#FFD9A0] font-semibold mb-3">Transformovat se</h4>
                  <p className="text-white/90 text-sm">
                    Udělat krok do neznáma a objevit ženu, kterou jsi vždycky měla být. 
                    Vrátit se domů jako bohyně.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-2xl text-white font-semibold">
                Jakou volbu uděláš?
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-6 bg-[#FFD9A0] text-[#264653] font-bold text-2xl rounded-full hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-2xl hover:shadow-[#FFD9A0]/25 overflow-hidden"
              >
                <span className="relative z-10">Vybírám Transformaci</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
              
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-4 h-4 text-white/60" />
                <p className="text-white/60 text-sm">
                  Bezpečná rezervace • Early Bird sleva do 31. srpna • Pouze 8 míst zbývá
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
              Vrať se domů do sebe, sestro.
            </p>
            <p className="text-white/60 mt-2">
              Tvá cesta začíná jediným klikem.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTASection;