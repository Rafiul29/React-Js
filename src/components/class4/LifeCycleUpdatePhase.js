import React, { Component } from 'react'

export default class LifeCycleUpdatePhase extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"rafiul"
    }
    console.log("constructor ")
  }
  
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFormProps")
    return null
  }

  componentDidMount(){
    console.log("ComponentDidMount")
  }

  shouldComponentUpdate(){
    console.log("shouldComponetUpdate")
    return null;
  }
  getSnapshotBeforeUpdate(previousProps,previousState){
  console.log("getSnapshotBeforeUpdate");
  return null;
}
componentDidUpdate(){
  console.log("componentDidUpdate")
}
updateState=()=>{
  this.setState({
    name:"asfia"
  })

}
  render() {
    console.log("render")
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.updateState()}>update state</button>
      </div>
    )
  }
}
