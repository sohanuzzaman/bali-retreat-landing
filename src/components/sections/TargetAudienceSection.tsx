'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Sparkles, Baby, Briefcase, Palette, Search, Flower2, Camera, X, XCircle } from 'lucide-react';

const suitableFor = [
  { text: 'Ženy hľadajúce hlbokú transformáciu', icon: Sparkles },
  { text: 'Matky túžiace po reconnection so sebou', icon: Baby },
  { text: 'Podnikateľky vyčerpané neustálym výkonom', icon: Briefcase },
  { text: 'Kreatívne duše hľadajúce inšpiráciu', icon: Palette },
  { text: 'Duchovné hľadačky na ceste poznania', icon: Search },
  { text: 'Milovníčky jogy, tanca a rituálov', icon: Flower2 }
];

const notSuitableFor = [
  { text: 'Ženy hľadajúce iba turistický zážitok', icon: Camera },
  { text: 'Tie, ktoré sa boja hlbšej introspekcie', icon: X },
  { text: 'Ženy neochotné k osobnému rastu', icon: XCircle }
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#CBAACB]/10 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#264653] mb-6">
            Je tento retreat <span className="text-[#FFD9A0] font-dancing-script">pre teba?</span>
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Tento posvätný kruh nie je pre každú. Je určený ženám, ktoré sú pripravené na skutočnú zmenu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Suitable for */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#A8DADC]/20 to-[#FFD9A0]/20 rounded-3xl p-8 border-2 border-[#A8DADC]/30 h-full">
              <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-8 text-center">
                Vhodné pre teba, ak si...
              </h3>
              <div className="space-y-6">
                {suitableFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border border-[#A8DADC]/20"
                  >
                    <item.icon className="w-6 h-6 text-[#A8DADC]" />
                    <p className="text-[#264653] font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not suitable for */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#CBAACB]/20 to-[#264653]/10 rounded-3xl p-8 border-2 border-[#CBAACB]/30 h-full">
              <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-8 text-center">
                Nie je pre teba, ak...
              </h3>
              <div className="space-y-6">
                {notSuitableFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/50 rounded-2xl border border-[#CBAACB]/20"
                  >
                    <item.icon className="w-6 h-6 text-[#CBAACB]" />
                    <p className="text-[#264653] font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#FFD9A0]/20 to-[#A8DADC]/20 rounded-3xl p-8 border border-[#FFD9A0]/30">
            <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-4">
              Cítiš, že je to <span className="text-[#FFD9A0]">tvoja cesta?</span>
            </h3>
            <p className="text-[#264653]/80 mb-6 max-w-2xl mx-auto">
              Ak pri čítaní cítiš vzrušenie, motýle v bruchu alebo slzy dojatia, 
              je to znamenie, že tvoja duša rozpoznala svoj domov.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#FFD9A0] text-[#264653] font-semibold rounded-full hover:bg-[#FFD9A0]/80 transition-all duration-300 shadow-lg"
            >
              Áno, to som ja!
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TargetAudienceSection;
