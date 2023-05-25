import React, { useState } from "react";

export default function Form1() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let obj = {
      firstName: firstName,
      email: email,
      password: password,
    };
    console.log(obj);
  };

  return (
    <div>
      <form className="form">
        <div className="form-content">
          <input
            type="text"
            name="firstname"
            id="firstName"
            value={firstName}
            placeholder="enter the name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="enter the email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="place-content">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="enter the password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="button-contentxa">
          <button onClick={handleChange}>login</button>
        </div>
      </form>
    </div>
  );
}
