import React, { Component } from "react";

export default class From extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fullName:"",
      email:""
    }
  }
  
  fullNameHandler(e){
    this.setState({
      fullName:e.target.value,
    })
  }

  emailHandler(e){
    this.setState({
      email:e.target.value,
    })
  }


  submithandler(e){
    e.preventDefault()
   alert(`Full name :${this.state.fullName}  Email :${this.state.email}`)
  }


  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.submithandler(e)}> 
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name"  value={this.state.fullName} onChange={(e)=>this.fullNameHandler(e)} required/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  value={this.state.email} onChange={(e)=>this.emailHandler(e)} required/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}



// <div>
// <select value={this.state.skill} onChange={(e)=>this.skillHandler(e)} required>
//   <option value=" ">select your option</option>
//   <option value="react">React</option>
//   <option value="javascript">Javascript</option>
//   <option value="angular">Angular</option>
//   <option value="nest js">Nest js</option>
// </select>
// </div>

{/* <label htmlFor="first-name">First Name</label>
<input type="text" id="first-name"  value={this.state.firstName} onChange={(e)=>this.firstNameHandler(e)} required/>
</div>

<div>
<label htmlFor="last-name">Last Name</label>
<input type="text" id="last-name"  value={this.state.lastName} onChange={(e)=>this.lasttNameHandler(e)} required/>
</div> */}

// lasttNameHandler(e){
//   this.setState({
//     lastName:e.target.value
//   })
// }

// skillHandler(e){
//   this.setState({
//     skill:e.target.value
//   })
// }