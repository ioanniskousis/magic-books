import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';
import booksSeed from './booksSeed';

const store = createStore(rootReducer, { books: booksSeed });

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root'),
);
