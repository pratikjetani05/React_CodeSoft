const express = require("express");
const { User, Application } = require("./mongo.js");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

//For Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { password }],
    });

    if (!existingUser) {
      res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "logging succesfullu!!", existingUser });
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

//for signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = new User(data);
      await newUser.save();
      res.status(201).json({ message: "User created successfully", newUser });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
});

//  job applications
app.post("/apply", upload.single("resume"), async (req, res) => {
  const { name, email, phone, coverLetter } = req.body;
  const resume = req.file ? req.file.filename : null;

  const newApplication = new Application({
    name,
    email,
    phone,
    resume,
    coverLetter,
  });

  try {
    await newApplication.save();
    res.status(200).send("Application submitted successfully!");
  } catch (error) {
    res
      .status(500)
      .send("There was an error submitting the form. Please try again.");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
