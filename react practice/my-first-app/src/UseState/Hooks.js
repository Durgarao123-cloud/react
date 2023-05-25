// import React, { useState } from "react";

// function Hooks() {
//   useState();
//   useState();
//   useState();

//   return (
//     <div className="main">
//       <p>hello world hooks</p>
//     </div>
//   );
// }
// export default Hooks;

//.......useState in hooks
// .......................

// import React, { useState } from "react";

// function Hooks() {
//   const [count, setCount] = useState(0);
//   // console.log(count);
//   // console.log(setCount);

//   function incrementCount() {
//     //
//     for (let i = 1; i <= 5; i++) {
//       setCount((prevCount) => {
//         return prevCount + 1;
//       });
//     }
//   }

//   const decreaseCount = () => {
//     setCount((prevcount) => {
//       return prevcount - 1;
//     });
//     setCount((prevcount) => {
//       return prevcount - 1;
//     });
//   };

//   return (
//     <div>
//       {/* <h1>hello world</h1> */}
//       <button onClick={() => decreaseCount()}>decreament</button>
//       <span>count-{count}</span>
//       <button onClick={incrementCount}>increment</button>
//     </div>
//   );
// }

// export default Hooks;

//................useState in objects....

// import React, { useState } from "react";

// const intialObj = { fname: "allu", lname: "durga", age: 20 };

// const Hooks = () => {
//   const [fname, setName] = useState(intialObj);

//   const changeFirstName = () =>
//     setName({
//       ...fname,
//       fname: "allu1",
//     });
//   return (
//     <div>
//       <h1>
//         hello my name is {fname.fname} and my age is {fname.age}
//       </h1>
//       <button onClick={changeFirstName}>change name</button>
//     </div>
//   );
// };

// export default Hooks;

//......basic useState Method...

// import React, { useState } from "react";

// const Hooks = () => {
//   const [name, setName] = useState("allu");
//   const [gender, setGender] = useState("female");
//   const [age, setAge] = useState("20");

//   function changeName() {
//     setName("allu Duragarao");
//   }

//   const changeGender = () => {
//     setGender("male");
//     setAge("30");
//   };

//   return (
//     <div>
//       <h1>
//         my name is {name} and my gender is {gender} and my age is {age}
//       </h1>
//       <button onClick={changeName}>change name</button>
//       <button onClick={changeGender}>change gender</button>
//     </div>
//   );
// };

// export default Hooks;

//

//..........advanced hook

// import React, { useState } from "react";

// function Hooks() {
//   const arr = [
//     {
//       id: "hhhbhjbhj",
//       fname: "allu",
//       lname: "durga",
//       age: 50,
//     },
//     {
//       id: "vhghhjh",
//       fname: "jolli",
//       lname: "sreram",
//       age: 50,
//     },
//     {
//       id: "vghhbhbhj",
//       fname: "datti",
//       lname: "bhanu",
//       age: 50,
//     },
//     {
//       id: "njnkjn",
//       fname: "smireddi",
//       lname: "sateesh",
//       age: 50,
//     },
//   ];

//   const [data, setData] = useState(arr);

//   const deleteIt = (comingId) => {
//     const filterIt = data.filter((eachItem) => {
//       return eachItem.id !== comingId;
//     });
//     setData(filterIt);
//   };
//   return (
//     <div>
//       <section>
//         {arr.map((eachItem, index) => {
//           const { fname, lname, age, id } = eachItem;

//           return (
//             <div key={index}>
//               <h1>firstname-{fname}</h1>
//               <h1>lastname-{lname}</h1>
//               <h1>age-{age}</h1>
//               <button onClick={() => deleteIt(id)}>delete</button>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// }

// export default Hooks;

//......... conditional rendering if else and logical and && and terinary operator
// import React, { useState } from "react";

// function Hooks() {
//   const { data, setData } = useState(true);

//   const displayIt = () => {
//     setData(false);
//   };

//   return (
//     <div className="name">
//       <button type="button" onClick={displayIt}>
//         {data ? "hide" : "show"}
//       </button>
//       {/* {data && (
//         <h1>
//           allu durgarao fomr vangaatfjbjdhbjdvbjhvbdhvbjvhuvbuvbvuybuvbveyv
//         </h1>
//       )} */}

//       {data ? <h1>i ma allu lorem20 nczjncznnmncmc</h1> : <h3>data hidden</h3>}
//     </div>
//   );
// }

// export default Hooks;

// import React, { useState } from "react";

// function Hooks() {
//   const [firstName, setdata] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="name">
//       <from>
//         <div claasName="firstname">
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={firstName}
//             placeholder="enter your name"
//           />
//         </div>
//         <div className="emailid">
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             placeholder="enter your email"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             placeholder="provide your password"
//           />
//         </div>
//         <div>
//           <button type="button" id="button">
//             submit
//           </button>
//         </div>
//       </from>
//     </div>
//   );
// }

// export default Hooks;
