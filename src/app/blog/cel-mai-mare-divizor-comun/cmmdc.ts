"use client";
import { Step } from "./types";

export const observationText: Record<Step["type"], string> = {
  start: "algoritmul lui Euclid a început pentru a și b",
  "the-end-b-is-cmmdc": "b este CMMDC fiindcă a = 0",
  "while-b-not-0-start":
    "a ≠ 0, deci, dacă și cât timp, b ≠ 0 tot scădem pe cel mic din cel mare",
  "a > b === true": "a > b deci se scade b din a",
  "a = a - b": "rezultatul se pune în a",
  "a >= b === true": "a ≤ b deci se scade a din b",
  "b = b - a": "rezultatul se pune în b",
  "while-b-not-0-end-and-return-a": "b a ajuns 0, CMMDC(a, b) = a",
};

export function runCmmdc(a: number, b: number, stepStorage: Step[]) {
  stepStorage.push({
    type: "start",
    a: a,
    b: b,
  });
  if (a === 0) {
    stepStorage.push({
      type: "the-end-b-is-cmmdc",
      a: a,
      b: b,
    });
    return b;
  }
  while (b !== 0) {
    stepStorage.push({
      type: "while-b-not-0-start",
      a: a,
      b: b,
    });
    if (a > b) {
      stepStorage.push({
        type: "a > b === true",
        a: a,
        b: b,
      });
      a = a - b;
      stepStorage.push({
        type: "a = a - b",
        a: a,
        b: b,
      });
    } else {
      stepStorage.push({
        type: "a >= b === true",
        a: a,
        b: b,
      });
      b = b - a;
      stepStorage.push({
        type: "b = b - a",
        a: a,
        b: b,
      });
    }
  }
  stepStorage.push({
    type: "while-b-not-0-end-and-return-a",
    a: a,
    b: b,
  });
  return a;
}
