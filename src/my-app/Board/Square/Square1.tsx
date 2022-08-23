type SquareState =
| "月曜日"
| "火曜日"
| "水曜日"
| "木曜日"
| "金曜日"
| "土曜日"
| "日曜日"
  | number
  | null;

type SquareProps = {
  value: SquareState;
  onClick: () => void;
  SQi: number;
  SQ2: number;
};

const Square1 = (props: SquareProps) => (
      <div className="square1">
        {props.value}
      </div>
);

export default Square1;
