/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function BooksForm() {
  const options = [];
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  categories.map(cat => options.push(
    <option value={cat}>{cat}</option>,
  ));

  return (
    <div className="BooksForm">
      <input name="title"/>
      <select name="category">
        {options}
      </select>
      <input type="submit" value="Add New" />
    </div>
  );
}
