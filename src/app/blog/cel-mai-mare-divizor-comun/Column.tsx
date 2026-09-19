import { Fragment } from "react";

const Column = ({
  variableName,
  units,
}: {
  variableName: string;
  units: number;
}) => {
  let col1Render = [];
  col1Render.push(
    <div
      key="variable-name"
      style={{
        fontSize: "5rem",
      }}
    >
      {variableName}
    </div>,
  );
  col1Render.push(
    <div
      key="first-horizontal-border"
      style={{
        width: "5rem",
        borderTop: "0.25rem solid var(--foreground)",
      }}
    ></div>,
  );
  for (let i = 0; i < units; ++i) {
    col1Render.push(
      <Fragment key={i}>
        <div
          style={{
            height: "3rem",
            width: "0.25rem",
            backgroundColor: "var(--foreground)",
          }}
        ></div>
        <div
          style={{
            width: "5rem",
            borderBottom: "0.25rem solid var(--foreground)",
          }}
        ></div>
      </Fragment>,
    );
  }

  return (
    <div
      className="col-1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {col1Render}
    </div>
  );
};

export default Column;
