let express = require("express");
let app = express();
require("dotenv").config();

var res = "Hello json".toUpperCase();

let message = { message: "Hello json" };
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json(message);
  }
});
