'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';

const HeroSection: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToActivities = () => {
    const activitiesSection = document.getElementById('activities');
    activitiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554481924-0eecea3f21de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxusní Bali retreat prostředí s tropickou přírodou"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Mystical gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#264653]/60 via-transparent to-[#A8DADC]/30" />
      </div>

      {/* Mystical floating elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#A8DADC]/40 transform rotate-45 animate-pulse sparkle" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#CBAACB]/50 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FFD9A0]/60 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-10 w-5 h-5 bg-[#A8DADC]/30 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FFD9A0]/40 rounded-full animate-pulse sparkle" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#CBAACB]/30 rounded-full animate-pulse sparkle" style={{ animationDelay: '5s' }} />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 drop-shadow-2xl leading-tight sacred-text-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Dotyk bohyně<br />
            <span className="text-[#FFD9A0] font-dancing-script">v tobě</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl font-montserrat font-light text-[#F5F3EF] drop-shadow-lg max-w-4xl mx-auto leading-relaxed">
              Luxusní 10-denní transformační pobyt pro ženy v ráji na Bali
            </p>
            <p className="text-lg md:text-xl font-montserrat text-[#D4A95C] mt-2 font-medium">
              7.–17. května 2026
            </p>
          </motion.div>

          {/* Enhanced Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
              <div className="flex -space-x-3 mr-4">
                {[
                  'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
                ].map((src, i) => (
                  <div key={i} className="relative">
                    <Image
                      src={src}
                      alt={`Účastnice ${i + 1}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-3 border-white shadow-lg object-cover sparkle"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Připojilo se již 12 žen</p>
                <p className="text-[#FFD9A0] text-xs font-medium">Zbývá pouze 8 míst</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToBooking}
              className="group relative px-8 py-4 bg-[#FFD9A0] text-[#264653] font-montserrat font-bold text-lg rounded-full hover:bg-[#FFD9A0]/90 transition-all duration-300 shadow-2xl hover:shadow-[#FFD9A0]/25 min-w-[280px] overflow-hidden mystical-glow"
            >
              <span className="relative z-10">Rezervuj si své místo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            
            <button
              onClick={scrollToActivities}
              className="px-8 py-4 border-2 border-white text-white font-montserrat font-semibold text-lg rounded-full hover:bg-white hover:text-[#264653] transition-all duration-300 min-w-[240px] backdrop-blur-sm"
            >
              Prozkoumej program
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer"
              onClick={scrollToActivities}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/80 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;