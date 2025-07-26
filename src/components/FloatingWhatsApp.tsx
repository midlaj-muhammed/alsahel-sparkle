import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeVisible = scrollY > 10;
      setIsVisible(shouldBeVisible);
      
      // Debug logging
      console.log('Scroll Y:', scrollY, 'Should be visible:', shouldBeVisible);
    };

    // Check initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const button = (
    <a
      href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] btn-primary rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{
        position: 'fixed',
        zIndex: 9999,
        bottom: '1rem',
        right: '1rem'
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="sr-only">WhatsApp</span>

      {/* Pulsing animation */}
      <div className="absolute inset-0 rounded-full bg-accent-red animate-ping opacity-20"></div>
    </a>
  );

  return createPortal(button, document.body);
};

export default FloatingWhatsApp;