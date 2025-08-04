'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui';

const HeroSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlayingReverse, setIsPlayingReverse] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Load video after component mounts to improve initial page load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 500); // Delay video loading by 500ms

    return () => clearTimeout(timer);
  }, []);

  // Ping-pong loop effect
  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlayingReverse && video.currentTime >= video.duration - 0.1) {
      // Reached end, start playing backwards by reversing time manually
      setIsPlayingReverse(true);
    }
  };

  // Handle the reverse playback manually
  React.useEffect(() => {
    if (!isPlayingReverse) return;
    
    const video = videoRef.current;
    if (!video) return;

    const interval = setInterval(() => {
      if (video.currentTime <= 0.1) {
        // Reached beginning, start playing forwards
        setIsPlayingReverse(false);
        video.play();
        clearInterval(interval);
      } else {
        // Move backwards manually
        video.currentTime = Math.max(0, video.currentTime - 0.033); // ~30fps backwards
      }
    }, 33); // ~30fps

    video.pause(); // Pause the normal playback while we control it manually

    return () => clearInterval(interval);
  }, [isPlayingReverse]);

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
      {/* Background Image Fallback */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
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

      {/* Video Background */}
      {!videoError && shouldLoadVideo && (
        <div className={`absolute inset-0 z-5 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => {
              setVideoLoaded(true);
            }}
            onTimeUpdate={handleVideoTimeUpdate}
            onError={() => setVideoError(true)}
            poster="/images/hero-bg.webp"
            preload="none"
          >
            <source src="/images/hero-bg.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Mystical gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#264653]/60 via-transparent to-[#A8DADC]/30" />
        </div>
      )}

      {/* Mystical floating elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#A8DADC]/40 transform rotate-45 animate-pulse sparkle" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#CBAACB]/50 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FFD9A0]/60 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-10 w-5 h-5 bg-[#A8DADC]/30 transform rotate-45 animate-pulse sparkle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FFD9A0]/40 rounded-full animate-pulse sparkle" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#CBAACB]/30 rounded-full animate-pulse sparkle" style={{ animationDelay: '5s' }} />
      </div>

      {/* Content */}
      <Container className="relative z-20 text-center">
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
            Dotek bohyně<br />
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
              Luxusní 10-denní transformační léčivý pobyt pro ženy v ráji na Bali
            </p>
            <p className="text-lg md:text-xl font-montserrat text-[#D4A95C] mt-2 font-medium">
              7.–17. května 2026
            </p>
          </motion.div>



          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32"
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
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
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