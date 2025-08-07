// Rebekah Reay - Student ID: K2938309
import React, { useEffect } from "react";
import "./share-book.css";
import { useState } from "react";
import BookDetails from "../book/book-details";
import BookImage from "../book/book-image";
import ShareForm from "./share-form";

const backendUrl = process.env.REACT_APP_DJANGO_BACKEND_URL;

function ShareSuccess() {
  return (
    <>
      <h1>Book shared successfully!</h1>
    </>
  );
}

function ReviewSelection({
  userSelection,
  setShareClicked,
  setNextIsClicked,
  book,
}) {
  function handleEditClick(e) {
    // console.log("edit clicked!");
    setNextIsClicked(false);
  }

  function handleShareClick(e) {
    console.log("share clicked!!");
    e.preventDefault();
    setShareClicked(true);

    fetch(`${backendUrl}/api/books/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: book.title,
        author: book.author,
        cover: book.cover,
        rating: userSelection.rating,
        review: userSelection.review,
        swapspot: userSelection.swapSpot,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Book saved:", data))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <>
      <br></br>
      <h4>You rated this book {userSelection.rating}/5</h4>
      <h4>Your review: "{userSelection.review}"</h4>
      <h4>You'll drop it off at {userSelection.swapSpot}</h4>
      <br></br>
      <button
        className="confirm-edit-share"
        onClick={(e) => handleEditClick(e)}
      >
        Edit
      </button>
      <button
        className="confirm-edit-share"
        onClick={(e) => handleShareClick(e)}
      >
        Share!
      </button>
    </>
  );
}

export default function ShareBook({ book }) {
  const [formInput, setFormInput] = useState();
  const [nextIsClicked, setNextIsClicked] = useState(false);
  const [shareClicked, setShareClicked] = useState();
  //   const [listings, setListings] = useState([]);

  function saveData(formData) {
    let userInput = {
      rating: "",
      review: "",
      swapSpot: "",
    };
    userInput.rating = formData.get("rating");
    userInput.review = formData.get("review");
    userInput.swapSpot = formData.get("swap-spot");
    setFormInput(userInput);
    setNextIsClicked(true);
  }

  //   useEffect(() => {
  //     setListings([...listings, { book: book, formInput: formInput }]);
  //     console.log("listings", listings);
  //   }, [listings]);

  //   if (shareClicked) {
  //     setListings([...listings, { book: book, formInput: formInput }]);
  //     console.log("listings", listings);
  //   }

  return (
    <>
      {shareClicked ? (
        <ShareSuccess />
      ) : (
        <>
          <p
            style={{
              margin: "10px 0px",
              fontWeight: "bold",
              backgroundColor: "#ffff66",
            }}
          >
            {nextIsClicked ? "Review your selection" : "You are sharing: "}
          </p>
          <div className="book-to-share">
            <BookImage className="book-image-share" book={book} />
            <div className="book-details-share">
              <BookDetails book={book} />
            </div>
          </div>
          {nextIsClicked ? (
            <ReviewSelection
              userSelection={formInput}
              setShareClicked={setShareClicked}
              setNextIsClicked={setNextIsClicked}
              book={book}
            />
          ) : (
            <ShareForm saveData={saveData} />
          )}
        </>
      )}
    </>
  );
}
