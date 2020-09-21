const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = event => ({
  type: REMOVE_BOOK,
  event,
});

export {
  createBook,
  removeBook,
};
