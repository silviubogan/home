"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import React, { RefObject, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "@/components/useOnClickOutside";

const links = {
  Acasă: "/",
  Blog: "/blog",
};

interface NavUlProps {
  pathname: string;
}

const NavUl = ({ pathname }: NavUlProps) => {
  return (
    <ul className="nav-menu-list">
      {Object.entries(links).map(([name, href]) => (
        <li key={href} className={cx({ "active-nav-item": pathname === href })}>
          <Link
            href={href}
            className={cx({ "active-nav-link": pathname === href })}
          >
            {name}
          </Link>
        </li>
      ))}
      <ThemeSwitcher />
    </ul>
  );
};

export default function NavMenu() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);
  const refs = useMemo(() => [ref, ref2], [ref, ref2]);
  useOnClickOutside(refs as RefObject<HTMLElement>[], () =>
    setMobileNavOpen(false),
  );

  return (
    <>
      <nav className="top-nav">
        <NavUl pathname={pathname} />
      </nav>
      <nav
        className="mobile-nav"
        style={{ display: mobileNavOpen ? "block" : "none" }}
        ref={ref}
      >
        <NavUl pathname={pathname} />
      </nav>
      <button
        className="mobile-menu"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        ref={ref2}
      >
        <hr />
        <hr />
        <hr />
      </button>
    </>
  );
}
