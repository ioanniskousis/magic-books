import React from 'react';
import PropTypes from 'prop-types';
import { categoryFilterOptions } from '../categories';

function CategoryFilter(props) {
  const { filterChanged } = props;
  return (
    <header>
      <div className="headerContainer">
        <div className="headerContainer-left">
          <div className="bookstorecms-label">
            Bookstore CMS
          </div>
          <div className="header-label">
            BOOKS
          </div>
          <div className="header-label opacity05">
            CATEGORIES
          </div>
        </div>
        <div className="headerContainer-right">
          <div className="user-oval">
            <img src="guest-16.png" alt="" />
          </div>
        </div>
      </div>

      <select className="categorySelect" onChange={filterChanged}>
        {categoryFilterOptions}
      </select>
    </header>
  );
}

CategoryFilter.propTypes = {
  filterChanged: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filterChanged: null,
};

export default CategoryFilter;
