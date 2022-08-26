import type { SquareState } from "~/my-app";

type SquareProps = {
  value: SquareState;
  onClick: () => void;
  SQi: number;
  SQ2: number;
};

const Square1 = (props: SquareProps) => (
  <div className="square1">{props.value}</div>
);

export default Square1;
