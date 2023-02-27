var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET all food emi data */
router.get('/api', async (req, res, next) => {
  try {
      let results = await db("SELECT * FROM food_emi_data");
      let foodEmis = results.data;
      res.send(foodEmis);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// GET food categories
router.get('/api/cat', async (req, res, next) => {
  try {
      let results = await db("SELECT DISTINCT food_cat FROM food_emi_data");
      let foodCats = results.data;
      res.send(foodCats);
      // res.send(foodCats.map(cat => cat.food_cat));
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

// GET all food items below threshold
router.get('/api/cond', async (req, res, next) => {
  try { let results = await db(`SELECT * FROM food_emi_data WHERE emi_port <= 0.5`);
    if ( results.data.length === 0) {
      res.status(404).send({ error: 'Food items not found.'})
    } else {
      res.send(results.data);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


/*GET food item by id*/
router.get('/api/:id', async (req, res, next) => {
  let foodItemId = req.params.id;
  try { let results = await db(`SELECT * FROM food_emi_data WHERE id = ${foodItemId}`);
    if ( results.data.length === 0) {
      res.status(404).send({ error: 'Food item not found.'})
    } else {
      res.send(results.data[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});




module.exports = router;
