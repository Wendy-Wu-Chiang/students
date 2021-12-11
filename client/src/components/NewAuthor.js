import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState } from "react";

const NewAuthor = (props) => {
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");

  const newSubmitHandler = (e) => {
    e.preventDefault();
    const newAuthor = { authorName };
    axios
      .post(`http://localhost:8000/api/author`, newAuthor)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <form onSubmit={newSubmitHandler}>
        <header>
          <h1>Favorite Author</h1>
          <Link to={"/"}>Home</Link>
        </header>
        <label>Name:</label>
        <input
          onChange={(e) => setAuthorName(e.target.value)}
          type="text"
          name="authorName"
          value={authorName}
        />
        {errors.authorName ? <span>{errors.authorName.message}</span> : null}
        <button class="btn btn-primary">Submit</button>
        <button onClick={(e) => navigate("/")} class="btn btn-warning">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewAuthor;
