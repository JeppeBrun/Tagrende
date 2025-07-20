
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            WHY LIMITLESS?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-medium text-black">
              In a world of mass production, we choose scarcity.
            </p>
            
            <p>
              Every design tells a story. Every piece is numbered. Every drop is an event. 
              We believe that true value comes from limitation—when something can't be 
              replicated, it becomes irreplaceable.
            </p>
            
            <p>
              Our process is intentional: we design, we produce exactly 100 pieces, 
              and we move on. No reprints. No "by popular demand" restocks. 
              When it's gone, it lives only in the wardrobes of those who were there.
            </p>
            
            <p className="text-xl font-semibold text-black">
              This isn't just clothing. It's culture. It's history. It's limitless.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
