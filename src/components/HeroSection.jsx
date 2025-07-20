
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              LIMITED
              <br />
              <span className="text-neon">EDITION</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-light tracking-wide text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Never Restocked. Never Repeated.
              <br />
              <span className="font-medium text-black">100 pieces. That's it.</span>
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-neon hover:text-black text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Limited Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Exclusive Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Never Restocked</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full opacity-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <img  alt="Hero model wearing limited edition t-shirt" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635957615298-2aa9ef650962" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
