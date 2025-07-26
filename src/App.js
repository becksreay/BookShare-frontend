// Rebekah Reay - Student ID: K2938309

import "./App.css";
import React from "react";
import Optionbuttons from "./components/option-buttons/option-buttons.js";
import ShareBook from "./components/share-book/share-book.js";
import FindBook from "./components/find-book/find-book.js";
import { useState } from "react";

function App() {
  const [path, setPath] = useState("");

  let component =
    path === "share" ? (
      <ShareBook />
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
        <h1 style={{ margin: "2px", marginTop: "4px" }}>BookShare</h1>
        <p style={{ margin: "2px", marginBottom: "4px" }}>R Reay K2938309</p>
      </header>
      <div>{component}</div>
      <div>
        <button
          id="home-button"
          style={{
            margin: "2px",
            marginBottom: "4px",
            position: "fixed",
            bottom: "5vh",
            left: "40%",
          }}
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
