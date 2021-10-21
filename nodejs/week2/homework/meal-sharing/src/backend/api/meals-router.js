const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

/* Respond with the json for all the meals */
router.get("/", async (req, res, next) => {
  try {
    res.json(meals);
    next();
  } catch (error) {
    throw error;
  }
});

/* Respond with the json for the meal with the corresponding id */
router.get("/:id", async (req, res, next) => {
  try {
    res.json(getMeal(parseInt(req.params.id)));
    next();
  } catch (error) {
    throw error;
  }
});

const getMeal = (id) => {
  return meals.filter((meal) => meal.id === id);
};


module.exports = router;
