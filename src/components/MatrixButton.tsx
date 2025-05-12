import { useRef, useEffect, useCallback } from "react";

export const MatrixButton: React.FC<{
  href?: string;
  value?: string;
}> = ({ href, value }) => {
  const cRef = useRef<HTMLCanvasElement | null>(null);
  const bRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (bRef.current && cRef.current) {
      const { width, height } = bRef.current.getBoundingClientRect();

      // @ts-expect-error matrix is loaded with a separate script tag in HTML
      // so its type is not known (the issue is the missing @types/cmatrix package
      // in npm)
      matrix(cRef.current, {
        chars: "aăâbcdefghiîjklmnopqrsștțuvwxyzAĂÂBCDEFGHIÎJKLMNOPQRSȘTȚUVWXYZ",
        //matrix.range(0x30a1, 0x30f6).concat(matrix.range(0x0030, 0x0039)),
        font_size: 20,
        width,
        height,
      });
    }
    return () => {};
  }, []);

  const handleClick = useCallback(() => {
    if (href) {
      location.href = href;
    }
  }, [href]);

  return (
    <>
      <button
        className="matrix-button"
        onClick={handleClick}
        ref={(r) => {
          bRef.current = r;
        }}
      >
        <canvas
          ref={(r) => {
            cRef.current = r;
          }}
        />
        <p>{value}</p>
      </button>
    </>
  );
};
