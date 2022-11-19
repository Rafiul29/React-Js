import React from 'react'
import  ReactDOM  from 'react-dom'

const Protals = () => {
  return ReactDOM.createPortal(<h1>Protals</h1>,document.getElementById("another-root"))
}

export default Protals