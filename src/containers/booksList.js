/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/book';
import CategoryFilter from '../components/CategoryFilter';

function filterdBooks(books, filter) {
  return filter === 'All' ? books : books.filter(book => book.category === filter);
}

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
    this.filterChanged = this.filterChanged.bind(this);
  }

  filterChanged(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    const rows = [];
    const { books } = this.props;
    const { filter } = this.state;
    const filteredBooks = filterdBooks(books, filter);
    const { removeBook } = this.props;

    filteredBooks.map(book => rows.push(
      <Book
        key={book.id}
        book={book}
        removeBook={removeBook}
      />,
    ));

    return (
      <div>
        <CategoryFilter filterChanged={this.filterChanged} />
        <div className="BooksList">
          {rows}
        </div>
      </div>
    );
  }
}

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
  filterChanged: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
