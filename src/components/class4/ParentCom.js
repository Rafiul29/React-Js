import React, { Component } from 'react'
import PureCom from './PureCom'
import RegularComp from './RegularComp'

export default class ParentCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:10,
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        number:30
      })
    },1000)
  }

  render() {
    console.log("parent")
    return (
      <div>
        <h1>Parent components</h1>
        {/* <RegularComp number={this.state.number} /> */}
         <PureCom number={this.state.number}/>
      </div>
    )
  }
}
