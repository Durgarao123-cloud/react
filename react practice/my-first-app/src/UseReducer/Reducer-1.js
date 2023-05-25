import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "DELETE_PERSON") {
    const person = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    // console.log(person);
    return {
      ...state,
      data: person,
      length: state.lenghth - 1,
    };
  }
  return state;
};

export default function Reducer() {
  const initialState = {
    data: [
      { id: "124567", firstName: "allu", lastName: "durga", age: 22 },
      { id: "1223jbcs", firstName: "kolli", lastName: "sme", age: 33 },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    // console.log(id);
    dispatch({
      type: "DELETE_PERSON",
      paylaod: id,
    });
  };

  return (
    <div>
      <h1>Reducer</h1>
      <ul>
        {state.data.map((eachItem) => {
          const { id, firstName, lastName, age } = eachItem;
          return (
            <div key={id}>
              <li>{firstName}</li>
              <li>{lastName}</li>
              <li>{age}</li>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
