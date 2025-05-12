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
        <div key={index} className="accordion-item">
          <li
            key={index}
            onClick={() => {
              const s = [...states];
              s[index] = !s[index];
              setStates(s);
            }}
            style={{ fontWeight: "bold" }}
            className="accordion-item-header"
          >
            {headers[index]}
            <span
              className="accordion-item-header-icon"
              style={{ float: "right" }}
            >
              {states[index] ? "▼" : "▲"}
            </span>
          </li>

          <motion.div
            initial={false}
            animate={{ height: states[index] ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-item-content-container"
            style={{ overflow: "hidden" }}
          >
            <div className="accordion-item-content">{item}</div>
          </motion.div>
        </div>
      ))}
    </ol>
  );
};

export default Accordion;
