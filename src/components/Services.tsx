import { Sparkles, Droplets, Shirt, Home, Blinds, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and special garments with premium care.",
      features: ["Delicate fabric care", "Stain removal", "Professional pressing"]
    },
    {
      icon: Droplets,
      title: "Washing",
      description: "Complete washing service using eco-friendly detergents and modern equipment.",
      features: ["Eco-friendly detergents", "Deep cleaning", "Fabric softening"]
    },
    {
      icon: Shirt,
      title: "Ironing",
      description: "Expert ironing and pressing services to keep your clothes crisp and wrinkle-free.",
      features: ["Professional pressing", "Crease removal", "Perfect finishing"]
    },
    {
      icon: Home,
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning service that removes stains and restores freshness.",
      features: ["Deep cleaning", "Stain removal", "Odor elimination"]
    },
    {
      icon: Blinds,
      title: "Curtain Cleaning",
      description: "Specialized curtain cleaning to maintain elegance and cleanliness in your home.",
      features: ["Gentle cleaning", "Color protection", "Shape preservation"]
    },
    {
      icon: Clock,
      title: "One Hour Service",
      description: "Express service for urgent cleaning needs with same-day delivery.",
      features: ["Express processing", "Same-day service", "Priority handling"]
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="card-service group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="bg-accent-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-red/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-accent-red" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-red rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a 
                    href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-red font-semibold hover:text-accent-red-light transition-colors"
                  >
                    Learn More →
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