/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

export default class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books,
    };
  }

  render() {
    const rows = [];
    const { books } = this.state;
    books.map(book => rows.push(
      Book(book),
    ));

    return (
      <div className="BooksList">
        <tb>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {rows}
        </tb>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: [],
};
