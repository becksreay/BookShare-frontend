// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./share-book.css";
import { useState } from "react";
import Book from "../book/book";
import BookDetails from "../book/book-details";
import BookImage from "../book/book-image";

export default function ShareBook({ book }) {
  return (
    <>
      <p style={{ margin: "10px 0px", fontWeight: "bold" }}>You are sharing:</p>
      <div className="book-to-share">
        <BookImage className="book-image-share" book={book} />
        <div className="book-details-share">
          <BookDetails book={book} />
        </div>
      </div>
      <form>
        <p>Rate the book</p>
        <p>Review the book</p>
        <p>Select swap spot from list</p>
        <p>Next button</p>
      </form>
    </>
  );
}
