import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const ContactSlide = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('abiyufaras56@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center text-center py-4 md:py-0 w-full max-w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-2 sm:px-0"
      >
        <div className="text-xs font-montserrat font-extrabold tracking-widest text-[#A7F3D0] uppercase mb-3">
          ✦ ABIYYU FARRAS ✦
        </div>

        <div className="bg-[#0A1F3D]/70 border border-[#2DD4BF]/30 p-5 sm:p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl space-y-4 sm:space-y-6 relative overflow-hidden w-full max-w-full">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-montserrat gradient-text capitalize tracking-tight">

          </h2>

          <p className="text-xs sm:text-base text-gray-300 font-light leading-relaxed max-w-lg mx-auto">
            Open to <span className="text-[#2DD4BF] font-semibold">Data Analyst</span> opportunities — let's turn data into meaningful insights together.
          </p>

          {/* Interactive Contact Link Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 pt-2 max-w-full">
            <button
              onClick={copyEmail}
              className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white text-xs font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#2DD4BF]/20 hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer max-w-full"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">Email Tersalin!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="max-w-[180px] xs:max-w-[240px] sm:max-w-none truncate">abiyufaras56@gmail.com</span>
                  <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 shrink-0" />
                </>
              )}
            </button>

            <a
              href="https://linkedin.com/in/abiyyu-farras-5a3a673bb"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white text-xs font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#2DD4BF]/20 hover:scale-105 transition-all flex items-center gap-2 max-w-full"
            >
              <LinkedinIcon className="w-4 h-4 shrink-0" />
              <span className="max-w-[180px] xs:max-w-[240px] sm:max-w-none truncate">linkedin.com/in/abiyyu-farras-5a3a673bb</span>
            </a>

            <a
              href="https://github.com/buburayam112"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white text-xs font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#2DD4BF]/20 hover:scale-105 transition-all flex items-center gap-2 max-w-full"
            >
              <GithubIcon className="w-4 h-4 shrink-0" />
              <span className="max-w-[180px] xs:max-w-[240px] sm:max-w-none truncate">github.com/buburayam112</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSlide;
