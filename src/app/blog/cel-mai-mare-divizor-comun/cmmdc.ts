"use client";
import { Step } from "./types";

export const observationText: Record<Step["type"], string> = {
  "the-end-b-is-cmmdc": "Din start: b este CMMDC fiindcă a este 0",
  "while-b-not-0-start":
    "a nu este 0, deci cât timp b nu este 0 tot scădem pe cel mic din cel mare",
  "a > b === true": "a > b deci se scade b din a",
  "a = a - b": "Rezultatul se pune în a",
  "a >= b === true": "a <= b deci se scade a din b",
  "b = b - a": "Rezultatul se pune în b",
  "while-b-not-0-end-and-return-a": "b a ajuns 0, cmmdc(a, b) = a",
};

export function runCmmdc(a: number, b: number, stepStorage: Step[]) {
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
