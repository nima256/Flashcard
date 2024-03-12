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
  partsOfSpeach: {
    type: String,
    required: true,
  },
  dictionary: {
    type: String,
  },
  synonym: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
module.exports = Flashcard;
