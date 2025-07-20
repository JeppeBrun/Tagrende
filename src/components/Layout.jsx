import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Layout = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Social links aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer onSocialClick={handleSocialClick} />
    </div>
  );
};

export default Layout;