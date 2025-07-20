
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-black tracking-tighter">
            LIMITLESS
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-600">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping Info</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2025 Limitless. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
