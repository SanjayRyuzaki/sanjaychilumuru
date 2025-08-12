import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  scrollJank: number;
  memoryUsage: number;
  deviceCapabilities: {
    isLowPower: boolean;
    prefersReducedMotion: boolean;
    hasLimitedMemory: boolean;
  };
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    scrollJank: 0,
    memoryUsage: 0,
    deviceCapabilities: {
      isLowPower: false,
      prefersReducedMotion: false,
      hasLimitedMemory: false,
    },
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    let frameCount = 0;
    let lastTime = performance.now();
    let scrollEvents = 0;
    let lastScrollTime = performance.now();

    // FPS monitoring
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    // Scroll jank detection
    const handleScroll = () => {
      scrollEvents++;
      const currentTime = performance.now();
      
      if (currentTime - lastScrollTime >= 1000) {
        const scrollJank = scrollEvents;
        setMetrics(prev => ({ ...prev, scrollJank }));
        scrollEvents = 0;
        lastScrollTime = currentTime;
      }
    };

    // Memory usage monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Device capabilities detection
    const detectDeviceCapabilities = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth < 768;
      const isLowResolution = window.devicePixelRatio < 1.5;
      const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      
      setMetrics(prev => ({
        ...prev,
        deviceCapabilities: {
          isLowPower: isMobile || isLowResolution || hasLimitedMemory,
          prefersReducedMotion,
          hasLimitedMemory: hasLimitedMemory || false,
        },
      }));
    };

    // Start monitoring
    measureFPS();
    detectDeviceCapabilities();
    
    const memoryInterval = setInterval(measureMemory, 2000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 glass-card p-4 rounded-lg text-xs font-mono">
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps < 30 ? 'text-red-400' : metrics.fps < 50 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.fps}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Scroll Events:</span>
          <span className={metrics.scrollJank > 10 ? 'text-red-400' : 'text-green-400'}>
            {metrics.scrollJank}/s
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage > 100 ? 'text-red-400' : 'text-green-400'}>
            {metrics.memoryUsage}MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>Low Power:</span>
          <span className={metrics.deviceCapabilities.isLowPower ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.deviceCapabilities.isLowPower ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Reduced Motion:</span>
          <span className={metrics.deviceCapabilities.prefersReducedMotion ? 'text-blue-400' : 'text-gray-400'}>
            {metrics.deviceCapabilities.prefersReducedMotion ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor; 