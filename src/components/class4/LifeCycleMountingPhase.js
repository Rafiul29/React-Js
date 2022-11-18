import React, { Component } from 'react'

export default class LifeCycleMountingPhase extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Rafiul Islam"
    }
    console.log("Constructor run")
  }

  static getDerivedStateFromProps(props,state){
    console.log("static GetDeriveStateFormProps")
    return null
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
  render() {
    console.log("render Run")
    return (
      <div>
        djd
      </div>
    )
  }
}
