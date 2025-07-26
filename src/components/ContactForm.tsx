import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BookingModal from './BookingModal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { toast } = useToast();

  // Listen for booking modal open events
  useEffect(() => {
    const handleOpenBookingModal = (event: any) => {
      setIsBookingModalOpen(true);
      // Store service type if provided
      if (event.detail?.serviceType) {
        sessionStorage.setItem('preSelectedService', event.detail.serviceType);
      }
    };

    window.addEventListener('openBookingModal', handleOpenBookingModal);

    return () => {
      window.removeEventListener('openBookingModal', handleOpenBookingModal);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const message = `New Contact Form Submission:
Name: ${formData.name}
Phone: ${formData.contact}
Email: ${formData.email}
Message: ${formData.message}`;

      const whatsappUrl = `https://wa.me/971553989502?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Message Sent!",
        description: "Your message has been sent via WhatsApp. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        contact: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Contact Us Badge */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium laundry service? Contact us today for a
            free quote or to schedule a pickup.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-0 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Send us a Message</h3>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll contact you directly to our WhatsApp for instant communication.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your laundry needs, preferred pickup time, or any special requirements..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send via WhatsApp'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(true)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Pickup
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">+971 55 398 9502</p>
                    <p className="text-gray-600 text-sm">+971 0 2448 3385</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">info@alsahellaundry.com</p>
                    <p className="text-gray-600 text-xs">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Location</h4>
                    <p className="text-gray-600 text-sm">Abu Dhabi, Murur Road, 25th Street</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Operating Hours</h4>
                    <p className="text-gray-600 text-sm">Sat-Thu: 7AM-10PM</p>
                    <p className="text-gray-600 text-sm">Fri: 2PM-10PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 sm:mt-16 animate-fade-in px-4 sm:px-0">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary">Our Location</h3>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl max-w-4xl mx-auto relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
            <a
              href="https://maps.app.goo.gl/6pUZ9jfGWRb8Qcka6"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative"
              title="Click to open Al Sahel Laundry location in Google Maps"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7234567890123!2d54.36651234567890!3d24.453912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzE0LjEiTiA1NMKwMjEnNTkuNCJF!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Sahel Laundry Location - Click to open in Google Maps"
                className="sm:h-96"
              ></iframe>

              {/* Click overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center space-x-3 text-primary font-semibold">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Al Sahel Laundry</div>
                      <div className="text-xs text-gray-600">Click to open in Google Maps</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingComplete={() => {
          toast({
            title: "Booking Request Sent!",
            description: "Your pickup booking request has been sent via WhatsApp. We'll confirm your appointment shortly.",
          });
        }}
      />
    </section>
  );
};

export default ContactForm;