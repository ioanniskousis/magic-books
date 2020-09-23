import React from 'react';
import '../App.css';
import BooksList from '../containers/booksList';
import BooksForm from '../containers/booksForm';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
