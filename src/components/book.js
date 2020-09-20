/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.Component {
  render() {
    const { book, removeBook } = this.props;
    const { id, title, category } = book;

    const handleRemoveBook = () => {
      removeBook(id);
    };

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td onClick={handleRemoveBook}>
          Remove
        </td>
      </tr>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  removeBook: null,
};
