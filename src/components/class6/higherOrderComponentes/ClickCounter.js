import React, { Component } from 'react'
import CountWrraper from './countWrraper'

 class ClickCounter extends Component {

  render() {
    return (
      <div>
        <h1>Count : {this.props.count}</h1>
        <button onClick={this.props.incrementCount}>ClickCounter</button>
      </div>
    )
  }
}
export default CountWrraper(ClickCounter)