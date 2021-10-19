const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

router.get("/", async (req, res) => {
  try {
    req.send("hello world");
    console.log(meals);
    console.log("in /api/meals");
    
  } catch (error) {
    throw error;
  }
});

/* // Home page route.
router.get("/", (req, res) => {
  res.send("<h1>Calculator Page</h1>");
});

router.get(
  "/numbers/add",
  (req, res, next) => {
    const { firstNumber, secondNumber } = req.query;
    res.json(`${parseInt(firstNumber) + parseInt(secondNumber)}`);
    next();
  },
  () => console.log("Finished adding the 2 numbers together."),
);
 */

module.exports = router;
