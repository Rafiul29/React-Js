import React, { Component } from "react";
import ChildStore from "./ChildStore";

export default class Fruits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalFruits: 26,
      fruitsname: ""
    };
  }

  fruitsHandler = (fruitsname) => {
   
    this.setState({
      totalFruits: this.state.totalFruits - 1,
      fruitsname: fruitsname
    });
  };

  render() {
    return (
      <div>
        <h1>Total fruits : {this.state.totalFruits} {this.state.fruitsname}</h1>
        <ChildStore fruitsHandler={this.fruitsHandler} />
      </div>
    );
  }
}
