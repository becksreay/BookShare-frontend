// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./book.css";
import { useState } from "react";

export default function BookDetails({ book }) {
  return (
    <div>
      <p className="book-title" title={`book title: ${book.title}`}>
        {book.title}
      </p>
      <p className="book-author" title={`author: ${book.author}`}>
        by {book.author}
      </p>
    </div>
  );
}
