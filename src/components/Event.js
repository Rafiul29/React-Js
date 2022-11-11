import React, { Component } from 'react'

export default class 
 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       goals:0,
    }
    // this.makegoalHandler=this.makegoalHandler.bind(this)
  }
  makegoalHandler=()=>{

    this.setState({
      goals:this.state.goals+1,
    })
  }
  render() {
    return (
      <div>
        <h1>Golas : {this.state.goals}  </h1>

        {/* <button onClick={this.makegoalHandler.bind(this)}>Make goal bind</button>

        <button onClick={()=>this.makegoalHandler()}>Make goal inline arrow</button>

        <button onClick={this.makegoalHandler}>Make goal bind in constructor</button> */}

        <button onClick={this.makegoalHandler}>Make goal arrow in class</button>
      
      
      
      </div>
    )
  }
}
