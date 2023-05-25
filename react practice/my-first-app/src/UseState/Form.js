import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  // const changeFirstName = (e) => {
  //   console.log(e.target.value);
  //   setFirstName(e.target.value);
  // };
  // const changeLastName = (e) => {
  //   console.log(e.target.value);
  //   setLastName(e.target.value);
  // };
  // const changePassword = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  // const handleInput = (e, name) => {
  //   console.log(e.target.value, name);
  //   if (name === "firstName") {
  //     setFirstName(e.target.value);
  //   } else if (name === "lastName") {
  //     setLastName(e.target.value);
  //   } else if (name === "password") {
  //     setPassword(e.target.value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    console.log(userObj);
  };
  return (
    <div>
      <form>
        <div className="form">
          <div className="form-content">
            <input
              type="text"
              name="fistName"
              id="firstName"
              value={firstName}
              placeholder="enter your firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-content">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="enter your lastname"
            />
          </div>
          <div className="form-content">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="enter the password"
            />
          </div>
          <div className="form-button">
            <button onClick={handleSubmit}>login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
