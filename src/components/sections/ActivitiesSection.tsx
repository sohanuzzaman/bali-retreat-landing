'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, Card } from '../ui';
import { Flower2, Coffee, Music, Droplets, Sparkles } from 'lucide-react';

const activities = [
  {
    title: 'Yin Yoga & Čchi-kung',
    description: 'Jemné protažení a hluboká relaxace pro uvolnění napětí, harmonizaci čaker a meridiánů a naladění se na vlastní vnitřní moudrost.',
    image: '/images/retreat/P6.jpg',
    icon: Flower2
  },
  {
    title: 'Rituály s Kakaem',
    description: 'Posvátné ceremonie s ceremonijním kakaem pro otevření srdce a propojení s ženskou energií',
    image: '/images/cacao.jpeg',
    icon: Coffee
  },
  {
    title: 'Intuitivní Tanec',
    description: 'Svobodný pohyb pro uvolnění emocí a vyjádření autentického já prostřednictvím těla',
    image: '/images/retreat/P 2.jpg',
    icon: Music
  },
  {
    title: 'Očistné Rituály',
    description: 'Tradiční balijské očistné ceremonie u posvátných pramenů pro duchovní obnovu',
    image: '/images/retreat/P3.jpg',
    icon: Droplets
  },
  {
    title: 'Masáže & Wellness',
    description: 'Luxusní balijské masáže a wellness procedury pro kompletní relaxaci těla i duše',
  image: '/images/massage.jpg',
    icon: Sparkles
  },
  {
    title: 'Tři Posvátná Místa',
    description: 'Návštěva třech nejposvátějších chrámů Bali pro duchovní obnovu a spojení s místní kulturou',
    image: '/images/retreat/P15.jpg',
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
            Co tě čeká na Bali
          </h2>
          <p className="text-xl text-[#0D2C36]/80 max-w-3xl mx-auto font-montserrat leading-relaxed">
            10 dní plných transformačních zážitků, které tě provedou cestou k tvé vnitřní bohyni
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
              A to není vše...
            </h3>
            <p className="text-[#0D2C36]/80 font-montserrat mb-6 max-w-2xl mx-auto">
              Každý den tě čekají další překvapení, spontánní aktivity a prostor pro osobní růst v kruhu inspirativních žen.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#2AB8A6] text-white font-montserrat font-semibold rounded-full hover:bg-[#2AB8A6]/90 transition-colors duration-300 shadow-lg"
            >
              Chci být součástí
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ActivitiesSection;