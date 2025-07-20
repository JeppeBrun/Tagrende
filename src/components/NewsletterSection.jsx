
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Instagram, Twitter, Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }
    
    const existingEmails = JSON.parse(localStorage.getItem('newsletterEmails') || '[]');
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem('newsletterEmails', JSON.stringify(existingEmails));
    }
    
    toast({
      title: "Welcome to the Inner Circle! 🔥",
      description: "You'll be the first to know about our next drop.",
    });
    setEmail('');
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Social links aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            JOIN THE
            <br />
            <span className="text-neon">INNER CIRCLE</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be the first to know about new drops. Get early access. 
            Join the culture of exclusivity.
          </p>

          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon transition-colors"
              />
              <Button 
                type="submit"
                className="bg-neon hover:bg-neon/80 text-black font-semibold px-6 py-3"
              >
                JOIN
              </Button>
            </div>
          </form>

          <div className="flex justify-center space-x-6 pt-8">
            <motion.a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-neon transition-colors" whileHover={{ scale: 1.1 }}>
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-neon transition-colors" whileHover={{ scale: 1.1 }}>
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-neon transition-colors" whileHover={{ scale: 1.1 }}>
              <Mail className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
