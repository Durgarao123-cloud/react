import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [userDetails, setUserDetails] = useState({
    name: "allu",
    age: 20,
    email: "yamma@gmail.com",
  });
  return (
    <div>
      <h1>parent component </h1>
      <ChildComponent userDetails={userDetails} />
    </div>
  );
}
