/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import { categoryOptions } from '../categories';

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
    if (title.trim() === '') {
      formError.innerHTML = "Title can't be empty";
      return false;
    }
    if (category === '') {
      formError.innerHTML = "Category can't be empty";
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

  focusField() {
    document.getElementById('formError').innerHTML = '';
  }

  render() {
    const { title, category } = this.state;

    return (
      <div className="BooksForm">
        <div className="addNewBook">
          ADD NEW BOOK
        </div>
        <div className="bookFormDetails">
          <input name="title" id="title" placeholder="Book Title" value={title} onChange={this.handleChange} onFocus={this.focusField} />
          <div className="categoryContainer">
            <select name="category" id="category" placeholder="Category" value={category} onChange={this.handleSelect} onFocus={this.focusField}>
              {categoryOptions}
            </select>
          </div>
          <input type="submit" id="newBook" value="ADD BOOK" onClick={this.handleSubmit} />
        </div>
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
