import React, { useState } from "react";

export default function ParentComponent() {
  const [userDetails, setUserDetails] = useState({
    name: "allu",
    age: 20,
    email: "yamma@gmail.com",
  });
  return (
    <div>
      <h1>parent component</h1>
      <ChildComponent userDetails={userDetails} />
    </div>
  );
}

function ChildComponent(props) {
  console.log();
  return (
    <div>
      <h1>Child Component</h1>
      <SubChildComponent userDetails={props.userDetails} />
    </div>
  );
}

function SubChildComponent(props) {
  console.log(props);
  const { name, age, email } = props.userDetails;
  return (
    <div>
      <h1>SubChild Component</h1>
      <h1>name:{name}</h1>
      <h1>age:{age}</h1>
      <h1>emial:{email}</h1>
    </div>
  );
}
