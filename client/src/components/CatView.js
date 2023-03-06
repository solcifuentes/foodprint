import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "./CatView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CatView(props) {
  //   console.log("props CatView: ", props);

  const { active } = useParams();
  const navigate = useNavigate();

  function setActive(value) {
    navigate(`/cats/${value}`);
  }

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

  //my functions
  function filterCats(arr, query) {
    return arr.filter((cat) =>
      cat.food_cat.toLowerCase().includes(query.toLowerCase())
    );
  }

  //my JSX
  return (
    <Container className="CatView">
      <Row>
        <Col sm={12} md={6}>
          {props.foodprint > 0.5 && (
            <div>
              <p className="warning">
                👎🏾👎🏻👎🏽&nbsp;Oups, looks like your choices are quite high in
                emissions...
              </p>
              <p>
                Did you know that in order to reach the Paris Agreement goal,
                our meals should emit no more than 0.5kg CO2eq on average?
              </p>
            </div>
          )}
        </Col>
        <Col sm={12} md={6}>
          {props.foodprint > 0.5 && (
            <div>
              <p className="neutral">
                👍🏿👍🏻👍🏽&nbsp;Challenge yourself?! <br /> Mix it up with these
                random picks, which are all low in emissions:
              </p>
              <ul>
                {props.randomItems.map((item) => (
                  <li key={item.food_item} style={{ cursor: "text" }}>
                    Fancy {item.food_item}? Emissions are {item.emi_port}kg of
                    CO2eq only!
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
