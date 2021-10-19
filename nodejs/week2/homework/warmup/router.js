const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("<h1>Calculator Page</h1>");
});

router.get("/numbers/add", (req, res, next) => {
  const { firstNumber, secondNumber } = req.query;
  res.json(`${parseInt(firstNumber) + parseInt(secondNumber)}`);
  next();
});

router.get("/numbers/multiply/:firstNumber?/:secondNumber?", (req, res, next) => {
  const { firstNumber, secondNumber } = req.params;
  res.json(`${parseInt(firstNumber) * parseInt(secondNumber)}`);
  next();
});

module.exports = router;
