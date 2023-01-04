import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [counter, setCounter] = useState(1)

  const winner = () => {
    // if (squares[0] === 'X' && squares[1] === 'X' && squares[2] === 'X') {
    //   alert('Player X has won')
    // } else if (squares[0, 1, 2] === 'O') {
    //   alert('Player O has won')
    // } else if (squares[3,4,5] === 'X') {
    //   alert('Player X has won')
    // } else if (squares[3,4,5] === 'O') {
    //   alert('Player O has won')
    // } else if (squares[6,7,8] === 'X'){
    //   alert('Player X has won')
    // } else if (squares[6,7,8] === 'O') {
    //   alert('Player O has won')
    // } else if (squares[0,3,6] === 'X'){
    //   alert('Player X has won')
    // } else if (squares[0,3,6] === 'O') {
    //   alert('Player O has won')
    // } else if (squares[1,4,7] === 'X'){
    //   alert('Player X has won')
    // } else if (squares[1,4,7] === 'O') {
    //   alert('Player O has won')
    // } else if (squares[2,5,8] === 'X'){
    //   alert('Player X has won')
    // } else if (squares[2,5,8] === 'O') {
    //   alert('Player O has won')
    // }
    const winning = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    winning.forEach((winningCombo, i) => {
      if (squares[i] === ['X','X','X'] || winning[i] === 'O') {
        alert('someone won')
      }
    })
  }



//   const winnerVariables = () => {
//     if (squares[0,4,8] === 'X') {
//     alert('Player X has won')
//   } else if (squares[0,4,8] === 'O') {
//     alert('Player O has won')
//   } else if (squares[2,4,6] === 'X'){
//     alert('Player X has won')
//   } else if (squares[2,4,6] === 'O') {
//     alert('Player O has won')
//   }
// }

console.log(squares[0] && squares[1]);
  console.log(squares);
  const clickTracker = (clickedSquare) => {
    let updateGame = [...squares]
    if (counter === 1 && squares[clickedSquare] === null) {
      updateGame[clickedSquare] = 'X'
      setSquares(updateGame)
      setCounter(2)
    } else if (counter === 2 && squares[clickedSquare] === null) {
      updateGame[clickedSquare] = 'O'
      setSquares(updateGame)
      setCounter(1)
    } else if (squares[clickedSquare] !== null) {
      setSquares(updateGame)
    } 
  }
  winner()
  // winnerVariables()

  

  return (
    <>
      <h1 style={{textAlign: 'center'}}>Tic Tac Toe</h1>
        <div className='gameBoard'>
          {squares.map((displayBox, index) => {
           return (
            <Square 
              clickTracker={clickTracker} 
              index={index} 
              displayBox={displayBox}/>
           )
          })}
        </div>
    </>
  )
}

export default App