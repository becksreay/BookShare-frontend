// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./book.css";
import { useState } from "react";
import BookDetails from "./book-details.js";
import BookImage from "./book-image.js";

export default function Book({ book }) {
  //   let coverUrl = `https://covers.openlibrary.org/a/id/${book.cover}-M.jpg`;

  return (
    <>
      <BookDetails book={book} />
      <BookImage book={book} />
    </>
  );
}
