import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import Book from "./Book";
import axios from "axios";

function BookList() {
  const [getBooks, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=lClrNZgkzAT6cKUQ1ggorvMmZf2e5W2M"
      )
      .then((response) => {
        setBooks(response.data.results.lists);
      });
  }, []);

  const options = {
    dateStyle: "long",
  };

  return (
    <>
      <h1>
        New York Times Best Sellers on{" "}
        {new Date().toLocaleString("en-US", options)}
      </h1>
      {getBooks.map((category) => {
        return (
          <div key={uuidv4()}>
            <section className='booklist'>
              <h2 className='categoryTitle'>{category.list_name}</h2>
              {category.books.map((book) => {
                return <Book key={uuidv4()} {...book}></Book>;
              })}
            </section>
          </div>
        );
      })}
    </>
  );
}

ReactDom.render(<BookList />, document.querySelector("#root"));
