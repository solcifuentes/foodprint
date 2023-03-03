import { useEffect } from "react";

export default function Api(props) {
  useEffect(() => {
    getFoodEmis();
    getFoodCats();
    getCondItems();
  }, []);
  const { setFoodCats, setFoodEmis, setCondItems } = props;

  async function getFoodEmis() {
    try {
      let response = await fetch("/api"); //which path do I use here?
      if (response.ok) {
        let foodEmis = await response.json();
        // console.log("food emissions:", foodEmis);
        setFoodEmis(foodEmis);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  async function getFoodCats() {
    try {
      let response = await fetch("/api/cat");
      if (response.ok) {
        let foodCats = await response.json();
        setFoodCats(foodCats);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }

  async function getCondItems() {
    try {
      let response = await fetch("/api/cond");
      if (response.ok) {
        let condItems = await response.json();
        // console.log(condItems);
        setCondItems(condItems);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }
}
