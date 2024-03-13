const mongoose = require("mongoose");
const Flashcard = require("./models/Flashcard");

mongoose
  .connect("mongodb://127.0.0.1:27017/flashcardDB")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((e) => {
    console.log(e);
  });

const seedData = [
  {
    vocabulary: "Sniff",
    synonym: "Smell",
  },
  {
    vocabulary: "Tap",
    synonym: "Press",
  },
];

async function seedDatabase() {
  try {
    await Flashcard.insertMany(seedData);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();

// Flashcard.insertMany(seedData)
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
