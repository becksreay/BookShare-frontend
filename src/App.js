// Rebekah Reay - Student ID: K2938309

import "./App.css";
import React from "react";
import Button from "./components/button/button-component.js";

function App() {
  function handleClick(event) {
    console.log("button clicked!", event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BookShare</h1>
      </header>
      <div className="button-div">
        <Button onClick={handleClick} name={"share a book"}></Button>
        <Button onClick={handleClick} name={"find a book"}></Button>
      </div>
    </div>
  );
}

export default App;

// ionic imports and stuff
// import "@ionic/react/css/core.css";
// import { setupIonicReact } from "@ionic/react";
// import { IonButton } from "@ionic/react";
// import Footer from "./components/footer/footer-component.js";
// setupIonicReact();
