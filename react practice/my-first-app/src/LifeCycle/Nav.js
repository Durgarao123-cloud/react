import React, { Component } from "react";

class Nav extends Component {
  componentWillMount() {
    console.log("it will be unmounted");
  }
  render() {
    return (
      <div>
        <h2>nk</h2>
      </div>
    );
  }
}

export default Nav;
