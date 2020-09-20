const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

function bookWithId(book, bookId) {
  return book.id === bookId;
}

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
    {
      const { bookId } = action;
      const index = state.findIndex(book => bookWithId(book, bookId));
      if (index > -1) {
        const newState = state.slice(0, index).concat(state.slice(index + 1));
        return newState;
      }
      return state;
    }
    default:
      return state;
  }
};

export default booksReducer;
