import React, { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <ol className="accordion">
      {items.map((item, index) => (
        <li
          key={index}
          style={{ fontWeight: "bold" }}
          className="accordion-item-header"
        >
          <div
            onClick={() => {
              const s = [...states];
              s[index] = !s[index];
              setStates(s);
            }}
          >
            {headers[index]}
            <span className="accordion-item-header-icon">
              {states[index] ? "▼" : "▲"}
            </span>
          </div>
          <motion.div
            initial={false}
            animate={{
              height: states[index] ? "auto" : 0,
              borderWidth: states[index] ? undefined : 0,
            }}
            transition={{ duration: 0.3 }}
            className="accordion-item-content-container"
            style={{ overflow: "hidden" }}
          >
            <div className="accordion-item-content">{item}</div>
          </motion.div>
        </li>
      ))}
    </ol>
  );
};

export default Accordion;
