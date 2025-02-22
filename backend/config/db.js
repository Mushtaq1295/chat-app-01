const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI.replace(
      "${MONGO_USER}",
      process.env.MONGO_USER
    ).replace("${MONGO_PASS}", process.env.MONGO_PASS);

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
