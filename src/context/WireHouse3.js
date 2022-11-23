import React from 'react'
import {WireHousesumer} from './wireHouseContext'
const WireHouse3 = () => {
  return (
    <div>
        <WireHousesumer>
        {
          (name)=>{
            return <h1>{name}</h1>
          }
        }
        </WireHousesumer>
    </div>
  )
}

export default WireHouse3
