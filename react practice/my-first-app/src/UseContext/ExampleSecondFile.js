import React, { useContext } from "react";

import { PersonContext } from "./ExampleFirstFile";

export const ExampleSecondFile = () => {
  const data = useContext(PersonContext);
  const { name, email, age } = data;
  return (
    <div>
      <h1>name:{name}</h1>
      <h1>age:{age}</h1>
      <h1>email:{email}</h1>
    </div>
  );
};
