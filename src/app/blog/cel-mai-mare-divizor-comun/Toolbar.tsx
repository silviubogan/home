"use client";
import { useMemo } from "react";
import { Step } from "./types";

export const Toolbar = ({
  domA,
  handleDomAChange,
  domB,
  handleDomBChange,
  handleStart,
  handleBackClick,
  handleForwardClick,
  stepIndex,
  runResult,
}: {
  domA: number;
  handleDomAChange: (el: { target: { value: string } }) => void;
  domB: number;
  handleDomBChange: (el: { target: { value: string } }) => void;
  handleStart: () => void;
  handleBackClick: () => void;
  handleForwardClick: () => void;
  stepIndex: number;
  runResult: Step[];
}) => {
  const pageString = useMemo(() => {
    return stepIndex + 1 + " / " + runResult.length;
  }, [stepIndex, runResult]);

  const backDisabled = useMemo(() => {
    return stepIndex <= 0;
  }, [stepIndex]);

  const forwardDisabled = useMemo(() => {
    return stepIndex >= runResult.length - 1;
  }, [stepIndex, runResult]);

  return (
    <p className="toolbar">
      a = <input type="number" value={domA} onChange={handleDomAChange} /> b ={" "}
      <input type="number" value={domB} onChange={handleDomBChange} />{" "}
      <button onClick={handleStart}>Start</button>;{" "}
      <button onClick={handleBackClick} disabled={backDisabled}>
        &lt;
      </button>{" "}
      {pageString}{" "}
      <button onClick={handleForwardClick} disabled={forwardDisabled}>
        &gt;
      </button>
    </p>
  );
};
