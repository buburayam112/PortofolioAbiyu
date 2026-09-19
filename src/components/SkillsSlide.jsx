import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Wrench, CheckCircle2, Layers, Cpu, Code2, BarChart2 } from 'lucide-react';

// Brand SVG Logos
const PythonLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#3776AB" d="M63.3 15.5c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.7v3.3H30.4S15.6 38.9 15.6 63.8s12.9 24.3 12.9 24.3h7.7V77.3s-.4-12.9 12.9-12.9h22.2s12.4.2 12.4-12.4V27.9s1.8-12.4-22.7-12.4zm-12.3 7.6a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" />
    <path fill="#FFD43B" d="M64.7 112.5c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H64.2v-3.3h33.4s14.8 1.7 14.8-23.2S99.5 39.9 99.5 39.9h-7.7v10.8s.4 12.9-12.9 12.9H56.7s-12.4-.2-12.4 12.4v24.1s-1.8 12.4 22.7 12.4zm12.3-7.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" />
  </svg>
);

const ExcelLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#107C41" d="M74.8 16L16 26.3v75.4L74.8 112z" />
    <path fill="#1D6F42" d="M74.8 16h37.2v96H74.8z" />
    <path fill="#FFF" d="M37.2 46.2h10.8l7.2 14.5 7.4-14.5h10.3L61.7 63.6l11.7 18.2H62.6l-7.9-15.6-8.1 15.6H36l12.1-18.4z" />
  </svg>
);

const TableauLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <g transform="scale(0.8) translate(16, 16)">
      <path fill="#E8762D" d="M61 14h6v18h-6zM32 43h6v18h-6zM90 43h6v18h-6zM61 72h6v18h-6z" />
      <path fill="#E15759" d="M55 20h18v6H55zM26 49h18v6H26zM84 49h18v6H84zM55 78h18v6H55z" />
      <path fill="#76B7B2" d="M61 43h6v18h-6z" />
      <path fill="#59A14F" d="M55 49h18v6H55z" />
      <path fill="#EDC948" d="M46 64h6v12h-6zM76 64h6v12h-6z" />
      <path fill="#B07AA1" d="M43 67h12v6H43zM73 67h12v6H73z" />
    </g>
  </svg>
);

const SQLLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#336791" d="M64 16c-26.5 0-48 9-48 20v56c0 11 21.5 20 48 20s48-9 48-20V36c0-11-21.5-20-48-20zm0 10c22 0 38 6.7 38 10s-16 10-38 10-38-6.7-38-10 16-10 38-10zm38 66c0 3.3-16 10-38 10s-38-6.7-38-10V70c8.8 6 22.8 9 38 9s29.2-3 38-9v22zm0-24c0 3.3-16 10-38 10s-38-6.7-38-10V46c8.8 6 22.8 9 38 9s29.2-3 38-9v22z" />
  </svg>
);

// Tools Data & Detailed Usage in Projects
const toolSkills = [
  {
    name: 'Python',
    subtitle: 'Pandas, NumPy, Matplotlib, Scikit-Learn, PyTorch',
    useCase: 'Data Cleaning & Preprocessing, EDA, Pemodelan ML & Automasi Analisis',
    LogoComp: PythonLogo,
    imgPath: '/python.png',
  },
  {
    name: 'Microsoft Excel',
    subtitle: 'Pivot Table, Lookup',
    useCase: 'Pembersihan Data Cepat, Formulir Lanjutan, Pivot Table & Quick Reporting',
    LogoComp: ExcelLogo,
    imgPath: '/excel.png',
  },
  {
    name: 'SQL (MySQL / PostgreSQL)',
    subtitle: 'JOIN, Aggregation',
    useCase: 'Ekstraksi & Querying Database Relasional, Agregasi & Manipulasi Data',
    LogoComp: SQLLogo,
    imgPath: '/sql.png',
  },
  {
    name: 'Tableau & Power BI',
    subtitle: 'Data Modeling, Interactive Dashboard',
    useCase: 'Pengembangan Dashboard BI Interaktif & Penyampaian Visual Data Storytelling',
    LogoComp: TableauLogo,
    imgPath: '/tableau.png',
  },
];

// Technical Process Skills Reference
const technicalSkills = [
  'Data Cleaning & Data Preprocessing',
  'Data Analysis & Exploratory Data Analysis (EDA)',
  'Data Visualization & Dashboard Development',
  'SQL Query (JOIN, Aggregation)',
  'Data Transformation & Data Modeling',
  'Basic Statistical Analysis & Reporting',
];

const SkillsSlide = () => {
  return (
    <div className="min-h-full flex flex-col justify-center py-2 sm:py-0 w-full max-w-full my-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 w-full max-w-full items-stretch">

        {/* Left Section: Perangkat & Tools (8 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-[#0A1F3D]/60 border border-[#2DD4BF]/20 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-montserrat font-extrabold text-xs px-3.5 py-1 rounded-lg uppercase tracking-wider shadow-md shadow-[#2DD4BF]/20 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Tools & Perangkat Proyek
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {toolSkills.map((tool) => {
                const LogoSvg = tool.LogoComp;
                return (
                  <div
                    key={tool.name}
                    className="bg-[#0F5E5E]/20 border border-[#2DD4BF]/25 hover:border-[#2DD4BF]/60 p-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#2DD4BF]/10 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {/* Tool Logo Container */}
                        <div className="w-9 h-9 bg-[#050C17]/90 border border-[#2DD4BF]/40 rounded-lg flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative group-hover:border-[#2DD4BF] group-hover:scale-105 transition-all">
                          <img
                            src={tool.imgPath}
                            alt={tool.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                            className="w-5 h-5 object-contain absolute"
                          />
                          <LogoSvg />
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-tight">
                            {tool.name}
                          </h4>
                          <p className="text-[10px] text-[#2DD4BF]/90 font-medium">
                            {tool.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="bg-[#050C17]/50 rounded-lg p-2 border border-white/5">
                        <p className="text-[11px] text-[#A7F3D0]/90 leading-snug font-light">
                          {tool.useCase}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Section: Technical Skill Set & Capabilities (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 bg-[#0A1F3D]/60 border border-[#2DD4BF]/20 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-montserrat font-extrabold text-xs px-3.5 py-1 rounded-lg uppercase tracking-wider shadow-md shadow-[#2DD4BF]/20 flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5" /> Technical Skills & Workflow
              </span>
            </div>

            <p className="text-[11px] text-[#A7F3D0]/80 font-light mb-3">
              Kemampuan teknis dasar yang saya terapkan dalam setiap pengerjaan olah data:
            </p>

            <div className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#0F5E5E]/20 border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 p-2.5 rounded-lg flex items-center gap-2.5 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SkillsSlide;
