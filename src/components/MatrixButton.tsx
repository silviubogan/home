import { useRef, useEffect, useCallback } from "react";

export const MatrixButton: React.FC<{
  href?: string;
  value?: string;
}> = ({ href, value }) => {
  const cRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // @ts-expect-error matrix is loaded with a separate script tag in HTML
    // so its type is not known (the issue is the missing @types/cmatrix package
    // in npm)
    matrix(cRef.current, {
      chars: "aăâbcdefghiîjklmnopqrsștțuvwxyzAĂÂBCDEFGHIÎJKLMNOPQRSȘTȚUVWXYZ",
      //matrix.range(0x30a1, 0x30f6).concat(matrix.range(0x0030, 0x0039)),
      font_size: 200, // TODO: optimize by setting correct aspect ratio based width & height
    });
    return () => {};
  }, []);

  const handleClick = useCallback(() => {
    if (href) {
      location.href = href;
    }
  }, [href]);

  return (
    <>
      <button className="matrix-button" onClick={handleClick}>
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
