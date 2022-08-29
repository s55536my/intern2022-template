import { useState } from "react";
import Board from "./Board/Board";
import "./index.css";
import type { Repeat } from "typescript-tuple";
import { Icon } from "@chakra-ui/icons";
import { RiCalendar2Fill } from "react-icons/ri";

export type SquareState =
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

type Step = {
  squares: BoardState;
};

type GameState = {
  history: Step[];
};

const hiduke = new Date();
const startDayOfWeek = new Date(
  hiduke.getFullYear(),
  hiduke.getMonth(),
  1
).getDay();
let new_startDayOfWeek = startDayOfWeek;
const day = hiduke.getDate();
const endDate = new Date(
  hiduke.getFullYear(),
  hiduke.getMonth() + 1,
  0
).getDate();
const month_day: Array<number> = [
  31, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31,
];
let onetime = -1;
let endweek = startDayOfWeek;
let ii = 0;
let now_day = 0;
let start_day = 0;
let end_day = 0;
const count = 0;

const today_year = hiduke.getFullYear();
const today_month = hiduke.getMonth() + 1;

let checknumber = 0;

export type Database = {
  event: string;
  date: string;
  starttime: string;
  endtime: string;
  eventDetail: string;
  position: number;
};

const Game = () => {
  const [state] = useState<GameState>({
    history: [
      {
        squares: [
          "日曜日",
          "月曜日",
          "火曜日",
          "水曜日",
          "木曜日",
          "金曜日",
          "土曜日",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      },
    ],
  });

  const [year, setyear] = useState(hiduke.getFullYear());
  const [month, setmonth] = useState(hiduke.getMonth() + 1);

  const [savedata, setSavedata] = useState<Database[]>([]);

  const current = state.history[0];

  let daycount = 0;

  if (checknumber === 0 && onetime === 0) {
    if (startDayOfWeek === 0) {
      for (let i = 7; i < endDate + 7; i++) {
        daycount = daycount + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
      }
      onetime = 1;
      start_day = 7;
      end_day = endDate + 6;
    } else if (startDayOfWeek === 1 && onetime === 0) {
      for (let i = 8; i < endDate + 8; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 8;
      end_day = endDate + 7;
    } else if (startDayOfWeek === 2 && onetime === 0) {
      for (let i = 9; i < endDate + 9; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 9;
      end_day = endDate + 8;
    } else if (startDayOfWeek === 3 && onetime === 0) {
      for (let i = 10; i < endDate + 10; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 10;
      end_day = endDate + 9;
    } else if (startDayOfWeek === 4 && onetime === 0) {
      for (let i = 11; i < endDate + 11; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 11;
      end_day = endDate + 10;
    } else if (startDayOfWeek === 5 && onetime === 0) {
      for (let i = 12; i < endDate + 12; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 12;
      end_day = endDate + 11;
    } else if (startDayOfWeek === 6 && onetime === 0) {
      for (let i = 13; i < endDate + 13; i++) {
        daycount = Number(daycount) + 1;
        endweek = endweek + 1;
        if (endweek > 6) {
          endweek = 0;
        }
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = daycount;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      onetime = 1;
      start_day = 13;
      end_day = endDate + 12;
    }
  }

  onetime = onetime + 1;

  const before = () => {
    //console.log(new_startDayOfWeek)
    const before_month = month - 1;
    setmonth(month - 1);
    if (before_month === 0) {
      setmonth(12);
      setyear(year - 1);
    }
    const before_day = month_day[before_month] + 1;
    checknumber = 1;

    endweek = new_startDayOfWeek;

    new_startDayOfWeek = new_startDayOfWeek - 1;
    if (new_startDayOfWeek < 0) {
      new_startDayOfWeek = 6;
    }

    const new_startDayOfWeek2 = new_startDayOfWeek;
    //console.log(new_startDayOfWeek)
    //console.log(endweek)

    if (before_month === 2 && year % 4 === 0) {
      const before_uruu_year_day = before_day + 1;
      daycount = before_uruu_year_day;
      for (let i = 7; i < 49; i++) {
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = null;
          return {
            squares: nextSquares,
          };
        })(current);
      }
      if (new_startDayOfWeek === 0) {
        for (let i = 42; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 42;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 35; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 35;
              ii = i;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 1) {
        for (let i = 43; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 43;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 36; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 36;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 2) {
        for (let i = 44; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 44;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 37; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 37;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 3) {
        for (let i = 45; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 45;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 38; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 38;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 4) {
        for (let i = 46; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 46;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 39; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 39;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 5) {
        for (let i = 47; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 47;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 40; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 40;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 6) {
        for (let i = 48; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 48;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19 ||
          ii === 20
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_uruu_year_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 41; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 41;
              break;
            }
          }
        }
      }
    } else {
      daycount = before_day;
      for (let i = 7; i < 49; i++) {
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = null;
          return {
            squares: nextSquares,
          };
        })(current);
      }
      if (new_startDayOfWeek === 0) {
        for (let i = 42; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 42;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 35; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 35;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 1) {
        for (let i = 43; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 43;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 36; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 36;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 2) {
        for (let i = 44; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 44;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 37; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 37;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 3) {
        for (let i = 45; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 45;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 38; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 38;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 4) {
        for (let i = 46; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 46;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 39; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 39;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 5) {
        for (let i = 47; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 47;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 40; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 40;
              break;
            }
          }
        }
      } else if (new_startDayOfWeek === 6) {
        for (let i = 48; ; i--) {
          daycount = daycount - 1;
          new_startDayOfWeek = new_startDayOfWeek - 1;
          if (new_startDayOfWeek < 0) {
            new_startDayOfWeek = 6;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
          if (daycount === 1) {
            start_day = i;
            end_day = 48;
            ii = i;
            break;
          }
        }
        if (
          ii === 14 ||
          ii === 15 ||
          ii === 16 ||
          ii === 17 ||
          ii === 18 ||
          ii === 19
        ) {
          new_startDayOfWeek = new_startDayOfWeek2;
          daycount = before_day;
          for (let i = 7; i < 49; i++) {
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = null;
              return {
                squares: nextSquares,
              };
            })(current);
          }
          for (let i = 41; ; i--) {
            daycount = daycount - 1;
            new_startDayOfWeek = new_startDayOfWeek - 1;
            if (new_startDayOfWeek < 0) {
              new_startDayOfWeek = 6;
            }
            (({ squares }) => {
              const nextSquares = squares as BoardState;
              nextSquares[i] = daycount;
              return {
                squares: nextSquares,
              };
            })(current);
            if (daycount === 1) {
              start_day = i;
              end_day = 41;
              break;
            }
          }
        }
      }
    }
    new_startDayOfWeek = new_startDayOfWeek + 1;
    ii = 0;
  };

  const after = () => {
    new_startDayOfWeek = endweek;
    const after_month = month + 1;
    setmonth(month + 1);
    if (after_month === 13) {
      setmonth(1);
      setyear(year + 1);
    }

    const after_day = month_day[after_month];

    checknumber = 1;
    daycount = 0;

    if (after_month === 2 && year % 4 === 0) {
      const after_uruu_year_day = after_day + 1;
      for (let i = 7; i < 49; i++) {
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = null;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          start_day = 7;
          end_day = i;
          break;
        }
      }
      if (endweek === 0) {
        for (let i = 7; i < after_uruu_year_day + 7; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 7;
        end_day = after_uruu_year_day + 6;
      } else if (endweek === 1) {
        for (let i = 8; i < after_uruu_year_day + 8; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 8;
        end_day = after_uruu_year_day + 7;
      } else if (endweek === 2) {
        for (let i = 9; i < after_uruu_year_day + 9; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 9;
        end_day = after_uruu_year_day + 8;
      } else if (endweek === 3) {
        for (let i = 10; i < after_uruu_year_day + 10; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 10;
        end_day = after_uruu_year_day + 9;
      } else if (endweek === 4) {
        for (let i = 11; i < after_uruu_year_day + 11; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 11;
        end_day = after_uruu_year_day + 10;
      } else if (endweek === 5) {
        for (let i = 12; i < after_uruu_year_day + 12; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 12;
        end_day = after_uruu_year_day + 11;
      } else if (endweek === 6) {
        for (let i = 13; i < after_uruu_year_day + 13; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 13;
        end_day = after_uruu_year_day + 12;
      }
    } else {
      for (let i = 7; i < 49; i++) {
        (({ squares }) => {
          const nextSquares = squares as BoardState;
          nextSquares[i] = null;
          return {
            squares: nextSquares,
          };
        })(current);
        if (daycount === endDate) {
          break;
        }
      }
      if (endweek === 0) {
        for (let i = 7; i < after_day + 7; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 7;
        end_day = after_day + 6;
      } else if (endweek === 1) {
        for (let i = 8; i < after_day + 8; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 8;
        end_day = after_day + 7;
      } else if (endweek === 2) {
        for (let i = 9; i < after_day + 9; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 9;
        end_day = after_day + 8;
      } else if (endweek === 3) {
        for (let i = 10; i < after_day + 10; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 10;
        end_day = after_day + 9;
      } else if (endweek === 4) {
        for (let i = 11; i < after_day + 11; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 11;
        end_day = after_day + 10;
      } else if (endweek === 5) {
        for (let i = 12; i < after_day + 12; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 12;
        end_day = after_day + 11;
      } else if (endweek === 6) {
        for (let i = 13; i < after_day + 13; i++) {
          daycount = daycount + 1;
          endweek = endweek + 1;
          if (endweek > 6) {
            endweek = 0;
          }
          (({ squares }) => {
            const nextSquares = squares as BoardState;
            nextSquares[i] = daycount;
            return {
              squares: nextSquares,
            };
          })(current);
        }
        start_day = 13;
        end_day = after_day + 12;
      }
    }
  };
  let nowmonthcheck = 0;

  if (year === today_year && month === today_month) {
    now_day = day;
    for (let i = 7; i < 49; i++) {
      (({ squares }) => {
        const nextSquares = squares as BoardState;
        if (nextSquares[i] === now_day) {
          nowmonthcheck = i;
        }
        return {
          squares: nextSquares,
        };
      })(current);
    }
  } else {
    now_day = 0;
  }

  //console.log(start_day)
  //console.log(end_day)

  const handleClick = (i: number) => {
    if (i < 7) {
      return;
    }
  };

  return (
    <div>
      <div className="name">
        <Icon w={10} h={10} color="green" as={RiCalendar2Fill}></Icon>
      </div>
      <div className="name2">カレンダー</div>
      <button className="mae" onClick={before}>
        ＜
      </button>
      <div className="title">
        {year}年{month}月
      </div>
      <button className="tugi" onClick={after}>
        ＞
      </button>
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={handleClick}
          today={now_day}
          nowmonthposition={nowmonthcheck}
          B_start_day={start_day}
          B_end_day={end_day}
          month={month}
          year={year}
          count={count}
          setsavedata={setSavedata}
          savedata={savedata}
        />
      </div>
      <div className="game-info"></div>
    </div>
  );
};

export default Game;
//   ReactDOM.render(<Game />, document.getElementById('root'))
