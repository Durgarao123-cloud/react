import React, { useState, useEffect } from "react";
import "./prectice.css";

const URL = "https://jsonplaceholder.typicode.com/posts ";
const Practice = () => {
  const [data, setData] = useState([]);

  const apiFetch = async (apiURL) => {
    const res = await fetch(apiURL);
    const list = await res.json();
    console.log(list);
    // const { drinks } = list;
    setData(list);
  };

  useEffect(() => {
    apiFetch(URL);
  }, []);

  return (
    <div>
      <div class="head">
        <h1>Title-body</h1>
      </div>
      <div class="container">
        {data.map((eachItem) => {
          const { id, title, body } = eachItem;
          const newTitle = title.substr(0, 10);
          return (
            <div key={id} class="container">
              <div class="each-card">
                <h1>{newTitle}</h1>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Practice;
