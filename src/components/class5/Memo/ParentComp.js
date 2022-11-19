import React, { Component } from 'react'
import ChildComp from './ChildComp';

export default class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:"Rafiul Islam"
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        firstName:"Asfia Hossen"
      });
    },1000);
  }
  
  render() {
    console.log("Parent")
    return (
      <div>
    <ChildComp firstName={this.state.firstName}/>
        
      </div>
    )
  }
}
