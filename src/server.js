const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3001;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).send({
    message: "App w/ nodejs",
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
