// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./share-book.css";
import { useState } from "react";
import SearchBook from "../search-book/search-book";

export default function ShareForm({ saveData, setIsBackClicked }) {
  let ratings = ["1", "2", "3", "4", "5"];
  let reviews = [
    "Great! Would recommend",
    "Sweet story",
    "Very romantic",
    "A bit boring",
    "Great characters",
    "A real page turner",
  ];
  let swapSpots = [
    "Swap Spot 1",
    "Swap Spot 2",
    "Swap Spot 3",
    "Swap Spot 4",
    "Swap Spot 5",
  ];

  const handleBack = () => {
    setIsBackClicked(true);
  };

  // Rebekah Reay - Student ID: K2938309
  return (
    <>
      <form action={saveData}>
        <label
          className="share-form-labels"
          htmlFor="rating"
          title="rate this book"
        >
          Rate the book out of 5
        </label>
        {ratings.map((rating) => (
          <React.Fragment key={`input${rating}`}>
            <input
              type="radio"
              className="radio"
              id="rating"
              name="rating"
              value={rating}
              style={{ marginRight: "8px" }}
              required
              title={`rating ${rating}`}
            ></input>
            <label
              className="rating"
              style={{ marginRight: "5px", marginLeft: "0px" }}
              htmlFor="rating"
            >
              {rating}
            </label>
          </React.Fragment>
        ))}
        <br></br>

        <label className="share-form-labels" htmlFor="review">
          Review the book
        </label>
        <select
          className="share-form-select"
          id="review"
          name="review"
          required
          title="review dropdown menu"
        >
          {reviews.map((review, i) => (
            <option
              key={`review${i}`}
              className="review-item"
              title={`review ${i}`}
            >
              {review}
            </option>
          ))}
        </select>
        <br></br>

        <label className="share-form-labels" htmlFor="swap-spot">
          Select a swap spot
        </label>
        <select
          className="share-form-select"
          id="swap-spot"
          name="swap-spot"
          required
          title="swap spot dropdown menu"
        >
          {swapSpots.map((swapSpot) => (
            <option key={swapSpot} value={swapSpot} title={swapSpot}>
              {swapSpot}
            </option>
          ))}
        </select>
        <br></br>
        <button
          id="search-again"
          title="search again button"
          onClick={handleBack}
        >
          Search again
        </button>
        <input
          type="submit"
          className="share-form-inputs"
          id="next-button"
          name="next-button"
          value="Next"
          title="next button"
        ></input>
      </form>
    </>
  );
}
// Rebekah Reay - Student ID: K2938309
