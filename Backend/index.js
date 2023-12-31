const express = require('express');
const Serverless=require("serverless-http")
const cors = require("cors");
const mongoose = require('mongoose');
const { Connection } = require('./Config/db');
const { userRouter } = require('./Routes/user.routes');
const { fileRouter } = require('./Routes/file.routes');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
//for user API endspoint
app.use("/user",userRouter)
// RESTful API endpoints
app.use("/file",fileRouter)

app.listen(port, async () => {
  try {
    await Connection
    console.log("connected to DB")
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  console.log(`Server is running on port ${port}`);
});

// Establish a connection to the database
// Connection.then(() => {
//   console.log("Connected to DB");
// });

// module.exports.handler=Serverless(app)

// console.log(`connected with Lambda`)