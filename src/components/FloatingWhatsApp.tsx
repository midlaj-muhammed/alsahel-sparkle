import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 btn-primary rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
      
      {/* Pulsing animation */}
      <div className="absolute inset-0 rounded-full bg-accent-red animate-ping opacity-20"></div>
    </a>
  );
};

export default FloatingWhatsApp;