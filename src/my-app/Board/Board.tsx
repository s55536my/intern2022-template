import type { Repeat } from "typescript-tuple";
import Square from "~/my-app/Board/Square/Square";
import Square1 from "~/my-app/Board/Square/Square1";
import Square2 from "~/my-app/Board/Square/Square2";
import Square3 from "~/my-app/Board/Square/Square3";
import Square4 from "~/my-app/Board/Square/Square4";
import Square5 from "~/my-app/Board/Square/Square5";
import type { Database, SquareState } from "..";

type BoardState = Repeat<SquareState, 49>;

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
  today: number;
  nowmonthposition: number;
  B_start_day: number;
  B_end_day: number;
  month: number;
  year: number;
  count: number;
  setsavedata: React.Dispatch<React.SetStateAction<Database[]>>;
  savedata: Database[];
};

const Board = (props: BoardProps) => {
  //7×7の各マスになんの値を入れるかの条件分岐
  const renderSquare = (i: number) => {
    //曜日の表示用
    if (i < 7) {
      return (
        <Square1
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
          SQi={i}
          SQ2={props.nowmonthposition}
        />
      );
    } else if (i >= props.B_start_day && i < props.B_end_day + 1) {
      //日にち入りの部分の表示(今日のデータの場合)
      if (props.nowmonthposition !== 0 && i === props.nowmonthposition) {
        if (Number(props.squares[i]) < 10) {
          return (
            <Square4
              value={props.squares[i]}
              month={props.month}
              year={props.year}
              count={props.count}
              setsavedata={props.setsavedata}
              savedata={props.savedata}
            />
          );
        } else {
          return (
            <Square3
              value={props.squares[i]}
              month={props.month}
              year={props.year}
              count={props.count}
              setsavedata={props.setsavedata}
              savedata={props.savedata}
            />
          );
        }
        //日にち入りの部分の表示(今日のデータじゃない場合)
      } else {
        if (Number(props.squares[i]) < 10) {
          return (
            <Square5
              value={props.squares[i]}
              month={props.month}
              year={props.year}
              count={props.count}
              setsavedata={props.setsavedata}
              savedata={props.savedata}
            />
          );
        } else {
          return (
            <Square
              value={props.squares[i]}
              month={props.month}
              year={props.year}
              count={props.count}
              setsavedata={props.setsavedata}
              savedata={props.savedata}
            />
          );
        }
      }
      //日にちのデータがない場合(押せないようにするため別に)
    } else {
      return (
        <Square2
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
          SQi={i}
          SQ2={props.nowmonthposition}
        />
      );
    }
  };

  //カレンダーの表示
  return (
    <div>
      <div className="board-row1">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
      </div>
      <div className="board-row">
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
      </div>
      <div className="board-row">
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
      </div>
      <div className="board-row">
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
      </div>
      <div className="board-row">
        {renderSquare(35)}
        {renderSquare(36)}
        {renderSquare(37)}
        {renderSquare(38)}
        {renderSquare(39)}
        {renderSquare(40)}
        {renderSquare(41)}
      </div>
      <div className="board-row">
        {renderSquare(42)}
        {renderSquare(43)}
        {renderSquare(44)}
        {renderSquare(45)}
        {renderSquare(46)}
        {renderSquare(47)}
        {renderSquare(48)}
      </div>
    </div>
  );
};

export default Board;
