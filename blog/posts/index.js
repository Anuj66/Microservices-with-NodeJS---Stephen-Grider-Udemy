const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    posts[id] = { id, title };

    console.log("Posts : ", posts);

    await axios.post("http://localhost:4005/events", {
      event: {
        type: "PostCreated",
        data: {
          id,
          title,
        },
      },
    });

    res.status(201).send(posts[id]);
  } catch (error) {
    console.log("Error : ", error.message);
  }
});

app.post("/events", (req, res) => {
  console.log("Event Type: ", req.body.event.type);
  res.send({ event: req.body });
});

app.listen(4000, () => {
  console.log("Logging for v-0.0.3");
  console.log("Listening at port: 4000");
});
