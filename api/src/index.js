const express = require("express");
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser")

const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => {
  console.log(`Api running at ::3000`);
});
