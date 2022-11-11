import React from "react";
const Hello=(props)=>{
const {name,birthyear}=props

return (
    <div>
      <h1>Hello i am {name} {new Date().getFullYear()-birthyear}</h1>
    </div>
    
    )

}
export default Hello;