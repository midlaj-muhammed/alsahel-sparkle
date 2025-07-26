import { Clock, Truck, Shield, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-background-optimized.jpg';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { redirectToBooking } = useBookingRedirect();
  const { handleSmoothClick } = useSmoothScroll();
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [logoImageLoaded, setLogoImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Preload critical images for iPhone
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.onload = () => {
        if (src.includes('hero-background')) {
          setHeroImageLoaded(true);
        } else if (src.includes('9e3af782-7566-4289-bf58-6b52400bc3dd')) {
          setLogoImageLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback for iPhone Safari issues
        console.warn('Image failed to load:', src);
        if (src.includes('hero-background')) {
          setHeroImageLoaded(true); // Show fallback background
        }
      };
      img.src = src;
    };

    // Preload hero background with retry mechanism
    const loadHeroImage = () => {
      try {
        preloadImage(heroBackground);
      } catch (error) {
        console.warn('Hero image preload failed:', error);
        setHeroImageLoaded(true); // Show fallback
      }
    };

    // Preload logo
    const loadLogoImage = () => {
      try {
        preloadImage('/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png');
      } catch (error) {
        console.warn('Logo image preload failed:', error);
        setLogoImageLoaded(true); // Show fallback
      }
    };

    // Load images with slight delay for iPhone
    setTimeout(loadHeroImage, 100);
    setTimeout(loadLogoImage, 200);

    // Trigger animations after a short delay
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-16 overflow-hidden bg-primary"
    >
      {/* Hero Background Image with iPhone optimizations */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: heroImageLoaded 
            ? `linear-gradient(135deg, rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.7)), url(${heroBackground})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)', // Hardware acceleration for iPhone
          willChange: 'transform' // Optimize for iPhone rendering
        }}
      >
        {/* Loading overlay for iPhone */}
        {!heroImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent-red/20 rounded-full blur-xl animate-pulse" style={{ transform: 'translateZ(0)' }}></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', transform: 'translateZ(0)' }}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-red/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s', transform: 'translateZ(0)' }}></div>
        </div>
      </div>

      <div className="container-max w-full relative z-10">
        <div className="text-center text-white px-4 sm:px-0">
          
          {/* Badge with enhanced animation */}
          <div className={`mb-8 mt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center bg-gradient-to-r from-accent-red/20 to-accent-red-light/20 backdrop-blur-sm border border-accent-red/30 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Since 1992 - Trusted by Thousands</span>
            </span>
          </div>
          
          {/* Main Heading with enhanced typography */}
          <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight">
              <span className="block text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Clean Clothes
              </span>
              <span className="block text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Happy Faces
              </span>
            </h1>

            {/* Logo Section with enhanced styling */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="relative group">
                {/* Loading skeleton for logo */}
                {!logoImageLoaded && (
                  <div className="h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto bg-white/10 rounded-2xl animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                <img
                  src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png"
                  alt="Al Sahel Laundry Logo"
                  className={`h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto transition-all duration-700 group-hover:scale-105 ${
                    logoImageLoaded ? 'opacity-95 hover:opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: logoImageLoaded ? 'translateZ(0)' : 'none',
                    willChange: 'transform, opacity'
                  }}
                  onLoad={() => setLogoImageLoaded(true)}
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-accent-red/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>

            {/* Enhanced description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-10 sm:mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Clean Clothes Delivered to your Door! Professional laundry and dry cleaning services
              with pickup and delivery across Abu Dhabi.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => redirectToBooking()}
              className="group bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 hover:from-blue-600 hover:via-blue-700 hover:to-green-600 text-white font-bold px-8 py-4 rounded-full text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-2xl text-center flex items-center justify-center space-x-2"
            >
              <span>Schedule Pickup Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#services"
              onClick={handleSmoothClick('services')}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full text-lg sm:text-xl transition-all duration-300 text-center cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Enhanced Features Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 touch-manipulation">
              <div className="bg-accent-red/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-accent-red" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2 text-white text-center">1 Hour Express</h3>
              <p className="text-gray-100 text-sm font-medium text-center">Fast service when you need it</p>
            </div>

            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 touch-manipulation">
              <div className="bg-accent-red/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-accent-red" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2 text-white text-center">Free Pickup</h3>
              <p className="text-gray-100 text-sm font-medium text-center">We come to your doorstep</p>
            </div>

            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 touch-manipulation">
              <div className="bg-accent-red/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-accent-red" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2 text-white text-center">Quality Assured</h3>
              <p className="text-gray-100 text-sm font-medium text-center">Premium care guaranteed</p>
            </div>

            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 touch-manipulation">
              <div className="bg-accent-red/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-accent-red" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-2 text-white text-center">Premium Care</h3>
              <p className="text-gray-100 text-sm font-medium text-center">Expert handling of fabrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Background Image Reveal with iPhone optimizations */}
      {heroImageLoaded && (
        <div
          className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 lg:h-64"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        ></div>
      )}

    </section>
  );
};

export default Hero;