const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("error"));
  
  app.use(cors());
  app.use(express.json());

  
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/movies", movieRoute);
  app.use("/api/lists", listRoute);

app.listen(3000, () => {
    console.log("Backend is running");
});

module.exports = app;
    