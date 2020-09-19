/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

class App extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className="App">
        <BooksList
          books={books}
        />
        <BooksForm />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.array,
};

App.defaultProps = {
  books: [],
};

export default App;
