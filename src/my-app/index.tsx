import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repeat } from 'typescript-tuple'

type SquareState = '月' | '火' | "水" | "木" | "金" | "土" | "日"  |number|null


type SquareProps = {
    value: SquareState
    onClick: () =>void
}

type BoardState = Repeat<SquareState, 42>

type BoardProps = {
    squares: BoardState
    onClick: (i: number) => void
}

type Step = {
    squares: BoardState
}

type GameState = {
 history: Step[]
}

const Square = (props: SquareProps) => (
    <button className='square' onClick={props.onClick}>
        {props.value}
    </button>
)


const Board = (props: BoardProps) =>{
    const renderSquare = (i: number) => (
        <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
    )

    return (
        <div>
            <div className='board-row1'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
            </div>
            <div className='board-row'>
                {renderSquare(7)}
                {renderSquare(8)}
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
                {renderSquare(12)}
                {renderSquare(13)}
            </div>
            <div className='board-row'>
                {renderSquare(14)}
                {renderSquare(15)}
                {renderSquare(16)}
                {renderSquare(17)}
                {renderSquare(18)}
                {renderSquare(19)}
                {renderSquare(20)}
            </div>
            <div className='board-row'>
                {renderSquare(21)}
                {renderSquare(22)}
                {renderSquare(23)}
                {renderSquare(24)}
                {renderSquare(25)}
                {renderSquare(26)}
                {renderSquare(27)}
            </div>
            <div className='board-row'>
                {renderSquare(28)}
                {renderSquare(29)}
                {renderSquare(30)}
                {renderSquare(31)}
                {renderSquare(32)}
                {renderSquare(33)}
                {renderSquare(34)}
            </div>
            <div className='board-row'>
                {renderSquare(35)}
                {renderSquare(36)}
                {renderSquare(37)}
                {renderSquare(38)}
                {renderSquare(39)}
                {renderSquare(40)}
                {renderSquare(41)}
            </div>
        </div>
    )
}

const Game = () => {
   const [state, setState] = useState<GameState>({
    history: [
        {
            squares: ["日","月","火","水","木","金","土",null, null,null
                ,null, null, null, null, null, null, null, null, null,null
                ,null, null, null, null, null, null, null, null, null,null
                ,null, null, null, null, null, null, null, null, null,null
                ,null,null],
        },
    ],
   })

   const current = state.history[0]

   const hiduke=new Date(); 
   const [year,setyear] = useState(hiduke.getFullYear())
   const [month,setmonth] = useState(hiduke.getMonth()+1)
   const startDayOfWeek = new Date(hiduke.getFullYear(), hiduke.getMonth(), 1).getDay();
   const day = hiduke.getDate();
   const endDate = new Date(hiduke.getFullYear(), hiduke.getMonth() + 1, 0).getDate();
   
   let daycount = 0;
   
   if(startDayOfWeek === 0){
    for(let i = 7;i<endDate+8;i++){
        daycount = daycount+1;
     const next: Step = (({ squares }) => {
        const nextSquares = squares as BoardState
        nextSquares[i] =daycount;
        return {
            squares: nextSquares,
        }
     })(current) 
    }daycount = 0;
   }else if(startDayOfWeek===1){
    for(let i = 8;i<endDate+8;i++){
        daycount = Number(daycount)+1;
     const next: Step = (({ squares }) => {
        const nextSquares = squares as BoardState
        nextSquares[i] =daycount;
        return {
            squares: nextSquares,
        }
     })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }else if(startDayOfWeek===2){
    for(let i = 9;i<endDate+8;i++){
        daycount = Number(daycount)+1;
        const next: Step = (({ squares }) => {
            const nextSquares = squares as BoardState
            nextSquares[i] =daycount;
            return {
                squares: nextSquares,
            }
         })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }else if(startDayOfWeek===3){
    for(let i = 10;i<endDate+8;i++){
        daycount = Number(daycount)+1;
        const next: Step = (({ squares }) => {
            const nextSquares = squares as BoardState
            nextSquares[i] =daycount;
            return {
                squares: nextSquares,
            }
         })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }else if(startDayOfWeek===4){
    for(let i = 11;i<endDate+8;i++){
        daycount = Number(daycount)+1;
        const next: Step = (({ squares }) => {
            const nextSquares = squares as BoardState
            nextSquares[i] =daycount;
            return {
                squares: nextSquares,
            }
         })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }else if(startDayOfWeek===5){
    for(let i = 12;i<endDate+8;i++){
        daycount = Number(daycount)+1;
        const next: Step = (({ squares }) => {
            const nextSquares = squares as BoardState
            nextSquares[i] =daycount;
            return {
                squares: nextSquares,
            }
         })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }else if(startDayOfWeek===6){
    for(let i = 13;i<endDate+8;i++){
        daycount = Number(daycount)+1;
        const next: Step = (({ squares }) => {
            const nextSquares = squares as BoardState
            nextSquares[i] =daycount;
            return {
                squares: nextSquares,
            }
         })(current) 
     if(daycount === endDate){
        break;
     }
    }daycount = 0;
   }



   const before = () => {
    setmonth(month -1);
    if(month===1){
        setmonth(12);
        setyear(year-1)
    }
  };

  const after = () => {
    setmonth(month +1);
    if(month===12){
        setmonth(1);
        setyear(year+1)
    }
  };



   const handleClick = (i: number) => {
    }




   return(
    <div >
        <button className='mae' onClick={before}>＜</button>
        <div className='title'>{year}年{month}月</div>
        <button className='tugi' onClick={after}>＞</button>
        <div className='game-board'>
            <Board squares={current.squares} onClick={handleClick} />
        </div>
        <div className='game-info'>
        </div>
    </div>
   )
}

export default Game
//   ReactDOM.render(<Game />, document.getElementById('root'))