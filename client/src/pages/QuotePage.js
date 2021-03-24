import React, { useEffect, useState } from "react";
import axios from "axios";

const QuotePage = () => {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    renderQuotes();
  }, []);
  const renderQuotes = () => {
    axios
      .get(`/quotes/get`)
      .then((res) => {
        setQuotesList(res);
        console.log("setQuoteList");
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  return (
    <>
      <div className="page"></div>
    </>
  );
};

export default QuotePage;
