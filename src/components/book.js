import React from 'react';

export default function Book(book) {
  return (
    <tr>
      <td>{book.bookId}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}
