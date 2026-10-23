import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is scrolled to the very bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        if (sectionIds.length > 0) {
          setActiveId(sectionIds[sectionIds.length - 1]);
          return;
        }
      }

      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }
      setActiveId(sectionIds[0] || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
