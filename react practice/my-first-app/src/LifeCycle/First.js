import React, { Component } from "react";
import Nav from "./Nav";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    console.warn("constructor");
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  //   changeIt() {
  //     this.setState(!this.state.show);
  //   }
  render() {
    console.warn("endeder");
    return (
      <div>
        <h1>Allu durgarao your count{this.state.count} </h1>
        {this.state.show ? <Nav /> : null}

        <button
          onClick={() => {
            this.setState(!this.state.show);
          }}
        >
          show
        </button>
      </div>
    );
  }
}

export default First;
