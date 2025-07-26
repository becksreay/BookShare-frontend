// Rebekah Reay - Student ID: K2938309

import React from "react";
import "./button-component.css";
// import { useState } from "react";

export default function Button({ name, onClick, id }) {
  // function handleClick(event) {
  //   console.log(value + " button clicked!");
  //   {
  //     value === "share" ? setShare(true) : console.log("nothing");
  //   }
  // }

  return (
    <button id={id} style={{ fontSize: "20px" }} onClick={onClick}>
      {name}
    </button>
  );
}
// export default Button;
