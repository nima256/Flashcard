const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  vocabulary: {
    type: String,
    required: true,
  },
  pronunciation: {
    type: String,
    required: true,
  },
});
