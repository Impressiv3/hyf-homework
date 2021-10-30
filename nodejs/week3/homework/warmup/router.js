const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("<h1>Calculator Page</h1>");
});

router.get("/calculator/add/", (req, res) => {
  res.json(addNumbers(req.query));
});

router.get("/calculator/substract/", (req, res) => {
  res.json(substractNumbers(req.query));
});

router.get("/calculator/multiply/", (req, res) => {
  res.json(multiplyNumbers(req.query));
});

router.get("/calculator/divide/", (req, res) => {
  res.json(divideNumbers(req.query));
});

router.post("/calculator/add/", (req, res) => {
  res.json(addNumbers(req.query));
});

router.post("/calculator/substract/", (req, res) => {
  res.json(addNumbers(req.query));
});

router.post("/calculator/multiply/", (req, res) => {
  res.json(addNumbers(req.query));
});

router.post("/calculator/divide/", (req, res) => {
  res.json(addNumbers(req.query));
});

function addNumbers(reqParams) {
  let total = 0;
  for (const value in reqParams) {
    total += parseInt(reqParams[value]);
  }
  return total;
}

function substractNumbers(reqParams) {
  let total = 0;
  for (const value in reqParams) {
    total -= parseInt(reqParams[value]);
  }
  return total;
}

function multiplyNumbers(reqParams) {
  let total = 1;
  for (const value in reqParams) {
    total = total * parseInt(reqParams[value]);
  }
  return total;
}

function divideNumbers(reqParams) {
  let total = 1;
  for (const value in reqParams) {
    total = total / parseInt(reqParams[value]);
  }
  return total;
}

module.exports = router;
