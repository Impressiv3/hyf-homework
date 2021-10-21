const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");

router.get("/", async (req, res, next) => {
  try {
    res.json(reviews);
    next();
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.json(getReview(parseInt(req.params.id)));
    next();
  } catch (error) {
    throw error;
  }
});

const getReview = (id) => {
  return reviews.filter((review) => review.id === id);
};

module.exports = router;
