import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../config/assets';

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

const CategoryShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      // Initial state
      gsap.set(cards, { opacity: 0, y: 50 });

      // Animation on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const categories: CategoryItem[] = [
    {
      id: '1',
      title: 'ANTI-VIEILLISSEMENT',
      image: ASSETS.showcase.show1,
      category: 'anti-aging'
    },
    {
      id: '2',
      title: 'TRAITEMENT DE L\'ACNÉ',
      image: ASSETS.showcase.show2,
      category: 'acne'
    },
    {
      id: '3',
      title: 'ÉCLAIRCISSEMENT',
      image: ASSETS.showcase.show3,
      category: 'brightening'
    }
  ];

  const handleCategoryClick = () => {
    // Scroll to top immediately when category is clicked
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-600 mb-4 tracking-wide">
            MAGASINEZ PAR SOLUTIONS DE LA PEAU
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.category}`}
              className="group block"
              onClick={handleCategoryClick}
            >
              <div
                ref={addToRefs}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide mb-2 text-primary-100">
                      {category.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-primary-300 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase; 