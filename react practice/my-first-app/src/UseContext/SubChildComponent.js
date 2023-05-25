import React, { useContext } from "react";

import { UserContext } from "./CreateContext";

function SubChildComponent() {
  // console.log(props);
  const data = useContext(UserContext);
  console.log(data);
  // const { name, age, email } = props.userDetails;
  const { firstName, lastName, email } = data;

  return (
    <div>
      <h1>SubChild Component</h1>
      {/* <h1>name:{name}</h1>
      <h1>age:{age}</h1>
      <h1>emial:{email}</h1> */}
      <h1>firstname:{firstName}</h1>
      <h2>lastName:{lastName}</h2>
      <h2>email:{email}</h2>
    </div>
  );
}

export default SubChildComponent;
