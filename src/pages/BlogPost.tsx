import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../utils/constants';
import { ASSETS } from '../config/assets';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = `Article - ${SITE_CONFIG.name}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      gsap.fromTo(content, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  // Sample blog post data - in a real app, this would come from an API
  const blogPost: BlogPost = {
    id: '1',
    title: 'Comment traiter l\'acné en été : Guide complet pour une peau claire',
    excerpt: 'Découvrez les meilleures stratégies pour maintenir une peau claire pendant les mois chauds d\'été. Des conseils d\'experts pour adapter votre routine et éviter les erreurs courantes.',
    content: `
      <p class="lead">L'été peut être une période difficile pour les personnes souffrant d'acné. La chaleur, l'humidité et l'exposition au soleil peuvent aggraver les problèmes de peau, mais avec les bonnes stratégies, vous pouvez maintenir une peau claire et saine.</p>

      <h2>Comprendre l'acné estivale</h2>
      
      <p>Pendant les mois d'été, plusieurs facteurs contribuent à l'aggravation de l'acné :</p>
      
      <ul>
        <li><strong>Augmentation de la production de sébum</strong> : La chaleur stimule les glandes sébacées, entraînant une peau plus grasse</li>
        <li><strong>Transpiration excessive</strong> : Peut obstruer les pores et créer un environnement propice aux bactéries</li>
        <li><strong>Exposition au soleil</strong> : Peut initialement améliorer l'acné mais cause une aggravation à long terme</li>
        <li><strong>Changements hormonaux</strong> : Liés aux variations de température et aux habitudes estivales</li>
      </ul>

      <blockquote>
        "La clé pour traiter l'acné en été est de maintenir un équilibre délicat entre nettoyage efficace et protection de la barrière cutanée." - Dr. Marie Dubois, Dermatologue
      </blockquote>

      <h2>Les étapes essentielles d'une routine estivale</h2>

      <h3>1. Nettoyage en douceur</h3>
      
      <p>Utilisez un nettoyant doux matin et soir. Évitez les produits trop agressifs qui peuvent irriter la peau et stimuler paradoxalement la production de sébum. Optez pour des formules sans sulfates qui respectent le pH naturel de votre peau.</p>

      <div class="product-highlight">
        <p><strong>Produit recommandé :</strong> Notre savon PERFECTLY SOAP est spécialement formulé pour les peaux grasses en été, avec des ingrédients apaisants comme l'aloe vera et l'acide salicylique.</p>
      </div>

      <h3>2. Hydratation légère mais efficace</h3>
      
      <p>Même les peaux grasses ont besoin d'hydratation. Optez pour des formules légères, non-comédogènes, de préférence sous forme de gel ou de lotion fluide. L'acide hyaluronique est un excellent choix car il hydrate sans laisser de film gras.</p>

      <h3>3. Protection solaire adaptée</h3>
      
      <p>Un écran solaire adapté aux peaux acnéiques est essentiel. Recherchez des formules "non-comédogènes" et "oil-free". Les filtres minéraux (oxyde de zinc, dioxyde de titane) sont souvent mieux tolérés par les peaux sensibles.</p>

      <h2>Ingrédients à privilégier en été</h2>
      
      <div class="ingredients-grid">
        <div class="ingredient-card">
          <h4>Acide salicylique</h4>
          <p>Exfolie en douceur et désobstrue les pores en profondeur</p>
        </div>
        <div class="ingredient-card">
          <h4>Niacinamide</h4>
          <p>Régule la production de sébum et réduit l'inflammation</p>
        </div>
        <div class="ingredient-card">
          <h4>Zinc</h4>
          <p>Propriétés anti-inflammatoires et antibactériennes</p>
        </div>
        <div class="ingredient-card">
          <h4>Acide hyaluronique</h4>
          <p>Hydratation intense sans effet gras</p>
        </div>
      </div>

      <h2>Erreurs à éviter absolument</h2>
      
      <ol>
        <li><strong>Sur-nettoyage</strong> : Nettoyer plus de deux fois par jour peut irriter et aggraver l'acné</li>
        <li><strong>Oublier l'hydratation</strong> : Une peau déshydratée produit plus de sébum pour compenser</li>
        <li><strong>Exposition excessive au soleil</strong> : L'effet "rebond" peut considérablement aggraver l'acné</li>
        <li><strong>Toucher constamment le visage</strong> : Transfère bactéries et huiles des mains vers le visage</li>
        <li><strong>Changer trop souvent de produits</strong> : La peau a besoin de temps pour s'adapter</li>
      </ol>

      <h2>Conseils pratiques pour l'été</h2>
      
      <ul>
        <li>Changez vos taies d'oreiller au moins deux fois par semaine</li>
        <li>Évitez les produits capillaires gras près du visage</li>
        <li>Buvez au minimum 2 litres d'eau par jour pour maintenir l'hydratation</li>
        <li>Adoptez une alimentation riche en antioxydants (fruits rouges, légumes verts)</li>
        <li>Évitez de toucher votre visage avec des mains non lavées</li>
        <li>Utilisez des serviettes propres pour vous sécher le visage</li>
      </ul>

      <h2>Quand consulter un professionnel</h2>
      
      <p>Si votre acné s'aggrave malgré une routine adaptée, ou si vous présentez des signes d'acné kystique, n'hésitez pas à consulter un dermatologue. Un traitement personnalisé peut être nécessaire, incluant parfois des traitements topiques sur ordonnance ou des thérapies plus avancées.</p>

      <div class="conclusion">
        <p>L'été ne doit pas être synonyme d'aggravation de l'acné. Avec une routine adaptée, les bons produits et une approche patiente, vous pouvez profiter pleinement de la saison tout en gardant une peau claire et saine. N'oubliez pas que chaque peau est unique - ce qui fonctionne pour une personne peut ne pas convenir à une autre.</p>
      </div>
    `,
    image: '/carousel1.png',
    category: 'Conseils',
    readTime: '8 min',
    date: '15 Nov 2024',
    author: 'Dr. Marie Dubois',
    tags: ['acné', 'été', 'soins', 'routine', 'dermatologie']
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-white/95 backdrop-blur-sm text-neutral-800 hover:bg-white px-4 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">Retour au blog</span>
          </Link>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-primary-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-lg">
            {blogPost.category}
          </span>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {blogPost.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article ref={contentRef} className="max-w-4xl mx-auto px-6 py-16">
        {/* Article Meta */}
        <header className="mb-12 pb-8 border-b border-neutral-200">
          <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-6">
            <div className="flex items-center bg-neutral-50 px-4 py-2 rounded-full">
              <User className="w-5 h-5 mr-2 text-primary-600" />
              <span className="font-semibold text-neutral-800">{blogPost.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-600" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-600" />
              <span>{blogPost.readTime} de lecture</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-neutral-600 hover:text-red-500 transition-colors bg-neutral-50 hover:bg-red-50 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span className="font-medium">J'aime</span>
            </button>
            <button className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors bg-neutral-50 hover:bg-primary-50 px-4 py-2 rounded-full">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Partager</span>
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg prose-neutral max-w-none">
          <style jsx>{`
            .prose .lead {
              font-size: 1.25rem;
              line-height: 1.7;
              color: #4b5563;
              font-weight: 400;
              margin-bottom: 2rem;
              padding: 1.5rem;
              background: #f9fafb;
              border-left: 4px solid #80522A;
              border-radius: 0 8px 8px 0;
            }
            
            .prose h2 {
              font-size: 2rem;
              font-weight: 700;
              color: #1f2937;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              font-family: serif;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 0.5rem;
            }
            
            .prose h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #374151;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
            }
            
            .prose h4 {
              font-size: 1.25rem;
              font-weight: 600;
              color: #80522A;
              margin-bottom: 0.5rem;
            }
            
            .prose p {
              line-height: 1.8;
              margin-bottom: 1.5rem;
              color: #374151;
            }
            
            .prose ul, .prose ol {
              margin: 1.5rem 0;
              padding-left: 1.5rem;
            }
            
            .prose li {
              margin-bottom: 0.75rem;
              line-height: 1.7;
            }
            
            .prose blockquote {
              border-left: 4px solid #80522A;
              background: #fef7ed;
              padding: 1.5rem;
              margin: 2rem 0;
              font-style: italic;
              font-size: 1.1rem;
              border-radius: 0 8px 8px 0;
            }
            
            .prose .product-highlight {
              background: linear-gradient(135deg, #80522A10, #80522A05);
              border: 1px solid #80522A20;
              padding: 1.5rem;
              border-radius: 12px;
              margin: 2rem 0;
            }
            
            .prose .ingredients-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 1rem;
              margin: 2rem 0;
            }
            
            .prose .ingredient-card {
              background: white;
              border: 1px solid #e5e7eb;
              padding: 1.5rem;
              border-radius: 12px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
            }
            
            .prose .ingredient-card:hover {
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              transform: translateY(-2px);
            }
            
            .prose .conclusion {
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              padding: 2rem;
              border-radius: 12px;
              margin: 3rem 0;
              font-size: 1.1rem;
              line-height: 1.7;
            }
            
            .prose strong {
              color: #80522A;
              font-weight: 600;
            }
          `}</style>
          
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>

        {/* Product Recommendations */}
        <div className="mt-16 p-8 bg-gradient-to-r from-neutral-50 to-primary-50/30 rounded-2xl border border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Produits recommandés par nos experts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={ASSETS.products.perfectly_soap} 
                alt="Perfectly Soap" 
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 text-lg">PERFECTLY SOAP</h4>
                <p className="text-sm text-neutral-600 mb-2">Nettoyant doux pour peaux grasses et acnéiques</p>
                <p className="text-primary-600 font-bold text-lg">$55.00 CAD</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={ASSETS.products.super_sunscreen} 
                alt="Super Sunscreen" 
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 text-lg">SUPER SUNSCREEN</h4>
                <p className="text-sm text-neutral-600 mb-2">Protection solaire non-comédogène SPF 50+</p>
                <p className="text-primary-600 font-bold text-lg">$45.00 CAD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">Mots-clés</h4>
          <div className="flex flex-wrap gap-3">
            {blogPost.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors cursor-pointer border border-primary-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Articles similaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Vitamine C pour peau sensible : Guide complet',
                image: '/blog2.png',
                category: 'Ingrédients',
                readTime: '7 min'
              },
              {
                title: 'Routine anti-âge après 30 ans : Les essentiels',
                image: '/show1.png',
                category: 'Anti-âge',
                readTime: '6 min'
              },
              {
                title: 'Les bienfaits du rétinol : Guide débutant',
                image: '/show2.png',
                category: 'Ingrédients',
                readTime: '8 min'
              }
            ].map((article, index) => (
              <Link 
                key={index}
                to="/blog"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} de lecture
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 