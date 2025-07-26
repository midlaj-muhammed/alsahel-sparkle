import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black/30 backdrop-blur-sm text-white py-2">
        <div className="container-max">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+971 55 398 9502</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Abu Dhabi, Murur Road, 25th Street</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Since 1992 | alsahellaundry.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/5">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png" 
                alt="Al Sahel Laundry Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-accent-red transition-colors font-medium">Home</a>
              <a href="#services" className="text-white hover:text-accent-red transition-colors font-medium">Services</a>
              <a href="#gallery" className="text-white hover:text-accent-red transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-white hover:text-accent-red transition-colors font-medium">Contact</a>
              <a 
                href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-accent-red transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-accent-red transition-colors font-medium">Home</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-accent-red transition-colors font-medium">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-white hover:text-accent-red transition-colors font-medium">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-accent-red transition-colors font-medium">Contact</a>
              <div className="px-3 py-2">
                <a 
                  href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;