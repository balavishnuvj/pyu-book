import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { updateBookStatus } from '../actions';
import { allBooks } from '../mock-data';
import Book from '../components/Book';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        };
    }

    onSearchTextChange = (event) => {
        const { value } = event.target;
        this.setState({ searchText: value });
    }

    onBookStatusChange = (bookid, currentStatus, nextStatus) => {
        this.props.updateBookStatus(bookid, currentStatus, nextStatus)
    }

    getCurrentBookStatus = (bookid) => {
        const { currentlyReading, wantToRead, read } = this.props.appReducer;
        if (currentlyReading.includes(bookid)) {
            return 'currentlyReading';
        }
        if (wantToRead.includes(bookid)) {
            return 'wantToRead';
        }
        if (read.includes(bookid)) {
            return 'read';
        }
        return 'none';
    }
    renderSearchResults = () => {
        const booksList = allBooks.filter((book) => book.title.toLowerCase().includes(this.state.searchText.toLowerCase()));
        const booksToRender = booksList.map((book) => {
            const currentStatus = this.getCurrentBookStatus(book.isbn);
            return (
                <Book
                    key={book.isbn}
                    data={book}
                    currentStatus={currentStatus}
                    onStatusChange={this.onBookStatusChange}
                />)
        })
        return booksToRender.length ? booksToRender : (<p>No Search Results</p>);
    }
    render() {
        return <div>
            <Link to="/">Go Home</Link>
            <h2>Search</h2>
            <div>
                <label htmlFor={'searchText'}>Search Text</label>
                <input
                    id={'searchText'}
                    value={this.state.searchText}
                    onChange={this.onSearchTextChange}
                />
            </div>
            <h3>Search Results</h3>
            {this.renderSearchResults()}
        </div>
    }
}

const mapStateToProps = state => ({
    appReducer: state.appReducer,
})

const mapDispatchToProps = dispatch => ({
    updateBookStatus: (bookid, currentStatus, nextStatus) => dispatch(updateBookStatus(bookid, currentStatus, nextStatus))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
