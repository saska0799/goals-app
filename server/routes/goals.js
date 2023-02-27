const express = require("express");
const {
  getGoals,
  createGoal,
  deleteGoal,
} = require("../controllers/goalController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/", getGoals);

router.post("/", createGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
