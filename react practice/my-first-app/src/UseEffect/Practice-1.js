import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Practice_1() {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <div>
      <h1>Ecommerce website</h1>
      <div>
        {data.map((user) => {
          const {
            id,
            name,
            username,
            email,
            address: { street },
          } = user;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <h5>{username}</h5>
              <p>{email}</p>
              <p>{street}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
