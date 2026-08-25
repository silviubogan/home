import React, { useState } from "react";
import { motion } from "framer-motion";
import cx from "classnames";

const Accordion = ({
  items,
  headers,
}: {
  items: React.ReactNode[];
  headers: string[];
}) => {
  const [states, setStates] = useState<boolean[]>([
    true,
    ...new Array(items.length - 1).fill(false),
  ]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ol className="accordion">
      {items.map((item, index) => (
        <li key={index}>
          <div
            onClick={() => {
              const s = [...states];
              s[index] = !s[index];
              setStates(s);
            }}
            className={cx("accordion-item-header", { active: states[index] })}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>{headers[index]}</div>
            <span
              className={cx("accordion-item-header-icon", { "item-header-hovered": hoveredIndex === index })}
            >▼</span>
          </div>
          <motion.div
            initial={index === 0}
            animate={{
              height: states[index] ? "auto" : 0,
              borderWidth: states[index] ? 1 : 0,
              opacity: states[index] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="accordion-item-content-container"
          >
            <div className="accordion-item-content">{item}</div>
          </motion.div>
        </li>
      ))}
    </ol>
  );
};

export default Accordion;
