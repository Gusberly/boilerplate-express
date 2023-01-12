let express = require("express");
let app = express();
require("dotenv").config();

var res = "Hello json".toUpperCase();

if (process.env.MESSAGE_STYLE === uppercase) {
  res = "Hello json".toUpperCase();
} else {
  res = "Hello json";
}

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});
