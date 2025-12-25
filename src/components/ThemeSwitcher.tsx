"use client";

import { useTheme } from 'next-themes';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from '@/components/useOnClickOutside';

export function ThemeSwitcher() {
  const ref = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const refs = useMemo(() => [ref, ref2], [ref.current, ref2.current]);
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(refs, () => setShowMenu(false));
  const doLight = useCallback(() => {
    setTheme('light');
  }, [setTheme]);
  const doDark = useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  return (<>
    <div className='theme-switcher' style={{
        position: 'relative',
    }}>
    <button className='menu-button' onClick={() => {
      setShowMenu(!showMenu)
    }} style={{
    }} ref={ref}>Aspect</button>
    <ul style={{
      display: showMenu ? 'block' : 'none',
    }} ref={ref2}>
      <li><button onClick={() => setTheme('system')}>Sistem</button></li>
      <li><button className={theme === 'light' ? 'active' : ''} onClick={doLight}>🌞</button></li>
      <li><button className={theme === 'dark' ? 'active' : ''} onClick={doDark}>🌜</button></li>
    </ul>
  </div></>);
}