import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./SearchBar.css";
import Select from "react-select";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const { foodEmis, handleIncrementCb, showSelectionCb } = props;

  //HANDLE INPUT VALUE
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //HANDLE SUBMIT-search
  const handleSubmit = (event) => {
    event.preventDefault();
    //setInputValue(searchTerm)
    console.log(inputValue);
    setInputValue("");
  };

  const onSearch = (searchTerm) => {
    setInputValue(searchTerm);
    console.log("search term: ", searchTerm);
  };

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
              const searchTerm = inputValue.toLowerCase();
              const foodLowerCase = item.food_item.toLowerCase();
              return (
                searchTerm && foodLowerCase.startsWith(searchTerm)
                //   &&
                //   foodLowerCase !== inputValue
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                key={item.id}
                onSubmit={() => handleSubmit(item)}
                className="dropdown-row"
                //I want that onClick it autocompletes the input

                onClick={
                  () => onSearch(item.food_item)
                  // {
                  //   handleIncrementCb(item.emi_port);
                  //   showSelectionCb(item.food_item);
                  // }
                }
              >
                {item.food_item}
              </div>
            ))}
        </div>
      </Form>
    </div>
  );
}
