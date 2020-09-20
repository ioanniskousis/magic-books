/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  }

  handleSelect(event) {
    event.preventDefault();
    this.setState({
      category: event.target.value,
    });
  }

  validate(title, category) {
    const formError = document.getElementById('formError');
    if (title === '') {
      formError.innerHTML = "Title can't be empty";
      setTimeout(() => {
        formError.innerHTML = '';
      }, 3000);
      return false;
    }
    if (category === '') {
      formError.innerHTML = "Category can't be empty";
      setTimeout(() => {
        formError.innerHTML = '';
      }, 3000);
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    if (!this.validate(title, category)) return;

    const { createBook } = this.props;
    const newBook = {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
    };

    createBook(newBook);

    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const categoryOptions = [];
    const categoryNames = [
      '',
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

    const { title, category } = this.state;

    return (
      <div className="BooksForm">
        <input name="title" id="title" value={title} onChange={this.handleChange} />
        <select name="category" id="category" value={category} onChange={this.handleSelect}>
          {categoryOptions}
        </select>
        <input type="submit" value="Add New" onClick={this.handleSubmit} />
        <div className="formError" id="formError" />
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: null,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
