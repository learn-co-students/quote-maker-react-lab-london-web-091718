import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes';

class Quotes extends Component {
    upvoteHandler = (quoteId) => {
        this.props.upvoteQuote(quoteId);
    };

    downvoteHandler = (quoteId) => {
        this.props.downvoteQuote(quoteId);
    };

    removeQuoteHandler = (quoteId) => {
        this.props.removeQuote(quoteId);
    };

    render() {
        return (
            <div>
                <hr/>
                <div className="row justify-content-center">
                    <h2>Quotes</h2>
                </div>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {
                                this.props.quotes.map((quote, index) => {
                                    return <QuoteCard
                                        key={quote.quoteId}
                                        quote={quote}
                                        index={index}
                                        upvoteHandler={this.upvoteHandler}
                                        downvoteHandler={this.downvoteHandler}
                                        removeQuoteHandler={this.removeQuoteHandler}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state}
};

const mapDispatchToState = (dispatch) => {
    return {
        upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
        downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId)),
        removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    }
};
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToState)(Quotes);
