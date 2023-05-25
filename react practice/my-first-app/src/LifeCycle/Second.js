import React, { Component } from "react";

class Second extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
    console.warn("constructor");
  }
  componentDidMount() {
    console.warn("componentDidMount");
    this.setState({ data: true });
  }

  render() {
    console.warn("render");

    return (
      <div>
        <h1> the react life Cycle</h1>
      </div>
    );
  }
}

export default Second;
