import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { getProductByHandle } from '@/lib/shopify';
import ShopifyBuyButton from '@/components/ShopifyBuyButton';
import { ArrowLeft } from 'lucide-react';
import NotFoundPage from '@/pages/NotFoundPage';

const ProductPage = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductByHandle(handle);
      setProduct(productData);
      setLoading(false);
    };
    fetchProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-bold">Loading Product...</div>
      </div>
    );
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - LIMITLESS</title>
        <meta name="description" content={product.description.replace(/<[^>]*>?/gm, '').substring(0, 160)} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/#products" className="inline-flex items-center text-gray-600 hover:text-black mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {product.images && product.images.length > 0 && (
                <div className="space-y-4">
                  {product.images.map((image, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg overflow-hidden"
                    >
                      <img src={image.src} alt={image.alt || `${product.name} - view ${index + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            <div className="sticky top-32 self-start">
              <h1 className="text-5xl font-black tracking-tighter mb-4">{product.name}</h1>
              <div className="text-lg text-gray-700 mb-8 prose" dangerouslySetInnerHTML={{ __html: product.description }} />
              
              {product.shopifyId ? (
                <ShopifyBuyButton productId={product.shopifyId} />
              ) : (
                <div className="p-4 text-center bg-gray-100 rounded-lg">
                  <p className="font-semibold">This product is not yet available for purchase.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductPage;