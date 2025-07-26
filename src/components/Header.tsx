import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { redirectToBooking } = useBookingRedirect();
  const { handleSmoothClick } = useSmoothScroll();

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="hidden sm:block bg-black/30 backdrop-blur-sm text-white py-2 px-2 sm:px-0">
        <div className="container-max">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">+971 55 398 9502</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Abu Dhabi, Murur Road, 25th Street</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs sm:text-sm">Since 1992 | alsahellaundry.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/5">
        <div className="container-max">
          <div className="flex justify-between items-center py-3 sm:py-4 px-2 sm:px-0">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png"
                alt="Al Sahel Laundry Logo"
                className="h-10 sm:h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" onClick={handleSmoothClick('home')} className="text-white hover:text-accent-red transition-colors font-medium text-sm lg:text-base cursor-pointer">Home</a>
              <a href="#services" onClick={handleSmoothClick('services')} className="text-white hover:text-accent-red transition-colors font-medium text-sm lg:text-base cursor-pointer">Services</a>
              <a href="#about" onClick={handleSmoothClick('about')} className="text-white hover:text-accent-red transition-colors font-medium text-sm lg:text-base cursor-pointer">About</a>
              <a href="#gallery" onClick={handleSmoothClick('gallery')} className="text-white hover:text-accent-red transition-colors font-medium text-sm lg:text-base cursor-pointer">Gallery</a>
              <a href="#contact" onClick={handleSmoothClick('contact')} className="text-white hover:text-accent-red transition-colors font-medium text-sm lg:text-base cursor-pointer">Contact</a>
              <button
                onClick={() => redirectToBooking()}
                className="btn-primary text-sm lg:text-base px-4 lg:px-6"
              >
                Book Now
              </button>
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
            <div className="px-3 pt-3 pb-4 space-y-2">
              <a
                href="#home"
                className="block px-4 py-3 text-white hover:text-accent-red hover:bg-white/10 transition-colors font-medium rounded-lg cursor-pointer"
                onClick={(e) => {
                  handleSmoothClick('home')(e);
                  setIsOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-4 py-3 text-white hover:text-accent-red hover:bg-white/10 transition-colors font-medium rounded-lg cursor-pointer"
                onClick={(e) => {
                  handleSmoothClick('services')(e);
                  setIsOpen(false);
                }}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-white hover:text-accent-red hover:bg-white/10 transition-colors font-medium rounded-lg cursor-pointer"
                onClick={(e) => {
                  handleSmoothClick('about')(e);
                  setIsOpen(false);
                }}
              >
                About
              </a>
              <a
                href="#gallery"
                className="block px-4 py-3 text-white hover:text-accent-red hover:bg-white/10 transition-colors font-medium rounded-lg cursor-pointer"
                onClick={(e) => {
                  handleSmoothClick('gallery')(e);
                  setIsOpen(false);
                }}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-white hover:text-accent-red hover:bg-white/10 transition-colors font-medium rounded-lg cursor-pointer"
                onClick={(e) => {
                  handleSmoothClick('contact')(e);
                  setIsOpen(false);
                }}
              >
                Contact
              </a>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    redirectToBooking();
                  }}
                  className="btn-primary w-full text-center block py-3 text-base"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;