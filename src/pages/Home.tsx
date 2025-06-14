import React, { useEffect } from 'react';
import HeroCarousel from '../components/common/HeroCarousel';
import ProductShowcase from '../components/product/ProductShowcase';
import CategoryShowcase from '../components/sections/CategoryShowcase';
import MediaSection from '../components/sections/MediaSection';
import BlogSection from '../components/sections/BlogSection';
import { SITE_CONFIG } from '../utils/constants';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = `${SITE_CONFIG.name} - Soins de la Peau Premium`;
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Media Section */}
      <MediaSection />

      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home; 