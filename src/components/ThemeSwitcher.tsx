"use client";

import { useTheme } from 'next-themes';
import { RefObject, useCallback, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from '@/components/useOnClickOutside';

export function ThemeSwitcher() {
  const ref = useRef<unknown>(null);
  const ref2 = useRef<unknown>(null);
  const refs = useMemo(() => [ref, ref2], [ref, ref2]);
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(refs as RefObject<HTMLElement>[], () => setShowMenu(false));
  const doLight = useCallback(() => {
    setTheme('light');
    setShowMenu(false);
  }, [setTheme]);
  const doDark = useCallback(() => {
    setTheme('dark');
    setShowMenu(false);
  }, [setTheme]);
  const doSystem = useCallback(() => {
    setTheme('system');
    setShowMenu(false);
  }, [setTheme]);

  return (<>
    <div className='theme-switcher' style={{
        position: 'relative',
    }}>
    <button className={`menu-button ${showMenu ? 'active' : ''}`} onClick={() => {
      setShowMenu(!showMenu)
    }} style={{
    }} ref={ref as RefObject<HTMLButtonElement>}>(aspect)</button>
    <ul style={{
      display: showMenu ? 'block' : 'none',
    }} ref={ref2 as RefObject<HTMLUListElement>}>
      <li><button suppressHydrationWarning onClick={doSystem}>Sistem</button></li>
      <li><button suppressHydrationWarning className={theme === 'light' ? 'active' : ''} onClick={doLight}>🌞</button></li>
      <li><button suppressHydrationWarning className={theme === 'dark' ? 'active' : ''} onClick={doDark}>🌜</button></li>
    </ul>
  </div></>);
}