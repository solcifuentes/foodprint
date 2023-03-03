import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
    <div>
      <Form
        className="search-container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Form.Label className="search-inner">
          <Form.Control
            type="text"
            name="searchInput"
            placeholder="Find your food..."
            value={inputValue}
            onChange={handleChange}
          />
          <Button className="search-button" type="submit" variant="success">
            {" "}
            Search{" "}
          </Button>
        </Form.Label>
        <div className="dropdown">
          {foodEmis
            .filter((item) => {
              const foodLowerCase = item.food_item.toLowerCase();
              return (
                inputValue && foodLowerCase.startsWith(inputValue)
                //   &&
                //   foodLowerCase !== inputValue
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
      </Form>
    </div>
  );
}
