import React from 'react'

function Singlesuperhero({superhero}) {
  const isHuman=false

  const superheroage={
    color: isHuman? "back": "pink",
    fontSize:"2rem",
    backgroundColor:"yello"
  }
  return (
    <div className='superhero'>
    <h1 className='superhero-name' style={{color:"black" ,backgroundColor:"red", fontSize:"3rem"}}> Name :{superhero.name}</h1>
    <p style={superheroage}>Age:  {new Date().getFullYear()-superhero.birthYear}</p>
    <p className='superhero-skill'>Skill: {superhero.skill}</p>
  </div>
  )
}

export default Singlesuperhero