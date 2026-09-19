export type Step = {
  type:
    | "the-end-b-is-cmmdc"
    | "while-b-not-0-start"
    | "a > b === true"
    | "a = a - b"
    | "a >= b === true"
    | "b = b - a"
    | "while-b-not-0-end-and-return-a";
  a: number;
  b: number;
};
