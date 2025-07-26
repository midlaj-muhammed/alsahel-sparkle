import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Footer = () => {
  const { handleSmoothClick } = useSmoothScroll();
  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png"
              alt="Al Sahel Laundry Logo"
              className="h-12 sm:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Al Sahel Laundry has been providing premium laundry and dry cleaning services
              since 1992. We offer professional care for all your garments with pickup and
              delivery services across Abu Dhabi.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="bg-accent-red px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold inline-block w-fit">
                Since 1992
              </span>
              <span className="text-gray-300 text-sm sm:text-base">Trusted by thousands</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent-red flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">+971 55 398 9502</p>
                  <p className="text-gray-300 text-sm sm:text-base">+971 0 2448 3385</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent-red mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">Abu Dhabi, Murur Road, 25th Street</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent-red flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base">alsahellaundry.com</p>
              </div>
            </div>
          </div>

          {/* Operating Hours & Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Services & Hours</h3>

            <div className="mb-4 sm:mb-6">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent-red flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Operating Hours</span>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm space-y-1">
                <p>Sat - Thu: 7:00 AM - 10:00 PM</p>
                <p>Friday: 2:00 PM - 10:00 PM</p>
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <p>• Dry Cleaning</p>
              <p>• Premium Care</p>
              <p>• Washing & Ironing</p>
              <p>• Carpet Cleaning</p>
              <p>• Curtain Cleaning</p>
              <p>• 1 Hour Express Service</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Al Sahel Laundry. All rights reserved. Established 1992.
            </p>

            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              <a
                href="https://wa.me/971553989502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-red hover:text-accent-red-light transition-colors font-semibold text-sm"
              >
                WhatsApp
              </a>
              <a
                href="tel:+971553989502"
                className="text-accent-red hover:text-accent-red-light transition-colors font-semibold text-sm"
              >
                Call Now
              </a>
              <a
                href="#home"
                onClick={handleSmoothClick('home')}
                className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;