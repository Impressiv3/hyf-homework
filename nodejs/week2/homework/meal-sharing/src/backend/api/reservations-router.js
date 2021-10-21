const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");


router.get("/", async (req, res, next) => {
  try {
    res.json(reservations);
    next();
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    res.json(getReservation(parseInt(req.params.id)));
    next();
  } catch (error) {
    throw error;
  }
});

const getReservation = (id) => {
  return reservations.filter((reservation) => reservation.id === id);
};


module.exports = router;
