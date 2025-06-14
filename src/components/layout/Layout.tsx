import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
                Facyas
              </h3>
              <p className="text-neutral-300 mb-4">
                Premium skincare products for radiant, healthy skin. Discover your perfect routine with our carefully curated collection.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.017 0C18.396 0 24.017 5.621 24.017 12S18.396 24 12.017 24 .017 18.379.017 12 5.638 0 12.017 0zm0 5.9a6.1 6.1 0 100 12.2 6.1 6.1 0 000-12.2zm0 10.064A3.964 3.964 0 018.053 12a3.964 3.964 0 017.928 0 3.964 3.964 0 01-3.964 3.964zM18.286 4.286a1.43 1.43 0 11-2.86 0 1.43 1.43 0 012.86 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/products" className="text-neutral-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="/skincare-routine" className="text-neutral-300 hover:text-white transition-colors">Skincare Routine</a></li>
                <li><a href="/ingredients" className="text-neutral-300 hover:text-white transition-colors">Ingredients</a></li>
                <li><a href="/reviews" className="text-neutral-300 hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Customer Care</h4>
              <ul className="space-y-2">
                <li><a href="/help" className="text-neutral-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/shipping" className="text-neutral-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="text-neutral-300 hover:text-white transition-colors">Returns</a></li>
                <li><a href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-neutral-300 mb-4">
                Get the latest skincare tips and exclusive offers.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="w-full btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Facyas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 