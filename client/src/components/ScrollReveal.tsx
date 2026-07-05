import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateY(20px)'; // استبدال الأفقي بالرأسي لـ RTL
      case 'right':
        return 'translateY(20px)'; // استبدال الأفقي بالرأسي لـ RTL
      case 'up':
      default:
        return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        opacity: 0,
        transform: getInitialTransform(),
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

// إضافة الأنماط العامة للـ reveal
export const revealStyles = `
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .reveal-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  /* تحسين سلاسة التمرير */
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  /* تحسين الانتقالات */
  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* تحسين الأداء */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
