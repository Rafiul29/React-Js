import React, { Component } from 'react'

export default class 
 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       num:0,
    }
   
  }
  makegoalHandler(){

    this.setState({
      num:this.state.num+1,
    })
  }
  render() {
    return (
      <div>
        <h1>Num : {this.state.num}  </h1>
        <button onClick={()=>this.makegoalHandler()}>increase button</button>
      </div>
    )
  }
}





//  {/* <button onClick={this.makegoalHandler.bind(this)}>Make goal bind</button>

//   <button onClick={this.makegoalHandler}>Make goal bind in constructor</button> */}
 // this.makegoalHandler=this.makegoalHandler.bind(this)
//   <button onClick={this.makegoalHandler}>Make goal arrow in class</button>
      