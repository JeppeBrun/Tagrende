import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product, index }) => {
  const getPriceRange = () => {
    if (!product.variants || product.variants.length === 0) return '$--.--';
    const prices = product.variants.map(v => v.price).filter(p => p);
    if (prices.length === 0) return '$--.--';
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    if (minPrice === maxPrice) return `$${minPrice.toFixed(2)}`;
    return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
  };
  
  const mainImage = product.images && product.images.length > 0 ? product.images[0].src : "https://images.unsplash.com/photo-1635865165118-917ed9e20936";

  return (
    <motion.div
      className="group relative card-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-gray-50 rounded-lg aspect-square">
          <img  
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={mainImage} />
        </div>
      </Link>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-black tracking-tight">{product.name}</h3>
            <p className="text-3xl font-bold mt-1">{getPriceRange()}</p>
          </div>
        </div>
        
        <Button 
          asChild
          className={'w-full py-3 text-lg font-semibold transition-all duration-300 bg-black hover:bg-neon hover:text-black text-white'}
        >
          <Link to={`/product/${product.id}`}>VIEW OPTIONS</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;