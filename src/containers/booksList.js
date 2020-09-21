/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/index';
import Book from '../components/book';

const BooksList = ({ books, removeBook }) => {
  const rows = [];
  books.map(book => rows.push(
    <Book
      key={book.id}
      book={book}
      removeBook={removeBook}
    />,
  ));

  return (
    <div className="BooksList">
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
