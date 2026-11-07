
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Birthday Wish Backend is Running! 🎂");
});

app.get("/api/birthday", (req, res) => {
res.json({
name: "My Project Partner",
title: "Happy Birthday! 🎉",
message: "Wishing you lots of happiness and success! 🎂💖",
dob: " 08 November",
});
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});

