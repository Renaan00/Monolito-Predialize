const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")

const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Não encontrado');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      message: error.message
    }
  });
});

app.listen(3000, () => {
  console.log(`Api running at ::3000`);
});
