import React from 'react'

export const RenderProps = ({render}) => {
  return (
    <div>
      
    <h1>Welcome , {render(false)}</h1>
    </div>
  )
}

