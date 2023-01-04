import React, { useState } from 'react'

const Square = ({clickTracker, counter, index, displayBox}) => {

  // const [boxLabel, setBoxLabel] = useState([])

  // const [counter, setCounter] = useState(0)

  // const userClick = () => {
  //   // setCounter(counter + 1)
  //   if (boxLabel === 'X') {
  //     setBoxLabel('X')
  //   } else if (boxLabel === 'O') {
  //     setBoxLabel('O')
  //   } else if (counter === 0) {
  //     setBoxLabel('X')
  //   } else if (counter % 2 !== 0) {
  //     setBoxLabel('O')
  //   } else {
  //     setBoxLabel('X')
  //   }
  // }
  const userClick = () => {
    clickTracker(index)
  }
// console.log(userClick(index));
  return (
      <div className="square" onClick={userClick}>{displayBox}</div>
      
  )
}
export default Square
