import { useState, useEffect } from 'react';

interface ViewportType {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useViewport = (): ViewportType => {
  const [viewport, setViewport] = useState<ViewportType>(() => ({
    isMobile: window.innerWidth <= 600,
    isDesktop: window.innerWidth > 600,
  }));

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        isMobile: window.innerWidth <= 600,
        isDesktop: window.innerWidth > 600,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport;
};

export default useViewport;
