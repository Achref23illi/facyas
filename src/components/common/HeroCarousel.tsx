import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import Button from './Button';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/carousel1.png',
      title: 'Révélez votre beauté naturelle',
      subtitle: 'Soins visage premium',
      description: 'Découvrez notre gamme de soins visage haut de gamme pour une peau radieuse et éclatante.',
      ctaText: 'Découvrir',
      contentPosition: 'left'
    },
    {
      id: 2,
      image: '/carousel2.png',
      title: 'Une peau parfaite',
      subtitle: 'Expertise dermatologique',
      description: 'Faites confiance à nos experts pour des soins personnalisés adaptés à votre type de peau.',
      ctaText: 'Consulter',
      contentPosition: 'right'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${
              slide.contentPosition === 'left' 
                ? 'bg-gradient-to-r from-black/60 via-black/30 to-transparent' 
                : 'bg-gradient-to-l from-black/60 via-black/30 to-transparent'
            }`} />
            
            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`max-w-xl ${
                  slide.contentPosition === 'right' ? 'ml-auto text-right' : ''
                }`}>
                  <p className="text-primary-200 text-sm sm:text-base font-medium mb-2 tracking-wide uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg sm:text-xl mb-8 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="btn-primary text-base px-8 py-4 hover:scale-105 transition-transform"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center text-white/80">
        <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">
          Faites défiler
        </span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default HeroCarousel; 