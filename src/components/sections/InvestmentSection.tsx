'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Info, Gem, Target, Building, Flower2, Leaf, Coffee, Droplets, Sparkles, Fish, Bus, Users, Gift, Phone, Camera, Zap } from 'lucide-react';

const InvestmentSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-30T23:59:59');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            Investice do Tvé <span className="text-[#FFD9A0] font-dancing-script">Transformace</span>
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
                    <span>EARLY BIRD SLEVA</span>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-2">
                    Posvátná Investice
                  </h3>
                  <p className="text-[#264653]/70">Do 30. září 2025</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-[#FFD9A0] mb-2">3,666 €</div>
                  <div className="text-2xl text-[#264653]/60 line-through">3,999 €</div>
                  <div className="flex items-center justify-center space-x-2 text-[#264653] font-semibold mt-2">
                    <Sparkles className="w-4 h-4 text-[#FFD9A0]" />
                    <span>Ušetříš 333 €</span>
                  </div>
                  <div className="mt-4 text-sm text-[#264653]/80">
                    <p><strong>Platební plán:</strong></p>
                    <p>Rezervační depozit: 666 €</p>
                    <p>Pak 2 platby po 1,500 €</p>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-[#264653]/90 rounded-2xl p-6 text-center mb-6">
                  <p className="text-white mb-4 font-semibold">Early Bird končí za:</p>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-[#FFD9A0]/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-[#FFD9A0]">{timeLeft.days}</div>
                      <div className="text-white/80 text-xs">dní</div>
                    </div>
                    <div className="bg-[#FFD9A0]/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-[#FFD9A0]">{timeLeft.hours}</div>
                      <div className="text-white/80 text-xs">hodin</div>
                    </div>
                    <div className="bg-[#FFD9A0]/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-[#FFD9A0]">{timeLeft.minutes}</div>
                      <div className="text-white/80 text-xs">minut</div>
                    </div>
                    <div className="bg-[#FFD9A0]/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-[#FFD9A0]">{timeLeft.seconds}</div>
                      <div className="text-white/80 text-xs">sekund</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 bg-[#FFD9A0] text-[#264653] font-bold text-lg rounded-2xl hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-lg"
                >
                  Rezervovat za Early Bird cenu
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
                  Standardní Cena
                </h3>
                <p className="text-[#264653]/70">Od 1. září 2025</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-[#264653] mb-2">3,999 €</div>
                <p className="text-[#264653]/60">Stále skvělá hodnota</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#264653]/70">
                  <Info className="w-5 h-5 text-[#A8DADC] mr-3" />
                  <span>Cena platná od září 2025</span>
                </div>
                <div className="flex items-center text-[#264653]/70">
                  <Gem className="w-5 h-5 text-[#A8DADC] mr-3" />
                  <span>Stejná kvalita a obsah</span>
                </div>
                <div className="flex items-center text-[#264653]/70">
                  <Target className="w-5 h-5 text-[#A8DADC] mr-3" />
                  <span>Omezený počet míst</span>
                </div>
              </div>

              <button 
                className="w-full py-4 border-2 border-[#A8DADC] text-[#264653] font-semibold text-lg rounded-2xl hover:bg-[#A8DADC]/10 transition-all duration-300"
                disabled
              >
                Dostupné od září 2025
              </button>
            </div>
          </motion.div>
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-[#A8DADC]/20 to-[#CBAACB]/20 rounded-3xl p-12 border border-[#A8DADC]/30"
        >
          <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-8 text-center">
            Co je zahrnuto v <span className="text-[#FFD9A0]">investici</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building, title: '10 nocí luxusní ubytování', desc: 'Posvátné prostory pro odpočinek' },
              { icon: Flower2, title: 'Všechny denní aktivity', desc: 'Yoga, meditace, rituály, tanec' },
              { icon: Leaf, title: '3x denně rostlinná strava', desc: 'Čerstvé, místní, energetické jídlo' },
              { icon: Coffee, title: 'Ceremonie s kakaem', desc: 'Posvátné rituály otevření srdce' },
              { icon: Droplets, title: 'Očistné rituály', desc: 'Tradiční balijské purifikace' },
              { icon: Sparkles, title: '2 balijské masáže', desc: 'Hluboká relaxace a uzdravení' },
              { icon: Fish, title: 'Výlet k delfínům', desc: 'Magické setkání s mořskými bytostmi' },
              { icon: Bus, title: 'Všechny transfery', desc: 'Pohodlná doprava po celou dobu' },
              { icon: Users, title: 'Online komunita', desc: 'Přístup od března 2026' },
              { icon: Gift, title: 'Překvapení a dárky', desc: 'Speciální pozornosti pro každou' },
              { icon: Phone, title: 'Podpora 24/7', desc: 'Facilitátorky k dispozici kdykoliv' },
              { icon: Camera, title: 'Profesionální fotky', desc: 'Vzpomínky na celý život' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white/50 rounded-2xl border border-[#A8DADC]/20">
                <item.icon className="w-6 h-6 text-[#FFD9A0] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#264653] mb-1">{item.title}</h4>
                  <p className="text-[#264653]/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default InvestmentSection;