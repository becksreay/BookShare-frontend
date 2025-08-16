// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./book.css";
import { useState } from "react";

export default function BookImage({ book }) {
  let coverUrl = `https://covers.openlibrary.org/a/id/${book.cover}-M.jpg`;
  return (
    <>
      <img src={coverUrl} className="book-image" title="book cover"></img>
    </>
  );
}
