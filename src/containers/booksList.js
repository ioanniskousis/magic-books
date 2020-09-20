/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/book';

class BooksList extends React.Component {
  render() {
    const rows = [];
    const { books } = this.props;
    const { removeBook } = this.props;
    books.map(book => rows.push(
      <Book
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
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
