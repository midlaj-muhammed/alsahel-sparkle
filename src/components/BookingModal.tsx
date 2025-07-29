import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, Package, ChevronDown } from 'lucide-react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingComplete?: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onBookingComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    time: '',
    serviceType: '',
    specialInstructions: ''
  });
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const timeDropdownRef = useRef<HTMLDivElement | null>(null);

  // Check for pre-selected service when modal opens
  useEffect(() => {
    if (isOpen) {
      const preSelectedService = sessionStorage.getItem('preSelectedService');
      if (preSelectedService) {
        setFormData(prev => ({
          ...prev,
          serviceType: preSelectedService
        }));
        // Clear the stored service
        sessionStorage.removeItem('preSelectedService');
      }
    }
  }, [isOpen]);

  const serviceTypes = [
    'Dry Cleaning',
    'Premium Care',
    'Washing & Ironing',
    'Carpet Cleaning',
    'Curtain Cleaning',
    '1 Hour Express Service'
  ];

  const timeSlots = [
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM',
    '10:00 PM - 11:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🗓️ *PICKUP BOOKING REQUEST*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *Pickup Address:*
${formData.address}

📅 *Scheduled Pickup:*
Date: ${formData.date}
Time: ${formData.time}

🧺 *Service Type:*
${formData.serviceType}

📝 *Special Instructions:*
${formData.specialInstructions || 'None'}

Please confirm this pickup booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971553989502?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // Call completion callback if provided
    if (onBookingComplete) {
      onBookingComplete();
    }

    // Reset form and close modal
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      date: '',
      time: '',
      serviceType: '',
      specialInstructions: ''
    });
    onClose();
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Robust scroll lock for all devices
  useEffect(() => {
    const modal = modalRef.current;
    if (isOpen && modal) {
      // Use a more mobile-friendly scroll lock approach
      disableBodyScroll(modal, { 
        reserveScrollBarGap: true,
        allowTouchMove: (el) => {
          // Allow touch scrolling within the modal content
          return el.closest('.modal-content') !== null;
        }
      });
    } else {
      enableBodyScroll(modal as Element);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  // Close on background tap
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({
      ...prev,
      time: time
    }));
    setIsTimeDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target as Node)) {
        setIsTimeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  // Modal portal
  return createPortal(
    <div
      ref={modalRef}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex ${isMobile() ? 'items-end' : 'items-center'} justify-center p-4 overscroll-y-auto touch-manipulation`}
      style={{ WebkitOverflowScrolling: 'touch', paddingBottom: 'env(safe-area-inset-bottom)' }}
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[100dvh] overflow-y-auto modal-content"
        style={{ 
          paddingBottom: 'env(safe-area-inset-bottom)',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Schedule Pickup</h2>
              <p className="text-gray-600">Book your laundry pickup service</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto">
          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <User className="h-5 w-5 mr-2" />
              Customer Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Pickup Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Pickup Details
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your complete pickup address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={getTomorrowDate()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <div className="relative" ref={timeDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
                  >
                    <span>{formData.time || 'Select time slot'}</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </button>
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto mobile-dropdown">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          onClick={() => handleTimeSelect(slot)}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer touch-manipulation"
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Service Information
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select service type</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions
              </label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any special instructions for pickup or service..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Pickup via WhatsApp
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default BookingModal;
