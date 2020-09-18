/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-plusplus */
import React from 'react';

export default class BooksForm extends React.Component {
  render() {
    const categoryOptions = [];
    const categoryNames = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

    let index = 1;
    categoryNames.map(categoryName => categoryOptions.push(
      <option key={index++} value={categoryName}>{categoryName}</option>,
    ));

    return (
      <div className="BooksForm">
        <input name="title" id="title"/>
        <select name="category" id="category">
          {categoryOptions}
        </select>
        <input type="submit" value="Add New" />
      </div>
    );
  }
}
