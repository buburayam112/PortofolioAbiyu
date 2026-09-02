import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Puzzle, Cpu, RefreshCw } from 'lucide-react';

// Brand SVG Logos
const PythonLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#3776AB" d="M63.3 15.5c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.7v3.3H30.4S15.6 38.9 15.6 63.8s12.9 24.3 12.9 24.3h7.7V77.3s-.4-12.9 12.9-12.9h22.2s12.4.2 12.4-12.4V27.9s1.8-12.4-22.7-12.4zm-12.3 7.6a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z"/>
    <path fill="#FFD43B" d="M64.7 112.5c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H64.2v-3.3h33.4s14.8 1.7 14.8-23.2S99.5 39.9 99.5 39.9h-7.7v10.8s.4 12.9-12.9 12.9H56.7s-12.4-.2-12.4 12.4v24.1s-1.8 12.4 22.7 12.4zm12.3-7.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z"/>
  </svg>
);

const ExcelLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#107C41" d="M74.8 16L16 26.3v75.4L74.8 112z"/>
    <path fill="#1D6F42" d="M74.8 16h37.2v96H74.8z"/>
    <path fill="#FFF" d="M37.2 46.2h10.8l7.2 14.5 7.4-14.5h10.3L61.7 63.6l11.7 18.2H62.6l-7.9-15.6-8.1 15.6H36l12.1-18.4z"/>
  </svg>
);

const TableauLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <g transform="scale(0.8) translate(16, 16)">
      <path fill="#E8762D" d="M61 14h6v18h-6zM32 43h6v18h-6zM90 43h6v18h-6zM61 72h6v18h-6z"/>
      <path fill="#E15759" d="M55 20h18v6H55zM26 49h18v6H26zM84 49h18v6H84zM55 78h18v6H55z"/>
      <path fill="#76B7B2" d="M61 43h6v18h-6z"/>
      <path fill="#59A14F" d="M55 49h18v6H55z"/>
      <path fill="#EDC948" d="M46 64h6v12h-6zM76 64h6v12h-6z"/>
      <path fill="#B07AA1" d="M43 67h12v6H43zM73 67h12v6H73z"/>
    </g>
  </svg>
);

const SQLLogo = () => (
  <svg viewBox="0 0 128 128" className="w-6 h-6">
    <path fill="#336791" d="M64 16c-26.5 0-48 9-48 20v56c0 11 21.5 20 48 20s48-9 48-20V36c0-11-21.5-20-48-20zm0 10c22 0 38 6.7 38 10s-16 10-38 10-38-6.7-38-10 16-10 38-10zm38 66c0 3.3-16 10-38 10s-38-6.7-38-10V70c8.8 6 22.8 9 38 9s29.2-3 38-9v22zm0-24c0 3.3-16 10-38 10s-38-6.7-38-10V46c8.8 6 22.8 9 38 9s29.2-3 38-9v22z"/>
  </svg>
);

const softSkills = [
  {
    icon: MessageSquare,
    title: 'Communicative',
    desc: 'Conveying data findings clearly to technical & non-technical teams.',
  },
  {
    icon: Puzzle,
    title: 'Problem Solving',
    desc: 'Tackling complex operational bottlenecks with structured data.',
  },
  {
    icon: Cpu,
    title: 'Critical Thinking',
    desc: 'Evaluating data validity and extracting underlying business patterns.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    desc: 'Quickly learning new analytics tools, workflows, and domain logistics.',
  },
];

const toolSkills = [
  {
    code: 'PY',
    name: 'Python',
    desc: 'Pandas, Scikit-Learn, Streamlit',
    LogoComp: PythonLogo,
    imgPath: '/python.png',
  },
  {
    code: 'XL',
    name: 'Excel',
    desc: 'Advanced Formulas, Pivot Table',
    LogoComp: ExcelLogo,
    imgPath: '/excel.png',
  },
  {
    code: 'TB',
    name: 'Tableau',
    desc: 'Interactive Dashboards',
    LogoComp: TableauLogo,
    imgPath: '/tableau.png',
  },
  {
    code: 'SQL',
    name: 'SQL',
    desc: 'Data Extraction & Querying',
    LogoComp: SQLLogo,
    imgPath: '/sql.png',
  },
];

const SkillsSlide = () => {
  return (
    <div className="h-full flex flex-col justify-center py-4 md:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A1F3D]/60 border border-[#2DD4BF]/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="inline-block bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-montserrat font-extrabold text-xs px-4 py-1.5 rounded-lg uppercase tracking-wider mb-4 shadow-md shadow-[#2DD4BF]/20">
              Soft Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {softSkills.map((skill) => {
                const IconComp = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="bg-[#0F5E5E]/20 border border-[#2DD4BF]/20 hover:border-[#2DD4BF]/50 p-3.5 rounded-xl transition-all duration-300 group"
                  >
                    <h4 className="text-xs font-semibold text-[#2DD4BF] flex items-center gap-2 mb-1 group-hover:translate-x-1 transition-transform">
                      <IconComp className="w-4 h-4 text-[#2DD4BF]" />
                      {skill.title}
                    </h4>
                    <p className="text-[11px] text-[#A7F3D0]/90 leading-normal font-light">
                      {skill.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Technical Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0A1F3D]/60 border border-[#2DD4BF]/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="inline-block bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-montserrat font-extrabold text-xs px-4 py-1.5 rounded-lg uppercase tracking-wider mb-4 shadow-md shadow-[#2DD4BF]/20">
              Skill Tools
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              {toolSkills.map((tool) => {
                const LogoSvg = tool.LogoComp;
                return (
                  <div
                    key={tool.name}
                    className="bg-[#0F5E5E]/30 border border-[#2DD4BF]/30 hover:border-[#2DD4BF] p-4 rounded-xl flex items-center gap-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#2DD4BF]/10 group"
                  >
                    {/* Tool Logo Container with SVG + Image Fallback */}
                    <div className="w-12 h-12 bg-[#050C17]/80 border border-[#2DD4BF]/40 rounded-xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative group-hover:border-[#2DD4BF] group-hover:scale-105 transition-all">
                      <img
                        src={tool.imgPath}
                        alt={tool.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="w-7 h-7 object-contain absolute"
                      />
                      <LogoSvg />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#2DD4BF] transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-[11px] text-[#A7F3D0]/90 font-light mt-0.5">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSlide;
