import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Example1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchApi = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: " " });

    try {
      const res = await fetch(apiURL);
      const users = await res.json();
      // console.log(users);
      setData(users);
      setLoading(false);
      setIsError({ status: false, msg: " " });
      if (res.status === 404) {
        throw new Error("new");
      }
    } catch (error) {
      setLoading(false);
      setIsError({ status: true, msg: "some error occcured during fetching" });
    }
    const res = await fetch(apiURL);
    const users = await res.json();
    // console.log(users);
    setData(users);
  };

  console.log(data);

  useEffect(() => {
    fetchApi(URL);
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (isError.status) {
    return <div>{isError.msg}</div>;
  }

  const handleDelete = (id) => {
    const newUsers = data.filter((eachUser) => {
      return eachUser.id !== id;
      //   console.log(newUsers);
    });
    setData(newUsers);
  };

  return (
    <div>
      <h1>hello this is my first React UsesEffct code</h1>
      <hr />
      {data.map((eachUser) => {
        const { id, name, username, email } = eachUser;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              delete
            </button>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Example1;
