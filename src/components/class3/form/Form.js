import React, { Component } from "react";

export default class From extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:"",
       lastName:"",
       skill:""

    }
  }
  
  firstNameHandler(e){
    this.setState({
      firstName:e.target.value,
    })
  }

  lasttNameHandler(e){
    this.setState({
      lastName:e.target.value
    })
    console.log(e.target.value)
  }

  skillHandler(e){
    this.setState({
      skill:e.target.value
    })
    console.log(e.target.value)
  }

  submithandler(e){
    e.preventDefault()
   alert(`Name :${this.state.firstName} ${this.state.lastName}
   Skill ${this.state.skill}
   `)
  }


  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.submithandler(e)}> 
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name"  value={this.state.firstName} onChange={(e)=>this.firstNameHandler(e)} required/>
          </div>

          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name"  value={this.state.lastName} onChange={(e)=>this.lasttNameHandler(e)} required/>
          </div>

          <div>
            <select value={this.state.skill} onChange={(e)=>this.skillHandler(e)} required>
              <option value=" ">select your option</option>
              <option value="react">React</option>
              <option value="javascript">Javascript</option>
              <option value="angular">Angular</option>
              <option value="nest js">Nest js</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
