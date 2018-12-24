import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBookStatus } from '../actions';
import Book from './Book';

class BookShelve extends Component {

    onStatusChange = (bookid, currentStatus, nextStatus) => {
        this.props.updateBookStatus(bookid, currentStatus, nextStatus)
    }
    renderBookList = () => {
        const { appReducer: { allBooks }, appReducer, currentStatus } = this.props;
        const booksList = allBooks.filter((value) => -1 !== appReducer[currentStatus].indexOf(value.isbn));
        const booksToRender = booksList.map((book) => (
            <Book
                key={book.isbn}
                data={book}
                currentStatus={currentStatus}
                onStatusChange={this.onStatusChange}
            />))
        return booksToRender.length ? booksToRender : (<p>No Books in this section</p>);
    }
    render() {
        const { title } = this.props;
        return (<div>
            <h3>{title}</h3>
            {this.renderBookList()}
        </div>)
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
)(BookShelve)
