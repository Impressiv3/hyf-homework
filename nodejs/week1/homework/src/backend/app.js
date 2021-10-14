const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

const getMeals = () => {
  console.log("Yello world!");
};

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.statusCode = 200;
  response.send("Changed the default message!");
});

app.get("/meals", async (request, response) => {
  response.statusCode = 200;
  response.send("Lofaszz");
});

module.exports = app;
