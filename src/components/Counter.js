import React, { Component } from 'react'

export default class extends Component {
  constructor(props){
    super(props)

    this.state={
      count:0,
    }

  }

  incrementCount(){
    this.setState({
      count:this.state.count+1
    })
  }

  decrementCount(){
    this.setState({
      count:this.state.count-1
    })
  }
  resetbtn(){
    this.setState({
      // count:this.state.count-this.state.count
      count:0
    })
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <h1> Count : {this.state.count}</h1>
        <button onClick={()=>this.incrementCount()}>increment</button>
        <button onClick={()=>this.decrementCount()}>decrement</button>
        <button onClick={()=>this.resetbtn()}>reset</button>
        </div>
    )
  }
}
