import { RefObject, useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  refs: RefObject<T>[],
  handler: (event: Event) => void,
  options?: { events?: string[] }
) {
  useEffect(() => {
    const events = options?.events ?? ['pointerdown'];
    const listener = (event: Event) => {
      let doHide = true;
      for (const ref of refs) {
        const el = ref?.current;
        if (!el) continue;

        // Support Shadow DOM
        const path = (event as { composedPath?: () => EventTarget[] }).composedPath?.() as EventTarget[] | undefined;
        const clickedInside = path ? path.includes(el) : el.contains(event.target as Node);
        if (!clickedInside) {
          doHide &&= true;
        } else {
          doHide &&= false;
        }
      }
      if (doHide) {
        handler(event);
      }
    };

    for (const ev of events) document.addEventListener(ev, listener, true);
    return () => {
      for (const ev of events) document.removeEventListener(ev, listener, true);
    };
  }, [refs, handler, options]);
}