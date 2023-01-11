let express = require("express");
let app = express();

app.listen("https://boilerplate-express-production-db38.up.railway.app/");

app.get("/home", (req, res) => {
  res.send("Hello Express");
});
