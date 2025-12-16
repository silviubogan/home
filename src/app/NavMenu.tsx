"use client";

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
          <li key={href} style={{ color: pn === href ? 'white' : '', backgroundColor: pn === href ? '#184f7d' : '' }}>
            <Link href={href}>{name}</Link>
          </li>
        ))
      }
    </ul>
  </nav>;
}