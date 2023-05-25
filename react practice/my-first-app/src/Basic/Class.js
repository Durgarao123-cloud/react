import React, { Component } from "react";
class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   display() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  display = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementFive = () => {
    this.display();
    this.display();
    this.display();
    this.display();
    this.display();
  };

  render() {
    return (
      <div>
        <h1>count-{this.state.count}</h1>
        <br></br>
        <button type="button" onClick={() => this.incrementFive()}>
          subscribe
        </button>
      </div>
    );
  }
}

export default Class;
