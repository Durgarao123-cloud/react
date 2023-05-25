import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l";

const Example2 = () => {
  const [drinksList, setDrinksList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const apiFetch = async (apiURL) => {
    const res = await fetch(apiURL);
    const data = await res.json();

    console.log(data.drinks);
    const { drinks } = data;
    setDrinksList(...drinksList, drinks);
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    const correctURL = `${URL}${searchItem}`;
    apiFetch(correctURL);
  }, [searchItem]);
  return (
    <div className="App">
      <h1>this is code fetching data </h1>
      <h1>drink count: {drinksList.length}</h1>
      <input
        type="text"
        id="text"
        placeholder="search for.."
        value={searchItem}
        onChange={(e) => handleChange(e)}
      />
      <hr />
      <hr />
      <div className="Container">
        {drinksList.map((eachDrink) => {
          const { idDrink, strDrink, strTags, strGlass, strDrinkThumb } =
            eachDrink;
          return (
            <div key={idDrink}>
              <h1>{strDrink}</h1>
              <h2>{strTags}</h2>
              <p>{strGlass}</p>
              <img src={strDrinkThumb} alt={strDrink} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Example2;
