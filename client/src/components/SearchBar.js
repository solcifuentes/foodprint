import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const { foodEmis, handleIncrementCb, showSelectionCb } = props;
  const [selectedFoodObj, setSelectedFoodObj] = useState(null);
  const [active, setActive] = useState(true);

  //HANDLE INPUT VALUE
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    handleIncrementCb(selectedFoodObj.emi_port);
    showSelectionCb(selectedFoodObj.food_item);
    setInputValue("");
    setSelectedFoodObj(null);
  };

  //COMPLETE THE SEARCH BAR
  const onSearch = (searchTerm) => {
    setInputValue(searchTerm);

    console.log("search term: ", searchTerm);
  };

  //   const filterMenuItems = () => {

  //   filterCats(props.foodCats, "diy").map((cat) => (
  //       <li key={cat.food_cat}>
  //         <Link
  //           to={cat.food_cat}
  //           style={{
  //             textDecoration: "none",
  //             color: "#1c5253",
  //             fontWeight: "bold",
  //           }}
  //         >
  //           {dictionary[cat.food_cat]}
  //         </Link>
  //       </li>
  //     ))

  //     foodEmis

  //   }

  return (
    <div>
      <Form
        className="search-container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <InputGroup size="m" className="mb-3">
          <DropdownButton
            variant="success"
            title="Food Categories"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item
              //maybe it's {menu} or selecteditem is a piece of state
              value="menu"
              href="#"
              // onclick={filterMenuItems}
            >
              Menu
            </Dropdown.Item>
            <Dropdown.Item href="#">Ingredients</Dropdown.Item>
            <Dropdown.Item href="#">Drinks</Dropdown.Item>
            <Dropdown.Item href="#">Alcohol</Dropdown.Item>
          </DropdownButton>
          <Form.Label className="search-inner">
            <Form.Control
              size="lg"
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
              return searchTerm && foodLowerCase.startsWith(searchTerm);
            })
            .slice(0, 10)
            .map((item) => (
              <div
                key={item.id}
                className="dropdown-row"
                onClick={() => {
                  onSearch(item.food_item);
                  setSelectedFoodObj(item);
                  setActive(false);
                }}
              >
                {active && item.food_item}
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
