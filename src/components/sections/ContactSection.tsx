'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#A8DADC]/10 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A8DADC]/30">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-[#2AB8A6]/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#2AB8A6]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-4">
                Pre viac informácií
              </h3>
              
              <p className="text-[#264653]/80 mb-6">
                Máš otázky alebo potrebuješ viac informácií o retreate? Napíš nám!
              </p>
              
              <a 
                href="mailto:info@motheryourself.com"
                className="inline-flex items-center space-x-2 text-[#2AB8A6] hover:text-[#2AB8A6]/80 font-semibold text-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>info@motheryourself.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
