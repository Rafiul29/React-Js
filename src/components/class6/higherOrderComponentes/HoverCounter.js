import React, { Component } from 'react'
import CountWrraper from './countWrraper'

class HoverCounter extends Component {


  render() {
    return (
      <div>
        <h1>Count : {this.props.count}</h1>
        <button onMouseOver={this.props.incrementCount}>mouseHover</button>

      </div>
    )
  }
}
export default CountWrraper(HoverCounter)