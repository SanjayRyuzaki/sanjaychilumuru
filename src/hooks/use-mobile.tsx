import { useState, useEffect, useCallback } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  return scrollY;
};

export const useDeviceCapabilities = () => {
  const [isLowPower, setIsLowPower] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check for low-power device indicators
    const checkLowPower = () => {
      const isMobile = window.innerWidth < 768;
      const isLowResolution = window.devicePixelRatio < 1.5;
      const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      
      setIsLowPower(isMobile || isLowResolution || hasLimitedMemory);
    };

    checkLowPower();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { isLowPower, prefersReducedMotion };
};
