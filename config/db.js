require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  const uri = "mongodb://127.0.0.1:27017/login-app-db";
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Database connected");
  });
}

module.exports = connectDB;
