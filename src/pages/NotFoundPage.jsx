import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | LIMITLESS</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
        <h1 className="text-8xl font-black tracking-tighter text-neon">404</h1>
        <h2 className="text-4xl font-bold mt-2 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist.
        </p>
        <Button asChild size="lg" className="bg-black hover:bg-neon hover:text-black text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;