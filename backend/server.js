
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
dob: " 12 November",
});
});


app.listen(5000, () => {
  fetch("https://birthday-project-ft5b.vercel.app/api/birthday")
});

