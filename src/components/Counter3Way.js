import React, { Component } from 'react'

export default class Counter3Way extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counNum:0,
       name:'rakin'
    }
  }


  incrementHandler(){
    this.setState({
      counNum: this.state.counNum+1,
      name: "rafiul"
    })
  }
  
  decrementHandler(){
    this.setState({
      counNum:this.state.counNum-1
    })
  }
  increment10Handler(){
    // this.setState({
    //   counNum:this.state.counNum+10
    // })
    this.setState((previous)=>({
      counNum:previous+10,
    }))
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.counNum} Name: {this.state.name}</h1>
        <button onClick={()=>this.incrementHandler()}>Increase</button>

        <button onClick={()=>this.increment10Handler()}>Increaseby 10</button>

        <button onClick={()=>this.decrementHandler()}>decrement</button>
      </div>
    )
  }
}
