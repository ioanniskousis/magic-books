/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, removeBook } = props;
  const { id, title, category } = book;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={removeBook} id={id}>
          Remove
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.object,
  removeBook: PropTypes.func,
};

Book.defaultProps = {
  book: null,
  removeBook: null,
};
