'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui';

const galleryImages = [
  {
    src: '/images/retreat/P5.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P6.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P7.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P8.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P9.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P10.jpg',
    alt: 'Retreat moment'
  },
  {
    src: '/images/retreat/P11.jpg',
    alt: 'Retreat moment'
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#A8DADC]/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#264653] mb-6">
            <span className="text-[#FFD9A0] font-dancing-script">Vizuální</span> Cesta
          </h2>
          <p className="text-xl text-[#264653]/80 max-w-3xl mx-auto leading-relaxed">
            Nech se inspirovat krásou míst a momentů, které tě čekají na tomto posvátném retreatu.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={600}
                  className="object-contain max-h-[80vh] rounded-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#A8DADC]/20 to-[#CBAACB]/20 rounded-3xl p-8 border border-[#A8DADC]/30">
            <h3 className="text-2xl font-playfair font-bold text-[#264653] mb-4">
              Chceš být součástí <span className="text-[#FFD9A0]">těchto momentů?</span>
            </h3>
            <p className="text-[#264653]/80 mb-6 max-w-2xl mx-auto">
              Každá fotka vypráví příběh transformace. Tvůj příběh může být další.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#FFD9A0] text-[#264653] font-semibold rounded-full hover:bg-[#FFD9A0]/80 transition-all duration-300 shadow-lg"
            >
              Ano, chci zažít tuto krásu!
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GallerySection;