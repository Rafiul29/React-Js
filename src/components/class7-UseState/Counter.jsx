import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);

 const incrementHandler=(iteration=1)=>{
  setCount(prevCount=>prevCount+iteration);
  }
const decrementHandler=()=>{
  setCount(prevCount=>prevCount-1)
}
const resetHandler=()=>{
  setCount(0)
}
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>incrementHandler(5)}>Increment five</button>
      <button onClick={()=>incrementHandler(15)}>Increment fifteen</button>
      <button onClick={decrementHandler}>Increment</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default Counter
