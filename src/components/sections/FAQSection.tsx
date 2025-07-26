'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui';
import { Mail, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Potřebujem zkušenosti s jógou nebo meditací?',
    answer: 'Vůbec ne! Náš retreat je navržen pro ženy všech úrovní. Ať už jsi úplný začátečník nebo pokročilá praktikantka, najdeš zde své místo. Naše facilitátorky tě jemně provedou každou aktivitou.',
    category: 'Příprava'
  },
  {
    question: 'Jak probíhá stravování? Jsem vegetariánka/veganka.',
    answer: 'Všechna jídla jsou 100% rostlinná, čerstvá a připravovaná z místních ingrediencí. Pokud máš specifické alergie nebo dietní omezení, dej nám vědět při rezervaci a vše přizpůsobíme.',
    category: 'Stravování'
  },
  {
    question: 'Co když se necítím připravená na "hlubokou transformaci"?',
    answer: 'Transformace probíhá přirozeně a v tvém vlastním tempu. Nikdo tě nebude nutit do ničeho, co se ti nebude líbit. Vytváříme bezpečný prostor, kde můžeš být autentická a jít jen tak hluboko, jak se cítíš připravená.',
    category: 'Obavy'
  },
  {
    question: 'Jaké jsou podmínky zrušení rezervace?',
    answer: 'Rezervaci můžeš zrušit do 60 dní před začátkem retreatu s plnou refundací. Mezi 60-30 dny vracíme 50% částky. Méně než 30 dní před retreatom je možné převést rezervaci na jinou osobu.',
    category: 'Rezervace'
  },
  {
    question: 'Budu mít čas na odpočinek a soukromí?',
    answer: 'Rozhodně! Program je navržen s ohledem na potřebu odpočinku. Každý den máš několik hodin volného času na relaxaci, osobní reflexi nebo jen tak na nic. Tvůj pokoj je tvým soukromým útočištěm.',
    category: 'Program'
  },
  {
    question: 'Co si mám vzít s sebou?',
    answer: 'Pošleme ti detailní seznam doporučených věcí po rezervaci. Základně potřebuješ pohodlné oblečení na jógu, plavky, opalovací krém a otevřené srdce. Vše ostatní zajistíme.',
    category: 'Příprava'
  },
  {
    question: 'Jsem introvert. Budu se cítit komfortně ve skupině?',
    answer: 'Mnoho našich účastnic jsou introvertky! Respektujeme různé typy osobností a vytváříme prostor jak pro sdílení, tak pro tiché pozorování. Nikdo tě nebude nutit mluvit, pokud nebudeš chtít.',
    category: 'Obavy'
  },
  {
    question: 'Co když se mi nebude líbit některá aktivita?',
    answer: 'Každá aktivita je dobrovolná. Pokud se ti něco nebude líbit nebo se nebudeš cítit komfortně, můžeš se kdykoli stáhnout a využít čas jinak. Tvoje pohoda je naší prioritou.',
    category: 'Program'
  }
];

const categories = ['Všechny', 'Příprava', 'Program', 'Stravování', 'Rezervace', 'Obavy'];

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Všechny');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'Všechny' 
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
            <span className="text-[#FFD9A0] font-dancing-script">Posvátné</span> Otázky & Odpovědi
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Rozumíme tvým obavám a otázkám. Zde najdeš odpovědi na to, co tě nejvíce zajímá.
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
              Rádi si s tebou promluvíme osobně. Napíš nám nebo si rezervuj bezplatný 
              15minutový hovor, kde zodpovíme všechny tvé otázky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#A8DADC] text-[#264653] font-semibold rounded-full hover:bg-[#A8DADC]/80 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>Napsat email</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#A8DADC] text-[#264653] font-semibold rounded-full hover:bg-[#A8DADC]/10 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>Rezervovat hovor</span>
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;