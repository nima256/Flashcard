const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

const Collection = require("./models/Collection");

const collectionRoutes = require("./routes/collectionRoutes");

app.use(express.json()); // Parse JSON bodies

mongoose
  .connect("mongodb://localhost:27017/collectionDB")
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

app.use("/collection", collectionRoutes);

app.listen(port, () => {
  console.log(`Url: http://localhost:${port}/`);
});
