import { Clock, Truck, Shield, Star, CheckCircle } from 'lucide-react';
import heroBackground from '@/assets/hero-background-optimized.jpg';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { redirectToBooking } = useBookingRedirect();
  const { handleSmoothClick } = useSmoothScroll();
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [logoImageLoaded, setLogoImageLoaded] = useState(false);

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
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-28 overflow-hidden bg-primary"
    >
      {/* Hero Background Image with iPhone optimizations */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: heroImageLoaded 
            ? `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.85)), url(${heroBackground})`
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
      </div>

      <div className="container-max w-full relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="mb-6 mt-8 md:mt-4 animate-fade-in">
            <span className="inline-flex items-center bg-accent-red/20 backdrop-blur-sm border border-accent-red/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">Since 1992 - Trusted by Thousands</span>
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-slide-up px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 leading-tight">
              <span className="block text-white">Clean Clothes</span>
              <span className="block text-white">
                Happy Faces
              </span>
            </h1>

            {/* Logo Section with iPhone optimizations */}
            <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
              <div className="relative">
                {/* Loading skeleton for logo */}
                {!logoImageLoaded && (
                  <div className="h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto bg-white/10 rounded-lg animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                <img
                  src="/lovable-uploads/9e3af782-7566-4289-bf58-6b52400bc3dd.png"
                  alt="Al Sahel Laundry Logo"
                  className={`h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto transition-all duration-500 ${
                    logoImageLoaded ? 'opacity-95 hover:opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: logoImageLoaded ? 'translateZ(0)' : 'none',
                    willChange: 'transform, opacity'
                  }}
                  onLoad={() => setLogoImageLoaded(true)}
                />
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Clean Clothes Delivered to your Door! Professional laundry and dry cleaning services
              with pickup and delivery across Abu Dhabi.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-scale-in px-4 sm:px-0">
            <button
              onClick={() => redirectToBooking()}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl text-center touch-manipulation"
            >
              Schedule Pickup Now
            </button>
            <a
              href="#services"
              onClick={handleSmoothClick('services')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 text-center cursor-pointer touch-manipulation"
            >
              Explore Services
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-in px-4 sm:px-0 relative z-10">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 shadow-lg touch-manipulation">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-white">1 Hour Express</h3>
              <p className="text-gray-100 text-xs sm:text-sm font-medium">Fast service when you need it</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 shadow-lg touch-manipulation">
              <Truck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-white">Free Pickup</h3>
              <p className="text-gray-100 text-xs sm:text-sm font-medium">We come to your doorstep</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 shadow-lg touch-manipulation">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-white">Quality Assured</h3>
              <p className="text-gray-100 text-xs sm:text-sm font-medium">Premium care guaranteed</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300 shadow-lg touch-manipulation">
              <Star className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-red mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-white">Premium Care</h3>
              <p className="text-gray-100 text-xs sm:text-sm font-medium">Expert handling of fabrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements with iPhone optimizations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-red/20 rounded-full blur-xl animate-pulse" style={{ transform: 'translateZ(0)' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', transform: 'translateZ(0)' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-red/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s', transform: 'translateZ(0)' }}></div>

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