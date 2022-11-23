import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [count,setCount]=useState(0);
const [isLove,setIsLove]=useState(true);

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setCount(prevcount=>prevcount+1)
  //   },1000)
  // },[])
  useEffect(()=>{
    setIsLove(!isLove)
  },[count==10])

const incrementHandler=()=>{
  setCount(prevCount=>prevCount+1);
}

  return (
    <div>

      <h1> I {isLove? "Love": "hate"} you</h1>
      <h1>Count : {count}</h1>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  )
}

export default UseEffect
