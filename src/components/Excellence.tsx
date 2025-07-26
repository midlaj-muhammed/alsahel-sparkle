import { Award, Users, CheckCircle, Star } from 'lucide-react';
import excellenceImg from '@/assets/30_yearsOfExcellence.jpg';
import { useBookingRedirect } from '@/hooks/useBookingRedirect';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Excellence = () => {
  const { redirectToBooking } = useBookingRedirect();
  const { handleSmoothClick } = useSmoothScroll();
  const achievements = [
    {
      icon: Award,
      number: "30+",
      label: "Years of Excellence",
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "10,000+",
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
      icon: Star,
      number: "5-Star",
      label: "Service Rating",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={excellenceImg}
                alt="30 Years of Excellence - Al Sahel Laundry"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-red rounded-full p-2">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Since 1992</div>
                    <div className="text-sm text-gray-600">Trusted Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-up px-4 sm:px-0">
            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-accent-red/10 text-accent-red px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="h-4 w-4 mr-2" />
                Excellence Since 1992
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
                30+ Years of <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For over three decades, Al Sahel Laundry has been the trusted choice for premium 
                laundry and dry cleaning services in Abu Dhabi. Our commitment to excellence, 
                attention to detail, and customer satisfaction has made us a household name 
                throughout the region.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3`}>
                      <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Established Legacy:</strong> Three decades of consistent quality and reliability in garment care
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Expert Craftsmanship:</strong> Skilled professionals with years of experience in fabric care
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-red rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Customer Trust:</strong> Thousands of satisfied customers who rely on our services
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => redirectToBooking('Premium Care')}
                className="btn-primary text-center"
              >
                Experience Our Excellence
              </button>
              <a
                href="#about"
                onClick={handleSmoothClick('about')}
                className="btn-outline text-center cursor-pointer"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
