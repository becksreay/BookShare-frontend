// Rebekah Reay - Student ID: K2938309
import React from "react";
import "./find-book.css";
import { useState } from "react";
import BookDetails from "../book/book-details";
import BookImage from "../book/book-image";
import FindBook from "./find-book";

const backendUrl = process.env.REACT_APP_DJANGO_BACKEND_URL;

export default function ReviewFindSelection({ bookSelected }) {
  const [isBack, setIsBack] = useState();
  const [isReserve, setIsReserve] = useState();
  const [name, setName] = useState();

  function handleBackClick() {
    setIsBack(true);
    console.log("back clicked!");
  }

  function handleReserveClick(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let name = formData.get("name-input");
    setName(name);
    setIsReserve(true);
  }

  function ReserveSuccess({ name, bookSelected }) {
    console.log("book reserved", bookSelected);
    console.log("name", name);
    // update book on DB
    fetch(`${backendUrl}/api/books/update_reservation/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: bookSelected.title,
        reservedBy: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Book saved:", data))
      .catch((error) => console.error("Error:", error));

    return (
      <>
        <h1>Book reserved successfully!</h1>
      </>
    );
  }

  let component =
    isBack === true ? (
      <>
        <FindBook />
      </>
    ) : isReserve === true ? (
      <ReserveSuccess bookSelected={bookSelected} name={name} />
    ) : (
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
        <>
          <div className="book-to-share">
            <BookImage className="book-image-share" book={bookSelected} />
            <div className="book-details-share">
              <BookDetails book={bookSelected} />
            </div>
          </div>
          <h4>You'll pick it up from {bookSelected.swapspot}</h4>
          <br></br>
          <div className="reserve-form">
            <form onSubmit={handleReserveClick}>
              <div className="name-input-div">
                <label className="name-input" htmlFor="name-input">
                  Enter your name to reserve
                </label>
                <input
                  type="text"
                  id="name-input"
                  name="name-input"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div>
                <button
                  className="confirm-edit-share"
                  onClick={handleBackClick}
                >
                  Back
                </button>
                <label htmlFor="name-submit"></label>
                <input
                  type="submit"
                  className="confirm-edit-share"
                  value="Reserve!"
                  name="name-submit"
                ></input>
              </div>
            </form>
          </div>
        </>
      </>
    );

  return <div>{component}</div>;
}
