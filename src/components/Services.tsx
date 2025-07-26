import { Sparkles, Droplets, Shirt, Home, Blinds, Clock, Truck, Crown } from 'lucide-react';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useState } from 'react';
import dryCleaningImg from '@/assets/dry-cleaning-service.jpg';
import washingImg from '@/assets/washing-service.jpg';
import ironingImg from '@/assets/ironing-service.jpg';
import carpetCleaningImg from '@/assets/carpet-cleaning-service.jpg';
import curtainCleaningImg from '@/assets/curtain-cleaning-service.jpg';
import expressImg from '@/assets/express-service.jpg';
import premiumCareImg from '@/assets/woman-seamstress-spreading-fabrics-workshop-optimized.webp';

const Services = () => {
  const { redirectToBooking } = useBookingRedirect();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const services = [
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and special garments with premium care.",
      features: ["Delicate fabric care", "Stain removal", "Professional pressing"],
      image: dryCleaningImg
    },
    {
      icon: Crown,
      title: "Premium Care",
      description: "Luxury garment care service for high-end clothing, designer wear, and precious fabrics with white-glove treatment.",
      features: ["Designer garment expertise", "Hand-finished pressing", "Premium packaging", "Satisfaction guarantee"],
      image: premiumCareImg
    },
    {
      icon: Droplets,
      title: "Washing",
      description: "Complete washing service using eco-friendly detergents and modern equipment.",
      features: ["Eco-friendly detergents", "Deep cleaning", "Fabric softening"],
      image: washingImg
    },
    {
      icon: Shirt,
      title: "Ironing",
      description: "Expert ironing and pressing services to keep your clothes crisp and wrinkle-free.",
      features: ["Professional pressing", "Crease removal", "Perfect finishing"],
      image: ironingImg
    },
    {
      icon: Home,
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning service that removes stains and restores freshness.",
      features: ["Deep cleaning", "Stain removal", "Odor elimination"],
      image: carpetCleaningImg
    },
    {
      icon: Blinds,
      title: "Curtain Cleaning",
      description: "Specialized curtain cleaning to maintain elegance and cleanliness in your home.",
      features: ["Gentle cleaning", "Color protection", "Shape preservation"],
      image: curtainCleaningImg
    },
    {
      icon: Clock,
      title: "One Hour Service",
      description: "Express service for urgent cleaning needs with same-day delivery.",
      features: ["Express processing", "Same-day service", "Priority handling"],
      image: expressImg
    },
    {
      icon: Truck,
      title: "Home Delivery Service",
      description: "Convenient pickup and delivery service right to your doorstep across Abu Dhabi.",
      features: ["Free pickup & delivery", "Scheduled service", "Contactless delivery"],
      image: "/lovable-uploads/c3feffcd-3587-4c72-8d09-9dbc3daf3237.png"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional laundry and cleaning services with pickup and delivery.
            We offer the best possible results for any kind of dirt or stubborn stains on clothing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isImageLoaded = loadedImages.has(index);
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                  {/* Loading Skeleton */}
                  {!isImageLoaded && (
                    <div className="absolute inset-0 image-loading flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-gray-300 border-t-accent-red rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index < 4 ? "eager" : "lazy"}
                    onLoad={() => handleImageLoad(index)}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 image-optimized ${
                      isImageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transform: isImageLoaded ? 'translateZ(0)' : 'none',
                      ...(index < 4 && { fetchPriority: 'high' })
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-accent-red" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-accent-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-red rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-red font-semibold hover:text-accent-red-light transition-colors text-sm group"
                  >
                    Learn More
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <div className="bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white animate-scale-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              No Time to Wait? No Problem We Have
            </h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
              1 Hour Express Service Available
            </p>
            <button
              onClick={() => redirectToBooking('1 Hour Express Service')}
              className="btn-primary bg-accent-red hover:bg-accent-red-light text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Book Express Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;