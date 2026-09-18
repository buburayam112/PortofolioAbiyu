import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Award, MapPin, Layers, Target, ShieldCheck, Sparkles } from 'lucide-react';

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

const values = [
  {
    num: '01',
    icon: Layers,
    title: 'Jembatan Bisnis & Teknis',
    desc: 'Memahami kebutuhan bisnis sekaligus mengeksekusinya secara teknis.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Fokus Actionable Insight',
    desc: 'Menyajikan rekomendasi nyata yang dapat dieksekusi, bukan sekadar grafik.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Integritas & Kualitas Data',
    desc: 'Memastikan kebersihan dan validitas data sebelum analisis dilakukan.',
  },
  {
    num: '04',
    icon: Sparkles,
    title: 'Pembelajar Mandiri & Cepat',
    desc: 'Antusias menguasai teknologi dan tools data terbaru secara mandiri.',
  },
];

const AboutSlide = () => {
  return (
    <div className="min-h-full flex flex-col justify-center relative py-2 sm:py-0 w-full max-w-full my-auto">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 text-4xl sm:text-7xl md:text-[110px] font-black font-montserrat text-white/[0.02] tracking-wider sm:tracking-widest select-none pointer-events-none uppercase max-w-full overflow-hidden truncate">
        TENTANG SAYA
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 w-full max-w-full">
        {/* Left Column: Profile Card Frame & Bio Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4 w-full max-w-full"
        >
          <div className="bg-gradient-to-b from-[#0F5E5E]/40 via-[#0A1F3D]/80 to-[#050C17] border-2 border-[#2DD4BF]/50 rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-xl relative overflow-hidden group w-full max-w-full">
            {/* Avatar Photo / Circle */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#0F5E5E] to-[#2DD4BF] flex items-center justify-center text-white font-extrabold text-3xl shadow-xl shadow-[#2DD4BF]/30 mb-3 border-2 border-[#2DD4BF] overflow-hidden group">
              <img
                src="profile.jpg"
                alt="Abiyyu Farras"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />

            </div>

            <h3 className="text-xl font-bold font-montserrat text-white">Abiyyu Farras</h3>
            <p className="text-xs text-[#2DD4BF] font-semibold mt-0.5 flex items-center gap-1">
              <GraduationCap className="w-4 h-4 shrink-0" /> Sistem Informasi UM Pontianak
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-gray-300">
              <span className="bg-[#0F5E5E]/40 px-2.5 py-1 rounded-full border border-[#2DD4BF]/30 flex items-center gap-1">
                <Award className="w-3 h-3 text-[#2DD4BF]" /> IPK 3.33 / 4.00
              </span>
              <span className="bg-[#0F5E5E]/40 px-2.5 py-1 rounded-full border border-[#2DD4BF]/30 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#2DD4BF]" /> Pontianak
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-full">
              <a
                href="mailto:abiyufaras56@gmail.com"
                className="bg-[#0F5E5E]/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#2DD4BF]" /> Email
              </a>
              <a
                href="https://linkedin.com/in/abiyyu-farras-5a3a673bb"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0F5E5E]/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-all flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#2DD4BF]" /> LinkedIn
              </a>
              <a
                href="https://github.com/buburayam112"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0F5E5E]/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#2DD4BF]/30 hover:border-[#2DD4BF] transition-all flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#2DD4BF]" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: What Makes Me Different (4 Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 space-y-3"
        >
          <div className="mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-white">
              Apa Yang <span className="gradient-text">Membuat Saya Berbeda</span>
            </h2>
            <p className="text-xs text-[#A7F3D0] font-light mt-0.5">
              Analisis data — mengubah kumpulan data menjadi insight bisnis yang dapat dijadikan solusi.
            </p>
          </div>

          {/* 4 Value Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-[#0A1F3D]/80 border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/60 p-3.5 rounded-xl backdrop-blur-md transition-all duration-300 group shadow-md flex gap-3 items-start"
                >
                  <div className="bg-[#2DD4BF]/15 text-[#2DD4BF] p-2 rounded-lg font-bold font-montserrat flex items-center justify-center shrink-0 group-hover:bg-[#2DD4BF] group-hover:text-[#050C17] transition-all">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#2DD4BF] transition-colors mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#A7F3D0]/90 leading-tight font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSlide;
