import { useEffect, useRef } from 'react';

// Lazily-created shared observer so every reveal element doesn't spin up its own.
let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  return sharedObserver;
}

/**
 * Attach the returned ref to any element with the `reveal` class.
 * It will fade/slide in once it scrolls into view.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    if (!observer) {
      el.classList.add('is-visible');
      return;
    }

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
