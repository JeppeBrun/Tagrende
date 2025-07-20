import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { getShopifyProducts } from '@/lib/shopify';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const shopifyData = await getShopifyProducts();
      setProducts(shopifyData);
    };
    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            THE COLLECTION
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated designs, available for a limited time. Once they're gone, they're gone forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;