import { Clock, Truck, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-gradient text-white pt-24 md:pt-32 section-padding overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="bg-accent-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                Since 1992 - Trusted Service
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Clean Clothes</span>
              <span className="text-gradient block">Happy Faces</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Clean Clothes Delivered to your Door! Professional laundry and dry cleaning services 
              with pickup and delivery across Abu Dhabi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 hover-scale"
              >
                Schedule Pickup
              </a>
              <a 
                href="#services" 
                className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Our Services
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-accent-red mx-auto mb-2" />
                <p className="text-sm font-semibold">1 Hour Service</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-accent-red mx-auto mb-2" />
                <p className="text-sm font-semibold">Free Pickup</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-accent-red mx-auto mb-2" />
                <p className="text-sm font-semibold">Quality Assured</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-accent-red mx-auto mb-2" />
                <p className="text-sm font-semibold">Premium Care</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up lg:animate-scale-in">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c3feffcd-3587-4c72-8d09-9dbc3daf3237.png" 
                alt="Al Sahel Laundry Delivery Van" 
                className="w-full h-auto max-w-lg mx-auto floating-animation"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-red/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;