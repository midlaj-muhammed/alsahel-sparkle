import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const isIOS = () => typeof window !== 'undefined' && /iP(ad|hone|od)/.test(window.navigator.userAgent);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/e3c064a7-ce6d-4055-a470-c2ae453ae08d.png",
      alt: "Al Sahel Laundry Services - Professional Staff",
      title: "Professional Service"
    },
    {
      src: "/lovable-uploads/de08e421-8815-4631-9abe-c4008bf51008.png",
      alt: "Al Sahel Laundry Services List",
      title: "Complete Services"
    },
    {
      src: "/lovable-uploads/7de78b07-d0e5-406e-91fa-bf6792db69d7.png",
      alt: "Save Time with Al Sahel Laundry",
      title: "Time-Saving Solutions"
    },
    {
      src: "/lovable-uploads/3a9a5129-fcc7-4915-9064-d144b506e41e.png",
      alt: "Express 1 Hour Service",
      title: "Express Service"
    },
    {
      src: "/lovable-uploads/2fa6efc8-2501-435b-bb8a-3d6cec61143c.png",
      alt: "Professional Ironing Service",
      title: "Quality Care"
    },
    {
      src: "/lovable-uploads/ad22ade3-c2e8-4719-9fdb-7f38e9083d44.png",
      alt: "Al Sahel Laundry Physical Store",
      title: "Our Location"
    }
  ];

  // Robust scroll lock for all devices
  useEffect(() => {
    const modal = modalRef.current;
    if (selectedImage !== null && modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true });
    } else {
      enableBodyScroll(modal as Element);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [selectedImage]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Modal portal
  const modal = selectedImage !== null ? createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 overscroll-y-auto touch-manipulation"
      style={{ WebkitOverflowScrolling: 'touch', paddingBottom: 'env(safe-area-inset-bottom)' }}
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-4xl w-full"
        style={{ pointerEvents: 'auto', paddingBottom: 'env(safe-area-inset-bottom)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeLightbox}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        {/* Navigation Buttons */}
        <button
          onClick={() => navigateImage('prev')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        <button
          onClick={() => navigateImage('next')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </button>
        {/* Image */}
        <div className="text-center">
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
            style={{ maxHeight: 'min(80vh, 100dvh - 64px)' }}
          />
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-3 sm:mt-4 px-4">
            {galleryImages[selectedImage].title}
          </h3>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our professional services and facilities through our gallery showcase.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {modal}
      </div>
    </section>
  );
};

export default Gallery;