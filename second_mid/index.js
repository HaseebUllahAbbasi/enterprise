const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));

  //   res.status(200).json({
  //     success: true,
  //     message: "Home Page",
  //   });
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

app.listen(4000, () => {
  console.log("server started");
});
