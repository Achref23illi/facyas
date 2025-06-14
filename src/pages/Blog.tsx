import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { SITE_CONFIG } from '../utils/constants';

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

const Blog: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    document.title = `Blog - ${SITE_CONFIG.name}`;
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards.length > 0) {
      gsap.set(cards, { opacity: 0, y: 30 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const allBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Comment traiter l\'acné en été',
      excerpt: 'Découvrez les meilleures stratégies pour maintenir une peau claire pendant les mois chauds d\'été.',
      content: 'L\'été peut être une période difficile pour les personnes souffrant d\'acné. La chaleur, l\'humidité et l\'exposition au soleil peuvent aggraver les problèmes de peau...',
      image: '/carousel1.png',
      category: 'Conseils',
      readTime: '5 min',
      date: '15 Nov 2024',
      author: 'Dr. Marie Dubois',
      tags: ['acné', 'été', 'soins', 'routine']
    },
    {
      id: '2',
      title: 'Vitamine C pour peau sensible : astuces pour un éclat tout en douceur',
      excerpt: 'Apprenez comment intégrer la vitamine C dans votre routine sans irriter votre peau sensible.',
      content: 'La vitamine C est un ingrédient puissant pour éclaircir et protéger la peau, mais elle peut être irritante pour les peaux sensibles...',
      image: '/carousel2.png',
      category: 'Ingrédients',
      readTime: '7 min',
      date: '12 Nov 2024',
      author: 'Dr. Sophie Martin',
      tags: ['vitamine C', 'peau sensible', 'éclat', 'antioxydants']
    },
    {
      id: '3',
      title: 'Routine anti-âge : les étapes essentielles après 30 ans',
      excerpt: 'Découvrez comment adapter votre routine de soins pour prévenir les premiers signes de vieillissement.',
      content: 'Après 30 ans, la production de collagène commence à diminuer. Il est important d\'adapter sa routine...',
      image: '/show1.png',
      category: 'Anti-âge',
      readTime: '6 min',
      date: '10 Nov 2024',
      author: 'Dr. Claire Rousseau',
      tags: ['anti-âge', 'collagène', 'routine', '30 ans']
    },
    {
      id: '4',
      title: 'Les bienfaits du rétinol : guide complet pour débutants',
      excerpt: 'Tout ce que vous devez savoir sur le rétinol avant de l\'intégrer à votre routine beauté.',
      content: 'Le rétinol est l\'un des ingrédients les plus efficaces en cosmétique, mais il faut savoir l\'utiliser...',
      image: '/show2.png',
      category: 'Ingrédients',
      readTime: '8 min',
      date: '8 Nov 2024',
      author: 'Dr. Marie Dubois',
      tags: ['rétinol', 'débutant', 'guide', 'anti-âge']
    },
    {
      id: '5',
      title: 'Hydratation en hiver : protéger sa peau du froid',
      excerpt: 'Les meilleures techniques pour maintenir une peau hydratée pendant la saison froide.',
      content: 'L\'hiver met notre peau à rude épreuve. Le froid, le vent et le chauffage peuvent causer sécheresse...',
      image: '/show3.png',
      category: 'Conseils',
      readTime: '5 min',
      date: '5 Nov 2024',
      author: 'Dr. Sophie Martin',
      tags: ['hydratation', 'hiver', 'froid', 'sécheresse']
    },
    {
      id: '6',
      title: 'Nettoyage double : la méthode coréenne pour une peau parfaite',
      excerpt: 'Découvrez les secrets du double nettoyage et comment l\'adapter à votre type de peau.',
      content: 'Le double nettoyage est une technique venue de Corée qui révolutionne notre approche du nettoyage...',
      image: '/perfectly_face_cream.png',
      category: 'Routine',
      readTime: '6 min',
      date: '3 Nov 2024',
      author: 'Dr. Claire Rousseau',
      tags: ['nettoyage', 'corée', 'routine', 'peau parfaite']
    }
  ];

  const categories = ['Tous', 'Conseils', 'Ingrédients', 'Anti-âge', 'Routine'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Blog Facyas
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Éducation sur les soins de la peau, conseils d'experts et astuces beauté pour révéler votre éclat naturel
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={sectionRef} className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block"
              >
                <article
                  ref={addToRefs}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-neutral-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                      Lire →
                    </span>
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-300 text-neutral-600 hover:border-primary-600 hover:text-primary-600"
            >
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 