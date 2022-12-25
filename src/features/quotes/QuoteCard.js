import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function QuoteCard(removeQuote, upvoteQuote, downvoteQuote, quote) {
  const dispatch = useDispatch()
  console.log(quote)
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center" onClick={e => e.target.value}>
        <div className="card-block">
          <blockquote className="card-blockquote">
            {/* <p>Render Quote Content</p> */}
            {/* {<p>{quote.content}</p>} */}
            
            <footer>
              - author{" "}
              <cite title="Source Title">{/*Render Quote Author*/}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={() => dispatch(upvoteQuote)}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => dispatch(downvoteQuote)}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={() => dispatch(removeQuote)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
