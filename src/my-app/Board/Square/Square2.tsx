import type { SquareState } from "~/my-app";

type SquareProps = {
  value: SquareState;
  onClick: () => void;
  SQi: number;
  SQ2: number;
};

const Square2 = (props: SquareProps) => (
  <div className="square2">{props.value}</div>
);

export default Square2;
