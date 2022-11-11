import React from 'react'

export default function ChildStore({fruitsHandler}) {
const isDeveloper=false;
  return (
    <div>
       <button onClick={()=>fruitsHandler("apple")}>grape</button>

        {isDeveloper ? (<h1> He is a developer </h1>):(<h1> He is not developer </h1>)}

        <h1>
          {isDeveloper ? "He is a developer": "He is not developer"}
        </h1>

        <h1>
        He is {isDeveloper ? "a": "not"}  developer
        </h1>
       
    </div>
  )
}
