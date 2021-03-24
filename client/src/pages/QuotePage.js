import React, { useEffect, useState } from "react";
import axios from "axios";
import Quote from "../component/quote";
import "../quote.css";

const QuotePage = () => {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    renderQuotes();
  }, []);
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

  return (
    <>
      <div className="page">
        {quotesList.map((ele) => {
          console.log("hey");
          return (
            <div key={ele._id}>
              <Quote quote={ele.quote} author={ele.author} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QuotePage;
