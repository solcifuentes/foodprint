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
  const [dropdown, setDropdown] = useState(false);
  //   console.log(foodEmis);

  // DICTIONARY
  const dictionary = {
    MENU_des: "deserts",
    MENU_fish: "fish options",
    MENU_meat: "meat options",
    MENU_veg: "vegan/vegetarian options",
    DIY_bf: "breakfast ingredients",
    DIY_bread: "bread",
    DIY_chee: "cheeses",
    DIY_eggs: "eggs",
    DIY_fat: "oils, fats etc.",
    DIY_fish: "fish",
    DIY_fruit: "fruits",
    DIY_meat: "meat",
    DIY_nut: "nuts & seeds",
    DIY_pasta: "pasta & rice",
    DIY_plantb: "vegan/vegetarian alternatives",
    DIY_swee: "sweets & snacks",
    DIY_veg: "vegetables & legumes",
    BEV: "beverages",
    ALC: "alcoholic drinks",
  };

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
  };

  //FILTER CAT ITEMS
  const filterCatItems = (query) => {
    const catItems = foodEmis.filter((cat) =>
      cat.food_cat.toLowerCase().includes(query.toLowerCase())
    );
    console.log(catItems);
    printCatMessage(query);
    return catItems;
  };

  //PRINT CATEGORY MESSAGE
  const printCatMessage = (query) => {
    if (query === "menu") {
      const menuMessage = `I'm lazy today, 
        &emsp;&emsp;&emsp;show me the ${query}!`;
      console.log(menuMessage);
    }
    if (query === "diy") {
      const diyMessage = `I'm going DIY, these
        &emsp;&emsp;&emsp; are my ingredients`;
      console.log(diyMessage);
    }
    if (query === "bev") {
      const bevMessage = `I'm thirsty, as well!
        &emsp;&emsp;&emsp;&emsp. Any drinks?`;
      console.log(bevMessage);
    }
    if (query === "alc") {
      const alcMessage = `Cheers, <em>salud</em>, santé, <br />
      &emsp;&emsp;&emsp;&emsp;<nobr>skol, chin-chin!</nobr>`;
      console.log(alcMessage);
    }
  };

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
            // onClick={() => setDropdown(true)}
          >
            <Dropdown.Item
              //maybe it's {menu} or selecteditem is a piece of state
              value="menu"
              onClick={() => filterCatItems("menu")}
            >
              Menu
            </Dropdown.Item>
            <Dropdown.Item value="diy" onClick={() => filterCatItems("diy")}>
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
            {/* {dropdown && ( */}
            <Form.Control
              size="lg"
              type="text"
              name="searchInput"
              placeholder="Find your food..."
              value={inputValue}
              onChange={handleChange}
            />
            {/* )} */}
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

      <div>{}</div>
    </div>
  );
}
