// Rebekah Reay - Student ID: K2938309

import "./App.css";
import React from "react";
import Button from "./components/button/button-component.js";
import { useState } from "react";

function Homebuttons({ onClick }) {
  return (
    <div className="button-div">
      <Button name="share a book" id="share-button" onClick={onClick}></Button>
      <Button name="find a book" id="find-button" onClick={onClick}></Button>
    </div>
  );
}

function BookShare() {
  return (
    <div>
      <p>sharing a book</p>
    </div>
  );
}

function FindBook() {
  return (
    <div>
      <p>finding a book</p>
    </div>
  );
}

function App() {
  const [path, setPath] = useState("");

  let component =
    path === "share" ? (
      <BookShare />
    ) : path === "find" ? (
      <FindBook />
    ) : (
      <Homebuttons path={path} onClick={(e) => handleClick(e)} />
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
        <h1 style={{ margin: "2px", marginTop: "4px" }}>BookShare</h1>
        <p style={{ margin: "2px", marginBottom: "4px" }}>R Reay K2938309</p>
      </header>
      <div>{component}</div>
      <div>
        <button
          id="home-button"
          style={{ margin: "2px", marginBottom: "4px" }}
          onClick={(e) => handleClick(e)}
        >
          HOME
        </button>
      </div>
    </div>
  );
}

export default App;

// ionic imports and stuff
// import "@ionic/react/css/core.css";
// import { setupIonicReact } from "@ionic/react";
// import { IonButton } from "@ionic/react";

/* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// setupIonicReact();
// import Footer from "./components/footer/footer-component.js";
