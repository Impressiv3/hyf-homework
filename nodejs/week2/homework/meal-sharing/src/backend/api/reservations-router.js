const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");

router.get("/", async (req, res) => {
  try {
    res.json(reservations);
  } catch (error) {
    res.status(400).json(error.toString())
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = getReservation(parseInt(req.params.id));
    Object.keys(result).length === 0
      ? res.status(404).json({ error: `${req.params.id} not found` })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.toString())
  }
});

const getReservation = (id) => {
  return reservations.find((reservation) => reservation.id === id);
};

module.exports = router;
