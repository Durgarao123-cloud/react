// componentWillMount
import React, { Component } from "react";

export default class Third extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <h1>parent componnent{this.state.show}</h1>
        {this.state.show ? <Child /> : null}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          showit
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillMount() {
    console.warn("compnnet");
  }
  render() {
    return (
      <div>
        <h3>child componnet</h3>
      </div>
    );
  }
}
