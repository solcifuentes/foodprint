import React, { useEffect, useState, useMemo } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./SearchBar.css";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const { foodEmis, handleIncrementCb, showSelectionCb, selectedFoods } = props;
  const [selectedFoodObj, setSelectedFoodObj] = useState(null);
  const [listActive, setListActive] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [menuTitle, setMenuTitle] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Food categories");
  //new line
  // const [filteredItems, setFilteredItems] = useState("");

  //HANDLE INPUT VALUE
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //HANDLE SUBMIT
  //error handling
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFoodObj);
    handleIncrementCb(selectedFoodObj.emi_port);
    showSelectionCb(selectedFoodObj);
    reset();
  };

  //COMPLETE THE SEARCH BAR
  const onSearch = (searchTerm) => {
    setInputValue(searchTerm);
  };

  //RESET ALL PARAMETERS
  function reset() {
    setInputValue("");
    setSelectedFoodObj(null);
    // setInputDisabled(true);
  }
  //FILTER CAT ITEMS & CHANGE BUTTON TITLE
  const filterCatItems = (query) => {
    setMenuTitle(query);
    if (query === "menu") {
      setButtonTitle("Menu");
    }
    if (query === "diy") {
      setButtonTitle("Ingredients");
    }
    if (query === "bev") {
      setButtonTitle("Drinks");
    }
    if (query === "alc") {
      setButtonTitle("Alcohol");
    }
    setInputDisabled(false);
  };

  const filteredItems = useMemo(
    () =>
      foodEmis
        .filter((cat) =>
          cat.food_cat.toLowerCase().includes(menuTitle.toLowerCase())
        )
        .filter((item) => {
          const searchTerm = inputValue.toLowerCase();
          const foodLowerCase = item.food_item.toLowerCase();
          const isAlreadySelected = selectedFoods.includes(item.food_item);
          return (
            searchTerm &&
            !isAlreadySelected &&
            foodLowerCase.startsWith(searchTerm)
          );
        })
        .slice(0, 10),
    [menuTitle, inputValue, foodEmis, selectedFoods]
  );

  return (
    <div>
      <Form className="search-container" onSubmit={handleSubmit}>
        <InputGroup size="m" className="mb-3">
          <DropdownButton
            variant="success"
            title={buttonTitle}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item value="menu" onClick={() => filterCatItems("menu")}>
              Menu
            </Dropdown.Item>
            <Dropdown.Item
              value="Ingredients"
              onClick={() => filterCatItems("diy")}
            >
              Ingredients
            </Dropdown.Item>
            <Dropdown.Item value="bev" onClick={() => filterCatItems("bev")}>
              Drinks
            </Dropdown.Item>
            <Dropdown.Item value="alc" onClick={() => filterCatItems("alc")}>
              Alcohol
            </Dropdown.Item>
          </DropdownButton>
          <Form.Label className="search-inner">
            <Form.Control
              size="lg"
              type="text"
              name="searchInput"
              placeholder="Find your food..."
              value={inputValue}
              onChange={handleChange}
              disabled={inputDisabled}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
            />
          </Form.Label>
        </InputGroup>

        <div className="dropdown">
          {filteredItems.map((item) => (
            <div
              key={item.id}
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
          Add to my plate
        </Button>
      </Form>

      <div>
        {menuTitle === "menu" && (
          <p>
            I'm lazy today, <br />
            &emsp;&emsp;&emsp;show me the <em>menu</em>!
          </p>
        )}
        {menuTitle === "diy" && (
          <p>
            I'm going DIY, these
            <br />
            &emsp;&emsp;&emsp; are my <em>ingredients</em>
          </p>
        )}
        {menuTitle === "bev" && (
          <p>
            I'm thirsty, as well! <br />
            &emsp;&emsp;&emsp;&emsp;Any <em>drinks</em>?
          </p>
        )}
        {menuTitle === "alc" && (
          <p>
            Cheers, <em>salud</em>, santé, <br />
            &emsp;&emsp;&emsp;&emsp;
            <nobr />
            skol, chin-chin!
          </p>
        )}
      </div>
    </div>
  );
}
