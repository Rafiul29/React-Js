import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
  render() {
    console.log('pure')
    return (
      <div>
        this is pure components: {this.props.number}
      </div>
    )
  }
}
