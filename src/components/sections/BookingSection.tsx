'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Card } from '../ui';
import { Lock, Clock } from 'lucide-react';

const BookingSection: React.FC = () => {
  const handleBookingClick = () => {
    // Open Stripe payment link in new tab
    window.open('https://buy.stripe.com/fZubIT1MQ5ms1u6bVw0oM01', '_blank');
  };

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/booking-bg.jpg"
          alt="Luxusní Bali resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0D2C36]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2C36]/90 to-[#2AB8A6]/60" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Pricing & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
              Investice do tvé<br />
              <span className="text-[#D4A95C]">transformace</span>
            </h2>

            {/* Pricing Cards */}
            <div className="space-y-6 mb-8">
              {/* Early Bird */}
              <Card className="bg-gradient-to-r from-[#D4A95C]/20 to-[#D4A95C]/10 border-2 border-[#D4A95C]/50 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-cinzel font-bold text-[#D4A95C]">Early Bird</h3>
                      <p className="text-white/80 text-sm">Do 31. srpna 2025</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#D4A95C]">3,666 €</div>
                      <div className="text-white/60 line-through text-lg">3,999 €</div>
                    </div>
                  </div>
                  <div className="bg-[#D4A95C]/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#FFD9A0]" />
                      <p className="text-white text-sm font-semibold">Ušetříš 333 € při rezervaci do konce srpna!</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/90 text-sm">
                      <strong>Deposit dnes:</strong> 666 € | 
                      <strong> Zbytek:</strong> 3,000 € 
                      <span className="text-xs block mt-1 text-white/70">
                        (splatný 60 dní před retreatum)
                      </span>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Standard */}
              <Card className="bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-cinzel font-semibold text-white">Standardní cena</h3>
                      <p className="text-white/60 text-sm">Od 1. září 2025</p>
                    </div>
                    <div className="text-2xl font-bold text-white">3,999 €</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/90 text-sm">
                      <strong>Deposit dnes:</strong> 666 € | 
                      <strong> Zbytek:</strong> 3,333 €
                      <span className="text-xs block mt-1 text-white/70">
                        (splatný 60 dní před retreatum)
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* What's included */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-cinzel font-semibold text-white mb-4">V ceně je zahrnuto:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90 text-sm">
                {[
                  '10 nocí v luxusním ubytování',
                  'Všechny denní aktivity',
                  '3x denně rostlinná strava',
                  'Ceremonie s kakaem',
                  'Očistné rituály',
                  '2 balijské masáže',
                  'Výlet k delfínům',
                  'Všechny vstupy a transfery',
                  'Online komunita od března 2026',
                  'Podpora facilitátorek 24/7'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[#2AB8A6] mr-2">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border border-white/50">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-playfair font-bold text-[#0D2C36] mb-6">
                  Rezervuj si své místo
                </h3>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#D4A95C] mb-2">666 €</div>
                  <p className="text-[#0D2C36]/80 text-lg mb-4">Deposit pro rezervaci místa</p>
                  <p className="text-sm text-[#0D2C36]/60">
                    Zbývající částka splatná 60 dní před retreatum
                  </p>
                </div>

                <div className="bg-[#2AB8A6]/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-[#2AB8A6] rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-[#0D2C36]">Bezpečná platba přes Stripe</span>
                  </div>
                  <p className="text-sm text-[#0D2C36]/80">
                    Budeš přesměrována na bezpečnou platební stránku Stripe. 
                    Všechny osobní a platební údaje vyplníš tam.
                  </p>
                </div>

                <button
                  onClick={handleBookingClick}
                  className="w-full py-4 bg-[#D4A95C] text-[#0D2C36] font-montserrat font-bold text-lg rounded-lg hover:bg-[#D4A95C]/90 transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2 mb-6"
                >
                  <span>Rezervovat nyní - 666 € deposit</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>

                <div className="text-center mb-6">
                  <p className="text-[#0D2C36]/60 text-sm font-montserrat mb-4">
                    Nejsi ještě připravená rezervovat?
                  </p>
                  <button className="text-[#2AB8A6] font-montserrat font-semibold hover:underline">
                    Připoj se k přípravné komunitě
                  </button>
                </div>

                <div className="bg-[#2AB8A6]/10 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Lock className="w-4 h-4 text-[#A8DADC]" />
                    <p className="text-[#0D2C36] text-sm font-montserrat">
                      <strong>Bezpečná rezervace</strong> • Možnost zrušení do 60 dní před odjezdem
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BookingSection;