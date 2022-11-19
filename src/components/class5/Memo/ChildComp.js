import React from 'react'

function ChildComp({firstName}) {
  console.log("child")
  return (
    <div>
      {firstName}
    </div>
  )
}

export default React.memo(ChildComp)
