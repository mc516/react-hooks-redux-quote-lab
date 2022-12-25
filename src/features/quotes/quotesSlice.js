// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  }
}
export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  };
};
export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  }
}
export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  }
}
// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case "quotes/add":
      return [
        ...state,
      action.payload
      ];

    case "quotes/remove":
     return state.filter(quote => {return quote.id !== action.payload});    

    case "quotes/upvote":
      const upvoteQuote = state.find(quote => quote.id === action.payload)
      upvoteQuote.votes += 1;
      return [upvoteQuote];

    case "quotes/downvote":
      const downvoteQuote = state.find(quote => quote.id === action.payload)
      if (downvoteQuote.votes < 1) {
        return [downvoteQuote]
      } else {
        downvoteQuote.votes -= 1;
      }
      return [downvoteQuote];

    default:  
      return state;
  }
}
