require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
