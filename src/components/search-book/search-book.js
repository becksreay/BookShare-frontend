// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./search-book.css";
import { useState } from "react";
import ShareBook from "../share-book/share-book";
import Book from "../book/book.js";

export default function SearchBook() {
  const [query, setQuery] = useState("");
  const [availBooks, setAvailBooks] = useState([]);
  const [book, setBook] = useState();
  const [isBook, setIsBook] = useState();
  const [isConfirmed, setIsConfirmed] = useState();
  let testData;
  let tempBook;

  let bookComponent =
    isBook === true ? (
      <>
        <Book book={book} />
        <button
          id="confirm-button"
          onClick={(e) => handleClick(e)}
          title="confirm button"
        >
          Yes, share this book
        </button>
      </>
    ) : isBook === false ? (
      <>
        <p title="book not found">Could not find that book</p>
        <p>Please search again</p>
      </>
    ) : (
      <></>
    );

  useEffect(() => {
    console.log("availBooks changed:", availBooks);
  }, [availBooks]);

  useEffect(() => {
    console.log("book is set:", book);
  }, [book]);

  const handleInput = (e) => {
    e.preventDefault();
    let coreUrl = "https://openlibrary.org/search.json?title=";
    // let testUrl = "https://openlibrary.org/api/books?bibkeys=";

    let url = coreUrl + query;
    // if (e.key === "Enter") {
    const headers = new Headers({
      "User-Agent": "BookShare/prototype (becksreay@gmail.com)",
    });
    const options = {
      method: "GET",
      headers: headers,
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        testData = data.docs[0];
        console.log("test data", testData);
        if (testData) {
          tempBook = {
            author: testData.author_name[0],
            title: testData.title,
            cover: testData.cover_i,
          };
          setBook(tempBook);
          setIsBook(true);
          setAvailBooks((prev) => [...prev, tempBook]);
        } else {
          console.log("no test data");
          setIsBook(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  function handleClick(e) {
    setIsConfirmed(true);
  }

  return (
    <>
      {isConfirmed ? (
        <ShareBook book={book} />
      ) : (
        <div>
          <h1 className="share-title" title="share a book">
            Share a book
          </h1>
          <form className="share-form" onSubmit={handleInput}>
            <div id="search-input">
              <label htmlFor="share-input">
                Enter book title
                <input
                  type="search"
                  id="share-input"
                  name="share-input"
                  placeholder="search..."
                  onChange={(e) => setQuery(e.target.value)}
                  required
                  title="input book title"
                ></input>
              </label>
              <button className="inputs" type="submit" title="search button">
                Search
              </button>
            </div>
          </form>
          <div>{bookComponent}</div>
        </div>
      )}
    </>
  );
}
