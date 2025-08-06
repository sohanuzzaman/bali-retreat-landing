'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { contactInfo, socialMedia } from '@/lib/config';

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
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#A8DADC]/30">
              <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-6">
                Pre viac informácií
              </h3>
              
              <p className="text-[#264653]/80 mb-8">
                Máš otázky alebo potrebuješ viac informácií o retreate? Kontaktuj nás!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-[#2AB8A6]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#2AB8A6]" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[#264653] mb-1">Email</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-[#2AB8A6] hover:text-[#2AB8A6]/80 transition-colors duration-300 text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-[#FFD9A0]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#D4A95C]" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[#264653] mb-1">Telefón</h4>
                    <a 
                      href={`tel:${contactInfo.phone.main}`}
                      className="text-[#D4A95C] hover:text-[#D4A95C]/80 transition-colors duration-300 text-sm"
                    >
                      {contactInfo.phone.main}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-[#264653] mb-1">WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${socialMedia.whatsapp.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:text-[#25D366]/80 transition-colors duration-300 text-sm"
                    >
                      {socialMedia.whatsapp.displayNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
