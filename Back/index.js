const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/flashcardDB")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB:", e);
  });

app.get("/", (req, res) => {
  res.send("Hi From BackEnd");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
