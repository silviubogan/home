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
        <li key={index}>
          <div
            onClick={() => {
              const s = [...states];
              s[index] = !s[index];
              setStates(s);
            }}
            className="accordion-item-header"
          >
            {headers[index]}
            <span className="accordion-item-header-icon">
              {states[index] ? "▼" : "▲"}
            </span>
          </div>
          <motion.div
            initial={index === 0}
            animate={{
              height: states[index] ? "auto" : 0,
              borderWidth: states[index] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="accordion-item-content-container"
            style={{ overflow: "hidden", border: "1px solid #ccc" }}
          >
            <div className="accordion-item-content">{item}</div>
          </motion.div>
        </li>
      ))}
    </ol>
  );
};

export default Accordion;
