import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Error = (props) => {
  return (
    <div>
      <h1>Error</h1>
      <p>
        We're sorry, but we could not find the author you are looking for. Would
        you like to add an author to our database?"
      </p>
      <Link to={"/new"}>Create an Author</Link>
    </div>
  );
};

export default Error;
