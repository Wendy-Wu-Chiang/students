import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const EditAuthors = (props) => {
  const { _id } = props;
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    console.log("hello");
    axios
      .get(`http://localhost:8000/api/author/${_id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorName(res.data.authorName);
      })
      .catch((err) => {
        console.log("Edit did not went through");
        console.log(err);
        navigate("/error");
      });
  }, []);

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/author/${_id}`, { authorName })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("edit update did not went thrugh");
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <header>
        <h1>Edit this author</h1>
        <Link to={"/"}>Home</Link>
      </header>

      <form onSubmit={updateSubmitHandler}>
        <label>Name:</label>

        <input
          onChange={(e) => setAuthorName(e.target.value)}
          type="text"
          name="authorName"
          value={authorName}
        />
        {errors.authorName ? <span>{errors.authorName.message}</span> : null}
        <button className="btn btn-primary">Submit</button>
        <button onClick={(e) => navigate("/")} className="btn btn-warning">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditAuthors;
