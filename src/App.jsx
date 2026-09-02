import React, { useState } from 'react';
import Header from './components/Header';
import HomeSlide from './components/HomeSlide';
import AboutSlide from './components/AboutSlide';
import SkillsSlide from './components/SkillsSlide';
import ProjectsSlide from './components/ProjectsSlide';
import ContactSlide from './components/ContactSlide';
import SlideControls from './components/SlideControls';

const slides = [
  { id: 'home', title: 'Home', component: HomeSlide },
  { id: 'about', title: 'About Me', component: AboutSlide },
  { id: 'skills', title: 'Skills', component: SkillsSlide },
  { id: 'projects', title: 'Projects', component: ProjectsSlide },
  { id: 'contact', title: 'Contact', component: ContactSlide },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('presentation'); // 'presentation' or 'scroll'

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'presentation' ? 'scroll' : 'presentation'));
  };

  const ActiveComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-[#050C17] text-white flex flex-col justify-center items-center p-0 sm:p-4 md:p-6 relative font-poppins selection:bg-[#2DD4BF] selection:text-[#050C17]">
      {/* View Mode 1: Presentation 16:9 Frame Mode */}
      {viewMode === 'presentation' ? (
        <div className="w-full max-w-[1280px] h-screen sm:h-[720px] bg-gradient-to-br from-[#0A1F3D] via-[#0F5E5E]/90 to-[#05192D] sm:rounded-2xl shadow-2xl shadow-black/80 border border-[#2DD4BF]/20 overflow-hidden flex flex-col relative transition-all duration-500">
          {/* Background Ambient Glow Decorators */}
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-radial from-[#2DD4BF]/15 to-transparent rounded-full pointer-events-none blur-xl"></div>
          <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-radial from-[#0F5E5E]/25 to-transparent rounded-full pointer-events-none blur-xl"></div>

          {/* Header Bar */}
          <Header
            currentSlide={currentSlide}
            goToSlide={goToSlide}
            slides={slides}
            viewMode={viewMode}
            toggleViewMode={toggleViewMode}
          />

          {/* Main Slide Viewport */}
          <main className="flex-1 relative px-6 md:px-12 pb-16 pt-2 overflow-y-auto sm:overflow-hidden z-10">
            <ActiveComponent nextSlide={nextSlide} goToSlide={goToSlide} />
          </main>

          {/* Floating Slide Controls */}
          <SlideControls
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            totalSlides={slides.length}
            goToSlide={goToSlide}
          />
        </div>
      ) : (
        /* View Mode 2: Fluid Scroll Mode */
        <div className="w-full max-w-5xl bg-gradient-to-br from-[#0A1F3D] via-[#0F5E5E]/90 to-[#05192D] rounded-2xl border border-[#2DD4BF]/20 overflow-hidden flex flex-col relative my-4">
          <Header
            currentSlide={currentSlide}
            goToSlide={goToSlide}
            slides={slides}
            viewMode={viewMode}
            toggleViewMode={toggleViewMode}
          />

          <div className="p-6 sm:p-10 space-y-20">
            {slides.map((slideItem) => {
              const Comp = slideItem.component;
              return (
                <section key={slideItem.id} id={slideItem.id} className="scroll-mt-24 border-b border-white/5 pb-12 last:border-b-0">
                  <Comp nextSlide={nextSlide} goToSlide={goToSlide} />
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
