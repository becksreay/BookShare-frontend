// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./share-book.css";
import { useState } from "react";

export default function ShareForm({ saveData }) {
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
  // Rebekah Reay - Student ID: K2938309
  return (
    <>
      <form action={saveData}>
        <label className="share-form-labels" htmlFor="rating">
          Rate the book out of 5
        </label>
        {ratings.map((rating) => (
          <React.Fragment key={`input${rating}`}>
            <input
              type="checkbox"
              className="checkbox"
              id="rating"
              name="rating"
              value={rating}
              style={{ marginRight: "8px" }}
            ></input>
            <label
              className="rating"
              style={{ marginRight: "5px", marginLeft: "0px" }}
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
        >
          {reviews.map((review, i) => (
            <option key={`review${i}`} className="review-item">
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
        >
          {swapSpots.map((swapSpot) => (
            <option key={swapSpot} value={swapSpot}>
              {swapSpot}
            </option>
          ))}
        </select>
        <br></br>

        <input
          type="submit"
          className="share-form-inputs"
          id="next-button"
          name="next-button"
          value="Next"
        ></input>
      </form>
    </>
  );
}
// Rebekah Reay - Student ID: K2938309
