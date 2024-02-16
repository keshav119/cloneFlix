const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("error"));

  app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);

app.listen(3000, () => {
    console.log("Backend is running");
});


    