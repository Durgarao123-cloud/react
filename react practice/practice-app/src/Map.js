import React from "react";

export default function Map() {
  const myArray = ["apple", "banana", "orange"];
  return myArray.map((item) => <p>{item}</p>);
}
