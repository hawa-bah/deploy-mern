import React from "react";
import "../quote.css";

const Quote = (props) => {
  const { quote, author } = props;
  return (
    <>
      <div className="quote-box">
        <div className="quoter-box">
          <p>{quote}</p>
        </div>
        <div className="author-box">
          <p> - {author}</p>
        </div>
      </div>
    </>
  );
};

export default Quote;
