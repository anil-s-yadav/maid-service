import { useEffect, useState, useRef } from 'react';

/**
 * Hook to determine if an element is currently visible in the viewport
 * Used for scroll-triggered animations without heavy libraries
 * 
 * @param {Object} options IntersectionObserver options
 * @param {number} options.threshold 0 to 1, how much of element needs to be visible
 * @param {string} options.rootMargin margin around root (viewport)
 * @param {boolean} options.triggerOnce if true, stops observing after first intersection
 * @returns {[React.RefObject, boolean]} [ref to attach to element, boolean indicating if in view]
 */
export function useInView({ threshold = 0.1, rootMargin = '0px', triggerOnce = true } = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for browsers that don't support IntersectionObserver
    if (!window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsInView(true);
          // If triggerOnce is true, unobserve after it becomes visible
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // Only set to false if we want it to toggle in/out of view
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

/**
 * CSS classes for common animations to use with useInView
 * Example: className={`transition-all duration-700 ${inView ? fadeUp.in : fadeUp.out}`}
 */
export const animations = {
  fadeUp: {
    out: 'opacity-0 translate-y-8',
    in: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    out: 'opacity-0',
    in: 'opacity-100',
  },
  scaleUp: {
    out: 'opacity-0 scale-95',
    in: 'opacity-100 scale-100',
  },
  slideRight: {
    out: 'opacity-0 -translate-x-8',
    in: 'opacity-100 translate-x-0',
  },
  slideLeft: {
    out: 'opacity-0 translate-x-8',
    in: 'opacity-100 translate-x-0',
  },
};
