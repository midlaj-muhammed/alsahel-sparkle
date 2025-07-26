import { useCallback } from 'react';

export const useBookingRedirect = () => {
  const redirectToBooking = useCallback((serviceType?: string) => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Wait for scroll to complete, then trigger booking modal
      setTimeout(() => {
        // Dispatch custom event to open booking modal with optional service type
        const bookingEvent = new CustomEvent('openBookingModal', {
          detail: { serviceType }
        });
        window.dispatchEvent(bookingEvent);
      }, 1000); // 1 second delay to allow smooth scroll to complete
    }
  }, []);

  return { redirectToBooking };
};
