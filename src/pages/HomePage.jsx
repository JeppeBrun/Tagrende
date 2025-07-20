import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import ProductList from '@/components/ProductList';
import AboutSection from '@/components/AboutSection';
import NewsletterSection from '@/components/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>LIMITLESS - Limited Edition Never Restocked</title>
        <meta name="description" content="Exclusive limited edition t-shirts. Only 100 pieces per design. Never restocked. Join the culture of scarcity and premium streetwear." />
      </Helmet>
      <HeroSection />
      <ProductList />
      <AboutSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;