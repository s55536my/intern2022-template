import type { Repeat } from "typescript-tuple";
import Square from "~/my-app/Board/Square/Square";
import Square1 from "~/my-app/Board/Square/Square1";
import Square2 from "~/my-app/Board/Square/Square2";
import Square3 from "~/my-app/Board/Square/Square3";
import type { Database } from "..";

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
  const renderSquare = (i: number) => {
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
      if (props.nowmonthposition !== 0 && i === props.nowmonthposition) {
        return (
          <Square3
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
            SQi={props.month}
            SQ2={props.year}
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

  /*if(props.today !== 0){
    for(let j = 0;j<32;j++){
       if(j === props.today){
       check[props.nowmonthposition] = <Today day={j}/>;
       }
    }
   }else{
    for(let jj = 7;jj<49;jj++){
       check[jj] = null;
    }
   }*/

  return (
    /*<table>
    <tr>
        <th scope="youbi">{renderSquare(0)}</th>
        <th scope="youbi">{renderSquare(1)}</th>
        <th scope="youbi">{renderSquare(2)}</th>
        <th scope="youbi">{renderSquare(3)}</th>
        <th scope="youbi">{renderSquare(4)}</th>
        <th scope="youbi">{renderSquare(5)}</th>
        <th scope="youbi">{renderSquare(6)}</th>
    </tr>
    <tr>
        <td scope="dayspace0">{renderSquare(7)}{check[7]}</td>
        <td scope="dayspace1">{renderSquare(8)}{check[8]}</td>
        <td scope="dayspace2">{renderSquare(9)}{check[9]}</td>
        <td scope="dayspace3">{renderSquare(10)}{check[10]}</td>
        <td scope="dayspace4">{renderSquare(11)}{check[11]}</td>
        <td scope="dayspace5">{renderSquare(12)}{check[12]}</td>
        <td scope="dayspace7">{renderSquare(13)}{check[13]}</td>
    </tr>
    <tr>
        <td scope="dayspace8">{renderSquare(14)}{check[14]}</td>
        <td scope="dayspace9">{renderSquare(15)}{check[15]}</td>
        <td scope="dayspace10">{renderSquare(16)}{check[16]}</td>
        <td scope="dayspace11">{renderSquare(17)}{check[17]}</td>
        <td scope="dayspace12">{renderSquare(18)}{check[18]}</td>
        <td scope="dayspace13">{renderSquare(19)}{check[19]}</td>
        <td scope="dayspace14">{renderSquare(20)}{check[20]}</td>
    </tr>
    <tr>
        <td scope="dayspace15">{renderSquare(21)}{check[21]}</td>
        <td scope="dayspace16">{renderSquare(22)}{check[22]}</td>
        <td scope="dayspace17">{renderSquare(23)}{check[23]}</td>
        <td scope="dayspace18">{renderSquare(24)}{check[24]}</td>
        <td scope="dayspace19">{renderSquare(25)}{check[25]}</td>
        <td scope="dayspace20">{renderSquare(26)}{check[26]}</td>
        <td scope="dayspace21">{renderSquare(27)}{check[27]}</td>
    </tr>
    <tr>
        <td scope="dayspace22">{renderSquare(28)}{check[28]}</td>
        <td scope="dayspace23">{renderSquare(29)}{check[29]}</td>
        <td scope="dayspace24">{renderSquare(30)}{check[30]}</td>
        <td scope="dayspace25">{renderSquare(31)}{check[31]}</td>
        <td scope="dayspace26">{renderSquare(32)}{check[32]}</td>
        <td scope="dayspace27">{renderSquare(33)}{check[33]}</td>
        <td scope="dayspace28">{renderSquare(34)}{check[34]}</td>
    </tr>
    <tr>
        <td scope="dayspace29">{renderSquare(35)}{check[35]}</td>
        <td scope="dayspace30">{renderSquare(36)}{check[36]}</td>
        <td scope="dayspace31">{renderSquare(37)}{check[37]}</td>
        <td scope="dayspace32">{renderSquare(38)}{check[38]}</td>
        <td scope="dayspace33">{renderSquare(39)}{check[39]}</td>
        <td scope="dayspace34">{renderSquare(40)}{check[40]}</td>
        <td scope="dayspace35">{renderSquare(41)}{check[41]}</td>
    </tr>
    <tr>
        <td scope="dayspace36">{renderSquare(42)}{check[42]}</td>
        <td scope="dayspace37">{renderSquare(43)}{check[43]}</td>
        <td scope="dayspace38">{renderSquare(44)}{check[44]}</td>
        <td scope="dayspace39">{renderSquare(45)}{check[45]}</td>
        <td scope="dayspace40">{renderSquare(46)}{check[46]}</td>
        <td scope="dayspace41">{renderSquare(47)}{check[47]}</td>
        <td scope="dayspace42">{renderSquare(48)}{check[48]}</td>
    </tr>
</table>*/

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
