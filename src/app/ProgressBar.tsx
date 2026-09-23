"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ProgressBar = ({}) => {
  const { scrollYProgress } = useScroll();

  // true if maximum width of device is 767px
  const [matches, setMatches] = useState(true);

  const matchRef = useRef<MediaQueryList>(null);
  useEffect(() => {
    // use this MediaQueryList object from the global scope
    // because it evaluates only when read with the matches property,
    // so there is no need to use a ref
    matchRef.current = window.matchMedia("(min-width: 768px)");
    setMatches(!matchRef.current.matches!);
    matchRef.current.addEventListener("change", () => {
      setMatches(!matchRef.current!.matches!);
    });
    return () => {
      matchRef.current = null;
    };
  }, []);

  return (
    matches && (
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 7,
          originX: 0,
          backgroundColor: "yellow",
          zIndex: 3,
        }}
      />
    )
  );
};
