import { steps } from "framer-motion";
import { observationText } from "./cmmdc";
import { Step } from "./types";

const StepsDisplay = ({
  stepIndex,
  runResult,
  onChange,
}: {
  stepIndex: number;
  runResult: Step[];
  onChange?: (i: number) => void;
}) => {
  return (
    <aside>
      <table>
        <thead>
          <tr>
            <th>Nr. crt.</th>
            <th>Observație</th>
            <th>a</th>
            <th>b</th>
          </tr>
        </thead>
        <tbody>
          {runResult.map((step, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  onChange?.(i);
                }}
                className={stepIndex === i ? "active" : "inactive"}
              >
                <td>{i + 1}</td>
                <td>{observationText[step.type]}</td>
                <td>{step.a}</td>
                <td>{step.b}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={4}>
              cmmdc(a, b) ={" "}
              {Math.max(
                runResult[runResult.length - 1].a,
                runResult[runResult.length - 1].b,
              )}
            </th>
          </tr>
        </tfoot>
      </table>
    </aside>
  );
};

export default StepsDisplay;
