import React from 'react';
import PropTypes from 'prop-types';
import { categoryFilterOptions } from '../categories';

function CategoryFilter(props) {
  const { filterChanged } = props;
  return (
    <div className="categoryFilter">
      <select onChange={filterChanged}>
        {categoryFilterOptions}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filterChanged: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filterChanged: null,
};

export default CategoryFilter;
