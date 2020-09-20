import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { createBook, removeBook } from './actions/index';
import './index.css';
import App from './components/App';
import booksSeed from './booksSeed';

const store = createStore(rootReducer);

const mapStateToProps = () => ({ books: booksSeed });

const mapDispatchToProps = dispatch => ({
  submitNewBook: newBook => {
    dispatch(createBook(newBook));
  },
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWrapper = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root'),
);
