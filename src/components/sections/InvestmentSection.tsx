'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Gem, Target, Zap } from 'lucide-react';

const InvestmentSection: React.FC = () => {
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
            Investícia do Tvojej <span className="text-[#FFD9A0] font-dancing-script">Transformácie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Early Bird Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#FFD9A0]/20 to-[#FFD9A0]/10 rounded-3xl p-8 border-3 border-[#FFD9A0]/50 relative overflow-hidden shadow-2xl">
              {/* Sparkle effects */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFD9A0]/60 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-[#FFD9A0]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center space-x-2 bg-[#FFD9A0] text-[#264653] px-4 py-2 rounded-full font-bold text-sm mb-4">
                    <Zap className="w-4 h-4" />
                    <span>EARLY BIRD</span>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-2">
                    Posvätná Investícia
                  </h3>
                  <p className="text-[#264653]/70">Do 28. februára 2026</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-[#FFD9A0] mb-2">1 999 €</div>
                  <div className="text-2xl text-[#264653]/60 line-through">2 222 €</div>
                </div>

                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-[#FFD9A0] text-[#264653] font-bold text-lg rounded-2xl hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-lg"
                >
                  Rezervovať za Early Bird cenu
                </button>
              </div>
            </div>
          </motion.div>

          {/* Standard Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A8DADC]/30 shadow-lg h-full">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-2">
                  Štandardná Cena
                </h3>
                <p className="text-[#264653]/70">Od 1. marca 2026</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-[#264653] mb-2">2 222 €</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#264653]/70">
                  <Gem className="w-5 h-5 text-[#A8DADC] mr-3" />
                  <span>Rovnaká kvalita a obsah</span>
                </div>
                <div className="flex items-center text-[#264653]/70">
                  <Target className="w-5 h-5 text-[#A8DADC] mr-3" />
                  <span>Obmedzený počet miest</span>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 border-2 border-[#A8DADC] text-[#264653] font-semibold text-lg rounded-2xl hover:bg-[#A8DADC]/10 transition-all duration-300"
              >
                Rezervovať
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentSection;
