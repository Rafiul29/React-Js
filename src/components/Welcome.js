import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       place: "playground"
    }
  }

  handlePlaceChange(){
    this.setState({
      place:"Home"
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.place}</h1>
        <button onClick={()=>this.handlePlaceChange()}>Go to Home</button>

        
      </div>
    )
  }
}
