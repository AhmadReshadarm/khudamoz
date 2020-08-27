const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/dark.css");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("sever is running on port 3000");
});
