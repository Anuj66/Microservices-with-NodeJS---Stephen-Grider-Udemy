import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      {
        content,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="my-2">New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control my-2"
          />
        </div>
        <button className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
