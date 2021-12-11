import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AllAuthors = () => {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAuthorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (_id) => {
    axios
      .delete(`http://localhost:8000/api/author/${_id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorList(authorList.filter((author) => author._id !== _id));
      })
      .catch((err) => {
        console.log("Filter author list did not went through");
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <h1>All authors page</h1>
        <h2>we have quotes here:</h2>
        <Link to={"/new"}>Add Author</Link>
      </header>
      <table style={{ margin: "auto", border: "1px solid black" }}>
        <thead style={{ backgroundColor: "lightgreen", color: "blue" }}>
          <tr>
            <th>Author</th>
            <th>Action Available</th>
          </tr>
        </thead>
        <tbody>
          {authorList
            ? authorList.map((author, index) => (
                <tr key={index}>
                  <td>{author.authorName}</td>
                  <td>
                    <button
                      type="submit"
                      class="btn btn-secondary"
                      onClick={() => {
                        navigate(`/edit/${author._id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="submit"
                      class="btn btn-danger"
                      onClick={(e) => deleteHandler(author._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default AllAuthors;
