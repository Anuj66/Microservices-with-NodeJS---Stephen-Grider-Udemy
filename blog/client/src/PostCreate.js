import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      "http://localhost:4000/posts",
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setTitle("");
  };

  return (
    <div>
      <form className="form-group" onSubmit={onSubmit}>
        <div>
          <label className="my-2">Title</label>
          <input
            className="form-control my-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
