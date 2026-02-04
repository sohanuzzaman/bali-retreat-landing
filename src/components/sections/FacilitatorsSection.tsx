'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';

const facilitators = [
  {
    name: 'Stanka Karpatyová',
    title: 'Liečiteľka Srdca & Mother of Empowerment',
    bio: 'Žena, ktorá kráča životom s láskou, jemnosťou a hlbokým prepojením so sebou. Mama, manželka, sprievodkyňa a liečiteľka. Tvorí bezpečné a posvätné priestory pre ženy, ktoré sú pripravené sa zastaviť a znovu sa nadýchnuť. Liečiteľka maternice a Luny, držiteľka ženskej múdrosti, ktorá skrze svoje dary pomáha ženám vracať sa späť k svojmu telu, cykličnosti, intuícii a tichému vnútornému hlasu. Jej cesta je preniknutá materstvom, dotykom prírody, rituálmi, pohybom a posvätnosťou každodennosti. V jej poli sa ženy cítia videné, uctené a bezpečne vedené späť domov – k sebe, k svojej vnútornej sile, k hlbokej láske a pravde, ktorú nosia vo vnútri seba.',
    specialties: ['Liečenie ženského srdca', 'Rituály s kakaom', 'Empowerment coaching', 'Materská múdrosť'],
    image: '/images/stana.jpeg',
    quote: 'Každá žena v sebe nosí bohyňu. Moja úloha je pomôcť jej ju nájsť a oslobodiť.',
    energy: 'Materská, mocná, uzdravujúca'
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
            Tvoja <span className="text-[#FFD9A0] font-dancing-script">Sprievodkyňa</span>
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Žena, ktorá prešla vlastnou transformáciou a teraz drží posvätný priestor pre tvoju cestu.
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
                  <h4 className="font-semibold text-[#264653] mb-3">Špecializácia:</h4>
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
      </Container>
    </section>
  );
};

export default FacilitatorsSection;