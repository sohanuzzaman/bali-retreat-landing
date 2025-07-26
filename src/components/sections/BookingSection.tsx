'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Card } from '../ui';
import { Lock, Clock } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                  <div className="bg-[#D4A95C]/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#FFD9A0]" />
                      <p className="text-white text-sm font-semibold">Ušetříš 333 € při rezervaci do konce srpna!</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Standard */}
              <Card className="bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-cinzel font-semibold text-white">Standardní cena</h3>
                      <p className="text-white/60 text-sm">Od 1. září 2025</p>
                    </div>
                    <div className="text-2xl font-bold text-white">3,999 €</div>
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

          {/* Right side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border border-white/50">
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-[#0D2C36] mb-6 text-center">
                  Rezervuj si své místo
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#0D2C36] font-montserrat font-medium mb-2">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D5C7E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB8A6] focus:border-transparent"
                      placeholder="Zadej své jméno"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D2C36] font-montserrat font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D5C7E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB8A6] focus:border-transparent"
                      placeholder="tvuj@email.cz"
                    />
                  </div>

                  <div>
                    <label className="block text-[#0D2C36] font-montserrat font-medium mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D5C7E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2AB8A6] focus:border-transparent"
                      placeholder="+420 123 456 789"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3 w-4 h-4 text-[#2AB8A6] border-[#D5C7E8] rounded focus:ring-[#2AB8A6]"
                    />
                    <label className="text-sm text-[#0D2C36]/80 font-montserrat">
                      Souhlasím se zpracováním osobních údajů a chci být kontaktována ohledně retreatu. 
                      Vaše údaje jsou u nás v bezpečí.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D4A95C] text-[#0D2C36] font-montserrat font-bold text-lg rounded-lg hover:bg-[#D4A95C]/90 transition-colors duration-300 shadow-lg"
                  >
                    Rezervovat místo (Early Bird 3,666 €)
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-[#0D2C36]/60 text-sm font-montserrat mb-4">
                    Nejsi ještě připravená rezervovat?
                  </p>
                  <button className="text-[#2AB8A6] font-montserrat font-semibold hover:underline">
                    Připoj se k přípravné komunitě
                  </button>
                </div>

                <div className="mt-6 bg-[#2AB8A6]/10 rounded-lg p-4 text-center">
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