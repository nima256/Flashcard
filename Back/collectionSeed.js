const mongoose = require("mongoose");
const Collection = require("./models/Collection");

mongoose
  .connect("mongodb://127.0.0.1:27017/collectionDB")
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((e) => {
    console.log(e);
  });

const seedData = [
  {
    name: "7A",
  },
  {
    name: "7B",
  },
];

async function seedDatabase() {
  try {
    await Collection.insertMany(seedData);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
