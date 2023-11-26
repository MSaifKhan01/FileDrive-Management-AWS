const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { Filedata } = require("../Models/File.model");
const { auth } = require("../Middleware/auth");
const { s3 } = require("../Config/S3_Config");
const { RoleBase } = require("../Middleware/RoleBase");
require("dotenv").config();
const fileRouter = express.Router();

const bucketName = process.env.S3bucketName;
const upload = multer({ dest: "uploads/" });

fileRouter.post(
  "/upload",
  upload.single("file"),
  auth,
  RoleBase(["user", "admin"]),
  async (req, res) => {
    const { file } = req;

    // Reading the file from the local filesystem
    const fileContent = fs.readFileSync(file.path);

    // Specifying the parameters for S3 upload
    const params = {
      Bucket: bucketName,
      Key: `${file.originalname}`,
      Body: fileContent,
    };

    // Uploading the file to S3

    s3.upload(params, async (err, data) => {
      if (err) {
        console.error("Error uploading file to S3:", err);

        res.status(500).send("Internal Server Error");
      } else {
        console.log("File uploaded successfully. S3 URL:", data.Location);
        const imageurlS3 = data.Location;

        try {
          const userId = req.body.user;

          // Date and time in indian formate
          const currentTime = new Date();
          const options = {
            hour12: false,
            day: "numeric",
            month: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          };

          const formattedTime = currentTime.toLocaleString("en-IN", options);
          const formattedDateTimeWithComma= formattedTime.replace(' ', ', ');

          // Add file metadata to MongoDB
          const metadata = new Filedata({
            filename: imageurlS3,
            uploadDate: formattedDateTimeWithComma,
            user: userId,
          });
          await metadata.save();

          res.status(201).send("File uploaded successfully!");

          // res.json({ message: 'File uploaded successfully!' });
        } catch (error) {
          console.error("Error uploading file:", error);
          res.status(500).send({ error: "Error uploading file." });
        }
      }
    });
  }
);

fileRouter.get("/files", auth, RoleBase(["admin"]), async (req, res) => {
  // getting the list of uploaded files from MongoDB
  try {
    const files = await Filedata.find();

    // console.log(files)

    let PopulatedFiles = await Filedata.populate(files, { path: "user" });

    res.status(200).send(PopulatedFiles);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).send({ error: "Error fetching files." });
  }
});

fileRouter.get("/files/:userId", auth, RoleBase(["user"]), async (req, res) => {
  try {
    const userId = req.params.userId;

    // Retrieve the list of uploaded files from MongoDB for a specific user
    const files = await Filedata.find({ user: userId }).populate("user");

    res.status(200).send(files);
  } catch (error) {
    res.status(500).send({ error: "Error fetching files." });
  }
});
fileRouter.delete(
  "/delete/:filename",
  auth,
  RoleBase(["user", "admin"]),
  async (req, res) => {
    const filename = req.params.filename;
    console.log("Deleting file:", filename);

    // Delete file from S3
    const deleteParams = {
      Bucket: bucketName,
      Key: filename,
    };
    console.log("Delete Params:", deleteParams);

    try {
      // Removing file metadata from S3
      const response = await s3.deleteObject(deleteParams).promise();
      console.log("yhdvbc", response);

      if (response && response.$metadata) {
        console.error("Error deleting file:", response);
        // Handle the error as needed
      } else {
        // File deleted successfully
        console.log('"1File deleted successfully!');
        // Removing file metadata from MongoDB
        await Filedata.deleteOne({ filename: filename });

        res.status(204).send({ message: "File deleted successfully!" });
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      res.status(500).send({ error: "Error deleting file." });
    }
  }
);

module.exports = { fileRouter };
