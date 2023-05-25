import React from "react";
// import Event from "./Event";
// import Class from "./Class";

// logical && operartor for a conditional rendering....

// function Conditional1(props) {
//   const cars = props.value;
//   const len = cars.length;
//   return (
//     <div>
//       <h1> Display casr..</h1>
//       {len > 0 && <h1>we have a cars {len}</h1>}
//     </div>
//   );
// }

// export default function Conditional() {
//   const arr = ["bmw", "audi", "ferari", "tata"];
//   return <Conditional1 value={arr} />;
// }

// if statemet for the conditional rendering....

// function Display() {
//   function display() {
//     alert("Display");
//   }
//   return <button onClick={display}> click here</button>;
// }
// function Hidden() {
//   function hidden() {
//     alert("hidden");
//   }
//   return <button OnClick={hidden}>clcik here</button>;
// }
// function Conditional() {
//   const val = true;
//   if (val) {
//     return <Display />;
//   }
//   return <Hidden />;
// }
// export default Conditional;

// terinary operator for the constional rendering...

function Conditional() {
  const val = true;
  return (
    <div>
      <h1>conditional rendering..</h1>
      {val ? alert("hi") : alert("hello")}
    </div>
  );
}

export default Conditional;
