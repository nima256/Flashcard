const express = require("express");
const app = express();
port = 8000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("Hi From BackEnd");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
