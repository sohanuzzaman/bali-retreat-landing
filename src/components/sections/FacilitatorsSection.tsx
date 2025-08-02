'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Flame, Waves } from 'lucide-react';

const facilitators = [
  {
    name: 'Stanka Karpatyová',
    title: 'Léčitelka Srdce & Mother of Empowerment',
    bio: 'Žena, která kráčí životem s láskou, jemností a hlubokým propojením se sebou. Máma, manželka, průvodkyně a léčitelka. Tvoří bezpečné a posvátné prostory pro ženy, které jsou připravené se zastavit a znovu se nadechnout. Léčitelka dělohy a Luny, držitelka ženské moudrosti, která skrze své dary pomáhá ženám vracet se zpět ke svému tělu, cykličnosti, intuici a tichému vnitřnímu hlasu. Její cesta je prolnutá mateřstvím, dotekem přírody, rituály, pohybem a posvátností každodennosti. V jejím poli se ženy cítí viděné, uctěné a bezpečně vedené zpět domů – k sobě, ke své vnitřní síle, k hluboké lásce a pravdě, kterou nosí uvnitř sebe.',
    specialties: ['Léčení ženského srdce', 'Rituály s kakaem', 'Empowerment coaching', 'Mateřská moudrost'],
    image: '/images/stana.jpeg',
    quote: 'Každá žena v sobě nosí bohyni. Moje role je pomoci jí ji najít a osvobodit.',
    energy: 'Mateřská, mocná, uzdravující'
  },
  {
    name: 'Ayka',
    title: 'Průvodkyně energií, meditací a ženským laděním',
    bio: 'Vede ženy zpět do těla, zpět k dechu, zpět k sobě. Certifikovaná lektorka yin jógy, čchi-kungu a meditací, která otevírá cestu k vnitřnímu klidu, síle a hlubokému propojení. Specializuje se na harmonizaci čaker, práci s energetickými dráhami (meridiány) a vytváří prostor, kde se žena může uvolnit, zpomalit a skutečně cítit. Vědomě. V hloubce. V souladu.',
    specialties: ['Yin yoga', 'Meditace', 'Ženské cykly'],
    image: '/images/Ayka.jpeg',
    quote: 'V tichosti yin přístupu nacházíme svou největší sílu.',
    energy: 'Jemná, hluboká, intuitivní'
  }
];

const FacilitatorsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#A8DADC]/10">
      {/* Mystical background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#CBAACB]/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FFD9A0]/20 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
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
            Tvé <span className="text-[#FFD9A0] font-dancing-script">Průvodkyně</span>
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Dvě ženy, které prošly vlastní transformací a nyní drží posvátný prostor pro tvou cestu.
          </p>
        </motion.div>

        <div className="space-y-20">
          {facilitators.map((facilitator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={facilitator.image}
                      alt={facilitator.name}
                      fill
                      className={`object-cover ${facilitator.name === 'Stanka Karpatyová' ? 'object-top' : 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/40 via-transparent to-[#FFD9A0]/20" />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#FFD9A0]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-[#CBAACB]/30 transform rotate-45" />
                  
                  {/* Energy badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-[#A8DADC]/30">
                    <p className="text-[#264653] text-sm font-medium">{facilitator.energy}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-[#264653] mb-2">
                    {facilitator.name}
                  </h3>
                  <p className="text-[#FFD9A0] font-semibold text-lg mb-4">
                    {facilitator.title}
                  </p>
                </div>

                <p className="text-[#264653]/80 leading-relaxed text-lg">
                  {facilitator.bio}
                </p>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#A8DADC]/20 to-[#CBAACB]/20 rounded-2xl p-6 border border-[#A8DADC]/30">
                  <blockquote className="text-[#264653] font-playfair italic text-lg text-center">
                    &ldquo;{facilitator.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-[#264653] mb-3">Specializace:</h4>
                  <div className="flex flex-wrap gap-2">
                    {facilitator.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-[#FFD9A0]/20 text-[#264653] text-sm rounded-full border border-[#FFD9A0]/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Combined energy section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#264653]/90 to-[#264653]/80 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full"
                   style={{
                     backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 217, 160, 0.3) 0%, transparent 50%),
                                      radial-gradient(circle at 70% 70%, rgba(168, 218, 220, 0.3) 0%, transparent 50%)`,
                     backgroundSize: '200px 200px'
                   }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
                Společně Vytváříme <span className="text-[#FFD9A0]">Posvátný Prostor</span>
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Kombinace Stančiny mateřské síly a Aykiny jemné moudrosti vytváří jedinečnou alchymii, 
                ve které se každá žena cítí bezpečně držená a zároveň povzbuzená k růstu.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Flame className="w-12 h-12 text-[#FFD9A0]" />
                  </div>
                  <h4 className="text-[#FFD9A0] font-semibold mb-2">Aktivní Transformace</h4>
                  <p className="text-white/80 text-sm">Stančina energie tě povzbudí k odvážným krokům</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Waves className="w-12 h-12 text-[#FFD9A0]" />
                  </div>
                  <h4 className="text-[#FFD9A0] font-semibold mb-2">Jemné Přijetí</h4>
                  <p className="text-white/80 text-sm">Aykina přítomnost tě objímá v bezpečí</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FacilitatorsSection;