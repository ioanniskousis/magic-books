/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';

function App(props) {
  const { books } = props;
  return (
    <div className="App">
      <BooksList
        books={books}
      />
      <BooksForm />
    </div>
  );
}

App.propTypes = {
  books: PropTypes.array,
};

App.defaultProps = {
  books: [],
};

export default App;
