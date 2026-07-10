'use client';

import { useEffect, useRef, useState } from 'react';

export type AnimationType = 
  | 'fade-up' 
  | 'fade-left' 
  | 'fade-right' 
  | 'scale' 
  | 'bounce' 
  | 'rotate' 
  | 'slide-rotate'
  | 'float'
  | 'none';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  animationType?: AnimationType;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, delay = 0, animationType = 'fade-up' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const animationMap: Record<AnimationType, string> = {
      'fade-up': 'animate-fade-in-up',
      'fade-left': 'animate-fade-in-left',
      'fade-right': 'animate-fade-in-right',
      'scale': 'animate-scale-in',
      'bounce': 'animate-bounce-in',
      'rotate': 'animate-rotate-in',
      'slide-rotate': 'animate-slide-rotate',
      'float': 'animate-float',
      'none': '',
    };

    return animationMap[animationType] || 'animate-fade-in-up';
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
};
