'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Crown, Heart, Moon, Sparkles, Eye, Users } from 'lucide-react';

const transformations = [
  {
    title: 'Probuzení Vnitřní Bohyně',
    description: 'Objevíš svou autentickou sílu a naučíš se ji vyjadřovat s grácií a sebevědomím.',
    icon: Crown,
    color: 'from-[#FFD9A0] to-[#CBAACB]'
  },
  {
    title: 'Uzdravení Ženského Srdce',
    description: 'Uvolníš staré rany a otevřeš se pro lásku k sobě samé i k ostatním.',
    icon: Heart,
    color: 'from-[#CBAACB] to-[#A8DADC]'
  },
  {
    title: 'Spojení s Cyklickou Moudrostí',
    description: 'Naučíš se žít v souladu se svými přirozenými rytmy a cykly.',
    icon: Moon,
    color: 'from-[#A8DADC] to-[#FFD9A0]'
  },
  {
    title: 'Aktivace Kreativní Síly',
    description: 'Probudíš svou tvůrčí energii a najdeš odvahu ji sdílet se světem.',
    icon: Sparkles,
    color: 'from-[#FFD9A0] to-[#A8DADC]'
  },
  {
    title: 'Návrat k Intuitivní Moudrosti',
    description: 'Znovu se naučíš důvěřovat své vnitřní moudrosti a intuici.',
    icon: Eye,
    color: 'from-[#CBAACB] to-[#FFD9A0]'
  },
  {
    title: 'Posvátné Sesterství',
    description: 'Zažiješ sílu ženského kruhu a vytvoříš hluboká přátelství na celý život.',
    icon: Users,
    color: 'from-[#A8DADC] to-[#CBAACB]'
  }
];

const DivineFeminineSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with mystical patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#264653]/5 via-white to-[#A8DADC]/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, rgba(168, 218, 220, 0.3) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(203, 170, 203, 0.3) 0%, transparent 50%)`,
                 backgroundSize: '200px 200px'
               }} />
        </div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD9A0]/40 rounded-full animate-pulse"
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-[#264653] mb-8 leading-tight">
            Tvá <span className="text-[#FFD9A0] font-dancing-script">Transformace</span><br />
            Čeká na Tebe
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-4xl mx-auto leading-relaxed">
            Tento retreat není jen o aktivitách. Je to o hlubokém probuzení tvé pravé podstaty, 
            o návratu k ženské moudrosti, kterou máš zakódovanou v DNA.
          </p>
        </motion.div>

        {/* Transformation grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 h-full">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${transformation.color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <transformation.icon className="w-12 h-12 text-[#FFD9A0]" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#264653] mb-4 text-center">
                    {transformation.title}
                  </h3>
                  <p className="text-[#264653]/70 leading-relaxed text-center">
                    {transformation.description}
                  </p>
                </div>

                {/* Mystical corner elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#FFD9A0]/30 transform rotate-45" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#CBAACB]/30 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  );
};

export default DivineFeminineSection;