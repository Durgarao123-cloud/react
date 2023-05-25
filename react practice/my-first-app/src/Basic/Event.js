// import React from "react";

// const Event = () => {
//   const clickHandle = (e) => {
//     return console.log(e);
//   };

//   const clickHandle = (e, firstName) => {
//     return console.log("hello", e, firstName);
//   };

//   return (
//     <main className="container">
//       {/* <button type="button" onClick={clickHandle}> */}
//       <button
//         type="button"
//         // onClick={function (e) {
//         //   return clickHandle(e, "durga");
//         onClick={(e) => clickHandle(e, "allu")}
//       >
//         clickhere
//       </button>
//     </main>
//   );
// };

// export default Event;

// import React from "react";

// const Event = () => {
//   // function eventHandler(e,firstName){
//   //     return console.log(e);
//   // }

//   const eventHandler = (e, firstName) => console.log("helli", e, firstName);
//   return (
//     <div className="container">
//       <button
//         type="button"
//         className="button"
//         onClick={(e) => eventHandler(e, "allu")}
//       >
//         clickhere
//       </button>
//     </div>
//   );
// };

// export default Event;

// we have a different type events like Onlclik event ans mouse over event like..

import React from "react";
import reactDom from "react-dom";

function Event() {
  const hello = (a) => {
    alert("hello this is an Onlclickevent" + a);
  };
  return <button onClick={() => hello("allu dugara")}>clcik here</button>;
}
export default Event;
