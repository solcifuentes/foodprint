import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CatView from "./components/CatView";
import ItemsView from "./components/ItemsView";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import SearchBar from "./components/SearchBar";
import Api from "./Api.js";

function App() {
  //my state
  const [foodEmis, setFoodEmis] = useState([]);
  const [foodCats, setFoodCats] = useState([]);
  const [foodprint, setFoodprint] = useState(0);
  const [selection, setSelection] = useState([]);
  const [condItems, setCondItems] = useState([]);
  const [randomItems, setRandomItems] = useState([]);

  //my functions
  // useEffect(() => {
  //   getFoodEmis();
  //   getFoodCats();
  //   getCondItems();
  // }, []);

  useEffect(() => {
    selectRandomItems();
  }, [condItems]);

  // async function getFoodEmis() {
  //   try {
  //     let response = await fetch("/api"); //which path do I use here?
  //     if (response.ok) {
  //       let foodEmis = await response.json();
  //       // console.log("food emissions:", foodEmis);
  //       setFoodEmis(foodEmis);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Server error: ${err.message}`);
  //   }
  // }

  // async function getFoodCats() {
  //   try {
  //     let response = await fetch("/api/cat");
  //     if (response.ok) {
  //       let foodCats = await response.json();
  //       setFoodCats(foodCats);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Server error: ${err.message}`);
  //   }
  // }

  // async function getCondItems() {
  //   try {
  //     let response = await fetch("/api/cond");
  //     if (response.ok) {
  //       let condItems = await response.json();
  //       // console.log(condItems);
  //       setCondItems(condItems);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Server error: ${err.message}`);
  //   }
  // }

  function handleIncrement(value) {
    setFoodprint((foodprint) => foodprint + value);
  }

  function showSelection(item) {
    let newSelection = [...selection];
    newSelection.push(item);
    setSelection((selection) => newSelection);
  }

  function reset(e) {
    setFoodprint(0);
    setSelection([]);
  }

  function selectRandomItems() {
    let index1 = Math.floor(Math.random() * condItems.length);
    let index2 = Math.floor(Math.random() * condItems.length - 1);
    let index3 = Math.floor(Math.random() * condItems.length - 2);
    if (+index1 === +index2) {
      index2 += 1;
    }
    if (+index1 === +index3) {
      index3 += 1;
    }
    if (+index2 === +index3) {
      index3 += 1;
    }
    let newRandomItems = [];
    newRandomItems.push(
      condItems[index1],
      condItems[index2],
      condItems[index3]
    );
    setRandomItems(newRandomItems);
  }

  //my JSX
  return (
    <Container className="App">
      <Api
        setFoodEmis={setFoodEmis}
        setFoodCats={setFoodCats}
        setCondItems={setCondItems}
      />
      <div className="main">
        <Row className="center">
          <Col>
            <h1>FoodPrint</h1>
          </Col>
        </Row>
        <Row className="center">
          <Col>
            <h2>
              Helping to stop global warming, <br /> one meal at a time.
            </h2>
          </Col>
        </Row>
        <Row className="center">
          <Col>
            <h3>
              Make <em>&nbsp;informed food choices&nbsp;</em> and{" "}
              <em>&nbsp;decrease your carbon footprint!&nbsp;</em>
            </h3>
          </Col>
        </Row>
        <Row className="center" style={{ alignItems: "center" }}>
          <Col xs={1}>
            <p style={{ fontSize: 150 }}>{"{"}</p>
          </Col>
          <Col>
            <p>
              A quarter of the global greenhouse gas emissions comes from food.
              <br />
              This means across all stages of the production: The supply chain
              starts with changes to land for pastures or farming are made, then
              includes farming itself, processing, transport, as well as retail
              and packaging.
            </p>
          </Col>
          <Col xs={1}>
            <p style={{ fontSize: 150 }}>{"}"}</p>
          </Col>
        </Row>
        <Row className="center">
          <Col>
            <SearchBar
              foodEmis={foodEmis}
              handleIncrementCb={(value) => handleIncrement(value)}
              showSelectionCb={(item) => showSelection(item)}
            />
            {/* <Button onClick={reset} variant="success"> */}
            {/* <Link
                to="/cats"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Let's get started!
              </Link> */}
            {/* </Button> */}
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <p style={{ fontWeight: 600 }}>What's on your plate?</p>
            <ul>
              {selection.map((item) => (
                <li key={item} style={{ color: "blueviolet" }}>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Your food choices for today produce
              <br />
              <span className={foodprint > 0.5 ? "warning" : "neutral"}>
                &nbsp;{+foodprint.toFixed(2)}kg
              </span>{" "}
              of CO2eq*.
            </p>

            <Button onClick={reset} variant="outline-success">
              Empty my plate!
            </Button>
          </Col>
          <Col>
            {/* <Routes>
              <Route
                path="/cats/:active?"
                element={
                  <CatView
                    foodCats={foodCats}
                    foodprint={foodprint}
                    randomItems={randomItems}
                  />
                }
              >
                <Route
                  path=":key"
                  element={
                    <ItemsView
                      foodEmis={foodEmis}
                      handleIncrementCb={(value) => handleIncrement(value)}
                      showSelectionCb={(item) => showSelection(item)}
                    />
                  }
                />
              </Route>
            </Routes> */}
          </Col>
        </Row>
      </div>

      <footer className="footer">
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <small>
              *Emissions are measured in carbon dioxide equivalents. This means
              non-CO2 gases are weighted by the amount of warming they cause
              over a 100-year timescale. Calculations are simplified by assuming
              portion sizes of 250g, 100g for oils, fats, nuts and seeds and by
              disregarding the origin of the food items.
              <br />
              Based on data by{" "}
              <Link
                to="https://ourworldindata.org/food-choice-vs-eating-local"
                target="_blank"
              >
                Our World In Data is a project of the Global Change Data Lab
              </Link>
            </small>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default App;
