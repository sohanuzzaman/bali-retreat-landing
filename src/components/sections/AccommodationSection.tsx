'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Building, Flower2, Sparkles, TreePine, Droplets, Waves, Heart } from 'lucide-react';

const AccommodationSection: React.FC = () => {
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

        {/* Sacred Places Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#FFD9A0]/20 to-[#CBAACB]/20 rounded-3xl p-8 lg:p-12 border border-[#FFD9A0]/30">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-4">
                Tři Posvátná Místa na <span className="text-[#FFD9A0]">Bali</span>
              </h3>
              <p className="text-lg text-[#264653]/80 max-w-2xl mx-auto">
                Kde se potkává ticho, hluboký klid a luxus. Každé místo je portálem k sobě samé.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Ubud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#A8DADC]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#2AB8A6]/20 rounded-full mb-6 mx-auto">
                  <TreePine className="w-8 h-8 text-[#2AB8A6]" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-[#264653] mb-3 text-center">
                  Ubud – Posvátný Chrám Klidu
                </h4>
                <div className="space-y-3 text-[#264653]/80">
                  <p className="text-sm leading-relaxed">
                    V srdci Bali, mezi rýžovými poli a tropickou přírodou.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Místo, kde rána začínají zpěvem ptáků a dnem tě provází jemnost, výživa a spojení se sebou.
                  </p>
                </div>
              </motion.div>

              {/* North Bali */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#A8DADC]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#A8DADC]/20 rounded-full mb-6 mx-auto">
                  <Droplets className="w-8 h-8 text-[#A8DADC]" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-[#264653] mb-3 text-center">
                  Sever Bali – Zahrada Bohyně
                </h4>
                <div className="space-y-3 text-[#264653]/80">
                  <p className="text-sm leading-relaxed">
                    V srdci vodopádů, kde je příroda nejdivočejší a nejčistší.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Romantické a ženské prostory obklopené tropickou zahradou – ideální pro hluboký klid a vnitřní léčení.
                  </p>
                </div>
              </motion.div>

              {/* Uluwatu */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#A8DADC]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#CBAACB]/20 rounded-full mb-6 mx-auto">
                  <Waves className="w-8 h-8 text-[#CBAACB]" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-[#264653] mb-3 text-center">
                  Uluwatu – Lemurijský Palác
                </h4>
                <div className="space-y-3 text-[#264653]/80">
                  <p className="text-sm leading-relaxed">
                    Tam, kde se oceán setkává s nebem.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Místo silné mořské energie, ženské moudrosti a jasnosti. Pro bohyně, které si dopřávají jen to nejčistší a nejkrásnější.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Sacred Invitation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#264653]/95 to-[#264653]/90 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full"
                   style={{
                     backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 217, 160, 0.3) 0%, transparent 50%),
                                      radial-gradient(circle at 70% 70%, rgba(203, 186, 203, 0.3) 0%, transparent 50%)`,
                     backgroundSize: '200px 200px'
                   }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-20 h-20 bg-[#FFD9A0]/20 rounded-full mb-8 mx-auto">
                <Heart className="w-10 h-10 text-[#FFD9A0]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8">
                Jsi <span className="text-[#FFD9A0]">Pozvaná</span>
              </h3>
              
              <div className="space-y-6 text-white/90 max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed">
                  Na cestu zpět k sobě.
                </p>
                <p className="text-lg leading-relaxed">
                  Do ženského kruhu, kde tvoje duše ožije.
                </p>
                <p className="text-lg leading-relaxed">
                  Do bezpečí, kde se můžeš ponořit do své hloubky, ticha a svobody.
                </p>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#FFD9A0] text-[#264653] font-bold text-lg rounded-full hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-lg"
                >
                  Přijímám Pozvání
                </button>
              </div>
            </div>
          </div>
        </motion.div>

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