import { Clock, Truck, Shield, Star, CheckCircle } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-max w-full">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center bg-accent-red/20 backdrop-blur-sm border border-accent-red/30 text-white px-6 py-3 rounded-full text-sm font-semibold">
              <CheckCircle className="h-5 w-5 mr-2" />
              Since 1992 - Trusted by Thousands
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Clean Clothes</span>
              <span className="block bg-gradient-to-r from-accent-red to-accent-red-light bg-clip-text text-transparent">
                Happy Faces
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Clean Clothes Delivered to your Door! Professional laundry and dry cleaning services 
              with pickup and delivery across Abu Dhabi.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in">
            <a 
              href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-red hover:bg-accent-red-light text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Schedule Pickup Now
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-12 w-12 text-accent-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">1 Hour Express</h3>
              <p className="text-gray-300 text-sm">Fast service when you need it</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Truck className="h-12 w-12 text-accent-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Free Pickup</h3>
              <p className="text-gray-300 text-sm">We come to your doorstep</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-12 w-12 text-accent-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-300 text-sm">Premium care guaranteed</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Star className="h-12 w-12 text-accent-red mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Premium Care</h3>
              <p className="text-gray-300 text-sm">Expert handling of fabrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-red/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-red/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;