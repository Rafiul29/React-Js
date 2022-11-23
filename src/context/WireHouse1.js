import React from 'react'
import WireHouse2 from './WireHouse2'
import { WireHouseProvider } from './wireHouseContext'
const WireHouse1 = ({name}) => {
  return (
    <div>
  
      <WireHouseProvider value={name}>
      <WireHouse2/>
      </WireHouseProvider>
    
    </div>
  )
}

export default WireHouse1
