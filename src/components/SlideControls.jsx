import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SlideControls = ({ currentSlide, nextSlide, prevSlide, totalSlides, goToSlide }) => {
  // Keyboard Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="absolute bottom-5 right-6 md:right-12 z-30 flex items-center gap-4">
      {/* Slide Indicator Dots */}
      <div className="hidden sm:flex items-center gap-2 bg-[#0A1F3D]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? 'w-6 bg-[#2DD4BF] shadow-sm shadow-[#2DD4BF]'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-9 h-9 rounded-full bg-[#0A1F3D]/90 border border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#050C17] flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-9 h-9 rounded-full bg-[#0A1F3D]/90 border border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#050C17] flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SlideControls;
