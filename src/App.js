// Rebekah Reay - Student ID: K2938309

import "./App.css";
import "@ionic/react/css/core.css";
import { setupIonicReact } from "@ionic/react";
import React from "react";
import { IonButton } from "@ionic/react";
import Button from "./components/button/button-component.js";
import Footer from "./components/footer/footer-component.js";

setupIonicReact();

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
        <button value="share" onClick={handleClick}>
          Share a book
        </button>
        <button value="find" onClick={handleClick}>
          Find a book
        </button>
      </div>

      <Footer id="footer" />
    </div>
  );
}

export default App;
