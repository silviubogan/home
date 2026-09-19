"use client";

import CodeBlock from "@/components/CodeBlock";
import { useCallback } from "react";
import { useMemo, useState } from "react";
import Column from "./Column";
import { Step } from "./types";
import { Toolbar } from "./Toolbar";
import { observationText, runCmmdc } from "./cmmdc";
import StepsDisplay from "./StepsDisplay";

const Play = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [domA, setDomA] = useState(0);
  const [domB, setDomB] = useState(0);

  const [demoA, setDemoA] = useState(0);
  const [demoB, setDemoB] = useState(0);

  const [stepIndex, setStepIndex] = useState(0);
  const [observation, setObservation] = useState("Start");

  const runResult = useMemo(() => {
    const arr: Step[] = [];
    runCmmdc(a, b, arr);
    return arr;
  }, [a, b]);

  useMemo(() => {
    setDemoA(runResult[stepIndex].a);
    setDemoB(runResult[stepIndex].b);
    setObservation(observationText[runResult[stepIndex].type]);
  }, [runResult, stepIndex]);

  const handleDomAChange = useCallback((el: { target: { value: string } }) => {
    setDomA(parseInt(el.target.value));
  }, []);
  const handleDomBChange = useCallback((el: { target: { value: string } }) => {
    setDomB(parseInt(el.target.value));
  }, []);

  const handleStart = useCallback(() => {
    setA(domA);
    setB(domB);
  }, [domA, domB]);

  const handleBackClick = useCallback(() => {
    const newStepIndex = stepIndex - 1;
    setDemoA(runResult[newStepIndex].a);
    setDemoB(runResult[newStepIndex].b);
    setStepIndex(newStepIndex);
  }, [stepIndex, runResult]);
  const handleForwardClick = useCallback(() => {
    const newStepIndex = stepIndex + 1;
    setDemoA(runResult[newStepIndex].a);
    setDemoB(runResult[newStepIndex].b);
    setStepIndex(newStepIndex);
  }, [stepIndex, runResult]);

  return (
    <div>
      <Toolbar
        domA={domA}
        handleDomAChange={handleDomAChange}
        domB={domB}
        handleDomBChange={handleDomBChange}
        handleStart={handleStart}
        handleBackClick={handleBackClick}
        handleForwardClick={handleForwardClick}
        stepIndex={stepIndex}
        runResult={runResult}
      />
      <p>Pasul curent: {observation}.</p>
      <div className="scene">
        <Column variableName="a" units={demoA} />
        <Column variableName="b" units={demoB} />
        <StepsDisplay
          stepIndex={stepIndex}
          runResult={runResult}
          onChange={(i) => {
            setStepIndex(i);
          }}
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section>
        <p>
          Versiunea pe bază de scădere a algoritmului lui Euclid pentru cel mai
          mare divizor comun (CMMDC) este următoarea:
        </p>
        <CodeBlock // pseudocode highlighting somehow
          block={`funcție CMMDC(a, b)
  dacă a = 0
      întoarce b
  cât timp b ≠ 0
      dacă a > b
          a := a − b
      altfel
          b := b − a
  întoarce a`}
        />
        <Play />
      </section>
    </>
  );
}
