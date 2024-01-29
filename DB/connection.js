// imposrt mongoose

const mongoose = require("mongoose");

// connection string of mongodb

const connection_String = process.env.DATABASE;

// connect to mongodb using mongoose
//returns promise

mongoose.connect(connection_String)
  .then((res) => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log(`mongodb connection failed due to ${err}`);
  })



