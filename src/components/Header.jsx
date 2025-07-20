
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-black tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            LIMITLESS
          </motion.div>
          <div className="flex items-center space-x-6">
            <motion.a 
              href="#products" 
              className="text-sm font-medium hover:text-neon transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              COLLECTION
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-sm font-medium hover:text-neon transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              STORY
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
