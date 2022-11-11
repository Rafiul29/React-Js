import React from "react";

const Football=()=>{
 const gameName="Football";
  return(
    <div>
      <h1>{gameName} {gameName=="Football"?"love":"jnjnd" }</h1>
    <h1>
     {new Date().toLocaleString('bn-us',{
      year:"numeric",
      month:'short',
      day:"2-digit"
     })}
    </h1>

    </div>
  )



//jsx convert
  // return React.createElement(
  //   "div",
  //   {className:'Football'},
  //   React.createElement('h1',null," i love football"))
  
}
export default Football