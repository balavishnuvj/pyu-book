import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import BookShelve from '../components/BookShelve';
class Shelves extends Component {
    render() {
        return (
            <div>
                <Link to="/search">Search Books</Link>
                <h2>Shelves</h2>
                <BookShelve
                    currentStatus={'currentlyReading'}
                    title={'Currently Reading'}
                />
                <BookShelve
                    currentStatus={'wantToRead'}
                    title={'Want To Read'}
                />
                <BookShelve
                    currentStatus={'read'}
                    title={'Read'}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appReducer: state.appReducer,
})

const mapDispatchToProps = dispatch => ({

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shelves)
