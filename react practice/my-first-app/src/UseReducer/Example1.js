import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return { count: state.count };
  }
};

const initialState = {
  count: 0,
};

export default function Example1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleChange1 = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div>
      <h1>hello this id the use ReducerCounter</h1>
      <h2>count:{state.count}</h2>
      <button onClick={handleChange}>increment</button>
      <button onClick={handleChange1}>decrement</button>
    </div>
  );
}
