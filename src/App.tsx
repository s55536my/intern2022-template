import { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

type SquareState = 'O' | 'X' | null

type SquareProps = {
    value: SquareState
    onClick: () => void
}

const Square = (props: SquareProps) => (
    <button className='square' onClick={props.onClick}>
        {props.value}
    </button>
)

type BoardState = SquareState[]

type BoardProps = {
    squares: BoardState
    onClick: (i: number) => void
}

const Board = (props: BoardProps) => {
    const renderSquare = (i: number) => (
        <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
    )

    return (
        <div>
            <div className='board-row'>
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

type Step = {
  readonly squares: BoardState
  readonly xIsNext: boolean
}

type GameState = {
  readonly history: readonly Step[]
  readonly stepNumber: number
}

const Game = () => {
  const [state, setState] = useState<GameState>({
      history: [
          {
              squares: [null, null, null, null, null, null, null, null, null],
              xIsNext: true,
          },
      ],
      stepNumber: 0,
  })

  const current = state.history[state.stepNumber]
  const winner = calculateWinner(current.squares)
  let status: string
  if (winner) {
      status = `Winner: ${winner}`
  } else {
      status = `Next player: ${current.xIsNext ? 'X' : 'O'}`
  }

  const handleClick = (i: number) => {
      if (winner || current.squares[i]) {
          return
      }

      const next: Step = (({ squares, xIsNext }) => {
          const nextSquares = squares.slice() as BoardState
          nextSquares[i] = xIsNext ? 'X' : 'O'
          return {
              squares: nextSquares,
              xIsNext: !xIsNext,
          }
      })(current)

      setState(({ history, stepNumber }) => {
          const newHistory = history.slice(0, stepNumber + 1).concat(next)

          return {
              history: newHistory,
              stepNumber: newHistory.length - 1,
          }
      })
  }

  const jumpTo = (move: number) => {
      setState(prev => ({
          ...prev,
          stepNumber: move,
      }))
  }

  const moves = state.history.map((step, move) => {
      const desc = move > 0 ? `Go to move #${move}` : 'Go to game start'
      return (
          <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
      )
  })

  return (
      <div className='game'>
          <div className='game-board'>
              <Board squares={current.squares} onClick={handleClick} />
          </div>
          <div className='game-info'>
              <div>{status}</div>
              <ol>{moves}</ol>
          </div>
      </div>
  )
}

const calculateWinner = (squares: BoardState) => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
      ) {
          return squares[a]
      }
  }
  return null
}

ReactDOM.render(<Game />, document.getElementById('root'))

export default Board;
