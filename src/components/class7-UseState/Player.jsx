import React, { useState } from 'react'
const demoPlayerObj={
  firstName:"rafiul",
  lastName:"islam",
  jurseyname:10
}
const Player = () => {
  const [player,setPlayer]=useState({})

  const handleAddPlayer=()=>{
    setPlayer({...player,...demoPlayerObj})
  }

 const handleMakeGoal=()=>{
  const randomGoal=Math.floor(Math.random()*5+1)
    setPlayer({...Player,goals:randomGoal});
  }



  return (
    <div>
      <h2>Player Name : {player.firstName} {player.lastName}</h2>
      <h2>Player Jursey Name: {player.jurseyname}</h2>
      <h2>Goal : {player.goals}</h2>
      <button onClick={handleAddPlayer}>Add Property</button>
      <button onClick={handleMakeGoal}>Make goal</button>
    </div>
  )
}

export default Player
