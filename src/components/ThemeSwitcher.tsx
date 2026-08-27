"use client";

import { useTheme } from "next-themes";
import { RefObject, useCallback, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "@/components/useOnClickOutside";
import cx from "classnames";
import { motion } from "framer-motion";

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

const ButtonContent = ({ icon, label }: { icon: string; label: string }) => {
  return (
    <>
      <div className="icon">{icon}</div>
      <div
        className="label"
        style={{
          flexGrow: 1,
          textAlign: "right",
        }}
      >
        {label}
      </div>
    </>
  );
};

export function ThemeSwitcher() {
  const ref = useRef<unknown>(null);
  const ref2 = useRef<unknown>(null);
  const refs = useMemo(() => [ref, ref2], [ref, ref2]);
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  useOnClickOutside(refs as RefObject<HTMLElement>[], () => setShowMenu(false));
  const doLight = useCallback(() => {
    setTheme("light");
    setShowMenu(false);
  }, [setTheme]);
  const doDark = useCallback(() => {
    setTheme("dark");
    setShowMenu(false);
  }, [setTheme]);
  const doSystem = useCallback(() => {
    setTheme("system");
    setShowMenu(false);
  }, [setTheme]);

  return (
    <>
      <div
        className="theme-switcher"
        style={{
          position: "relative",
        }}
      >
        <button
          className={`menu-button ${showMenu ? "active" : ""}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          style={{}}
          ref={ref as RefObject<HTMLButtonElement>}
        >
          Aspect
        </button>

        <motion.ul
          initial={false}
          animate={showMenu ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.333 }}
          className={cx("theme-menu", { active: showMenu })}
          ref={ref2 as RefObject<HTMLUListElement>}
        >
          <li>
            <button suppressHydrationWarning onClick={doSystem}>
              <ButtonContent icon="😊" label="Sistem" />
            </button>
          </li>
          <li>
            <button
              suppressHydrationWarning
              className={theme === "light" ? "active" : ""}
              onClick={doLight}
            >
              <ButtonContent icon="🌞" label="Lumină" />
            </button>
          </li>
          <li>
            <button
              suppressHydrationWarning
              className={theme === "dark" ? "active" : ""}
              onClick={doDark}
            >
              <ButtonContent icon="🌛" label="Întuneric" />
            </button>
          </li>
        </motion.ul>
      </div>
    </>
  );
}
