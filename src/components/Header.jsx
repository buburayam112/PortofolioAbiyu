import React, { useState } from 'react';
import { Menu, X, Layout, Monitor } from 'lucide-react';

const Header = ({ currentSlide, goToSlide, slides, viewMode, toggleViewMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (index) => {
    goToSlide(index);
    setMobileMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-5 z-20 relative border-b border-teal-500/10 backdrop-blur-md bg-[#0A1F3D]/40">
      {/* Brand Badge */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] px-4 py-1.5 rounded-full text-xs font-montserrat font-extrabold tracking-wider uppercase text-white shadow-lg shadow-[#2DD4BF]/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          Portofolio 2026
        </div>
      </div>

      {/* Desktop Navigation Navbar */}
      <nav className="hidden md:flex items-center gap-2 bg-[#0A1F3D]/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => handleNavClick(idx)}
            className={`px-4 py-1.5 rounded-full text-xs font-montserrat font-semibold transition-all duration-300 ${
              currentSlide === idx
                ? 'bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white shadow-md shadow-[#2DD4BF]/30 font-bold scale-105'
                : 'text-[#A7F3D0] hover:text-white hover:bg-white/5'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      {/* View Mode Toggle (Presentation vs Responsive) & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleViewMode}
          title={viewMode === 'presentation' ? 'Switch to Fluid Scroll View' : 'Switch to 16:9 Slide View'}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg border border-[#2DD4BF]/30 bg-[#0A1F3D]/80 text-[#2DD4BF] hover:bg-[#0F5E5E]/40 hover:border-[#2DD4BF] transition-all font-montserrat"
        >
          {viewMode === 'presentation' ? (
            <>
              <Layout className="w-3.5 h-3.5" />
              <span>Slide Mode (16:9)</span>
            </>
          ) : (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>Scroll Mode</span>
            </>
          )}
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#2DD4BF] p-2 rounded-lg bg-[#0A1F3D] border border-[#2DD4BF]/30"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A1F3D]/95 border-b border-[#2DD4BF]/30 p-4 md:hidden backdrop-blur-xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleNavClick(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-montserrat text-left font-semibold transition-all ${
                currentSlide === idx
                  ? 'bg-gradient-to-r from-[#0F5E5E] to-[#2DD4BF] text-white font-bold'
                  : 'text-[#A7F3D0] hover:bg-white/5'
              }`}
            >
              {slide.title}
            </button>
          ))}
          <button
            onClick={() => {
              toggleViewMode();
              setMobileMenuOpen(false);
            }}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2 text-xs rounded-xl border border-[#2DD4BF]/40 text-[#2DD4BF] bg-[#0F5E5E]/20"
          >
            {viewMode === 'presentation' ? 'Ganti ke Mode Scroll' : 'Ganti ke Mode Slide (16:9)'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
