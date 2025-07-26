import { Clock, Truck, Shield, Star, CheckCircle } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Hero = () => {
  const { redirectToBooking } = useBookingRedirect();
  const { handleSmoothClick } = useSmoothScroll();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden"
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
          <div className="mb-8 mt-4 md:mt-0 animate-fade-in">
            <span className="inline-flex items-center bg-accent-red/20 backdrop-blur-sm border border-accent-red/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Since 1992 - Trusted by Thousands</span>
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-slide-up px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Clean Clothes</span>
              <span className="block bg-gradient-to-r from-accent-red to-accent-red-light bg-clip-text text-transparent">
                Happy Faces
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Clean Clothes Delivered to your Door! Professional laundry and dry cleaning services
              with pickup and delivery across Abu Dhabi.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-scale-in px-4 sm:px-0">
            <button
              onClick={() => redirectToBooking()}
              className="bg-accent-red hover:bg-accent-red-light text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl text-center"
            >
              Schedule Pickup Now
            </button>
            <a
              href="#services"
              onClick={handleSmoothClick('services')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 text-center cursor-pointer"
            >
              Explore Services
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in px-4 sm:px-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">1 Hour Express</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Fast service when you need it</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <Truck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Free Pickup</h3>
              <p className="text-gray-300 text-xs sm:text-sm">We come to your doorstep</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Quality Assured</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Premium care guaranteed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Premium Care</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Expert handling of fabrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-red/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-red/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>


    </section>
  );
};

export default Hero;