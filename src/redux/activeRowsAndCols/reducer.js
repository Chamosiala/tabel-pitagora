const activeRowsAndColsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ROWS_AND_COLS_BY_LEVEL':
      switch (action.payload) {
        case '1':
          return [9];
        case '2':
          return [9, 1];
        case '3':
          return [9, 1, 2];
        case '4':
          return [9, 1, 2, 3];
        case '5':
          return [9, 1, 2, 3, 4];
        case '6':
          return [9, 1, 2, 3, 4, 5];
        case '7':
          return [9, 1, 2, 3, 4, 5, 6];
        case '8':
          return [9, 1, 2, 3, 4, 5, 6, 7, 8];
        default:
          return state;
      }
    default:
      return state;
  }
};

export default activeRowsAndColsReducer;
