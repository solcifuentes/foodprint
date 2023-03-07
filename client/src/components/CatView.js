import React from "react";
import "./CatView.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CatView(props) {
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
                👍🏿👍🏻👍🏽&nbsp; Mix it up with these random picks, which are all
                low in emissions:
              </p>
              <ul>
                {props.randomItems.map((item) => (
                  <li key={item.food_item} style={{ cursor: "text" }}>
                    Fancy <strong>{item.food_item}</strong>? Emissions are{" "}
                    {item.emi_port}kg of CO2eq only!
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
