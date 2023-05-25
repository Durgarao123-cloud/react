import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import Map from "./Map.js";

function Example() {
  return <h1> hello</h1>;
}
const element = document.getElementById("root");
const root = ReactDom.createRoot(element);
root.render(
  <div>
    <Example />
    <App />
    <Map />
  </div>
);
