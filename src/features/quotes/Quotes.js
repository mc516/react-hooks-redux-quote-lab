import React from "react";
import QuoteCard from "./QuoteCard";
import { removeQuote } from "./quotesSlice";
import { upvoteQuote } from "./quotesSlice";
import { downvoteQuote } from "./quotesSlice";
import { useSelector } from "react-redux";

function Quotes() {
  const quotes = useSelector((state) => state.quotes)
  console.log(quotes)
  
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
            {quotes.map(quote => {return <QuoteCard key={quote.id} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>}) }
            {/* { <QuoteCard removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/> } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
