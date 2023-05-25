import React, { useReducer, useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  if (action.type === "Loading") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  //   if (action.type === "ERROR") {
  //     return {
  //       ...state,
  //       isError: { status: action.payload, msg: "some error" },
  //     };
  //   }

  if (action.type === "DELETE") {
    const person = state.userData.filter((eachItem) => {
      return eachItem.id !== action.payload;
    });
    return {
      ...state,
      userData: person,
    };
  }
  if (action.type === "ONCLICK_EDIT") {
    return {
      ...state,
      isEditing: action.payload,
    };
  }

  if ((action.type = "UPDATE_USER")) {
    const newUser = state.userData.map((eachUser) => {
      if (eachUser.id === action.payload.id) {
        return {
          id: action.payload.id,
          name: action.payload.id,
          email: action.paylaod.email,
        };
      } else {
        return eachUser;
      }
    });
    return {
      ...state,
      userData: newUser,
    };
  }
  return state;
};

const initialState = {
  userData: [],
  isLaoding: false,
  isError: { status: false, msg: "" },
  isEditing: { status: false, id: "", name: "", email: "" },
};

export default function ExampleFetchData() {
  const apiFetch = async (url) => {
    dispatch({ type: "Loading", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: " " } });
    try {
      const res = await fetch(url);
      // console.log(res);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
      dispatch({ type: "Loading", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: " " } });
    } catch (error) {
      dispatch({ type: "Loading", payload: false });
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.messege },
      });
    }
  };

  useEffect(() => {
    apiFetch(URL);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.isLoading) {
    return <h1> loadinng.....</h1>;
  }

  //   if (state.isError.status) {
  //     return <div>{state.isError.msg}</div>;
  //   }

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const updateData = (id, name, email) => {
    dispatch({
      type: "UPDATE_USER",
      payload: { id, name, email },
    });
  };

  return (
    <div>
      <h1> fetch Api</h1>
      <br />
      <hr />
      {state.isEditing?.status && (
        <EditContainer
          id={state.isEditing.id}
          comingtTittle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          UpadateData={updateData}
        />
      )}
      <div>
        {state.userData.map((eachUser) => {
          const { id, name, email } = eachUser;
          return (
            <div key={id}>
              <h1>name:{name}</h1>
              <h2>email:{email}</h2>
              <button onClick={() => handleDelete(id)}>delete</button>
              <button
                onClick={() =>
                  dispatch({
                    type: "ONCLICK_EDIT",
                    payload: { status: true, id: id, name: name, email: email },
                  })
                }
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EditContainer({ id, comingTittle, comingEmail, updateData }) {
  const [tittle, setTittle] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          id="text"
          name="tittle"
          placeholder="title"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => updateData(id, tittle, email)}>
          updata data
        </button>
      </form>
    </div>
  );
}
