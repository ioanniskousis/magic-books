/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

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
const options = [];
categoryNames.map(categoryName => {
  index += 1;
  return options.push(<option key={index} value={categoryName}>{categoryName}</option>);
});

const categoryOptions = [(<option key="0" />), ...options];

const categoryFilterOptions = [(<option key="0">All</option>), ...options];

export {
  categoryOptions,
  categoryFilterOptions,
};
