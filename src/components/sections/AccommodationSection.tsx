'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Building, Flower2, Sparkles } from 'lucide-react';

const accommodations = [
  {
    name: 'Posvátný Chrám Klidu',
    description: 'Luxusní vila s výhledem na rýžová pole, kde se každé ráno probudíš za zpěvu ptáků.',
    features: ['Soukromá koupelna', 'Terasa s výhledem', 'Klimatizace', 'Minibar'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Zahrada Bohyně',
    description: 'Romantické pokoje obklopené tropickou zahradou, ideální pro hlubokou meditaci.',
    features: ['Zahradní terasa', 'Venkovní sprcha', 'Yoga prostor', 'Přírodní materiály'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Lemurijský Palác',
    description: 'Nejluxusnější apartmány s nekonečným bazénem a výhledem na oceán.',
    features: ['Infinity pool', 'Výhled na oceán', 'Spa koupelna', 'Butlerova služba'],
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

const AccommodationSection: React.FC = () => {
  const [activeAccommodation, setActiveAccommodation] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#CBAACB]/10">
      {/* Mystical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#A8DADC]/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-[#CBAACB]/20 transform rotate-45" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#FFD9A0]/10 rounded-full" />
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
            Tvůj <span className="text-[#FFD9A0] font-dancing-script">Posvátný</span> Domov
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Každý prostor je navržen tak, aby podporoval tvou transformaci. Luxus, který slouží tvé duši.
          </p>
        </motion.div>

        {/* Mobile-first layout with image above on mobile */}
        <div className="space-y-8 mb-16">
          {/* Mobile image display - shows above options on mobile */}
          <motion.div
            key={activeAccommodation}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative lg:hidden"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={accommodations[activeAccommodation].image}
                alt={accommodations[activeAccommodation].name}
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/30 via-transparent to-[#FFD9A0]/10" />
              
              {/* Image title overlay for mobile */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {accommodations[activeAccommodation].name}
                </h3>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-[#FFD9A0]/60 rounded-full animate-pulse" />
              <div className="absolute bottom-6 right-6 w-4 h-4 bg-[#CBAACB]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Accommodation selector */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-6"
            >
              {/* Mobile instruction text */}
              <p className="text-[#264653]/60 text-sm mb-4 lg:hidden">
                Klikni na možnost níže pro zobrazení obrázku výše
              </p>
              
              {accommodations.map((accommodation, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeAccommodation === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveAccommodation(index)}
                >
                  <div className={`p-4 lg:p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeAccommodation === index 
                      ? 'border-[#FFD9A0] bg-gradient-to-r from-[#FFD9A0]/10 to-[#CBAACB]/10 shadow-lg' 
                      : 'border-[#A8DADC]/30 bg-white/50 hover:border-[#A8DADC]/50'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl lg:text-2xl font-playfair font-bold text-[#264653]">
                        {accommodation.name}
                      </h3>
                      {/* Active indicator for mobile */}
                      {activeAccommodation === index && (
                        <div className="w-3 h-3 bg-[#FFD9A0] rounded-full animate-pulse lg:hidden" />
                      )}
                    </div>
                    <p className="text-[#264653]/70 mb-4 leading-relaxed text-sm lg:text-base">
                      {accommodation.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 lg:px-3 py-1 bg-[#A8DADC]/20 text-[#264653] text-xs lg:text-sm rounded-full border border-[#A8DADC]/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right side - Desktop image display */}
            <motion.div
              key={activeAccommodation}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={accommodations[activeAccommodation].image}
                  alt={accommodations[activeAccommodation].name}
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/30 via-transparent to-[#FFD9A0]/10" />
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-6 h-6 bg-[#FFD9A0]/60 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-[#CBAACB]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#FFD9A0]/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#CBAACB]/30 transform rotate-45" />
            </motion.div>
          </div>
        </div>

        {/* Sacred spaces description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#A8DADC]/20 to-[#CBAACB]/20 rounded-3xl p-12 text-center border border-[#A8DADC]/30"
        >
          <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-6">
            Více než Ubytování - <span className="text-[#FFD9A0]">Posvátné Prostory</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Building className="w-8 h-8 text-[#FFD9A0]" />
              </div>
              <h4 className="font-semibold text-[#264653] mb-2">Chrám Meditace</h4>
              <p className="text-[#264653]/70 text-sm">Posvátný prostor pro ranní rituály a večerní reflexe</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Flower2 className="w-8 h-8 text-[#FFD9A0]" />
              </div>
              <h4 className="font-semibold text-[#264653] mb-2">Zahrada Léčení</h4>
              <p className="text-[#264653]/70 text-sm">Tropická oáza pro individuální kontemplaci</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Sparkles className="w-8 h-8 text-[#FFD9A0]" />
              </div>
              <h4 className="font-semibold text-[#264653] mb-2">Kruh Sester</h4>
              <p className="text-[#264653]/70 text-sm">Intimní prostor pro sdílení a spojení</p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-[#264653]/60 text-sm italic">
              Kompletní fotogalerie všech prostor ti bude zpřístupněna po rezervaci
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AccommodationSection;