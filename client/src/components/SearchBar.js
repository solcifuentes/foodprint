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
  const [selectedFoodObj, setSelectedFoodObj] = useState(null);

  //HANDLE INPUT VALUE
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //HANDLE SUBMIT-search
  const handleSubmit = (event) => {
    event.preventDefault();
    handleIncrementCb(selectedFoodObj.emi_port);
    showSelectionCb(selectedFoodObj.food_item);
    setInputValue("");
    setSelectedFoodObj(null);
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
        <InputGroup className="mb-3">
          <DropdownButton
            variant="success"
            title="Food Categories"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Menu</Dropdown.Item>
            <Dropdown.Item href="#">Ingredients</Dropdown.Item>
            <Dropdown.Item href="#">Drinks</Dropdown.Item>
            <Dropdown.Item href="#">Alcohol</Dropdown.Item>
          </DropdownButton>
          <Form.Label className="search-inner">
            <Form.Control
              type="text"
              name="searchInput"
              placeholder="Find your food..."
              value={inputValue}
              onChange={handleChange}
            />
          </Form.Label>
        </InputGroup>

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
                // onSubmit={() => handleSubmit(item)}
                className="dropdown-row"
                onClick={() => {
                  onSearch(item.food_item);
                  setSelectedFoodObj(item);
                }}
              >
                {item.food_item}
              </div>
            ))}
        </div>
        <Button className="search-button" type="submit" variant="success">
          {" "}
          Search{" "}
        </Button>
      </Form>
    </div>
  );
}
