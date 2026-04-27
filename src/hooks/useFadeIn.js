// useFadeIn.js
import { useEffect, useRef } from 'react';

export default function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
    }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}