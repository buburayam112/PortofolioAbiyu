import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart2, PieChart, TrendingUp, Cloud, X, ChevronRight, Sparkles } from 'lucide-react';

const HomeSlide = ({ nextSlide }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center relative py-4 sm:py-6 md:py-0 overflow-hidden w-full max-w-full">
      {/* Floating Graphic Doodles & Decorative Icons */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-6 sm:left-12 text-[#2DD4BF]/40 p-2 border border-[#2DD4BF]/20 rounded-xl bg-[#0A1F3D]/40 backdrop-blur-sm pointer-events-none hidden sm:flex items-center gap-1"
      >
        <BarChart2 className="w-6 h-6 text-[#2DD4BF]" />
        <span className="text-[10px] font-mono text-xs">analytics</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-8 sm:right-16 text-[#2DD4BF]/40 p-2 border border-[#2DD4BF]/20 rounded-xl bg-[#0A1F3D]/40 backdrop-blur-sm pointer-events-none hidden sm:flex items-center gap-1"
      >
        <PieChart className="w-6 h-6 text-[#2DD4BF]" />
      </motion.div>

      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 left-10 text-white/10 pointer-events-none hidden md:block"
      >
        <Cloud className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-14 right-12 text-[#2DD4BF]/30 pointer-events-none hidden md:block"
      >
        <TrendingUp className="w-12 h-12" />
      </motion.div>

      {/* Main Intro Cover Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-4xl w-full flex flex-col items-center px-2 sm:px-4"
      >
        {/* Top Header Text */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 max-w-full">
          <div className="h-[1px] w-4 sm:w-16 bg-gradient-to-r from-transparent to-[#2DD4BF]/60"></div>
          <h2 className="text-[10px] xs:text-xs sm:text-sm font-montserrat font-extrabold tracking-[0.2em] sm:tracking-[0.35em] text-[#A7F3D0] uppercase">
            W E L C O M E &nbsp; T O &nbsp; M Y
          </h2>
          <div className="h-[1px] w-4 sm:w-16 bg-gradient-to-l from-transparent to-[#2DD4BF]/60"></div>
        </div>

        {/* Giant Hero Title: PORTFOLIO */}
        <div className="relative my-2 sm:my-4 max-w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-montserrat tracking-tighter sm:tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E2E8F0] to-[#2DD4BF] drop-shadow-[0_10px_25px_rgba(45,212,191,0.25)] flex items-center justify-center gap-0.5 sm:gap-2">
            PORTF
            <span className="relative inline-flex items-center justify-center">
              O
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center text-[#2DD4BF]"
              >
                <Settings className="w-4 h-4 xs:w-5 xs:h-5 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-[2.5]" />
              </motion.span>
            </span>
            LIO
          </h1>
        </div>

        {/* Role Subtitle Banner */}
        <div className="my-2 sm:my-4 max-w-full">
          <div className="inline-block bg-[#0A1F3D]/90 border-2 border-[#2DD4BF]/60 px-3 sm:px-8 py-1.5 sm:py-2.5 rounded-2xl shadow-xl shadow-[#2DD4BF]/10 backdrop-blur-md max-w-full">
            <p className="text-[10px] xs:text-xs sm:text-base font-montserrat font-extrabold tracking-wider sm:tracking-widest text-[#2DD4BF] uppercase flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              <span>DATA ANALYST</span>
              <span className="text-white/40">•</span>
              <span>SUPPLY CHAIN ANALYST</span>
            </p>
          </div>
        </div>

        {/* Author Tag Box (BY ABIYYU FARRAS) */}
        <div className="mt-3 sm:mt-6 flex items-center shadow-2xl rounded-xl overflow-hidden border-2 border-white/20 max-w-full">
          <div className="bg-[#F59E0B] text-[#050C17] font-montserrat font-black text-[10px] sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2.5 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#050C17]" /> BY
          </div>
          <div className="bg-white text-[#050C17] font-montserrat font-extrabold text-[10px] sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2.5 uppercase tracking-wider sm:tracking-widest">
            ABIYYU FARRAS
          </div>
        </div>

        {/* Interactive CTA Button */}
        {nextSlide && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="mt-6 sm:mt-10 bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white text-xs sm:text-sm font-bold font-montserrat px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-xl shadow-[#2DD4BF]/30 hover:shadow-[#2DD4BF]/50 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>JELAJAHI PORTOFOLIO</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default HomeSlide;
