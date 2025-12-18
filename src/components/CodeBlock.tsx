import React from "react";
import { Highlight, themes } from "prism-react-renderer";

const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`;

export const CodeBlock = ({ block }: { block?: string }) => (
    <Highlight
        theme={themes.vsDark}
        code={block?.trim() || codeBlock.trim()}
        language="tsx"
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
            const o = Object.assign({}, style, {
                padding: "1rem",
            });
            return (
                <pre style={o}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {/* <span>{i + 1}</span> */}
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            );
        }}
    </Highlight>
);

export default CodeBlock;