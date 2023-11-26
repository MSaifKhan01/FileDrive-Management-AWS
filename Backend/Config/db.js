
const mongoose=require("mongoose")

require("dotenv").config()
// MongoDB configuration
let Connection = mongoose.connect(process.env.MongoUrl);

module.exports={Connection}