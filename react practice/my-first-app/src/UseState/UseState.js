import React, { useState } from "react";

export default function UseState() {
  const [data, setData] = useState(0);

  const handleIncrement = () => {
    setData((prevData) => prevData + 1);
    setData((prevData) => prevData + 1);
  };

  const handleDecrement = () => {
    for (let i = 0; i <= 5; i++) {
      setData((prevData) => prevData - 1);
    }
  };

  return (
    <div>
      <h1>Use State</h1>
      <h1> count:{data}</h1>
      <button style={{ color: "red" }} onClick={handleIncrement}>
        increment
      </button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}
