'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui';
import { Mail, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/config';

const faqs = [
  {
    question: 'Potrebujem skúsenosti s jógou alebo meditáciou?',
    answer: 'Vôbec nie! Náš retreat je navrhnutý pre ženy všetkých úrovní. Či už si úplná začiatočníčka alebo pokročilá praktikantka, nájdeš tu svoje miesto. Naša facilitátorka ťa jemne prevedie každou aktivitou.',
    category: 'Príprava'
  },
  {
    question: 'Ako prebieha stravovanie? Som vegetariánka/vegánka.',
    answer: 'Všetky jedlá sú 100% rastlinné, čerstvé a pripravované z miestnych ingrediencií. Ak máš špecifické alergie alebo diétne obmedzenia, daj nám vedieť pri rezervácii a všetko prispôsobíme.',
    category: 'Stravovanie'
  },
  {
    question: 'Čo ak sa necítim pripravená na "hlbokú transformáciu"?',
    answer: 'Transformácia prebieha prirodzene a v tvojom vlastnom tempe. Nikto ťa nebude nútiť do ničoho, čo sa ti nebude páčiť. Vytvárame bezpečný priestor, kde môžeš byť autentická a ísť len tak hlboko, ako sa cítiš pripravená.',
    category: 'Obavy'
  },
  {
    question: 'Aké sú podmienky zrušenia rezervácie?',
    answer: 'Podrobné podmienky zrušenia ti budú poskytnuté pri rezervácii. Kontaktuj nás pre viac informácií.',
    category: 'Rezervácia'
  },
  {
    question: 'Budem mať čas na oddych a súkromie?',
    answer: 'Rozhodne! Program je navrhnutý s ohľadom na potrebu odpočinku. Každý deň máš niekoľko hodín voľného času na relaxáciu, osobnú reflexiu alebo len tak na nič.',
    category: 'Program'
  },
  {
    question: 'Čo si mám vziať so sebou?',
    answer: 'Pošleme ti detailný zoznam odporúčaných vecí po rezervácii. Základne potrebuješ pohodlné oblečenie na jogu, plavky, opaľovací krém a otvorené srdce. Všetko ostatné zabezpečíme.',
    category: 'Príprava'
  },
  {
    question: 'Som introvert. Budem sa cítiť komfortne v skupine?',
    answer: 'Mnohé naše účastníčky sú introvertky! Rešpektujeme rôzne typy osobností a vytvárame priestor ako pre zdieľanie, tak pre tiché pozorovanie. Nikto ťa nebude nútiť hovoriť, ak nebudeš chcieť.',
    category: 'Obavy'
  },
  {
    question: 'Čo ak sa mi nebude páčiť niektorá aktivita?',
    answer: 'Každá aktivita je dobrovoľná. Ak sa ti niečo nebude páčiť alebo sa nebudeš cítiť komfortne, môžeš sa kedykoľvek stiahnuť a využiť čas inak. Tvoja pohoda je našou prioritou.',
    category: 'Program'
  }
];

const categories = ['Všetky', 'Príprava', 'Program', 'Stravovanie', 'Rezervácia', 'Obavy'];

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Všetky');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'Všetky' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#FFD9A0]/10 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#264653] mb-6">
            <span className="text-[#FFD9A0] font-dancing-script">Posvätné</span> Otázky & Odpovede
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Rozumieme tvojim obavám a otázkam. Tu nájdeš odpovede na to, čo ťa najviac zaujíma.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#FFD9A0] text-[#264653] shadow-lg'
                  : 'bg-white/80 text-[#264653]/70 hover:bg-[#A8DADC]/20 border border-[#A8DADC]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#A8DADC]/30 overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#A8DADC]/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#264653] pr-4">
                    {faq.question}
                  </h3>
                  <div className={`text-2xl text-[#FFD9A0] transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-[#A8DADC]/30 mb-4" />
                        <p className="text-[#264653]/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#A8DADC]/20 to-[#CBAACB]/20 rounded-3xl p-8 border border-[#A8DADC]/30">
            <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-4">
              Stále máš otázky?
            </h3>
            <p className="text-[#264653]/80 mb-6 max-w-2xl mx-auto">
              Radi si s tebou pohovoríme osobne. Napíš nám alebo si rezervuj bezplatný 
              15-minútový hovor, kde zodpovieme všetky tvoje otázky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#A8DADC] text-[#264653] font-semibold rounded-full hover:bg-[#A8DADC]/80 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Napísať email</span>
              </a>
              <a 
                href={`tel:${contactInfo.phone.main}`}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#A8DADC] text-[#264653] font-semibold rounded-full hover:bg-[#A8DADC]/10 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Zavolať</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;
