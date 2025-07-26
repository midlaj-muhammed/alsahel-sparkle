import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png" 
              alt="Al Sahel Laundry Logo" 
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Al Sahel Laundry has been providing premium laundry and dry cleaning services 
              since 1992. We offer professional care for all your garments with pickup and 
              delivery services across Abu Dhabi.
            </p>
            <div className="flex items-center space-x-4">
              <span className="bg-accent-red px-4 py-2 rounded-full text-sm font-semibold">
                Since 1992
              </span>
              <span className="text-gray-300">Trusted by thousands</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-red" />
                <div>
                  <p className="text-gray-300">+971 55 398 9502</p>
                  <p className="text-gray-300">+971 0 2448 3385</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-red mt-1" />
                <p className="text-gray-300">Abu Dhabi, Murur Road, 25th Street</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-red" />
                <p className="text-gray-300">alsahellaundry.com</p>
              </div>
            </div>
          </div>

          {/* Operating Hours & Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services & Hours</h3>
            
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-accent-red" />
                <span className="font-semibold">Operating Hours</span>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Sat - Thu: 7:00 AM - 10:00 PM</p>
                <p>Friday: 2:00 PM - 10:00 PM</p>
              </div>
            </div>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>• Dry Cleaning</p>
              <p>• Washing & Ironing</p>
              <p>• Carpet Cleaning</p>
              <p>• Curtain Cleaning</p>
              <p>• 1 Hour Express Service</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Al Sahel Laundry. All rights reserved. Established 1992.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/971553989502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-red hover:text-accent-red-light transition-colors font-semibold"
              >
                WhatsApp
              </a>
              <a 
                href="tel:+971553989502"
                className="text-accent-red hover:text-accent-red-light transition-colors font-semibold"
              >
                Call Now
              </a>
              <a 
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
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