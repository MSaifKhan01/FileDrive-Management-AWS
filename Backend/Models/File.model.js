const mongoose=require("mongoose")

const fileSchema= mongoose.Schema({
    filename: String,
    uploadDate: String,
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "user" },
  })
// Mongoose model for file metadata
const Filedata = mongoose.model('Filedata',fileSchema );

 module.exports={Filedata}


