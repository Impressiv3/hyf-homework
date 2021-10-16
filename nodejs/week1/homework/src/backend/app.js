const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

/* Respond with the json for all the meals. For each meal,
if there are reviews matching it's meal ID, add these reviews
to each meal in the form of an array. For meals that do not have any reviews,
the "reviews" property will be an empty array.
*/

const appendReviews = (meals) => {
  meals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  });

  return meals;
};

const getMeals = () => {
  return appendReviews(meals);
};

/* Respond with the json for all the meals (including it's reviews) that are cheap
(you define what a cheap meal is) */

const getCheapMeals = () => {
  return appendReviews(meals.filter((meal) => meal.price <= 40));
};

/* Respond with the json for all the meals (including it's reviews) that can fit lots of people */

const getLargeMeals = () => {
  return appendReviews(meals.filter((meal) => meal.maxNumberOfGuests >= 5));
};

/* Respond with the json for a random meal (including it's reviews) */

const getRandomMeal = () => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  randomMeal.reviews = reviews.filter((review) => review.mealId === randomMeal.id);
  return randomMeal;
};

/* Respond with the json for all reservations */

const getAllReservations = () => reservations;

/* Respond with the json for a random reservation */

const getRandomReservation = () => reservations[Math.floor(Math.random() * reservations.length)];

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Changed the default message!");
});

app.get("/meals", async (request, response) => {
  response.json(getMeals());
});

app.get("/cheap-meals", async (request, response) => {
  response.json(getCheapMeals());
});

app.get("/large-meals", async (request, response) => {
  response.send(getLargeMeals());
});

app.get("/meal", async (request, response) => {
  response.json(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.json(getAllReservations());
});

app.get("/reservation", async (request, response) => {
  response.json(getRandomReservation());
});

module.exports = app;
