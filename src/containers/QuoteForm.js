import React, {Component} from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addQuote} from '../actions/quotes';

class QuoteForm extends Component {

    state = {
        //set up a controlled form with internal state
        content: '',
        author: '',
        votes: 0
    };

    handleOnChange = event => {
        // Handle Updating Component State
    };

    handleOnSubmit = event => {
        event.preventDefault();
        const quoteObj = {
            id: uuid(),
            content: this.state.content,
            author: this.state.author,
            votes: 0
        };

        this.setState({
            content: '',
            author: '',
        });

        this.props.addQuote(quoteObj);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                                        <div className="col-md-5">
                      <textarea
                          className="form-control"
                          name="content"
                          value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})}
                      />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author" className="col-md-4 control-label">Author</label>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="author"
                                                value={this.state.author}
                                                onChange={(event) => this.setState({author: event.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button type="submit" className="btn btn-default">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//add arguments to connect as needed
const mapDispatchToProps = (dispatch) => {
    return {
        addQuote: (quote) => {
            dispatch(addQuote(quote))
        }
    }
};

export default connect(null, mapDispatchToProps)(QuoteForm);
