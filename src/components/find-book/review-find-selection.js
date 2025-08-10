// Rebekah Reay - Student ID: K2938309
import React from "react";
import "./find-book.css";
import { useState } from "react";
import BookDetails from "../book/book-details";
import BookImage from "../book/book-image";

export default function ReviewFindSelection({ bookSelected }) {
  console.log("book", bookSelected);
  return (
    <>
      <p
        style={{
          margin: "10px 0px",
          fontWeight: "bold",
          backgroundColor: "#ffff66",
        }}
      >
        Review your selection
      </p>
      <div className="book-to-share">
        <BookImage className="book-image-share" book={bookSelected} />
        <div className="book-details-share">
          <BookDetails book={bookSelected} />
        </div>
      </div>
      <h4>You'll pick it up from {bookSelected.swapspot}</h4>
      <br></br>
      <button
        className="confirm-edit-share"
        // onClick={(e) => handleEditClick(e)}
      >
        Back
      </button>
      <button
        className="confirm-edit-share"
        // onClick={(e) => handleShareClick(e)}
      >
        Reserve!
      </button>
    </>
  );
}
