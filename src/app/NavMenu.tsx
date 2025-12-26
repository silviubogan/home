"use client";

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = {
  "Acasă": "/",
  "Lecție React": "/lectie-react",
};

export default function NavMenu() {
  const pn = usePathname();

  return <nav className='top-nav'>
    <ul>
      {
        Object.entries(links).map(([name, href]) => (
          <li key={href} style={{ backgroundColor: pn === href ? 'var(--accent-color)' : '' }}>
            <Link href={href} style={{ color: pn === href ? 'white' : '' }}>{name}</Link>
          </li>
        ))
      }
      <ThemeSwitcher />
    </ul>
  </nav>;
}