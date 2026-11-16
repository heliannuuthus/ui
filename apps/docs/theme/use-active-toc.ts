import { useEffect, useState } from 'react';
import type { TocItem } from './table-of-contents';

export const useActiveToc = (items: readonly TocItem[]) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (items.length === 0) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      let nextId = '';
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      for (const item of items) {
        const top = document
          .getElementById(item.id)
          ?.getBoundingClientRect().top;
        // Match the five-rem anchor offset, with room below the header.
        if (
          top !== undefined &&
          (top <= 96 || (atBottom && top < window.innerHeight))
        ) {
          nextId = item.id;
        }
      }
      setActiveId(nextId);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [items]);

  return activeId;
};
