import React, { Component } from "react";

export default class Fifth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true,
    };
  }
  handleDelete = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount = () => {
    console.log("component did mount");
  };

  componentDidUpdate = () => {
    console.log("component did update");
  };

  render() {
    return (
      <div>
        {this.state.show && (
          <h1>
            hello world <Child />
          </h1>
        )}

        <button onClick={this.handleDelete}>delete it</button>
        <h2>count:{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  render() {
    return (
      <div>
        <h1>this is react</h1>
      </div>
    );
  }
}
