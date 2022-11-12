import React from 'react'
import Singlesuperhero from './Singlesuperhero'

const superheros=[
  {
    id:7,
    name:"rafiul",
    birthYear:1998,
    skill: "react"
  },
  {
    id:6,
    name:"rafiul",
    birthYear:1998,
    skill: "react"
  },
  {
    id:1,
    name:"rafiul",
    birthYear:1998,
    skill: "react"
  },
  {
    id:2,
    name:"rakib",
    birthYear:1996,
    skill: "javaScript"
  },
  {
    id:3,
    name:"Shamim",
    birthYear:1997,
    skill: "react"
  },
  {
    id:4,
    name:"rahaman",
    birthYear:1995,
    skill: "react ,Angular js"
  },
  {
    id:5,
    name:"Antor",
    birthYear:2005,
    skill: "react"
  }
]
const  Superheros =()=> {
  return (
    <div className='superheros-wrapper'>
      {
        superheros.map((superhero)=>{
       return(
          <Singlesuperhero superhero={superhero} key={superhero.id}/>
       )
        })
      }
    </div>
  )
}

export default Superheros;