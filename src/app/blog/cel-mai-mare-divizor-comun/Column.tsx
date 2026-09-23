import { Fragment, RefObject } from "react";

const unitMinHeight = "2rem";

const Column = ({
  variableName,
  units,
  ref,
}: {
  variableName: string;
  units: number;
  ref: RefObject<null | HTMLDivElement>;
}) => {
  const col1Render = [];
  col1Render.push(
    <div
      key="variable-name"
      style={{
        fontSize: "2rem",
      }}
    >
      {variableName}
    </div>,
  );
  col1Render.push(
    <div
      key="first-horizontal-border"
      style={{
        width: "3rem",
        borderTop: "0.25rem solid var(--foreground)",
      }}
    ></div>,
  );
  for (let i = 0; i < units; ++i) {
    col1Render.push(
      <Fragment key={i}>
        <div
          style={{
            minHeight: unitMinHeight,
            width: "0.25rem",
            backgroundColor: "var(--foreground)",
          }}
        ></div>
        <div
          style={{
            width: "3rem",
            borderBottom: "0.25rem solid var(--foreground)",
          }}
        ></div>
      </Fragment>,
    );
  }

  return (
    <div
      className="col"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={ref}
    >
      {col1Render}
    </div>
  );
};

export default Column;
