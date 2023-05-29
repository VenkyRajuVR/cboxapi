const express = require("express");
require("./controllers/db");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ ok: true });
});

app.listen(port, () => {
  console.log(`API: OK (http://localhost:${port})`);
});
