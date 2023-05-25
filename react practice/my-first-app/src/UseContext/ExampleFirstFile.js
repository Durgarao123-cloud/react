import React from "react";
import ExampleSecondFile from "./ExampleSecondFile";

export const PersonContext = React.CreateContext();
const obj = {
  name: "samireddo",
  emial: "sami@gmail.com",
  age: "22",
};

export const PersonContextProvider = () => {
  <PersonContext.Provider value={obj}></PersonContext.Provider>;
};
