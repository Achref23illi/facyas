import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ASSETS } from '../config/assets';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">À Propos de Facyas</h1>
          <p className="text-xl md:text-2xl font-light">Votre beauté, notre passion</p>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Brand Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Notre Histoire</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={ASSETS.products.perfectly_face_cream} 
                  alt="Facyas Products" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Facyas est née d'une passion profonde pour la beauté naturelle et l'innovation en matière de soins de la peau. 
                  Depuis notre création, nous nous engageons à offrir des produits de qualité supérieure qui révèlent la beauté 
                  naturelle de chaque personne.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Notre gamme de produits PERFECTLY combine des ingrédients naturels soigneusement sélectionnés avec les 
                  dernières avancées scientifiques pour créer des formules efficaces et douces pour tous les types de peau.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Qualité</h3>
                <p className="text-neutral-600">
                  Nous sélectionnons rigoureusement chaque ingrédient pour garantir l'efficacité et la sécurité de nos produits.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Innovation</h3>
                <p className="text-neutral-600">
                  Nous intégrons les dernières découvertes scientifiques pour créer des formules révolutionnaires.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Naturel</h3>
                <p className="text-neutral-600">
                  Nous privilégions les ingrédients naturels et respectueux de l'environnement dans nos formulations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">Notre Engagement</h2>
            <div className="space-y-6 text-center">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Chez Facyas, nous croyons que chaque personne mérite de se sentir belle et confiante dans sa peau. 
                C'est pourquoi nous nous engageons à :
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">Offrir des produits de qualité supérieure à des prix accessibles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">Respecter l'environnement dans nos processus de production</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">Fournir un service client exceptionnel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">Innover constamment pour répondre à vos besoins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Contactez-nous</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Vous avez des questions sur nos produits ou souhaitez en savoir plus sur Facyas ? 
              N'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-neutral-700">contact@facyas.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-neutral-700">1-800-FACYAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 