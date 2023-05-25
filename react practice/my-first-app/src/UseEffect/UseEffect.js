import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("hello i am from useEffect", count, toggle);
    const resizeHandler = window.addEventListener(
      "resize",
      () => {
        setPageWidth(window.innerWidth);
      },
      []
    );
    return () => {
      console.log("iam reomving");
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return (
    <div>
      <h1>use effect</h1>
      <h1>count:{count}</h1>
      <h2>{pageWidth}</h2>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "open" : "close"}
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click here
      </button>
    </div>
  );
}
