// componentDidUpdate life cycle mrthod
// when the state and props is changed then componentDidupadte is automatically Called
import React, { Component } from "react";

export class Fouth extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidUpdate(pp, ps, sS) {
    console.warn("componentDidUpdate", ps);
    if (ps.counter < 3) {
      this.setState({ counter: this.state.counter + 1 });
      console.log("matched");
    }
  }
  render() {
    return (
      <div>
        <h1>componentDid update life cycle</h1>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          increemnt the counter{this.state.counter}
        </button>
      </div>
    );
  }
}
