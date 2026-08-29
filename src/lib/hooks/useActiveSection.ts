'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const ACTIVE_OFFSET = 96;

    const updateActiveId = () => {
      let current = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ACTIVE_OFFSET) {
          current = section.id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    updateActiveId();
    window.addEventListener('scroll', updateActiveId, { passive: true });
    window.addEventListener('resize', updateActiveId);

    return () => {
      window.removeEventListener('scroll', updateActiveId);
      window.removeEventListener('resize', updateActiveId);
    };
  }, [ids]);

  return activeId;
}
