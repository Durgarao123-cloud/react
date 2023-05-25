import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function ApiFetch() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: " " });

  const userDataFetching = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: " " });
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      setUserData(data);
      setLoading(false);
      setIsError(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: "something went wrong unable to fetch api",
      });
    }
    // const res = await fetch(apiURL);
    // const data = await res.json();
    // setUserData(data);
  };

  useEffect((URl) => {
    userDataFetching(URL);
  }, []);

  if (loading) {
    return (
      <div>
        <h1>laoding.....</h1>
      </div>
    );
  }
  if (isError.status) {
    return (
      <div>
        <h1>{isError.msg}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>api fetching using useEffect</h1>
      <ul>
        {userData.map((eachUser) => {
          const { id, name, username, email } = eachUser;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{username}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// const URL = "https://jsonplaceholder.typicode.com/users";

// export default function ApiFetch() {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const userDataFetching = async (url) => {
//     try {
//       setLoading(true);
//       const response = await fetch(url);
//       const data = await response.json();
//       setUserData(data);
//       setLoading(false);
//     } catch {
//       setLoading(false);
//     }
//     // const response = await fetch(url);
//     // const data = await response.json();
//     // setUserData(data);
//   };
//   useEffect(() => {
//     userDataFetching(URL);
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>hello</h1>
//       <ul>
//         {userData.map((eachItem) => {
//           const { name, username, email } = eachItem;

//           return (
//             <li>
//               <div>{name}</div>
//               <div>{username}</div>
//               <div>{email}</div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
