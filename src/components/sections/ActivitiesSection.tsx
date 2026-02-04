'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Card } from '../ui';
import { Coffee, Music, Droplets, Sparkles } from 'lucide-react';

const activities = [
  {
    title: 'Rituály s Kakaom',
    description: 'Posvätné ceremónie s ceremoniálnym kakaom pre otvorenie srdca a prepojenie so ženskou energiou',
    image: '/images/cacao.jpeg',
    icon: Coffee
  },
  {
    title: 'Intuitívny Tanec',
    description: 'Slobodný pohyb pre uvoľnenie emócií a vyjadrenie autentického ja prostredníctvom tela',
    image: '/images/retreat/P 2.jpg',
    icon: Music
  },
  {
    title: 'Očistné Rituály',
    description: 'Tradičné balijské očistné ceremónie pri posvätných prameňoch pre duchovnú obnovu',
    image: '/images/retreat/P3.jpg',
    icon: Droplets
  },
  {
    title: 'Masáže & Wellness',
    description: 'Luxusné balijské masáže a wellness procedúry pre kompletnú relaxáciu tela i duše',
    image: '/images/Brown and White Massage Treatment Facebook Post_20250929_093950_0000.png',
    icon: Sparkles
  }
];

const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-[#F5F3EF] to-[#D5C7E8]/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D2C36] mb-6">
            Čo ťa čaká na Bali
          </h2>
          <p className="text-xl text-[#0D2C36]/80 max-w-3xl mx-auto font-montserrat leading-relaxed">
            8 dní plných transformačných zážitkov, ktoré ťa prevedú cestou k tvojej vnútornej podstate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[#D5C7E8]/30">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className={`${
                      activity.title === 'Očistné Rituály' 
                        ? 'object-cover object-top' 
                        : 'object-cover'
                    } group-hover:scale-110 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2C36]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <activity.icon className="w-8 h-8 text-[#FFD9A0]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-semibold text-[#0D2C36] mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-[#0D2C36]/70 font-montserrat leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2AB8A6]/10 to-[#D5C7E8]/10 rounded-2xl p-8 border border-[#2AB8A6]/20">
            <h3 className="text-2xl font-playfair font-semibold text-[#0D2C36] mb-4">
              A to nie je všetko...
            </h3>
            <p className="text-[#0D2C36]/80 font-montserrat mb-6 max-w-2xl mx-auto">
              Každý deň ťa čakajú ďalšie prekvapenia, spontánne aktivity a priestor pre osobný rast v kruhu inšpiratívnych žien.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#2AB8A6] text-white font-montserrat font-semibold rounded-full hover:bg-[#2AB8A6]/90 transition-colors duration-300 shadow-lg"
            >
              Chcem byť súčasťou
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ActivitiesSection;