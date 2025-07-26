import { Users, Zap, Leaf, Truck, Award, Clock, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "30+",
      label: "Years of Experience",
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "10000+",
      label: "Happy Customers",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "Quality Guarantee",
      color: "text-orange-600"
    },
    {
      icon: Clock,
      number: "All Day",
      label: "Service",
      color: "text-purple-600"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Professional Staff",
      description: "Years of experience in fabric care and cleaning",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Zap,
      title: "Modern Equipment",
      description: "State of the art cleaning and pressing machines",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Leaf,
      title: "Eco Friendly",
      description: "Safe and environmentally friendly cleaning solutions",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Convenient pickup and delivery service across Abu Dhabi",
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 pt-24 md:pt-16">
      <div className="container-max">
        {/* Trusted Badge */}
        <div className="text-center mb-8 px-4 sm:px-6">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md max-w-full">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 flex-shrink-0" />
            <span className="text-center leading-tight">Since 1992 - Trusted by Thousands</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            About <span className="text-gradient">Al Sahel Laundry</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Abu Dhabi's trusted laundry partner for over 30 years
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 sm:mb-16 px-4 sm:px-0">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Why Choose Us?</h3>
          <p className="text-gray-600 leading-relaxed max-w-4xl text-sm sm:text-base">
            For over three decades, Al Sahel Laundry has been Abu Dhabi's premier
            destination for professional laundry and dry cleaning services. We
            combine traditional craftsmanship with modern technology to deliver
            exceptional results. Our commitment to quality, reliability, and customer
            satisfaction has made us the trusted choice for families and businesses
            throughout Abu Dhabi.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stat.color} bg-opacity-10 mb-3 sm:mb-4`}>
                  <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${feature.color} mb-3 sm:mb-4`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center px-4 sm:px-0">
          <div className="bg-gradient-to-r from-gray-600 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white animate-scale-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Experience the Al Sahel Difference?
            </h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust us with their laundry needs.
            </p>
            <a
              href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-gray-800 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
