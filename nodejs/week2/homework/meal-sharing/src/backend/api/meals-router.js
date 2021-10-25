const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

/* Respond with the json for all the meals */
/* router.get("/", async (req, res) => {
  try {
    res.json(meals);
  } catch (error) {
    throw error;
  }
});  */

/* Respond with the json for the meal with the corresponding id */
router.get("/:id", async (req, res) => {
  try {
    const result = getMeal(parseInt(req.params.id));
    Object.keys(result).length === 0
      ? res.status(404).json({ error: `${req.params.id} not found` })
      : res.status(200).json(result);
  } catch (error) {
    throw new Error();
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
    if (maxPrice)
      filteredMeals = filteredMeals.filter((filteredMeal) => filteredMeal.price <= maxPrice);

    if (title)
      filteredMeals = filteredMeals.filter((filteredMeal) =>
        filteredMeal.title.toLowerCase().includes(title),
      );

    if (createdAfter)
      filteredMeals = filteredMeals.filter(
        (filteredMeal) => new Date(filteredMeal.createdAt) > new Date(createdAfter),
      );

    if (limit) filteredMeals = filteredMeals.slice(0, parseInt(limit));
  }
  res.status(200).json(filteredMeals);
});

module.exports = router;
