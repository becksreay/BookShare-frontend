// Rebekah Reay - Student ID: K2938309
import "./App.css";
import React from "react";
import Optionbuttons from "./components/option-buttons/option-buttons.js";
import SearchBook from "./components/search-book/search-book.js";
import FindBook from "./components/find-book/find-book.js";
import { useState } from "react";

// Rebekah Reay - Student ID: K2938309
function App() {
  const [path, setPath] = useState("");

  let component =
    path === "share" ? (
      <SearchBook />
    ) : path === "find" ? (
      <FindBook />
    ) : (
      <Optionbuttons path={path} onClick={(e) => handleClick(e)} />
    );

  const handleClick = (e) => {
    if (e.target.id === "share-button") {
      setPath("share");
    } else if (e.target.id === "find-button") {
      setPath("find");
    } else {
      setPath("home");
    }

    return path;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ margin: "2px", marginTop: "4px" }} title="BookShare">
          BookShare
        </h1>
        <p
          style={{ margin: "2px", marginBottom: "4px" }}
          title="Student R Reay"
        >
          R Reay K2938309
        </p>
      </header>
      <div>{component}</div>
      <div>
        <button
          id="home-button"
          style={{
            margin: "2px",
            marginBottom: "4px",
            position: "fixed",
            bottom: "0vh",
            left: "40%",
          }}
          onClick={(e) => handleClick(e)}
          title="home button"
        >
          HOME
        </button>
      </div>
    </div>
  );
}

export default App;
