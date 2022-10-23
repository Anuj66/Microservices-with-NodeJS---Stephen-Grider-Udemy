const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  try {
    console.log("Req Body :", req.body);
    const { type, data } = req.body.event;
    if (type === "CommentCreated") {
      const status = data.content.includes("orange") ? "rejected" : "approved";
      await axios.post("http://localhost:4005/events", {
        event: {
          type: "CommentModerated",
          data: {
            id: data.id,
            postId: data.postId,
            status,
            content: data.content,
          },
        },
      });
    }

    res.send({});
  } catch (error) {
    console.log("error : ", error.message);
  }
});

app.listen(4003, () => {
  console.log("Moderation Service running at port : 4003");
});
