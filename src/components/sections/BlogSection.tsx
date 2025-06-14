import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

const BlogSection: React.FC = () => {
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

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Comment traiter l\'acné en été',
      excerpt: 'Découvrez les meilleures stratégies pour maintenir une peau claire pendant les mois chauds d\'été.',
      image: '/carousel1.png', // Using existing image
      category: 'Conseils',
      readTime: '5 min',
      date: '15 Nov 2024'
    },
    {
      id: '2',
      title: 'Vitamine C pour peau sensible : astuces pour un éclat tout en douceur',
      excerpt: 'Apprenez comment intégrer la vitamine C dans votre routine sans irriter votre peau sensible.',
      image: '/blog2.png', // Using existing image
      category: 'Ingrédients',
      readTime: '7 min',
      date: '12 Nov 2024'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-600 mb-4 tracking-wide">
            ÉDUCATION SUR LES SOINS DE LA PEAU, CONSEILS ET ASTUCES
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group cursor-pointer block"
            >
              <div
                ref={addToRefs}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-neutral-500 space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                      Lire l'article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600 px-8 py-3"
            >
              VOIR TOUTES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 