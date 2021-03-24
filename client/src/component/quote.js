import React from "react";
import "../quote.css";

const Quote = (props) => {
  const { quote, author } = props;
  return (
    <>
      <div className="quote-box">
        <p>{quote}</p>
        <p>{author}</p>
      </div>
    </>
  );
};

export default Quote;
