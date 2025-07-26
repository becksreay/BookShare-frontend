// Rebekah Reay - Student ID: K2938309

import React, { useEffect } from "react";
import "./share-book.css";
import { useState } from "react";

export default function ShareBook() {
  const [query, setQuery] = useState("");
  const [availBooks, setAvailBooks] = useState([]);
  let testData;
  let book;

  useEffect(() => {
    console.log("availBooks changed:", availBooks);
  }, [availBooks]);

  const handleInput = (e) => {
    let coreUrl = "https://openlibrary.org/search.json?title=";
    // let testUrl = "https://openlibrary.org/api/books?bibkeys=";

    let url = coreUrl + query;
    if (e.key === "Enter") {
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
            book = {
              author: testData.author_name,
              title: testData.title,
              cover: testData.cover_i,
            };
            setAvailBooks((prev) => [...prev, book]);
          } else {
            console.log("no test data");
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div>
      <h1>Share a book</h1>
      <div>
        <textarea
          id="share-input"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleInput}
        ></textarea>
      </div>
    </div>
  );
}
