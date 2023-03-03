// rfc + tab: react functional component
import "./ItemsView.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ItemsView(props) {
  // console.log("props ItemsView", props);
  //my state
  const { key } = useParams();

  //my functions

  //my html
  return (
    <Container className="ItemsView">
      <ul>
        {props.foodEmis
          .filter((el) => el.food_cat === key)
          .map((item) => (
            <li
              key={item.id}
              className="select"
              onClick={(e) => {
                props.handleIncrementCb(item.emi_port);
                props.showSelectionCb(item.food_item);
              }}
            >
              {item.food_item}
            </li>
          ))}
      </ul>
    </Container>
  );
}
