import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get header height for proper offset
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Calculate the target position with offset
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px additional padding
      
      // Add a small delay for smoother transition
      setTimeout(() => {
        // Use smooth scrolling with better timing
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, []);

  const handleSmoothClick = useCallback((sectionId: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      scrollToSection(sectionId);
    };
  }, [scrollToSection]);

  return { scrollToSection, handleSmoothClick };
};
