const Goal = require("../models/goalModel");
const mongoose = require("mongoose");

const getGoals = async (req, res) => {
  const user_id = req.user._id;

  const goals = await Goal.find({ user_id }).sort({ deadline: 1 });
  res.status(200).json(goals);
};

const createGoal = async (req, res) => {
  const { title, description, deadline, urgent } = req.body;

  try {
    const user_id = req.user._id;
    const goal = await Goal.create({
      title,
      description,
      deadline,
      urgent,
      user_id,
    });
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteGoal = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such goal" });
  }

  const goal = await Goal.findByIdAndDelete({ _id: id });

  if (!goal) {
    return res.status(400).json({ error: "No such goal" });
  }

  res.status(200).json(goal);
};

module.exports = {
  getGoals,
  createGoal,
  deleteGoal,
};
