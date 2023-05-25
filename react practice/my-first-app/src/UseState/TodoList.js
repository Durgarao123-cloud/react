import React, { useState } from "react";

export default function TodoList() {
  // const tempList = [
  //   {
  //     text: "hello",
  //     id: "dbjvsbv",
  //   },
  //   {
  //     text: "hello world",
  //     id: "bsjbcsbc",
  //   },
  // ];

  const [list, setList] = useState([]);
  const [messege, setMessege] = useState({ text: " ", id: " " });
  const handleChange = (e) => {
    setMessege({ ...messege, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      text: messege.text,
      id: new Date().getTime().toString(),
    };
    console.log(newTodo);
    setList([...list, newTodo]);
    setMessege({
      text: " ",
      id: " ",
    });
  };

  const handleDelete = (id) => {
    // console.log(id);
    const filterOne = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(filterOne);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={messege.text}
            placeholder="enter your name"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>add</button>
          <hr />
        </div>
      </form>
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <div>
                {text}
                <button
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  delete
                </button>
                <button>edit</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
