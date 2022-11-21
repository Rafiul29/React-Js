import React from 'react'

const CountWrraper = (OldComp) => {
  class NewComp extends React.Component{
      constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount=()=>{
        this.setState({
          count:this.state.count+1
        })
      }


      render(){
        return(
              <OldComp
              count={this.state.count}
              incrementCount={this.incrementCount}
              />
        )
      }
  }
 
return NewComp;
}

export default CountWrraper
