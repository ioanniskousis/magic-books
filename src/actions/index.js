const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = bookId => ({
  type: REMOVE_BOOK,
  bookId,
});

export {
  createBook,
  removeBook,
};
