const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = event => ({
  type: REMOVE_BOOK,
  event,
});

const categoryFilter = selectedFilter => ({
  type: CHANGE_FILTER,
  selectedFilter,
});

export {
  createBook,
  removeBook,
  categoryFilter,
};
