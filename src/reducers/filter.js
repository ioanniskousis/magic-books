const CHANGE_FILTER = 'CHANGE_FILTER';

const filterChanged = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.selectedFilter;
    default:
      return state;
  }
};

export default filterChanged;
