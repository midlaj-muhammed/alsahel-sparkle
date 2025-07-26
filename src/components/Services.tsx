import { Sparkles, Droplets, Shirt, Home, Blinds, Clock, Truck } from 'lucide-react';
import dryCleaningImg from '@/assets/dry-cleaning-service.jpg';
import washingImg from '@/assets/washing-service.jpg';
import ironingImg from '@/assets/ironing-service.jpg';
import carpetCleaningImg from '@/assets/carpet-cleaning-service.jpg';
import curtainCleaningImg from '@/assets/curtain-cleaning-service.jpg';
import expressImg from '@/assets/express-service.jpg';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and special garments with premium care.",
      features: ["Delicate fabric care", "Stain removal", "Professional pressing"],
      image: dryCleaningImg
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
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional laundry and cleaning services with pickup and delivery. 
            We offer the best possible results for any kind of dirt or stubborn stains on clothing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-accent-red" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-red rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
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
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              No Time to Wait? No Problem We Have
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              1 Hour Express Service Available
            </p>
            <a 
              href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%20need%20express%201-hour%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-accent-red hover:bg-accent-red-light text-lg px-8 py-4"
            >
              Book Express Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;