const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

const Flashcard = require("./models/Flashcard");

mongoose
  .connect("mongodb://localhost:27017/flashcardDB")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB:", e);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hi From backEnd");
});

app.get("/flashcards", async (req, res) => {
  const flashcards = await Flashcard.find({});
  res.status(200).json({ flashcards });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
