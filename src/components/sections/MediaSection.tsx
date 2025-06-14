import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ASSETS } from '../../config/assets';

const MediaSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const logos = logosRef.current;

    if (section && logos.length > 0) {
      // Initial state
      gsap.set(logos, { opacity: 0, y: 30 });

      // Animation on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(logos, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-600 mb-4 tracking-wider">
            VIVRE DANS LES MÉDIAS
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Forbes */}
          <div ref={addToRefs} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={ASSETS.media.forbes} 
              alt="Forbes" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Today Show */}
          <div ref={addToRefs} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={ASSETS.media.today} 
              alt="Today Show" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Elle */}
          <div ref={addToRefs} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={ASSETS.media.elle} 
              alt="Elle" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Chatelaine */}
          <div ref={addToRefs} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={ASSETS.media.chatelaine} 
              alt="Chatelaine" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* People */}
          <div ref={addToRefs} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={ASSETS.media.people} 
              alt="People" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection; 