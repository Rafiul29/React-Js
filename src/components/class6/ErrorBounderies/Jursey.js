import React from 'react'

const Jursey = ({name,number}) => {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h1>{number}</h1>
    </div>
  )
}

export default Jursey