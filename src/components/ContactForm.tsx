import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setFormData({ name: '', contact: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience premium laundry service? Contact us today for pickup scheduling 
            or any questions about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-red/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">+971 55 398 9502</p>
                  <p className="text-gray-600">+971 0 2448 3385</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-red/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Location</h4>
                  <p className="text-gray-600">Abu Dhabi, Murur Road, 25th Street</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-red/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Operating Hours</h4>
                  <p className="text-gray-600">Saturday - Thursday: 7:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Friday: 2:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-red/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Website</h4>
                  <p className="text-gray-600">alsahellaundry.com</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 space-y-4">
              <a 
                href="https://wa.me/971553989502?text=Hi%20Al%20Sahel%20Laundry%2C%20I%27d%20like%20to%20schedule%20a%20laundry%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Schedule WhatsApp Pickup
              </a>
              <a 
                href="tel:+971553989502"
                className="btn-outline w-full text-center block"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-service">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-primary mb-2">
                    Phone or Email *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors"
                    placeholder="Phone number or email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-red focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your laundry needs or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Find Our Location</h3>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.8676!2d54.3665!3d24.4539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e671!2sAbu%20Dhabi%20UAE!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Sahel Laundry Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;