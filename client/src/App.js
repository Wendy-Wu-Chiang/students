import { Link, navigate, Router } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import EditAuthors from "./components/EditAuthors";
import AllAuthors from "./components/AllAuthors";
import Error from "./components/Error";
import NewAuthor from "./components/NewAuthor";

function App() {
  return (
    <div className="App">
      <Router>
        <AllAuthors path="/" />
        <NewAuthor path="/new" />
        <Error path="/error" />
        <EditAuthors path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
