import React from 'react'

function ReferenceFunctional({name}) {
const chnageRef=React.createRef();

 const ChnageStyle=()=>{
  chnageRef.current.style.color="green"
  chnageRef.current.textContent=name
  chnageRef.current.style.marginTop="30px"
 }

  return (
    <div>
      <h1 ref={chnageRef}>SuperHero</h1>
      <button onClick={ChnageStyle}>click</button>
    </div>
  )
}

export default ReferenceFunctional;
