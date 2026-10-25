import { useState, useEffect, useRef, CSSProperties, RefObject } from 'react';

export type ScrollDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  durationMs?: number;
  direction?: ScrollDirection;
  distance?: number;
  once?: boolean;
}

export interface UseScrollRevealReturn<T extends HTMLElement = HTMLDivElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  style: CSSProperties;
  className: string;
}

/**
 * Custom hook `useScrollReveal` that integrates with `IntersectionObserver`
 * to manage entrance animations for sections and items as the user scrolls,
 * while strictly honoring `prefers-reduced-motion` for accessibility.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> {
  const {
    threshold = 0.08,
    rootMargin = '0px 0px -20px 0px',
    delayMs = 0,
    durationMs = 700,
    direction = 'up',
    distance = 28,
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    // If prefers-reduced-motion is requested, reveal immediately without animation
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    // Fallback if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if element is already within viewport on mount to prevent hidden flash
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.95 && rect.bottom >= 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // Guaranteed fallback: ensures elements are never stuck hidden under rapid scroll
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, once]);

  const getInitialTransform = (): string => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'none':
        return 'none';
      default:
        return `translateY(${distance}px)`;
    }
  };

  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const style: CSSProperties = isReducedMotion
    ? {
        opacity: 1,
        transform: 'none',
      }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delayMs}ms`,
        willChange: 'opacity, transform',
      };

  const className = `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }`;

  return { ref, isVisible, style, className };
}
