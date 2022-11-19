import React, { Component } from 'react'

export default class Reference extends Component {

  constructor(props) {
    super(props)
    this.state = {
       firstName:"Rafiul"
    }
    this.superheroRef=React.createRef();
  }

  chnageColor(){
   console.log(this.superheroRef.current)
   this.superheroRef.current.style.color="red"
   this.superheroRef.current.style.padding="20px"
  }
  
  render() {
    return (
      <div>
        <h1 className='Superhero' ref={this.superheroRef}>BatMan</h1>
        <button onClick={()=>this.chnageColor()}>Chnage Color</button>
      </div>
    )
  }
}
