import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const { foodEmis } = props;

  //HANDLE INPUT VALUE
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    // searchFood()
    console.log(inputValue);
    setInputValue("");
  };

  //SEARCH TERM INTO THE DB
  //   const searchFood = () => {
  //     const foodFinder = foodEmis.map((item)=> {

  //     });
  //     console.log(foodFinder);
  //     // return foodFinder.startsWith(inputValue);
  //   };
  return (
    <form
      className="search-container"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="search-inner">
        <input
          type="text"
          name="searchInput"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="dropdown">
        {foodEmis
          .filter((item) => {
            const foodLowerCase = item.food_item.toLowerCase();
            return (
              inputValue &&
              foodLowerCase.startsWith(inputValue) &&
              foodLowerCase !== inputValue
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              key={item.id}
              onSubmit={() => handleSubmit(item.food_item)}
              className="dropdown-row"
            >
              {item.food_item}
            </div>
          ))}
      </div>
    </form>
  );
}
