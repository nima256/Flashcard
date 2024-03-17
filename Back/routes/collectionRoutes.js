const express = require("express");
const router = express.Router();

const Collection = require("../models/Collection");

router.get("/", async (req, res) => {
  const collections = await Collection.find({});
  res.status(200).json(collections);
});

router.post("/new", async (req, res) => {
  const { vocabulary, synonym } = req.body;

  const newCollection = new Collection({
    vocabulary,
    synonym,
  });

  const savedNewCollection = await newCollection.save();

  res.status(201).json({
    message: "Created new collection.",
    collection: savedNewCollection,
  });
});

router.get("/:collectionId", async (req, res) => {
  const { collectionId } = req.params;

  const collection = await Collection.findById(collectionId);
  res.json(collection);
});

module.exports = router;
