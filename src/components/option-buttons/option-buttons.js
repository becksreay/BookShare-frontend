// Rebekah Reay - Student ID: K2938309
import React from "react";
import "./option-buttons.css";
import Button from "../button/button-component.js";

export default function Optionbuttons({ onClick }) {
  return (
    <div className="option-buttons-div">
      <Button
        className="option-buttons"
        name="share a book"
        id="share-button"
        onClick={onClick}
      ></Button>
      <Button
        className="option-buttons"
        name="find a book"
        id="find-button"
        onClick={onClick}
      ></Button>
    </div>
  );
}
