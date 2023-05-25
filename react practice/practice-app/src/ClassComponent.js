// class component has state and react life cycle methods but it doesnot have a hooks concpts..
import React from "react";
import ReactDom from "react-dom";

class ClassComponent extends React.Component {
  render(props) {
    return (
      <div>
        <h1>hi this is class based component...{props.data}</h1>
      </div>
    );
  }
}
export default ClassComponent;
