'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Clock, Users, Sparkles } from 'lucide-react';

const UrgencySection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#FFD9A0]/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#264653]/95 to-[#264653]/90 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 border border-[#FFD9A0]/20 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#A8DADC]/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-[#CBAACB]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                Posvátný Kruh se <span className="text-[#FFD9A0]">Uzavírá</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
                Vědomě omezujeme počet účastnic na 20 žen, aby každá dostala individuální pozornost 
                a mohla prožít hlubokou transformaci v bezpečném prostoru.
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-white/20 rounded-full h-6 mb-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-gradient-to-r from-[#FFD9A0] to-[#A8DADC] h-full rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
              <div className="flex justify-between text-white/80 text-sm">
                <span>12 žen se již připojilo</span>
                <span>Zbývá pouze 8 míst</span>
              </div>
            </motion.div>

            {/* Urgency reasons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-12 h-12 text-[#FFD9A0]" />
                </div>
                <h3 className="text-[#FFD9A0] font-semibold mb-2">Čas se krátí</h3>
                <p className="text-white/80 text-sm">Early Bird sleva končí 31. srpna</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-[#FFD9A0]" />
                </div>
                <h3 className="text-[#FFD9A0] font-semibold mb-2">Omezená kapacita</h3>
                <p className="text-white/80 text-sm">Pouze 20 míst pro intimní zážitek</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-12 h-12 text-[#FFD9A0]" />
                </div>
                <h3 className="text-[#FFD9A0] font-semibold mb-2">Jedinečná příležitost</h3>
                <p className="text-white/80 text-sm">Další retreat až v roce 2027</p>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
            >
              <p className="text-white/90 italic mb-4">
                &ldquo;Právě jsem si rezervovala místo! Nemohla jsem riskovat, že mi ujede tahle příležitost. 
                Cítím, že je to přesně to, co moje duše potřebuje.&rdquo;
              </p>
              <p className="text-[#FFD9A0] text-sm">- Tereza K., rezervovala před 2 hodinami</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-[#FFD9A0] text-[#264653] font-bold text-xl rounded-full hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-2xl hover:shadow-[#FFD9A0]/25 group"
              >
                <span className="mr-3">Rezervuji své místo NYNÍ</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
              <p className="text-white/60 text-sm mt-4">
                🔒 Bezpečná rezervace • Možnost zrušení do 60 dní
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default UrgencySection;