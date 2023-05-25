import React from "react";

const Rating = (props) => {
  const { name, email, body } = props;
  return (
    <main className="container">
      <ul className="sub-container">
        <li className="box">
          <div className="header">
            <h3 className="sub-header">{name}</h3>
            <h3 className="sub-header2">{email}</h3>
          </div>
          <p>{body}</p>
        </li>
      </ul>
    </main>
  );
};

export default Rating;
