require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const goalsRoutes = require("./routes/goals");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/goals", goalsRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log("connected")))
  .catch((err) => console.log(err));
