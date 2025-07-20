// Rebekah Reay - Student ID: K2938309

import React from "react";
import "./button-component.css";

export default function Button({ children, value }) {
  function shareButton(value) {
    console.log("share button clicked!" + value);
  }

  // function findButton() {
  //   console.log("find button clicked!");
  // }

  return (
    <button type="button" className="button" onClick={shareButton(value)}>
      {children}
    </button>
  );
}
// export default Button;
