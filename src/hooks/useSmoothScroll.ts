import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
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
