// Rebekah Reay - Student ID: K2938309
import React from "react";
import "./find-book.css";
import { useState } from "react";
import BookResults from "./find-book-results";
import ReviewFindSelection from "./review-find-selection";

const backendUrl = process.env.REACT_APP_DJANGO_BACKEND_URL;

export default function FindBook() {
  const [results, setResults] = useState();
  const [isDataBack, setIsDataBack] = useState();
  const [isBookSelected, setIsBookSelected] = useState();
  const [bookSelected, setBookSelected] = useState();

  let seeAll;
  let tempData;
  let swapSpots = [
    "",
    "Swap Spot 1",
    "Swap Spot 2",
    "Swap Spot 3",
    "Swap Spot 4",
    "Swap Spot 5",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let title = formData.get("title");
    let author = formData.get("author");
    let swapspot = formData.get("swapspot");
    const urlParameters = new URLSearchParams();
    if (title) urlParameters.append("title", title);
    if (author) urlParameters.append("author", author);
    if (swapspot) urlParameters.append("swapspot", swapspot);
    if (seeAll) urlParameters.append("", seeAll);

    fetch(`${backendUrl}/api/books/all/?${urlParameters}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data back?", data);
        tempData = data;
        setResults(tempData);
        setIsDataBack(true);
      })
      .catch((error) => console.error("Error:", error));
  }

  function handleSeeAll() {
    seeAll = "";
  }

  function clearResults() {
    setIsDataBack(false);
  }

  return (
    <div>
      {!isBookSelected ? (
        <>
          <h2>Find available books</h2>
          <form onSubmit={handleSubmit}>
            <button onClick={handleSeeAll}>See all</button>
            <label>
              <div id="search-inputs">
                <label htmlFor="search-title"></label>
                <input
                  type="search"
                  id="search-title"
                  name="title"
                  placeholder="search by title"
                ></input>
                <br></br>
                <label htmlFor="search-author"></label>
                <input
                  type="search"
                  id="search-author"
                  name="author"
                  placeholder="search by author"
                ></input>
                <br></br>
                <label htmlFor="search-swapspot"></label>
                <select
                  className="share-form-select"
                  id="search-swapspot"
                  name="swapspot"
                  placeholder="search by swap spot"
                >
                  {swapSpots.map((swapSpot) => (
                    <option key={swapSpot} value={swapSpot}>
                      {swapSpot}
                    </option>
                  ))}
                </select>
              </div>
              <button type="reset" onClick={clearResults}>
                Clear all
              </button>
              <button className="inputs" type="submit">
                Search
              </button>
            </label>
          </form>
          <BookResults
            results={results}
            isDataBack={isDataBack}
            setIsBookSelected={setIsBookSelected}
            setBookSelected={setBookSelected}
          />
        </>
      ) : (
        <>
          {/* <p>{bookSelected.title}</p> */}
          <ReviewFindSelection bookSelected={bookSelected} />
        </>
      )}
    </div>
  );
}
