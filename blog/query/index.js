const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {});

app.post("/events", async (req, res) => {});

app.listen(4002, () => {
  console.log("Query Service listening on port: 4002");
});
