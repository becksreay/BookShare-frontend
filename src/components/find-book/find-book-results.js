// Rebekah Reay - Student ID: K2938309

import React from "react";
import "./find-book.css";
import { useState } from "react";
import BookDetails from "../book/book-details.js";
import BookImage from "../book/book-image";

export default function BookResults({
  results,
  isDataBack,
  setIsBookSelected,
  setBookSelected,
}) {
  const handleBookSelection = (book) => {
    console.log("book selected!", book);
    setIsBookSelected(true);
    setBookSelected(book);
  };

  if (isDataBack) {
    console.log("yes, we have data", results);
    return (
      <>
        {results.length >= 1 ? (
          <>
            {results.map((book, i) => (
              <div
                className="book-to-share"
                onClick={() => handleBookSelection(book)}
                key={i}
                title={`select ${book.title} by ${book.author}`}
              >
                <BookImage className="book-image-share" book={book} />
                <div className="book-details-share">
                  <BookDetails book={book} />
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No matching results</p>
        )}
      </>
    );
  }
}
