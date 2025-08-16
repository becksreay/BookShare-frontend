// Rebekah Reay - Student ID: K2938309
import React from "react";
import "./button-component.css";
// import { useState } from "react";

export default function Button({ name, onClick, id }) {
  return (
    <button
      id={id}
      style={{ fontSize: "20px" }}
      onClick={onClick}
      title={`${name} button`}
    >
      {name}
    </button>
  );
}
