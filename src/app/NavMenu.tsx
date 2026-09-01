"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

const links = {
  Acasă: "/",
  Blog: "/blog",
};

export default function NavMenu() {
  const pn = usePathname();

  return (
    <nav className="top-nav">
      <ul className="nav-menu-list">
        {Object.entries(links).map(([name, href]) => (
          <li key={href} className={cx({ "active-nav-item": pn === href })}>
            <Link
              href={href}
              className={cx({ "active-nav-link": pn === href })}
            >
              {name}
            </Link>
          </li>
        ))}
        <ThemeSwitcher />
      </ul>
    </nav>
  );
}
