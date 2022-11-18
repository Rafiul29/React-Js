import React, { Component } from 'react'

export default class RegularComp extends Component {
  render() {
    console.log("Regular")
    return (
      <div>
        this is a RegularComp : {this.props.number}
      </div>
    )
  }
}
