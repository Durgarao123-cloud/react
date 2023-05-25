// import React, { useState } from "react";

// function Hooks123() {
//   const arr = [
//     {
//       id: "mlcmlkvxxkv",
//       fname: "allu",
//       lname: "durga",
//       age: 20,
//     },
//     {
//       id: "msbckdsb",
//       fname: "koti",
//       lname: "kolli",
//       age: 29,
//     },
//     {
//       id: "cnjkjcjnc",
//       fname: "bhanu",
//       lname: "kolli",
//       age: 80,
//     },
//     {
//       id: "adnkjn",
//       fname: "satayanarayan",
//       lname: "datti",
//       age: 120,
//     },
//   ];

//   const [data, setData] = useState(arr);
//   const deleteIt = (comingId) => {
//     const filterData = data.filter((eachItem) => {
//       return eachItem.id !== comingId;
//     });
//     setData(filterData);
//   };
//   return (
//     <div>
//       {data.map((eachItem, index) => {
//         const { fname, lname, age, id } = eachItem;
//         return (
//           <div key={index}>
//             <h1>{fname}</h1>
//             <h1>{lname}</h1>
//             <h1>{age}</h1>
//             <button onClick={() => deleteIt(id)}>submit</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Hooks123;

// import React, { useState } from "react";

// const Hooks123 = () => {
//   const [data, setData] = useState(true);
//   const obj = {
//     color: "red",
//     backgroundColor: "white",
//     padding: "10px",
//     textAlign: "center",
//     position: "relative",
//     left: "50%",
//   };

//   const showData = () => {
//     setData(!data);
//   };
//   return (
//     <div>
//       <button type="button" style={obj} onClick={showData}>
//         {data ? "hide" : "show"}
//       </button>
//       {data && (
//         <p style={{ textAlign: "center" }}>
//           allu durgarao ipsum is th eone th benjnkksjnkjnkjsb
//           jbjvbvjm,vxjxvbuisk
//         </p>
//       )}
//     </div>
//   );
// };

// export default Hooks123;
