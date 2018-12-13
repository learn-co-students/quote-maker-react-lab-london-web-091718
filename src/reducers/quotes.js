const quoteInteraction = (state = [], action) => {
    const newState = [...state];
    const selectedQuote = newState.find(quote => quote.id === action.quoteId);

    switch (action.type) {
        case 'ADD_QUOTE':
            return [...newState, action.quote];
        case 'REMOVE_QUOTE':
            return newState.filter(quote => quote.id !== action.quoteId);
        case 'UPVOTE_QUOTE':
            selectedQuote.votes += 1;
            return newState;
        case 'DOWNVOTE_QUOTE':
            if (selectedQuote.votes > 0) selectedQuote.votes -= 1;
            return newState;
        default:
            return state;
    }
};

export default quoteInteraction;