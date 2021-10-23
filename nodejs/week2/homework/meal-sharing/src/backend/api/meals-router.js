const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

/* Respond with the json for all the meals */
/* router.get("/", async (req, res, next) => {
  try {
    res.json(meals);
    next()
  } catch (error) {
    throw error;
  }
});  */

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

router.get("/", async (req, res) => {
  const { maxPrice, title, createdAfter, limit } = req.query;
  let filteredMeals = meals;
  if (Object.keys(req.query).length === 0) {
  } else {
    if (maxPrice) {
      filteredMeals = filteredMeals.filter((filteredMeal) => filteredMeal.price <= maxPrice);
    } else {
    }
    if (title) {
      filteredMeals = filteredMeals.filter((filteredMeal) =>
        filteredMeal.title.toLowerCase().includes(title),
      );
    } else {
    }
    if (createdAfter) {
      filteredMeals = filteredMeals.filter(
        (filteredMeal) => new Date(filteredMeal.createdAt) > new Date(createdAfter),
      );
    } else {
    }
    if (limit) {
      filteredMeals = filteredMeals.slice(0, parseInt(limit));
    }
  }
  res.json(filteredMeals);
});

module.exports = router;
