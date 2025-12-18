import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export const CodeBlock = ({ block }: { block?: string }) => (
    <Highlight
        theme={themes.vsDark}
        code={block?.trim() || ""}
        language="tsx"
    >
        {({ style, tokens, getLineProps, getTokenProps }) => {
            const o = Object.assign({}, style, {
                padding: "1rem",
            });
            return (
                <pre style={o}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
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