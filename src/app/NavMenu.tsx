"use client";

import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import { RefObject, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "@/components/useOnClickOutside";
import { motion } from "framer-motion";

const links = {
  Acasă: "/",
  Blog: "/blog",
};

interface NavUlProps {
  pathname: string;
}

const NavUl = ({ pathname }: NavUlProps) => {
  const isInBlog = pathname.startsWith("/blog/");

  return (
    <ul className="nav-menu-list">
      {Object.entries(links).map(([name, href]) => (
        <li
          key={href}
          className={cx({
            "active-nav-item":
              pathname === href || (isInBlog && href === "/blog"),
          })}
        >
          <Link
            href={href}
            className={cx({
              "active-nav-link":
                pathname === href || (isInBlog && href === "/blog"),
            })}
          >
            {name}
          </Link>
        </li>
      ))}
      <ThemeSwitcher />
    </ul>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    transform: "translateY(33%)",
    display: "none",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transform: "translateY(0)",
    display: "block",
  },
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
      <motion.nav
        className="mobile-nav"
        style={{ display: mobileNavOpen ? "block" : "none" }}
        ref={ref}
        initial={false}
        animate={mobileNavOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.333 }}
      >
        <NavUl pathname={pathname} />
      </motion.nav>
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
