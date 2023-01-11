let express = require("express");
let app = express();

app.get("/", (req, res) => {
  return res.send("Hello Express");
});
