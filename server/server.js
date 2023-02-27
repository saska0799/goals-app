require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const goalsRoutes = require("./routes/goals");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/api/goals", goalsRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log("connected")))
  .catch((err) => console.log(err));
