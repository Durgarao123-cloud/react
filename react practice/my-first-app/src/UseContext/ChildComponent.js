import React from "react";
import SubChildComponent from "./SubChildComponent";

function ChildComponent(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <SubChildComponent userDetails={props.userDetails} />
    </div>
  );
}

export default ChildComponent;
