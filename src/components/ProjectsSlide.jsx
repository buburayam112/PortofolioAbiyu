import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Sparkles, Activity, HeartPulse, Dna, ZoomIn } from 'lucide-react';

const projects = [
  {
    id: 'wine',
    title: 'Wine Quality Prediction System',
    desc: 'Built a machine learning model to predict wine quality based on physicochemical properties, deployed via Streamlit for interactive real-time predictions.',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
    image: '/wine-preview.png',
    previewText: 'Streamlit App UI Preview',
    icon: Activity,
    details:
      'Proyek ini mengembangkan model Klasifikasi Machine Learning dengan Python (Scikit-Learn) untuk memprediksi kualitas anggur berdasarkan parameter fisikokimia seperti keasaman, gula, dan tingkat alkohol. Aplikasi disajikan secara interaktif menggunakan framework Streamlit dengan grafik pengamatan Feature Importance.',
  },
  {
    id: 'heart',
    title: 'Heart Disease Risk Classification',
    desc: 'Analyzed key contributing factors to heart disease using Tableau dashboards to support early risk identification and patient triage.',
    tags: ['Tableau', 'Healthcare', 'Analytics'],
    image: '/tableau-preview.png',
    previewText: 'Tableau Dashboard Preview',
    icon: HeartPulse,
    details:
      'Analisis mendalam mengenai faktor-faktor utama penyebab penyakit jantung menggunakan visualisasi interaktif Tableau. Proyek ini memetakan korelasi antara tekanan darah, kadar kolesterol, dan usia untuk mendukung deteksi dini pada pasien.',
  },
  {
    id: 'breast',
    title: 'Breast Cancer Risk Factor Analysis',
    desc: 'Applied classification models on Breast Cancer data to identify significant factors associated with higher cancer risk.',
    tags: ['Python', 'EDA', 'Classification'],
    image: '/cancer-preview.png',
    previewText: 'Feature Matrix Plot Preview',
    icon: Dna,
    details:
      'Melakukan Exploratory Data Analysis (EDA) dan pemodelan klasifikasi pada dataset Breast Cancer Wisconsin. Proyek ini mengekstrak fitur paling berpengaruh dalam membedakan tumor jinak (benign) dan ganas (malignant).',
  },
];

const ProjectsSlide = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="h-full flex flex-col justify-center py-4 md:py-0 relative">
      {/* Header Info */}
      <div className="mb-3 sm:mb-4">
        <div className="inline-block bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-montserrat font-extrabold text-xs px-4 py-1.5 rounded-lg uppercase tracking-wider mb-2 shadow-md shadow-[#2DD4BF]/20">
          Personal Projects
        </div>
        <p className="text-xs sm:text-sm text-[#A7F3D0]/90 font-light max-w-2xl">
          A collection of independent projects showcasing my ability to apply data analytics, machine learning, and visualization tools to solve real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {projects.map((project) => {
          const IconComp = project.icon;
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#0A1F3D]/80 border border-[#2DD4BF]/25 hover:border-[#2DD4BF] p-4 sm:p-5 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[#2DD4BF]/15 group"
            >
              <div>
                {/* Project Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2DD4BF]/15 text-[#2DD4BF] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#2DD4BF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-[#2DD4BF] transition-colors flex items-center justify-between mb-1.5">
                  <span>{project.title}</span>
                  <IconComp className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2 font-light leading-relaxed mb-3">
                  {project.desc}
                </p>
              </div>

              {/* Mockup Preview Card with Real Image + Hover Zoom */}
              <div className="h-28 sm:h-32 bg-[#050C17]/90 rounded-xl border border-dashed border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] text-xs font-medium group-hover:border-[#2DD4BF]/70 transition-all overflow-hidden relative group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                />
                
                {/* Fallback Text Badge if image fails */}
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-[#050C17]/80 text-[#2DD4BF] text-[11px] font-medium p-2 text-center pointer-events-none -z-10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>[{project.previewText}]</span>
                </div>

                {/* Click to Zoom Overlay */}
                <div className="absolute inset-0 bg-[#0A1F3D]/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold">
                  <ZoomIn className="w-4 h-4 text-[#2DD4BF]" />
                  <span>Klik untuk Zoom</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Interactive Detail Modal with High-Res Image Preview */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A1F3D] border border-[#2DD4BF]/50 p-6 sm:p-8 rounded-2xl max-w-2xl w-full relative shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 p-1.5 rounded-full z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-2 flex-wrap">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#0F5E5E]/50 text-[#2DD4BF] text-xs px-2.5 py-1 rounded-full border border-[#2DD4BF]/30 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold font-montserrat text-white">
                {selectedProject.title}
              </h3>

              {/* Full Image Preview inside Modal */}
              <div className="rounded-xl border border-[#2DD4BF]/30 overflow-hidden bg-[#050C17]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[350px] object-contain mx-auto"
                />
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                {selectedProject.details}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#2DD4BF]/30 transition-all"
                >
                  Tutup Detail
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsSlide;
