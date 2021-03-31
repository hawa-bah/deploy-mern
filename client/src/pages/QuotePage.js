import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "../component/quote";
import "../quote.css";

const QuotePage = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [clickSubmit, setClickSubmit] = useState(false);

  useEffect(() => {
    renderQuotes();
  }, [clickSubmit]);
  const renderQuotes = () => {
    axios
      .get(`/quotes/get`)
      .then((res) => {
        setQuotesList(res.data);
        console.log("setQuoteList");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  const submitNewQuote = (e) => {
    e.preventDefault();
    let author = document.getElementById("author").value;
    let quote = document.getElementById("quote").value;
    console.log(author, quote);
    axios
      .post(`/quotes/post`, {
        quote: quote,
        author: author,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    setClickSubmit(!clickSubmit);
    document.getElementById("form").reset();
  };

  return (
    <>
      <div className="page">
        <div className="form-quote">
          <form id="form">
            <div>
              <label>Enter your favorite quote:</label>
              <input name="quote" id="quote" type="text" required></input>
            </div>
            <div>
              <label>Who is the author</label>
              <input name="author" id="author" type="text" required></input>
            </div>

            <button
              name="button"
              type="submit"
              onClick={(e) => submitNewQuote(e)}
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          {quotesList.length > 0
            ? quotesList.map((ele) => {
                console.log("hey");
                return (
                  <div key={ele._id}>
                    <Quote quote={ele.quote} author={ele.author} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default QuotePage;
