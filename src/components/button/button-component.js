// Rebekah Reay - Student ID: K2938309

import React from "react";
import "./button-component.css";

export default function Button({ onClick, name }) {
  return <button onClick={onClick}>{name}</button>;
}
// export default Button;
